# GitHub profile settings

The root README is the profile design. These account fields are configured separately in GitHub's **Edit profile** panel; this document provides matching copy. Account settings have not been changed.

| Field | Value |
| :--- | :--- |
| Name | IQX Solutions |
| Bio | Websites, SEO & digital experiences. IQX first. Tralionex for business systems & marketing. Click2Print for print & packaging. Lahore → UK, remotely. |
| Company | IQX Solutions |
| Location | Lahore, Pakistan |
| Website | https://iqx.world/ |
| Public email | iqx.world@gmail.com — if you want it shown in the sidebar |
| Avatar | [Official IQX logo](../assets/iqx-official-avatar.png), copied unchanged from the existing IQX website |

Additional website links, where GitHub settings support them:

- Tralionex: https://tralionex.pk/
- Click2Print: https://click2print.pk/

## Repository presentation

Keep `IQXIntelligenceQuotient/IQXIntelligenceQuotient` public and keep `README.md` in the root. GitHub uses this matching repository as the account's profile README.

Suggested repository description:

> IQX Solutions — websites, search & digital experiences. Featuring Tralionex and Click2Print.

Suggested topics: `iqx`, `web-development`, `web-design`, `technical-seo`, `react`, `vite`, `static-site-generation`, `lahore`, `pakistan`.

Pin the public IQX website repository first. If Tralionex and Click2Print have public source repositories, pin those second and third. Only pin repositories with code you intend to make public.

## Design and maintenance

- IQX leads the page; Tralionex is explicitly secondary; Click2Print follows as print and packaging.
- The banner and two brand panels are static SVGs with no remote fonts, scripts, trackers, or external asset dependencies.
- The SVG panels are editorial profile artwork; the PNG avatar is the existing official IQX logo.
- Headings, descriptions, contact details, and FAQs also appear as native Markdown/HTML text.
- Relative image paths work on GitHub's repository and profile README views. Publish the assets folder together with the README.
- GitHub manages the surrounding HTML, metadata, and indexing. This is a GitHub profile README, not a separately hosted website, so Vite, prerendering, robots files, and sitemaps do not apply here.
- The IQX website's existing code confirms React, Vite, Tailwind CSS, Motion, React Router, Node.js build scripts, and static prerendering. Avoid unsupported credentials, client counts, ratings, or performance claims.

Sources: [IQX](https://iqx.world/), [Tralionex](https://tralionex.pk/), [Click2Print](https://click2print.pk/). Profile repository behavior: [GitHub documentation](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme).
