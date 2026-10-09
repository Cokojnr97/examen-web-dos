function FilterToolbar({
  searchTerm,
  selectedCategory,
  categories,
  resultCount,
  totalCount,
  onSearchChange,
  onCategoryChange,
}) {
  return (
    <section className="filter-toolbar">
      <div className="search-group">
        <i data-lucide="search" className="search-icon-pos icon-sm"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por título, autor o concepto..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <select
        className="select-category"
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <span className="badge badge-neutral">
        <i data-lucide="layers" className="icon-sm"></i>
        <span>{resultCount} de {totalCount} registros</span>
      </span>
    </section>
  );
}

export default FilterToolbar;