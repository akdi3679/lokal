/**
 * Injecteur JSON-LD sûr : échappe `<` pour éviter toute injection HTML
 * dans le bloc script (§08 output encoding).
 */
export function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}