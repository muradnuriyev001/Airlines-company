import BookCard from "./BookCard/BookCard";
import c from "./BookNow.module.scss";
import Checkout from "./Checkout/Checkout";

const BookNow = () => {
  return (
    <div className={c.content}>
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
        </div>
      </div>
      <Checkout />
    </div>
  );
};

export default BookNow;
