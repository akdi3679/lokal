import { describe, expect, it, vi, afterEach } from "vitest";
import { rateLimit } from "@/lib/rate-limit/memory-sliding-window";

afterEach(() => vi.useRealTimers());

describe("rateLimit — sliding window (§23)", () => {
  it("autorise sous la limite", () => {
    const id = `t-under-${Math.random()}`;
    for (let i = 0; i < 3; i++) expect(rateLimit(id, 3, 60_000).allowed).toBe(true);
  });

  it("refuse au-delà de la limite + Retry-After > 0", () => {
    const id = `t-over-${Math.random()}`;
    for (let i = 0; i < 5; i++) rateLimit(id, 5, 60_000);
    const r = rateLimit(id, 5, 60_000);
    expect(r.allowed).toBe(false);
    expect(r.retryAfterSeconds).toBeGreaterThan(0);
    expect(r.remaining).toBe(0);
  });

  it("réautorise après la fenêtre", () => {
    vi.useFakeTimers();
    const id = "t-window";
    rateLimit(id, 2, 1_000);
    rateLimit(id, 2, 1_000);
    expect(rateLimit(id, 2, 1_000).allowed).toBe(false);
    vi.advanceTimersByTime(1_100);
    expect(rateLimit(id, 2, 1_000).allowed).toBe(true);
  });
});