function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="contact-info-item">
      <div className="contact-icon-box">
        <i data-lucide={icon}></i>
      </div>

      <div>
        <strong>{label}</strong>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default ContactInfoItem;