# NOVA RISE Gift Factory V0.4

1. Unzip and open folder in VS Code.
2. Open index.html or run `python -m http.server 8000` and visit http://localhost:8000.
3. For Vercel, upload this folder to a GitHub repository, import the repository in Vercel, choose Other (no build command), deploy.

DE / UA / EN, category filters, search, product detail dialog, personalization, quantity, basket saved in localStorage. Checkout is disabled.

Photos: external Unsplash thematic reference URLs, not verified product photography. Network access was unavailable during creation; URLs and image availability could not be verified. Replace with licensed supplier photos before publishing. Some images intentionally represent categories rather than exact products.

Make: api/inquiry.js is a fail-closed server endpoint scaffold. To enable later, configure MAKE_WEBHOOK_URL as a Vercel server environment variable, implement validation, rate limiting, privacy/consent and fetch to the configured webhook. Frontend is not sending any data. Never put webhook secrets in app.js. No real catalog, order fulfillment, or payments. Add legal notices before launch.

V0.5: Offline SVG concept illustrations, not product photos. Replace images/product-1.svg through product-10.svg and hero.svg with supplier-approved visuals (update extensions in app.js and style.css if needed).

## V0.7
All ten products have external reference image URLs and local SVG fallbacks. External loading and usage rights have not been verified. Cards use aligned flex layouts.
