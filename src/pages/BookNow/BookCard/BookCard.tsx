import c from "./BookCard.module.scss";

const BookCard = () => {
  return (
    <div className={c.bookCard}>
      <h2>Miami</h2>
      <p>Time: 12:00pm 24 March</p>
      <p>Price: 249$</p>
    </div>
  );
};

export default BookCard;
