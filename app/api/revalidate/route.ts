import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

/**
 * Webhook de revalidation Sanity (inactif tant que SANITY_REVALIDATE_SECRET
 * n'est pas défini). Sécurité §19 : secret partagé + schéma Zod + pas de
 * traitement lourd dans la requête.
 */
const PayloadSchema = z.object({
  _type: z.enum(["creator", "creation", "category", "event", "announcement", "brand"]),
  slug: z.string().trim().max(120).optional(),
});

export async function POST(req: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Revalidation not configured." }, { status: 503 });
  }

  const provided = req.headers.get("x-sanity-revalidate-secret");
  if (!provided || provided !== secret) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad payload." }, { status: 400 });
  }

  const parsed = PayloadSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Schema invalid." }, { status: 400 });
  }
  const { _type, slug } = parsed.data;

  switch (_type) {
   case "creator":
  revalidatePath("/createurs", "page");
  if (slug) revalidatePath(`/createurs/${slug}`, "page");
  break;
    case "creation":
  revalidatePath("/creations", "page");
  revalidateTag("creations");
  break;
case "category":
  revalidatePath("/creations", "page");
  revalidatePath("/cadeaux", "page");
  break;
case "event":
case "announcement":
  revalidatePath("/actualites", "page");
  revalidatePath("/", "page");
  break;
case "brand":
  revalidatePath("/", "page");
  revalidatePath("/la-boutique", "page");
  break;
  }

  return NextResponse.json({ revalidated: true, _type });
}