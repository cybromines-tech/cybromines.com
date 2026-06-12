import GithubSlugger from "github-slugger";

export interface TocItem {
  depth: 2 | 3;
  text: string;
  id: string;
}

/**
 * Extract h2/h3 headings from MDX, generating ids with the same slugger
 * rehype-slug uses, so TOC anchors line up with the rendered headings.
 */
export function extractToc(content: string): TocItem[] {
  // Drop fenced code blocks so "# comments" inside them aren't matched.
  const withoutCode = content.replace(/```[\s\S]*?```/g, "");
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];

  for (const line of withoutCode.split("\n")) {
    const match = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (!match) continue;
    const depth = match[1].length as 2 | 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    items.push({ depth, text, id: slugger.slug(text) });
  }
  return items;
}
