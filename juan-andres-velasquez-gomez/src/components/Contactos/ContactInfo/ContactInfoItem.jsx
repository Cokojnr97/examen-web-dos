import Icon from '../../ui/Icon/Icon';

function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="contact-info-item">
      <div className="contact-icon-box">
        <Icon name={icon} />
      </div>

      <div>
        <strong>{label}</strong>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default ContactInfoItem;