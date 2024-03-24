import c from "./BookNow.module.scss";
import { useSelector } from "react-redux";
import { selectBooking } from "../../redux/slices/booking.slice";
import usePageTitle from "../../hooks/usePageTitle";

import BookCard from "./BookCard/BookCard";
import Checkout from "./Checkout/Checkout";

const BookNow = () => {
  usePageTitle("AirLine Jet | Book Now");

  const bookingSelector = useSelector(selectBooking);
  const bookingArray = Array.isArray(bookingSelector) ? bookingSelector : [];
  // console.log(bookingArray);

  return (
    <div className={c.content}>
      <div className={c.book}>
        <h1>Book now your flight</h1>
        <div className={c.bookCards}>
          {!bookingArray.length ? (
            <h3>There is no booking..</h3>
          ) : (
            bookingArray.map((book, i) => <BookCard key={i} {...book} />)
          )}
        </div>
      </div>

      <Checkout />
    </div>
  );
};

export default BookNow;
