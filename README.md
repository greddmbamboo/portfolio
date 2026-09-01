# Gaige Redd portfolio

A lightweight, fully static Astro portfolio ready for GitHub Pages and `gaigeredd.com`.

## Local preview

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open the local address shown.
4. Run `npm run build` before publishing. The finished site is generated in `dist/`.

## Add real content

- Edit project names, summaries, and case-study content in `src/data/projects.ts`.
- Edit homepage and leadership copy in `src/pages/index.astro`.
- Put images and the résumé in `public/assets/` following `public/assets/README.md`.
- Replace each `.project-art`, `.case-cover`, and `.portrait-placeholder` block with an `<img>` when assets are ready.
- Update the placeholder contact email if needed.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. The included workflow builds and publishes the site on each push to `main`.
4. In **Settings → Pages → Custom domain**, enter `gaigeredd.com` and enable HTTPS after DNS resolves.
5. At your domain registrar, add the GitHub Pages DNS records. GitHub's current documentation lists the required apex-domain A/AAAA records. Add `www` as a CNAME pointing to `<your-github-username>.github.io` if you want both addresses.

The included `public/CNAME` preserves the custom domain across deployments. Update `astro.config.mjs`, `public/CNAME`, `robots.txt`, and canonical metadata if the final domain changes.
