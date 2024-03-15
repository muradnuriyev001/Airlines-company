import BookCard from "./BookCard/BookCard";
import c from "./BookNow.module.scss";

const BookNow = () => {
  return (
    <div className={c.book}>
      <h1>Book now your flight</h1>
      <div className={c.bookCards}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default BookNow;
