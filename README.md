# BossWright messy-import fixture

A DELIBERATELY broken repository, used to prove BossWright reports an honest
end state instead of a false success. Every problem here is intentional:

1. `scripts.start` runs `server/index.js`, which does not exist in this repo.
2. There is NO lockfile, so installs are unpinned.
3. `node_modules/` and `dist/` are committed and must be excluded on import.
4. `.cache/` is committed build output.
5. `src/main.jsx` requires `VITE_API_URL`, which has no default.
6. `vite` is used by the build script but is not in devDependencies.
7. This README claims the app "runs with npm start" — it does not. Documentation
   is not evidence, which is part of what the fixture tests.

A correct import should: exclude 3 and 4, name 1, 2, 5 and 6 as blockers or
required configuration, and never report a working preview.
