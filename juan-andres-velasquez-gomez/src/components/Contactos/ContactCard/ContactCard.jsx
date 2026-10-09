function ContactCard({ title, description, children }) {
  return (
    <article className="contact-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </article>
  );
}

export default ContactCard;