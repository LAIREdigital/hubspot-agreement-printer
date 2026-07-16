# LAIRE HubSpot Agreement Printer

Static print view used by the LAIRE HubSpot Client Agreement Builder card.

The HubSpot card sends the agreement JSON in a URL query parameter because HubSpot removes URL fragments from iframe modal URLs. The page reads the payload and immediately removes the query string from the visible address. This site has no database, analytics, forms, or external requests.

## Local test

Open `index.html` through any static web server, then add the encoded JSON payload as the `data` query parameter:

```json
{
  "title": "Professional Services Agreement",
  "clientCompany": "Example Company",
  "agreement": "Agreement text"
}
```

Use `autoprint=1` to request the print dialog after loading.
