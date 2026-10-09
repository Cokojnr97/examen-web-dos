import BookCard from '../BookCard/BookCard';

function BookGrid({ books }) {
  return (
    <section>
      <div className="cards-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

export default BookGrid;
