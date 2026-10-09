import { Link } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import BookGrid from '../../components/Catalogo/BookGrid/BookGrid';
import StatsGrid from '../../components/Home/StatsGrid/StatsGrid';
import { booksData } from '../../data/booksData';
import Icon from '../../components/ui/Icon/Icon';
import { homeStatsData } from '../../data/homeStatsData';

function HomePage() {
  const totalPages = booksData.reduce((total, book) => total + book.paginas, 0);
  const averageRating = (
    booksData.reduce((total, book) => total + book.calificacion, 0) /
    booksData.length
  ).toFixed(1);
  const categoriesCount = new Set(
    booksData.map((book) => book.categoria)
  ).size;

  const metricValues = {
    books: booksData.length,
    categories: categoriesCount,
    rating: averageRating,
    pages: totalPages.toLocaleString(),
  };
  
  const stats = homeStatsData.map((stat) => ({
    ...stat,
    value: metricValues[stat.key],
  }));

  const featuredBooks = booksData.filter((book) => book.destacado);

  return (
    <div className="container">
      <HeroBanner
        title="Biblioteca de Diseño & Teoría Visual"
        subtitle="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <div className="section-header">
          <h2 className="section-title">
            <Icon name="bar-chart-3" />
            <span>Resumen del Repositorio</span>
          </h2>
        </div>
        <StatsGrid stats={stats} />
      </section>

      <section style={{ marginTop: '44px' }}>
        <div className="section-header">
          <h2 className="section-title">
            <Icon name="star" />
            <span>Obras Destacadas</span>
          </h2>
          <Link to="/catalogo" className="btn btn-outline">
            <span>Explorar Catálogo Completo</span>
            <Icon name="arrow-right" className="icon-sm" />
          </Link>
        </div>

        <BookGrid books={featuredBooks} />
      </section>
    </div>
  );
}

export default HomePage;