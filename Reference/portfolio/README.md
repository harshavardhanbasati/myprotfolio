# Harsha Vardhan Basati: Portfolio

Personal portfolio website built with plain HTML, CSS and JavaScript (no build step).

## Structure

```
portfolio/
├── index.html                 # Single-page site (all sections)
├── README.md
└── assets/
    ├── css/style.css          # All styles (tokens at the top)
    ├── js/main.js             # Nav, typing effect, scroll reveal, contact form
    ├── img/favicon.svg
    └── resume/
        └── Harsha_Vardhan_Basati_Resume.pdf   # Linked by the "Resume" buttons
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Deploy on GitHub Pages

1. Copy these files into the root of the `myprotfolio` repository.
2. Commit and push.
3. In the repository, go to Settings, then Pages, and choose the `main` branch and the `/ (root)` folder.

## Updating content

- Text and sections: edit `index.html`.
- Colours and spacing: edit the variables at the top of `assets/css/style.css`.
- Resume: replace the PDF in `assets/resume/`, keeping the same file name.
- Project links: each project's "View on GitHub" link currently points to the GitHub profile. Replace it with the repository URL.
