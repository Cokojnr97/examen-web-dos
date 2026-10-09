function StatCard({ label, value, icon, backgroundColor, color }) {
  return (
    <article className="stat-card">
      <div
        className="stat-icon-wrapper"
        style={{ backgroundColor, color }}
      >
        <i data-lucide={icon}></i>
      </div>
      <div className="stat-content">
        <span className="stat-number">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </article>
  );
}

export default StatCard;
