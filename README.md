# React + Vite

## Deploying to GitHub Pages with `innotech.global`

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds and
deploys the site after each push to `main`. It is configured for the custom
domain `innotech.global`; the deployed artifact includes `CNAME` and uses `/`
as its Vite base path.

One-time GitHub setup:

1. Open **Settings → Pages** in `rdfco/innotech-website`.
2. Set **Source** to **GitHub Actions**.
3. Enter `innotech.global` under **Custom domain**, save it, and enable
   **Enforce HTTPS** once GitHub verifies the DNS records.

DNS setup (at the domain's DNS provider):

- Remove the existing `A` records for `innotech.global` that point to the old
  host.
- Add these four `A` records for `@`:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and
  `185.199.111.153`.
- Optionally add `www` as a `CNAME` pointing to `rdfco.github.io`.

After DNS propagation, GitHub Pages will serve the site at
`https://innotech.global`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
