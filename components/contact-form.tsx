"use client";

import { FormEvent, useState } from "react";

const EMAIL = "sitaramecoproducts@gmail.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const product = String(form.get("product") || "General enquiry");
    const quantity = String(form.get("quantity") || "Not specified");
    const message = String(form.get("message") || "").trim();

    const subject = encodeURIComponent(`Product enquiry — ${product}`);
    const body = encodeURIComponent(
      `Hello SitaRam ecoProducts,\n\nName: ${name}\nPhone: ${phone}\nProduct: ${product}\nQuantity: ${quantity}\n\nMessage:\n${message}\n\nPlease share your best price and details.`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input name="name" placeholder="Name" autoComplete="name" required /></label>
        <label>Phone number<input name="phone" type="tel" placeholder="+91" autoComplete="tel" required /></label>
      </div>
      <div className="form-row">
        <label>
          Product
          <select name="product" defaultValue="">
            <option value="" disabled>Select a product</option>
            <option>Paper Cups</option><option>Paper Plates</option><option>Dona</option>
            <option>Buffet Plates</option><option>Nasta Plate</option><option>Other / Bulk enquiry</option>
          </select>
        </label>
        <label>Approx. quantity<input name="quantity" placeholder="e.g. 5,000 pieces" /></label>
      </div>
      <label>How can we help?<textarea name="message" placeholder="Tell us what you need, including size or delivery location…" rows={4} required /></label>
      <button className="button button-dark form-submit" type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
      <p className="form-note" aria-live="polite">
        {sent ? "Your email app should open with your enquiry ready to send." : "This opens your email app with your enquiry filled in."}
      </p>
    </form>
  );
}
