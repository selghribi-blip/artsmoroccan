# 🌙 Arts Moroccan

**Arts Moroccan** is a fully-featured static marketplace website for authentic Moroccan traditional arts, crafts, and vintage/antique items. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

---

## ✨ Features

- **Multilingual (AR / FR / EN)** — Full translation system with RTL support for Arabic. Language preference is saved in `localStorage`.
- **Product Catalog** — 12 products across 6 categories: Pottery, Textiles, Jewelry, Woodwork, Leather, Vintage.
- **Category Filtering** — Instant client-side filter by category with animated transitions.
- **Shopping Cart** — Add/remove items, live count badge, cart sidebar with total calculation. Persisted in `localStorage`.
- **Responsive Design** — Mobile-first layout using CSS Grid and Flexbox. Hamburger navigation on small screens.
- **Smooth Scrolling** — Anchor links scroll smoothly to their target sections.
- **Image Lazy Loading** — IntersectionObserver-based lazy loading with skeleton shimmer placeholder.
- **Back To Top Button** — Appears after scrolling 400px, smooth scroll to top.
- **Toast Notifications** — Lightweight feedback toasts for cart and form actions.
- **SEO-Ready** — Semantic HTML5, meta tags, Open Graph tags on every page.
- **Accessibility** — ARIA roles, labels, `aria-live` regions, keyboard-navigable.
- **Moroccan Design** — Geometric CSS patterns, warm earth-tone palette, Google Fonts (Amiri, Playfair Display, Open Sans).

---

## 🎨 Color Palette

| Name        | Hex       |
|-------------|-----------|
| Deep Blue   | `#1a3a5c` |
| Terracotta  | `#c0674a` |
| Gold        | `#d4a843` |
| Emerald     | `#2d6a4f` |
| Cream       | `#fdf6ec` |

---

## 📁 File Structure

```
artsmoroccan/
├── index.html          # Home page (hero, featured products, about teaser, contact CTA)
├── products.html       # Full product catalog with category filter
├── about.html          # Story, values, stats, team
├── contact.html        # Contact form + info card + map placeholder
├── css/
│   └── styles.css      # All styles (mobile-first, RTL, animations)
├── js/
│   └── main.js         # Translations, cart, filter, mobile nav, lazy load, back-to-top
└── README.md
```

---

## 🚀 Setup & Deployment

### Local Development
No build step needed. Just open `index.html` in any modern browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — serve with Python (avoids some CORS quirks)
python3 -m http.server 8080
# then visit http://localhost:8080

# Option 3 — VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### GitHub Pages
1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch, `/ (root)` folder.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo>/`.

---

## 🌐 Language Switching

Three language buttons (AR / FR / EN) are visible in the navbar on every page.

- Clicking a button instantly translates all `data-i18n` elements.
- Arabic (`AR`) sets `dir="rtl"` on `<html>` and uses the **Amiri** Arabic typeface.
- French and English use `dir="ltr"` with **Playfair Display** headings and **Open Sans** body.
- The selected language is stored in `localStorage` under the key `am_lang` and restored on every page load.

---

## 🛒 Cart

- Click **"Add to Cart"** on any product card.
- The cart badge in the navbar updates instantly.
- The cart sidebar slides in from the right (left in RTL) showing all added items.
- Items can be removed individually; the total updates automatically.
- The cart state persists in `localStorage` across page navigations.

---

## 🔧 Technologies

| Technology       | Usage                              |
|------------------|------------------------------------|
| HTML5            | Semantic markup, SEO meta tags     |
| CSS3             | Grid, Flexbox, custom properties, animations |
| Vanilla JS (ES6+)| i18n, cart, filter, IntersectionObserver |
| Google Fonts     | Amiri, Playfair Display, Open Sans |
| picsum.photos    | Placeholder product images         |

---

## 📄 License

© 2024 Arts Moroccan. All rights reserved.

