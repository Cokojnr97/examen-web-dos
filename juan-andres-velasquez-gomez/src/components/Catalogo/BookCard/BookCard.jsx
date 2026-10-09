function getCategoryClass(category) {
  const categoryClasses = {
    Arquitectura: 'badge-arquitectura',
    'Diseño Industrial': 'badge-industrial',
    'Diseño Gráfico': 'badge-grafico',
    Estética: 'badge-estetica',
    Tipografía: 'badge-tipografia',
  };

  return categoryClasses[category] || 'badge-industrial';
}

function BookCard({ book }) {
  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            <i data-lucide={book.icono}></i>
          </div>
          <span className="card-rating-badge">
            <i data-lucide="star" className="icon-sm"></i>
            <span>{book.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span className={`badge ${getCategoryClass(book.categoria)}`}>
          {book.categoria}
        </span>
        <h3 className="card-title">{book.titulo}</h3>
        <p className="card-author">Por {book.autor} ({book.anio})</p>
        <p className="card-summary">{book.resumen}</p>

        <div className="card-details-box">
          <span>
            Editorial: <strong>{book.editorial}</strong>
          </span>
          <span>
            ISBN: <code>{book.isbn}</code>
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <i data-lucide="book-marked" className="icon-sm"></i>
          <span>{book.paginas} páginas</span>
        </span>
        <span className="card-meta">
          <i data-lucide="calendar" className="icon-sm"></i>
          <span>Edición {book.anio}</span>
        </span>
      </div>
    </article>
  );
}

export default BookCard;
