import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check, ChevronLeft, ChevronRight, Download, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export const PROFILE_NAME = "Leonard Festus Tsuma";

const samples = [
  { title: "Shimba Hills", type: "Safari promotion", image: "/work-samples/shimba-hills-safari.jpg", alt: "Promotional flyer for a day safari to Shimba Hills National Reserve", note: "A destination-led design pairing a strong headline with package details and a clear offer." },
  { title: "Ngutuni Sanctuary", type: "Safari promotion", image: "/work-samples/ngutuni-sanctuary.jpg", alt: "Promotional flyer for a day safari to Ngutuni Sanctuary", note: "A wildlife-focused promotion that brings the destination and travel package together." },
  { title: "Wasini Island", type: "Coastal getaway", image: "/work-samples/wasini-island.jpg", alt: "Promotional flyer for a day trip to Wasini Island", note: "A coastal trip promotion built around place, activity, and practical package information." },
  { title: "Salt Lick", type: "Safari promotion", image: "/work-samples/salt-lick-safari.jpg", alt: "Promotional flyer for a safari to Salt Lick in Taita Hills", note: "A destination-specific layout designed to make a safari offer easy to scan." },
  { title: "Malindi", type: "Coastal getaway", image: "/work-samples/malindi-day-trip.jpg", alt: "Promotional flyer for a day trip to Malindi", note: "A bright coastal trip promotion with the key experience and offer in focus." },
  { title: "Tsavo East", type: "Safari promotion", image: "/work-samples/tsavo-east-safari.jpg", alt: "Promotional flyer for a day safari to Tsavo East", note: "A safari promotion highlighting the destination and package information." },
];

const additionalSamples = [
  { title: "Malindi Day Trip", type: "Facebook event promotion", image: "/portfolio/malindi-event.png", alt: "Facebook event promotion for a one-day safari to Malindi", note: "A social event promotion for a Malindi day trip." },
  { title: "Mums Cyber Cafe", type: "Business services promotion", image: "/portfolio/cyber-cafe-services.png", alt: "Promotional artwork for Mums Cyber Cafe printing and eCitizen services", note: "A service-led poster presenting digital, printing, and eCitizen services." },
  { title: "Accommodation Exterior", type: "Property photography", image: "/portfolio/accommodation-exterior.png", alt: "Exterior photograph of a two-storey accommodation property", note: "A property photograph documenting the accommodation exterior." },
  { title: "Accommodation in the Garden", type: "Property photography", image: "/portfolio/accommodation-garden.png", alt: "Accommodation exterior surrounded by tropical greenery", note: "A property photograph showing the building in its garden setting." },
];

const allSamples = [...samples, ...additionalSamples];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonard Festus Tsuma | Communications Portfolio" },
      { name: "description", content: "A portfolio of promotional design, digital content, and bilingual writing samples by Leonard Festus Tsuma." },
      { property: "og:title", content: "Leonard Festus Tsuma | Communications Portfolio" },
      { property: "og:description", content: "Promotional design, digital content, and bilingual writing samples by Leonard Festus Tsuma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [activeSample, setActiveSample] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (activeSample === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSample(null);
      if (event.key === "ArrowRight") setActiveSample((current) => current === null ? null : (current + 1) % allSamples.length);
      if (event.key === "ArrowLeft") setActiveSample((current) => current === null ? null : (current - 1 + allSamples.length) % allSamples.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSample]);

  const closeMenu = () => setMenuOpen(false);
  const stepSample = (direction: number) => {
    setActiveSample((current) => {
      if (current === null) return 0;
      return (current + direction + allSamples.length) % allSamples.length;
    });
  };

  return (
    <main className="portfolio-shell min-h-screen bg-background text-foreground">
      <header className="portfolio-header">
        <a className="brand-mark" href="#top" onClick={closeMenu} aria-label={`${PROFILE_NAME}, home`}>
          <span className="brand-initials">LF</span>
          <span className="brand-name">{PROFILE_NAME}<span className="brand-subtitle">Communications &amp; Digital Media</span></span>
        </a>
        <Button className="menu-toggle" variant="ghost" size="icon" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="portfolio-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
        <nav id="portfolio-navigation" className={menuOpen ? "portfolio-nav is-open" : "portfolio-nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#role" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#digital-project" onClick={closeMenu}>Digital project <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="portfolio-intro" id="top">
        <div className="intro-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> COMMUNICATIONS · DIGITAL CONTENT · DESIGN</p>
          <h1>Clear stories.<br /><span>Meaningful reach.</span></h1>
          <p className="intro-description">A selection of promotional design, social media work, photography, and bilingual writing across digital and print formats.</p>
          <div className="intro-actions">
            <Button asChild className="portfolio-primary"><a href="#work">Explore selected work <ArrowDown size={16} /></a></Button>
            <span className="intro-format">Digital · Print · Social</span>
          </div>
        </div>
        <aside className="intro-side" aria-label="Portfolio focus">
          <p className="side-label">PORTFOLIO FOCUS</p>
          <h2>Communication<br />that connects</h2>
          <p className="side-role">Selected work &amp; writing samples</p>
          <p className="side-focus">Design · Content · Storytelling</p>
        </aside>
        <span className="intro-watermark" aria-hidden="true">LT</span>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">01 — WORK SAMPLES</p><h2>Promotional design</h2></div>
          <p className="section-note">Promotional flyer samples supplied for this portfolio.<br />Select a sample to view it in detail.</p>
        </div>
        <div className="work-grid">
          {samples.map((sample, index) => (
            <Button variant="ghost" className="sample-item" type="button" key={sample.title} onClick={() => setActiveSample(index)} aria-label={`View ${sample.title} flyer`}>
              <span className="sample-image-wrap"><img src={sample.image} alt={sample.alt} loading={index > 2 ? "lazy" : "eager"} /><span className="sample-open" aria-hidden="true"><ArrowUpRight size={18} /></span></span>
              <span className="sample-caption"><span><span className="sample-type">{sample.type}</span><span className="sample-title">{sample.title}</span></span><span className="sample-number">0{index + 1}</span></span>
            </Button>
          ))}
        </div>
      </section>

      <section className="work-section additional-work-section" aria-labelledby="additional-work-title">
        <div className="section-heading">
          <div><p className="eyebrow">02 — SOCIAL, PROMOTIONAL &amp; PHOTOGRAPHY</p><h2 id="additional-work-title">Work beyond the flyers</h2></div>
          <p className="section-note">Social media promotion, business artwork, and property photography.</p>
        </div>
        <div className="work-grid">
          {additionalSamples.map((sample, index) => (
            <Button variant="ghost" className="sample-item" type="button" key={sample.image} onClick={() => setActiveSample(samples.length + index)} aria-label={`View ${sample.title} ${sample.type}`}>
              <span className="sample-image-wrap"><img src={sample.image} alt={sample.alt} loading="lazy" /><span className="sample-open" aria-hidden="true"><ArrowUpRight size={18} /></span></span>
              <span className="sample-caption"><span><span className="sample-type">{sample.type}</span><span className="sample-title">{sample.title}</span></span><span className="sample-number">{String(samples.length + index + 1).padStart(2, "0")}</span></span>
            </Button>
          ))}
        </div>
        <div className="digital-project-card" id="digital-project">
          <div>
            <p className="eyebrow">LIVE WEBSITE · DIGITAL PROJECT</p>
            <h3>Mums Backpackers</h3>
            <p>Explore the live website for Mums Backpackers.</p>
          </div>
          <a href="https://mumsbackpackers.com/" target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-title"><p className="eyebrow">02 — APPROACH</p><h2>Make the message<br />clear. Make it matter.</h2></div>
        <div className="approach-content">
          <p className="approach-lead">Good communication meets people where they are—visually, culturally, and in the language they use every day.</p>
          <div className="approach-points">
            <div className="approach-point"><span className="point-mark"><Check size={15} /></span><p><strong>Audience first</strong><span>Put the people and purpose ahead of the platform.</span></p></div>
            <div className="approach-point"><span className="point-mark"><Check size={15} /></span><p><strong>Clear and considered</strong><span>Make information easy to understand and act on.</span></p></div>
            <div className="approach-point"><span className="point-mark"><Check size={15} /></span><p><strong>Respectful storytelling</strong><span>Represent people with care, context, and dignity.</span></p></div>
          </div>
        </div>
      </section>

      <section className="writing-section" aria-labelledby="writing-title">
        <div className="writing-heading"><p className="eyebrow">03 — DRAFT CAPTION</p><h2 id="writing-title">One message,<br />two languages.</h2><p>An example caption created for this portfolio, inspired by the Wasini Island flyer. Have a fluent Kiswahili speaker review it before submitting.</p></div>
        <div className="writing-pair">
          <article className="writing-sample"><span>ENGLISH · DRAFT</span><p>Trade the everyday for a day by the sea. Discover Wasini Island, enjoy the coast, and make room for a little adventure. Plan your getaway today.</p></article>
          <article className="writing-sample"><span>KISWAHILI · DRAFT</span><p>Badili shughuli za kila siku kwa siku ya mapumziko kando ya bahari. Gundua Kisiwa cha Wasini, furahia pwani na ujipatie nafasi ya kujivinjari. Panga safari yako leo.</p></article>
        </div>
      </section>

      <section className="role-section" id="role">
        <div className="role-topline"><p className="eyebrow">04 — SKILLS &amp; FOCUS</p><span>COMMUNICATIONS · DIGITAL MEDIA</span></div>
        <div className="role-content"><h2>Communications<br />toolkit</h2><div className="role-detail"><p>Audience-centred communication across channels, with clear content, thoughtful design, and respectful storytelling.</p><a className="role-apply" href="#work">Explore selected work <ArrowUpRight size={17} /></a></div></div>
        <div className="role-tags" aria-label="Position areas"><span>Digital content</span><span>Design &amp; publication</span><span>English &amp; Kiswahili</span><span>Advocacy communications</span><span>ICT support</span></div>
      </section>

      <footer className="portfolio-footer" id="footer">
        <a className="footer-brand" href="#top">{PROFILE_NAME} <span>Communications &amp; Digital Media</span></a>
        <p>Selected work samples<br />Communications · Digital content · Design</p>
        <a className="footer-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>

      {activeSample !== null && (
        <div className="sample-lightbox" role="dialog" aria-modal="true" aria-label={`${allSamples[activeSample]?.title ?? "Flyer"} sample`} onClick={(event) => { if (event.target === event.currentTarget) setActiveSample(null); }} onKeyDown={(event) => { if (event.key === "Escape") setActiveSample(null); }}>
          <div className="lightbox-inner">
            <Button variant="ghost" size="icon" className="lightbox-close" aria-label="Close flyer preview" onClick={() => setActiveSample(null)}><X /></Button>
            <Button variant="ghost" size="icon" className="lightbox-prev" aria-label="Previous flyer" onClick={() => stepSample(-1)}><ChevronLeft /></Button>
            <img className="lightbox-image" src={allSamples[activeSample]?.image} alt={allSamples[activeSample]?.alt ?? "Promotional flyer sample"} />
            <div className="lightbox-caption"><span><span>{allSamples[activeSample]?.type}</span><strong>{allSamples[activeSample]?.title}</strong><small>{allSamples[activeSample]?.note}</small></span><a href={allSamples[activeSample]?.image} download aria-label="Download work sample"><Download size={17} /></a></div>
            <Button variant="ghost" size="icon" className="lightbox-next" aria-label="Next flyer" onClick={() => stepSample(1)}><ChevronRight /></Button>
          </div>
        </div>
      )}
    </main>
  );
}