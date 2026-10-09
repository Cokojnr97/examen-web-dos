function EmptyCatalog({ onClear }) {
  return (
    <div className="catalog-empty">
      <p>No se encontraron registros con los filtros actuales.</p>
      <button type="button" className="btn btn-secondary" onClick={onClear}>
        Limpiar Filtros
      </button>
    </div>
  );
}

export default EmptyCatalog;
