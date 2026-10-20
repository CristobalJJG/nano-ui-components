# AGENTS.md

Angular 22 standalone component library, published to npm as `@nanojjg/nano-ui-components`.
It is **not** an Angular workspace: there is no `angular.json`, no app, no `ng` CLI. The only
build system is ng-packagr.

## Commands

```bash
npm ci                      # requires the committed package-lock.json
npm run build               # ng-packagr -> ./dist   (this IS the verification step)
npm run build:watch
npm publish ./dist --dry-run   # inspect the tarball without publishing
```

**There is no `test`, `lint` or `typecheck` script** — no spec files, no Karma/Jest, no
ESLint/Prettier config, no Husky. Don't try to run `npm test`; the only automated check is a
clean `npm run build` (ng-packagr compiles and type-checks through tsc).

## Public API wiring (most common mistake)

- Real chain: `src/public-api.ts` -> `src/lib/components/index.ts` -> one file per component.
- `src/lib/public-api.ts` is a **dead duplicate barrel** — nothing references it
  (`ng-package.json` points `entryFile` at `src/public-api.ts`). Editing it changes nothing;
  new components must be added to `src/lib/components/index.ts` or they are not exported.
- `ng-package.json`: `dest: ./dist`, `entryFile: src/public-api.ts`, and `assets` copies
  `src/themes.css` -> `dist/themes.css` (the package's `./themes.css` export).
- ng-packagr generates `dist/package.json` (`exports`, `module`, `typings`, `type: module`) and
  strips `scripts` + `devDependencies` from it. Never hand-edit `dist/`.

## Component conventions (match existing files exactly)

- Path: `src/lib/components/<name>/nano-<name>.{ts,html,css}`; exported from
  `src/lib/components/index.ts`.
- Selector `nano-<name>`, class `Nano<Name>Component`, co-located types like
  `NanoButtonVariant` exported from the component file.
- `@Component({ standalone: true, templateUrl: './x.html', styleUrl: './x.css' })` —
  `styleUrl` is singular. Uses decorator `@Input()` / `@Output()` / `@HostBinding`, not signal
  inputs.
- CSS classes are plain per-component names (`.button`, `.alert`, `.table`) with **no**
  `nano-` prefix; Angular scopes the styles.
- Colors and spacing come from `var(--ui-*, fallback)` tokens defined in `src/themes.css`
  (dark by default, light via `:root[data-theme="light"]`). Always keep the fallback in the
  `var()` so a component still renders without the theme file.

## TypeScript / compilation

- `tsconfig.json` (base) -> `tsconfig.lib.json` -> `tsconfig.lib.prod.json`. The prod config's
  `compilationMode: "partial"` is mandatory: in full compilation mode ng-packagr injects a
  `prepublishOnly` script that intentionally fails, blocking the publish.
- Published output is partially compiled, so consumers' Angular CLI runs the linker on it.
- TypeScript is pinned to `~6.0.2`; peer deps are `@angular/core` and `@angular/common` `^22.2.0`;
  `tslib` is a runtime **dependency**, not a peer.

## Releasing

- Release = bump version + push a git tag. `.github/workflows/publish.yml` builds and publishes
  to npm via OIDC trusted publishing (no `NPM_TOKEN` secret; needs `id-token: write` and the
  `npm-publish` environment).
- The workflow fails before publishing if the tag version doesn't match `package.json`
  (`v0.2.6` <-> `0.2.6`). The version lives in both `package.json` and `package-lock.json`.
- Full step-by-step: README section "Publishing a new version".

## Gotchas

- `dist/`, `node_modules/`, `out-tsc/`, `.angular/` are gitignored — never commit build output.
- `package-lock.json` and `tsconfig.json` **must** stay committed: CI runs `npm ci` and the
  build extends `tsconfig.json`.
- `src/lib/components/nano-button` is a stray 0-byte file, not an entry point.
- Any `dependencies` entry other than `tslib` (always allowed) makes ng-packagr **throw and fail
  the build**: runtime deps must be declared in `peerDependencies`, or whitelisted via
  `allowedNonPeerDependencies` in `ng-package.json`.
