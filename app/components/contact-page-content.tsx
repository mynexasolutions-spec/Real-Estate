"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const officeAddress = "Kaka Dhaba, Parshuram Chowk, Near Ganesh Chowk, Bright Apartment, Shop No. 02, Near BJP Office, Kalyan (E)";
const officeMapUrl = "https://www.google.com/maps?q=Kaka%20Dhaba%20Parshuram%20Chowk%20Near%20Ganesh%20Chowk%20Bright%20Apartment%20Shop%20No.%2002%20Near%20BJP%20Office%20Kalyan%20East&output=embed";
const officeDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Kaka%20Dhaba%20Parshuram%20Chowk%20Near%20Ganesh%20Chowk%20Bright%20Apartment%20Shop%20No.%2002%20Near%20BJP%20Office%20Kalyan%20East";

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="site-main subpage contact-page">
      <SiteHeader />
      <section className="contact-page-hero">
        <div><p className="eyebrow">GET IN TOUCH</p><h1>Let&apos;s find your <em>next right space.</em></h1><p>Whether you&apos;re buying, selling or looking to rent, our team is ready to make your next step simpler.</p></div>
        <Image src="/images/properties/1.jpeg" alt="Markanday apartment building" fill priority sizes="100vw" />
      </section>
      <section className="contact-page-content">
        <div className="contact-details">
          <p className="eyebrow">MARKANDAY ENTERPRISES</p><h2>Start with a conversation.</h2><p>Tell us what you&apos;re looking for and we&apos;ll help you explore the possibilities with clarity and care.</p>
          <div className="contact-detail-grid">
            <a href="tel:+918422943408"><span>PHONE</span><b>+91 84229 43408</b></a>
            <a href="tel:+918108525502"><span>PHONE</span><b>+91 81085 25502</b></a>
            <a href="https://wa.me/918422943408" target="_blank" rel="noreferrer"><span>WHATSAPP</span><b>Chat with our team ↗</b></a>
          </div>
          <div className="address-card"><span>OFFICE ADDRESS</span><address>Kaka Dhaba, Parshuram Chowk, Near Ganesh Chowk<br />Bright Apartment, Shop No. 02, Near BJP Office<br />Kalyan (E)</address><a href={officeDirectionsUrl} target="_blank" rel="noreferrer">Get directions</a></div>
        </div>
        <div className="contact-form-card">{submitted ? <div className="contact-thank-you"><span>✓</span><h2>Thank you.</h2><p>We&apos;ve received your enquiry and will be in touch soon.</p><button type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <form onSubmit={submitForm}><p className="eyebrow">SEND AN ENQUIRY</p><h2>How can we help?</h2><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone number<input name="phone" required type="tel" placeholder="Your phone number" /></label><label>I&apos;m interested in<select name="interest" defaultValue=""><option value="" disabled>Select an option</option><option>Buying a property</option><option>Selling a property</option><option>Rental property</option><option>General enquiry</option></select></label><label>Message<textarea name="message" rows={3} placeholder="Tell us a little more" /></label><button type="submit">Send enquiry</button></form>}</div>
      </section>
      <section className="contact-map-section" aria-labelledby="visit-us-title"><div className="contact-map-heading"><p className="eyebrow">VISIT OUR OFFICE</p><h2 id="visit-us-title">Easy to find. Ready to help.</h2><p>{officeAddress}</p></div><div className="contact-map-frame"><iframe title="Markanday Enterprises office location" src={officeMapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
      <SiteFooter />
      <a className="floating-whatsapp" href="https://wa.me/918422943408" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Image src="/images/whatsapp.png" alt="WhatsApp" width={29} height={29} className="whatsapp-icon" /></a>
    </main>
  );
}
