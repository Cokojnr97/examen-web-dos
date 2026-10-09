import ContactInfoItem from "./ContactInfoItem";

function ContactInfoList({ items }) {
  return (
    <div className="contact-info-list">
      {items.map((item) => (
        <ContactInfoItem key={item.label} {...item} />
      ))}
    </div>
  );
}

export default ContactInfoList;