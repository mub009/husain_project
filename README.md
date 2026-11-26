# Sea Heart Group — Product Catalog

Bilingual (Arabic default, English toggle) product catalog website for Sea Heart Group.
Plain HTML/CSS/JS — no build step. Open `index.html` in a browser or host it on GitHub Pages.

## What's inside

- **Aesthetic devices** — HydraMaster® 14-in-1, Hydra Master™ SPA19 (9-in-1), SA-DM3 Facial AI Imager
- **Aurafix post-op garments** — 49 products (corsets, vests & sleeves, abdominal binders, bras, face bands, thorax bands, accessories), each with front/back photos, description, indications and its own size chart
- Search, category tabs, product detail panel, and a WhatsApp "request a quote" button pre-filled with the product code
- Language choice is remembered per visitor

## Structure

```
index.html
assets/css/style.css     styles (RTL + LTR)
assets/js/data.js        all product data, both languages — edit text here
assets/js/app.js         rendering, search, language toggle, product panel
assets/img/products/     garment photos (pNN = front, pNNb = back)
assets/img/sizes/        size chart per product
assets/img/devices/      device and handpiece images
brochures/               original supplier PDFs
```

## Editing

- **Contact details**: `company` block at the top of `assets/js/data.js`
- **Product text**: each product has `title`, `desc`, `ind` (indications) with `ar` and `en`
- **Interface text** (buttons, headings): the `T` dictionary at the top of `assets/js/app.js`

## Publish on GitHub Pages

Settings → Pages → Deploy from branch → `main` / root.
