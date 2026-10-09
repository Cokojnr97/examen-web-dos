import StatCard from '../StatCard/StatCard';

function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

export default StatsGrid;
