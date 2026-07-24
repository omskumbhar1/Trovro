# trovro.com — website

Static site for Trovro. No build step, no dependencies — plain HTML/CSS/JS.

```
├── index.html            home / landing page
├── privacy.html          Privacy Policy  (DPDP Act, 2023)
├── terms.html            Terms & Conditions
├── contact.html          support + Grievance Officer
├── delete-account.html   account deletion  (required by Google Play)
├── 404.html              not-found page
├── CNAME                 custom domain for GitHub Pages
└── assets/
    ├── style.css             all styling, shared by every page
    ├── site.js               nav + scroll behaviour
    ├── logo.png              the brand mark (dark tile, used in nav + footer)
    ├── favicon.png           48px tab icon
    ├── favicon-32.png        32px tab icon
    ├── favicon-16.png        16px tab icon
    ├── apple-touch-icon.png  180px, iOS home screen
    ├── icon-512.png          512px master icon
    └── og-image.png          1200x630 link preview (WhatsApp, X, LinkedIn)
```

Paths inside `style.css` are relative to `assets/`, not to the page — the logo is
referenced as `url("logo.png")`, not `url("assets/logo.png")`.

---

## Deploy to GitHub Pages

1. Create a **public** repo — name it `trovro-site` (any name works).
2. Upload every file in this folder to the repo root (keep the `assets/` folder intact).
3. Repo → **Settings → Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `main` · **Folder:** `/ (root)` → **Save**
4. Still on that page, under **Custom domain**, enter `trovro.com` → **Save**.
   (The `CNAME` file in this repo already contains it.)
5. Leave **Enforce HTTPS** unchecked until the certificate is issued — GitHub does it
   automatically once DNS resolves, usually within an hour. Then tick it.

## DNS at Hostinger

Hostinger → **Domains → trovro.com → DNS / Nameservers**. Delete any existing `A` record
for `@` (often a parking page), then add:

| Type | Name | Points to | TTL |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | default |
| A | @ | 185.199.109.153 | default |
| A | @ | 185.199.110.153 | default |
| A | @ | 185.199.111.153 | default |
| CNAME | www | `YOUR-USERNAME.github.io` | default |

Replace `YOUR-USERNAME` with your GitHub username (keep the trailing dot if Hostinger adds one).

Propagation takes anywhere from a few minutes to 24 hours. Check with
[dnschecker.org](https://dnschecker.org) — once the A records show GitHub's IPs,
`https://trovro.com` will serve the site and `www` will redirect to it.

---

## Before you go live — edit these

- **`assets/om-kumbhar.jpg`** — add your photo, then in `index.html` (founder section) swap the
  `<span class="mono">OK</span>` for the commented-out `<img>` tag right above it.
- **Postal address** — every page shows `Mumbai, Maharashtra, India` as a placeholder. Search
  and replace with your full address (required for the Grievance Officer details).
- **Social links** — LinkedIn / GitHub in `index.html` are `#` placeholders.
- **Play Store URL** — the "Coming soon on Google Play" button in `index.html` links to `#`.

## Use these URLs in Play Console

| Field | URL |
| --- | --- |
| Privacy policy | `https://trovro.com/privacy.html` |
| Support / contact | `https://trovro.com/contact.html` |
| Account deletion | `https://trovro.com/delete-account.html` |

---

## Keeping the app and site in sync

The legal text mirrors `LegalScreens.kt` in the Android app. If you change one, change the
other — the hosted pages are the authoritative version, and Play reviews them.

⚠️ These documents were drafted for Trovro's actual model (intermediary, 0% commission, no
payment handling) and reference the DPDP Act 2023 and IT Rules 2021, but they are not legal
advice. Have a lawyer review them before you scale.
