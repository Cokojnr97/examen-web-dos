function HeroBanner({ title, subtitle }) {
  return (
    <section className="hero-banner">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </section>
  );
}

export default HeroBanner;