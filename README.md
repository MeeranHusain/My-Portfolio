# Meeran Husain – Portfolio

Personal portfolio website (HTML, CSS, JavaScript + Three.js).

## Folder structure

```
meeran_portfolio/
├── index.html              # Page markup (all sections)
├── README.md
├── css/
│   └── style.css           # All styles (theme tokens, layout, mobile rules)
├── js/
│   ├── theme.js            # Light / dark toggle
│   ├── menu.js             # Mobile hamburger menu
│   ├── typing.js           # Hero SQL typing animation
│   ├── cursor.js           # Custom neon cursor
│   ├── photo-tilt.js       # 3D tilt on profile photo
│   └── scenes.js           # Three.js scenes (needs three.min.js from CDN)
└── assets/
    ├── images/
    │   └── profile.jpg     # Profile photo
    └── docs/
        └── Meeran_Husain_Resume.pdf   # Resume (Download button)
```

## Run locally
Open `index.html` in a browser. Internet is needed for Google Fonts and Three.js (CDN).

## Update content
- Text, projects, experience: `index.html`
- Colors (neon green etc.): CSS variables at the top of `css/style.css`
- Resume: replace `assets/docs/Meeran_Husain_Resume.pdf` (keep the same file name)
- Photo: replace `assets/images/profile.jpg`

<!-- ## Deploy
Upload the whole folder to GitHub Pages, Netlify or Vercel. -->
