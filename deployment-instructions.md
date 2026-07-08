# Huachen Print Version 1.0 Deployment Instructions

## Production Package

Deploy the contents of this folder:

`outputs/huachenprint-v1.0`

The folder contains the complete static website package:

- HTML pages
- CSS
- JavaScript
- Optimized images
- favicon
- Open Graph image
- `robots.txt`
- `sitemap.xml`
- `404.html`
- `_headers` cache/security hints for compatible static hosts

## Recommended Hosting

Recommended deployment options:

- Vercel static deployment
- Cloudflare Pages
- Netlify
- Any static host with HTTPS support

## Domain

Production domain:

`https://huachenprint.com`

After deployment, point the domain DNS to the selected hosting provider and enable HTTPS.

## Required Post-Deployment Checks

1. Open `https://huachenprint.com`
2. Confirm HTTPS lock is active.
3. Check all navigation links.
4. Check product pages.
5. Check WhatsApp links.
6. Check email links.
7. Check phone link on mobile.
8. Confirm `https://huachenprint.com/robots.txt`.
9. Confirm `https://huachenprint.com/sitemap.xml`.
10. Confirm unknown routes show the branded 404 page.

## Contact Form Decision

Version 1.0 launches with:

- WhatsApp
- Mobile
- Email

A production contact form should be implemented in Version 1.1 with a form service or backend endpoint. Launch should not be delayed for the contact form.

## Notes

- No local development server references are included.
- No file-system paths are included.
- No mixed-content asset loading is used.
- All site assets are local or HTTPS-based.
