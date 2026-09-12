# Portfolio workspace instructions

- At the beginning of every task in this repository, check whether `http://127.0.0.1:4322/` responds.
- If it is unavailable, run `npm run dev:daemon`. This starts a detached, self-healing Astro server on `127.0.0.1:4322` that survives individual task terminals.
- Do not start a second server when port 4322 is already responding.
- Keep the server running while working so the in-app browser updates as files change.
