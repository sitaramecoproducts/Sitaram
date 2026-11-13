import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

const phoneNumbers = ["9412109365", "8294444472", "7562096070"];

const products = [
  { number: "01", name: "Paper Cups", detail: "For tea, coffee and refreshments.", tag: "Everyday essential", icon: "cup" },
  { number: "02", name: "Paper Plates", detail: "A practical choice for meals and gatherings.", tag: "Serve with ease", icon: "plate" },
  { number: "03", name: "Dona", detail: "Traditional serving bowls for snacks and more.", tag: "Classic serveware", icon: "bowl" },
  { number: "04", name: "Buffet Plates", detail: "Made for events, functions and buffet service.", tag: "For gatherings", icon: "buffet" },
  { number: "05", name: "Nasta Plate", detail: "A neat serving option for snacks and light bites.", tag: "Snack-time favourite", icon: "nasta" }
];

function ProductIcon({ kind }: { kind: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true" {...common}>
      {kind === "cup" && <><path d="M35 23h50l-7 62H42z" /><path d="M32 23h56M38 15h44" /><path d="M44 36h32" opacity=".45" /></>}
      {kind === "plate" && <><ellipse cx="60" cy="51" rx="47" ry="25" /><ellipse cx="60" cy="51" rx="35" ry="16" /><path d="M15 58c7 18 83 18 90 0" /></>}
      {kind === "bowl" && <><path d="M17 36h86c-3 31-20 49-43 49S20 67 17 36Z" /><ellipse cx="60" cy="36" rx="43" ry="12" /><path d="M31 65c15 8 43 8 58 0" opacity=".55" /></>}
      {kind === "buffet" && <><ellipse cx="60" cy="51" rx="47" ry="28" /><ellipse cx="60" cy="51" rx="34" ry="17" /><path d="M16 51c9 24 79 24 88 0" opacity=".5" /><path d="M60 17v8M54 21h12" opacity=".45" /></>}
      {kind === "nasta" && <><ellipse cx="60" cy="52" rx="47" ry="23" /><ellipse cx="60" cy="52" rx="31" ry="12" /><path d="M20 61c12 20 68 20 80 0" /></>}
    </svg>
  );
}

function LeafMark() {
  return (
    <svg viewBox="0 0 42 42" aria-hidden="true" className="leaf-mark">
      <path d="M20 36C8 29 6 15 8 6c10 1 20 8 20 19 0 5-3 9-8 11Z" fill="currentColor" />
      <path d="M20 36c1-10 7-18 16-22 1 10-3 19-16 22Z" fill="currentColor" />
      <path d="M20 36 13 15m7 21 9-14" fill="none" stroke="var(--paper)" strokeWidth="1.3" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="SitaRam ecoProducts home">
          <Image src="/images/sitaram-logo-round.jpg" alt="SitaRam ecoProducts logo" width={64} height={64} priority />
          <span><strong>SitaRam</strong><small>ecoProducts</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#products">Products</a><a href="#about">Our approach</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Get a quote <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> ECO · SUSTAINABLE · PACKAGING</p>
          <h1>Good gatherings.<br /><em>Thoughtful</em> packaging.</h1>
          <p className="hero-description">Everyday paper products for serving, sharing and bringing people together — made with a lighter footprint in mind.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#products">Explore products <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#contact">Talk to our team <span>↗</span></a>
          </div>
          <div className="hero-footnote"><LeafMark /><span>Simple essentials. A more considered choice.</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame">
            <Image src="/images/sitaram-logo-square.jpg" alt="SitaRam ecoProducts brand mark in forest green" fill priority sizes="(max-width: 800px) 90vw, 42vw" />
          </div>
          <div className="hero-stamp"><span className="stamp-dot" /><span>Made for everyday moments</span><span className="stamp-dot" /></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Product values">
        <span>Paper essentials</span><i /><span>Bulk enquiries welcome</span><i /><span>Call for best price</span>
      </section>

      <section className="products-section section-pad" id="products">
        <div className="section-heading">
          <div><p className="eyebrow">THE COLLECTION / 01—05</p><h2>Made to serve.<br /><em>Ready to share.</em></h2></div>
          <p className="section-intro">A focused range of disposable paper serveware for shops, caterers, events and everyday use. Get in touch for sizes, quantities and pricing.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.number}>
              <div className="product-topline"><span>{product.number}</span><span className="product-tag">{product.tag}</span></div>
              <div className="product-illustration"><ProductIcon kind={product.icon} /></div>
              <div className="product-info">
                <h3>{product.name}</h3><p>{product.detail}</p>
                <a href={`mailto:sitaramecoproducts@gmail.com?subject=${encodeURIComponent(`Enquiry for ${product.name}`)}`} aria-label={`Enquire about ${product.name}`}>Enquire <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <div className="catalogue-note"><span className="note-rule" /><p>Looking for a regular supply or a larger order?</p><a href="#contact">Let’s discuss your requirements <span>↗</span></a></div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image">
          <Image src="/images/product-poster.jpg" alt="SitaRam ecoProducts product range and contact details" fill sizes="(max-width: 800px) 100vw, 45vw" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">A BETTER WAY TO SERVE / OUR APPROACH</p>
          <h2>Small details.<br /><em>Meaningful impact.</em></h2>
          <p>From a quick cup of chai to a table full of guests, the right serveware makes every moment easier. SitaRam ecoProducts brings together practical paper essentials for businesses and celebrations.</p>
          <div className="values-list">
            <div><span>01</span><p><strong>Everyday utility</strong><small>Useful paper products for daily service and special occasions.</small></p></div>
            <div><span>02</span><p><strong>Considered materials</strong><small>Paper-based alternatives for a more mindful serving choice.</small></p></div>
            <div><span>03</span><p><strong>Direct enquiries</strong><small>Speak with us about product options, bulk quantities and pricing.</small></p></div>
          </div>
          <a className="button button-outline" href="#contact">Ask about our products <span>↗</span></a>
        </div>
      </section>

      <section className="quote-band"><div className="quote-inner"><LeafMark /><p>“Serve well. Choose thoughtfully.”</p><span>SitaRam ecoProducts</span></div></section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">LET’S TALK / CONTACT</p><h2>Need a quote?<br /><em>We’re here.</em></h2>
          <p className="contact-intro">Tell us what you’re looking for. We’ll be happy to discuss products, quantities and the best available price.</p>
          <div className="contact-methods">
            <div><span className="contact-label">CALL US</span>{phoneNumbers.map((phone) => <a className="contact-value" href={`tel:${phone}`} key={phone}>+91 {phone}</a>)}</div>
            <div><span className="contact-label">EMAIL</span><a className="contact-value" href="mailto:sitaramecoproducts@gmail.com">sitaramecoproducts@gmail.com</a></div>
          </div>
        </div>
        <div className="contact-form-wrap"><div className="form-heading"><span>PRODUCT ENQUIRY</span><span>01 / 01</span></div><ContactForm /></div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home"><Image src="/images/sitaram-logo-round.jpg" alt="" width={48} height={48} /><span><strong>SitaRam</strong><small>ecoProducts</small></span></a>
        <p>Eco · Sustainable · Packaging</p>
        <div className="footer-links"><a href="#products">Products</a><a href="#about">Our approach</a><a href="#contact">Contact</a></div>
        <small className="copyright">© {new Date().getFullYear()} SitaRam ecoProducts</small>
      </footer>
    </main>
  );
}
