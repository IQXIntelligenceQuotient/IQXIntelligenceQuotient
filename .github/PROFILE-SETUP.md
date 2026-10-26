# Profile finishing details

The README redesign is saved in this repository. The values below are prepared for GitHub's **Edit profile** panel; account settings have not been changed.

| Field | Recommended value |
| :--- | :--- |
| Display name | IQX Solutions |
| Bio | Web development, SEO and digital experiences for UK businesses. Based in Lahore. IQX · Tralionex · Click2Print. |
| Company | IQX Intelligence Quotient |
| Location | Lahore, Pakistan |
| Website | https://iqx.world/ |
| Public email | iqx.world@gmail.com, if you want it displayed |
| Avatar | [Official IQX logo](../assets/iqx-official-avatar.png) |

The public profile inspected on 26 October 2026 has a bio ending in “Pakistan Netw” and a full street address in the location field. The shorter copy above fits the bio and gives the sidebar a cleaner hierarchy. Keep the full business address on the official website.

Keep IQX as the main website. Include [Tralionex](https://tralionex.pk/) and [Click2Print](https://click2print.pk/) as additional links where supported.

## Repository and pinned work

Suggested description for the profile repository:

> IQX Solutions — web development, search and digital experiences. Featuring Tralionex and Click2Print.

The public account currently lists the profile repository, `Grappling-Federation-of-Pakistan`, and `yellowcoda`. Pin the maintained project repositories you want visitors to review, with clear descriptions, working demos where available, and useful READMEs. This redesign does not change repository settings or pins.

## Design

- Official IQX identity, with a silver, slate, and blue visual system.
- One concise introduction, a prominent IQX service overview, and two smaller supporting brand cards.
- Native text for the services, engineering approach, technology stack, and contact links.
- No repeated service matrix, navigation row, long FAQ, or external badge dependencies.
- Light and dark header/card artwork. The mobile header uses larger typography and a dedicated composition.
- Original profile artwork, not website screenshots. Automated screenshot requests to the official sites returned a browser check.

All SVGs are static. The header embeds the official logo as a PNG data URI, keeping the artwork self-contained. The logo itself is copied unchanged from the existing IQX website.

To regenerate the artwork with Node.js:

```sh
node scripts/generate-profile-assets.mjs
```

Publish the README and assets together. GitHub renders the Markdown as HTML and controls the surrounding navigation, sidebar, contribution graph, metadata, and indexing; a separate Vite website, robots.txt, or sitemap would not customize those surfaces.

Sources: [IQX](https://iqx.world/), [Tralionex](https://tralionex.pk/), [Click2Print](https://click2print.pk/), [GitHub profile README documentation](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme).
