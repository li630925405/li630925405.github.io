# Yazhou Li — academic homepage

Source for https://li630925405.github.io, built with Jekyll and adapted from [al-folio](https://github.com/alshedivat/al-folio).

The presentation uses a conventional author sidebar and single reading column, inspired by the structure of [Jinhua Liang’s academic homepage](https://jinhualiang.github.io/). It retains the existing Jekyll/al-folio source rather than replacing the theme engine.

The current academic content follows `CV_2026_1029.pdf` (29 October 2026).

## Local development

Use Ruby 3.2 or newer and Bundler:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000. For a production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

GitHub Actions builds pushes to `master` or `main` and deploys the generated `_site` to the existing GitHub Pages branch. Pull requests build without deploying. No Node build, external fonts, Jupyter runtime, ImageMagick conversion, or CSS purging is needed for the academic pages.

## Updating content

- `_pages/about.md`: biography; the homepage layout is `_layouts/about.html`.
- `_includes/author-profile.html`: the shared portrait, affiliation, and academic links shown on every page.
- `_news/`: dated updates shown after the homepage biography, newest first. Use `inline: true` for a short announcement and optional `end_date` for a conference date range. `announcements.limit` in `_config.yml` controls how many appear.
- `_data/research.yml`: the three research directions, shared by the homepage and research page.
- `_bibliography/papers.bib`: all papers, including the manuscript under submission. `selected={true}` selects homepage papers. Use `@unpublished` for a manuscript under submission and `@inproceedings` for a conference paper.
- Paper resources: add `code`, `slides`, and `poster` fields to the relevant entry in `_bibliography/papers.bib`. `code` takes a public repository URL; `slides` and `poster` take either a full public URL or a filename under `assets/pdf/`. Available links appear on the homepage, research page, and publications page.
- `assets/bibliography/papers.bib`: downloadable bibliography containing published papers only. Update this alongside the display bibliography and omit display-only fields such as `selected`, `html`, and `bibtex_show`.
- `_data/cv.yml`: education, experience, teaching, service, honours, and skills. This is the source for the online CV and homepage research-experience list.
- `assets/pdf/`: downloadable CV. Set `cv_pdf` and `content_updated` in `_config.yml` when replacing it.
- `_sass/_academic.scss`: typography, colour palette, responsive layout, dark theme, and print styles.
- `_projects/`: earlier audio projects, linked from the research page.

The homepage teaching and service summaries are maintained in `_layouts/about.html`. Keep them consistent with `_data/cv.yml` when updating these activities.

Publication links point to verified publisher pages or the DAGA proceedings PDF. Add PDF, code, or DOI links only when an actual public resource is available. The manuscript under submission is deliberately separated from published conference papers.

The original theme's sample posts and notebook are excluded from the build. The sample JSON resume has been removed so it cannot override the academic CV. Browser theme preferences are stored locally; all navigation and citation disclosure controls work without third-party JavaScript.

The local `_preview` directory, when present, is an ignored review artifact rendered with Liquid and a separate Markdown converter. It is not the output of the full Jekyll plugin pipeline. Use the Jekyll build above for release validation.
