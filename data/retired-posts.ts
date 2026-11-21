// Early posts that were too short to stand on their own. Each one now redirects
// permanently to the closest fuller article, so old links still land somewhere
// useful. Production keeps posts on a volume that deploys never delete from, so
// they're retired here instead of being removed from data/posts.json.
export const RETIRED_POSTS: Record<string, string> = {
  'architecting-the-treasury-of-the-future': '/blog/cash-visibility-is-the-first-treasury-problem',
  'the-rise-of-tech-enabled-consulting': '/about',
  'why-system-greater-than-person-is-the-only-way-to-scale': '/blog/why-we-write-the-runbook-before-the-code',
}
