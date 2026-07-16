# LAIRE HubSpot Agreement Printer

Static print view used by the LAIRE HubSpot Client Agreement Builder card.

The HubSpot card puts the agreement JSON in the URL fragment. URL fragments are processed in the browser and are not sent to GitHub Pages. This site has no database, analytics, forms, or external requests.

## Local test

Open `index.html` through any static web server, then add an encoded JSON payload after `#`:

```json
{
  "title": "Professional Services Agreement",
  "clientCompany": "Example Company",
  "agreement": "Agreement text"
}
```

Use `?autoprint=1` before the fragment to request the print dialog after loading.
