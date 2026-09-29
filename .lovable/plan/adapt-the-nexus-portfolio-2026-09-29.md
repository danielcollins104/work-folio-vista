# Adapt the Nexus portfolio

## Goal
Rebuild the blank home page as Daniel Collins’ portfolio, preserving the source repository’s real copy, projects, companies, partnerships, links, statistics, and photography while presenting them in the selected **Translucent Neon Editorial** direction.

## Experience
- Lead with Daniel’s name, original positioning, portrait, primary project action, and collaboration action.
- Use a refined near-black editorial canvas with electric blue, cyan, and orange accents.
- Pair Instrument Serif headings with Work Sans body text.
- Organize the long-form page like an independent technology magazine: strong section numbering, asymmetric grids, generous editorial pacing, and translucent panels used selectively.
- Retain the source’s existing sections and order where meaningful: introduction, story/about, companies and ventures, projects, partnerships, personal material, and contact/social links.
- Present projects as varied editorial features using their original screenshots, descriptions, tags, links, statuses, and metrics rather than a repetitive card wall.
- Keep navigation compact, add smooth in-page movement, and use restrained reveal/parallax effects with reduced-motion support.

## Content and assets
- Extract the exact user-facing content and destinations from `danielcollins104/nexus-portfolio`; do not use the invented names or statistics shown in the visual prototype.
- Reuse the source portrait, personal photos, artwork, and project screenshots, bringing site imagery into the project asset flow rather than relying on placeholders.
- Preserve working outbound links and clearly distinguish live projects from informational entries.

## Responsive and quality pass
- Adapt the 12-column editorial composition into a clear single-column mobile reading order without hiding content.
- Ensure navigation, imagery, type, project statistics, and actions remain legible and non-overlapping at phone and desktop widths.
- Add accessible labels, visible keyboard focus, useful image descriptions, and appropriate external-link behavior.
- Replace placeholder metadata with portfolio-specific title, description, Open Graph fields, and Twitter card metadata on the home page.
- Verify the finished page visually on desktop and mobile, test all in-page and external links, and resolve any build or runtime errors.

## Technical details
- Implement the portfolio in the existing TanStack Start home route and split substantial sections/data into focused React modules where useful.
- Define the selected semantic palette and typography in the existing Tailwind v4 token system; load web fonts from the document head.
- Keep the implementation frontend-only; no database, authentication, or GitHub runtime integration is required.
- Record the new portfolio structure and asset ownership convention in `AGENTS.md`.
