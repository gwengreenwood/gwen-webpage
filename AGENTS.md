# Project Instructions

Talk to me like I'm an amateur. Do not assume I understand code terms.

This project is the Gwen poetry website in:

```text
C:\Users\joshw\Projects\Gwen Webpage
```

The GitHub repository is:

```text
https://github.com/gwengreenwood/gwen-webpage
```

The live site domain is:

```text
https://gwenevereivygreenwood.com/
```

## After Every Code Or Content Edit

After changing the website, push it all the way through to GitHub unless the user clearly says not to.

Before editing or pushing, first pull the newest live content from GitHub:

```powershell
git status -sb
git pull --rebase origin main
```

This matters because the `/admin/` portal can create or edit poems, categories,
images, and music directly on GitHub. Those admin changes may not exist on this
computer yet. Pulling first prevents a future design push from accidentally
overwriting newer admin content.

Use this order:

```powershell
npm run build
git status -sb
git add -A
git commit -m "Short plain-English description"
git push
gh run list --repo gwengreenwood/gwen-webpage --limit 3
```

If a new deploy run starts, watch it:

```powershell
gh run watch --repo gwengreenwood/gwen-webpage --exit-status
```

If `gh` is not on PATH, use:

```powershell
& 'C:\Program Files\GitHub CLI\gh.exe' run list --repo gwengreenwood/gwen-webpage --limit 3
```

## Protect Admin-Made Content

Treat these paths as user-owned content:

```text
src/content/poems/
src/content/categories/
public/media/images/
public/media/music/
```

Do not delete, replace, rename, or rewrite files in those folders during design
or layout work unless the user specifically asks for that content change.

When changing design/code, prefer editing these areas instead:

```text
src/pages/
src/layouts/
src/styles/
src/lib/
public/admin/config.yml
astro.config.mjs
.github/workflows/
```

Before pushing, check what will be committed:

```powershell
git status -sb
git diff --stat origin/main..HEAD
```

If the diff includes poem, category, image, or music files that were not part of
the user's request, stop and ask before pushing.

If `git pull --rebase origin main` reports conflicts in admin-owned content, do
not choose one side blindly. Stop and explain that live admin edits and local
edits both changed the same content.

## Deployment Notes

The `.github/workflows/deploy.yml` workflow deploys the site automatically every time `main` is pushed.

The workflow builds with:

```text
SITE_URL=https://gwenevereivygreenwood.com
SITE_BASE=/
```

Keep `SITE_BASE=/` while the custom domain is active.

If the workflow fails, read the failed log before guessing:

```powershell
gh run view --repo gwengreenwood/gwen-webpage --log-failed
```

GitHub Pages has already been enabled for this repo using GitHub Actions.

## Admin Notes

The website admin lives at:

```text
/admin/
```

It uses Decap CMS. The admin config is:

```text
public/admin/config.yml
```

Poem categories are editable in admin. Category source files live in:

```text
src/content/categories/
```

Poem source files live in:

```text
src/content/poems/
```

Each poem must have a `category` field that matches a category file name without `.md`.

Example:

```yaml
category: "weather-and-water"
```

## Live Site Check

After a successful deploy, open the live site and make sure it is styled, not just plain blue links on a black or white page.

Check:

```text
https://gwenevereivygreenwood.com/
https://gwenevereivygreenwood.com/poems/
https://gwenevereivygreenwood.com/admin/
```

If DNS is not ready yet, the GitHub Pages deploy can still succeed before the
custom domain opens in a browser.
