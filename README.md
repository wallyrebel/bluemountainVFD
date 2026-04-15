# Blue Mountain Volunteer Fire Department — Website

Static website for the Blue Mountain VFD (Blue Mountain, MS).
No build step. Pure HTML + CSS + a tiny bit of JS. Deploys to **Cloudflare Pages** as a static site.

## Structure
```
.
├── index.html          # All sections live here (one-page site)
├── styles.css          # Custom styles (navy / crimson / cream)
├── script.js           # Mobile nav + footer year + form handler
├── _headers            # Cloudflare Pages security + cache headers
├── assets/
│   ├── logo.svg        # Department logo/badge
│   └── station.jpg     # ← DROP THE FIRE STATION PHOTO HERE (any JPG, ~1920x1080 ideal)
└── README.md
```

## Adding the station photo
Place a photo of the fire station (or trucks) at `assets/station.jpg`. The hero section will automatically use it as a full-bleed background with a dark gradient overlay for legibility. If no photo is present, the hero falls back to a navy gradient.

## Local preview
Any static server works. Pick one:

```bash
# Python (comes with Windows if installed)
python -m http.server 8080

# Node (no install needed)
npx --yes serve -l 8081 .
```
Then open http://localhost:8080 (or 8081).

## Deploy to Cloudflare Pages
1. Push this folder to a new GitHub repo.
2. In Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Pick the repo. Settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (root)
4. Deploy. Cloudflare will give you a `*.pages.dev` URL. Add a custom domain under **Custom domains** when ready.

## Updating content
- **Text & sections:** edit `index.html`.
- **Colors / typography:** edit CSS variables at the top of `styles.css` (`--navy-900`, `--crimson`, `--gold`, etc.).
- **Facebook feed:** auto-updates live from https://www.facebook.com/BlueMountainVFDMS — no changes needed on this site.
- **Volunteer form:** currently uses `mailto:` as a placeholder. For a real inbox, replace `action` in `index.html` with a [Formspree](https://formspree.io/) endpoint or a Cloudflare Pages Function.

## External links referenced
- Mississippi State Fire Academy — https://msfa.ms.gov/
- Tippah County Fire Services — https://www.co.tippah.ms.us/departments/fire-services/
- Department Facebook — https://www.facebook.com/BlueMountainVFDMS
