import Icon from '../../ui/Icon/Icon';

function StatCard({ label, value, icon, backgroundColor, color }) {
  return (
    <article className="stat-card">
      <div
        className="stat-icon-wrapper"
        style={{ backgroundColor, color }}
      >
        <Icon name={icon} />
      </div>
      <div className="stat-content">
        <span className="stat-number">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </article>
  );
}

export default StatCard;
