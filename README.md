# Gwen Poetry Website

A polished static poetry site built for GitHub Pages. Poems are Markdown files,
images live in `public/media/images`, and music lives in `public/media/music`.

## Run it on your computer

1. Install Node.js if it is not already installed.
2. Open this folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal.

## Add a poem

1. Put the image in `public/media/images`.
2. Put the music file in `public/media/music`.
3. Choose the category slug, such as `weather-and-water`.
4. Copy `CONTENT_TEMPLATE.md`.
5. Save the new poem as `src/content/poems/your-poem-title.md`.
6. Change the title, date, category, summary, image, music, and poem text.

The file name becomes the page URL. For example:

```text
src/content/poems/after-rain.md
```

inside a category becomes:

```text
/poems/weather-and-water/after-rain/
```

## Add or rename categories

Category files live in `src/content/categories`.

Each category has a name, description, optional image, and sort order. The admin
screen can edit these. Poems point to categories with the category file slug.

Example:

```yaml
category: "weather-and-water"
```

## Use the website admin

This repo includes a real admin page at:

```text
/admin/
```

That admin page uses Decap CMS. It lets you log in from the website, then add or
edit poems, images, and music with forms.

The admin is already configured for:

```yaml
repo: gwengreenwood/gwen-webpage
```

After the site is published:

1. Go to `https://your-domain.com/admin/`.
2. Log in.
3. Open the `Poems` section.
4. Add or edit poems with the form.
5. Click publish.

Important plain-English note: GitHub Pages is static. That means it cannot store
a private password or save poem files by itself. The admin screen is on your
website, but it still needs permission to save changes back into the website
repository in the background.

## Keep admin edits safe

When you add poems, categories, images, or music through `/admin/`, those changes
are saved directly to GitHub.

Before making design/code changes from this computer, pull the latest GitHub
version first:

```bash
git pull --rebase origin main
```

That keeps new admin-added poems from being overwritten by an older copy on this
computer.

## Publish to GitHub Pages

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Push a change or run the `Deploy to GitHub Pages` action.

After this is set up, every normal push to `main` from this computer will
automatically rebuild and update the hosted website.

## Use your own domain

The site is set up for:

```text
gwenevereivygreenwood.com
```

The file `public/CNAME` tells GitHub Pages to use that domain.

In your domain host's DNS settings, point the domain to GitHub Pages. For an
apex/root domain like this, GitHub's current IPv4 `A` records are:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

You can also add these IPv6 `AAAA` records if your domain host supports them:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

After DNS is pointed correctly, GitHub can issue the HTTPS certificate. That may
take a little while.

If you want the sitemap to use a different domain later, update the repository
variable named `SITE_URL`.

There is also a sample file at `public/CNAME.example`. When you know the real
domain, rename it to `CNAME` and replace `your-domain.com` with your domain.
