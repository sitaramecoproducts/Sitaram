# SitaRam ecoProducts

A minimal, responsive Next.js website for SitaRam ecoProducts, styled from the supplied brand artwork.

## Included
- Responsive homepage with product catalogue and brand story
- Product enquiry links
- Contact details with tap-to-call and email links
- Contact form that opens a pre-filled email in the visitor's mail app
- Supplied logo artwork and product poster in `public/images`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js** and use the default build settings.
4. Select **Deploy**.

No environment variables are required.

## Contact form behaviour
The form prepares an email addressed to `sitaramecoproducts@gmail.com` and opens the visitor's default email app. This avoids collecting customer information on an unconfigured server. For an in-site submission flow, connect an email provider such as Resend and replace the `mailto:` handler with a server route.

## Brand details used
- Brand: SitaRam ecoProducts
- Phone: +91 9412109365 / +91 8294444472 / +91 7562096070
- Email: sitaramecoproducts@gmail.com
- Products: Paper Cups, Paper Plates, Dona, Buffet Plates, Nasta Plate
