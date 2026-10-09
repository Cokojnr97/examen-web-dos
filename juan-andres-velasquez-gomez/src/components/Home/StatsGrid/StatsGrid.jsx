import StatCard from '../StatCard/StatCard';

function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          backgroundColor={stat.backgroundColor}
          color={stat.color}
        />
      ))}
    </div>
  );
}

export default StatsGrid;
