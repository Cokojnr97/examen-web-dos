import { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import FilterToolbar from '../../components/Catalogo/FilterToolbar/FilterToolbar';
import BookGrid from '../../components/Catalogo/BookGrid/BookGrid';
import EmptyCatalog from '../../components/Catalogo/EmptyCatalog/EmptyCatalog';
import { booksData } from '../../data/booksData';

function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(
    new Set(booksData.map((book) => book.categoria))
  ).sort();

  const normalizedSearch = searchTerm.toLowerCase().trim();
  const filteredBooks = booksData.filter((book) => {
    const matchesSearch =
      book.titulo.toLowerCase().includes(normalizedSearch) ||
      book.autor.toLowerCase().includes(normalizedSearch) ||
      book.resumen.toLowerCase().includes(normalizedSearch) ||
      book.editorial.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      selectedCategory === '' || book.categoria === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function clearFilters() {
    setSearchTerm('');
    setSelectedCategory('');
  }

  return (
    <div className="container">
      <HeroBanner
        title="Colección de Textos & Documentos"
        subtitle="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
      />

      <FilterToolbar
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        categories={categories}
        resultCount={filteredBooks.length}
        totalCount={booksData.length}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />

      {filteredBooks.length === 0 ? (
        <EmptyCatalog onClear={clearFilters} />
      ) : (
        <BookGrid books={filteredBooks} />
      )}
    </div>
  );
}

export default CatalogoPage;