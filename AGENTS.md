<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as a single editorial home route with content data separated in `src/lib/portfolio-data.ts`, because its narrative is designed as one continuous magazine-style reading experience.
- Keep portfolio imagery referenced through the centralized `images` map, because the original source assets currently require their hosted URLs.
