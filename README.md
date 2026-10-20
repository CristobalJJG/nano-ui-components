# nano-ui-components

Standalone Angular UI components published as the `@nanojjg/nano-ui-components` package.

## Installation

```bash
npm install @nanojjg/nano-ui-components
```

## Usage

```ts
import { NanoButtonComponent, NanoTextInputComponent } from '@nanojjg/nano-ui-components';
```

Import `@nanojjg/nano-ui-components/themes.css` in the consuming application's global stylesheet to load the default dark theme and the light theme tokens. The light theme is selected by setting `data-theme="light"` on the document root.

## Local development

```bash
npm ci          # install dependencies
npm run build   # build the library into ./dist
npm run build:watch
```

## Publishing a new version

Releases are automated with [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/): the `Publish Package` workflow (`.github/workflows/publish.yml`) authenticates against the npm registry through OIDC, so no `NPM_TOKEN` secret is needed. The workflow runs in the `npm-publish` environment and publishes to the `latest` dist-tag.

Steps to release a change:

1. **Update the version** in `package.json` (this also updates `package-lock.json`):

   ```bash
   npm version patch --no-git-tag-version   # 0.2.5 -> 0.2.6  (use minor / major when needed)
   ```

2. **Commit** the version bump:

   ```bash
   git add package.json package-lock.json
   git commit -m "chore(release): v0.2.6"
   ```

3. **Create the tag** (the `v` prefix is mandatory) and push it:

   ```bash
   git tag v0.2.6
   git push origin main
   git push origin v0.2.6
   ```

4. **The workflow does the rest**: it installs dependencies, builds the library with ng-packagr and publishes it to npm. Check the run in the **Actions** tab of the repository and the new version at [npmjs.com/package/@nanojjg/nano-ui-components](https://www.npmjs.com/package/@nanojjg/nano-ui-components).

Good to know:

- The tag must match the version in `package.json` (`v0.2.6` -> `0.2.6`). If they do not match, the workflow fails before publishing.
- Versions and tags cannot be reused: npm rejects a version that is already published, so always bump the version first.
- If a publish fails, fix the problem and re-run the workflow from the Actions tab (`Re-run failed jobs`) as long as the version has not been published yet.
- Manual runs are also possible from the Actions tab (`Run workflow`), entering the tag you want to publish.
