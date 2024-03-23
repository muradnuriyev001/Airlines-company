import c from "./Checkout.module.scss";

import { useSelector } from "react-redux";
import { selectBooking } from "../../../redux/slices/booking.slice";

import { FaCaretRight } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaPaypal, FaBitcoin } from "react-icons/fa6";
import { SiQiwi } from "react-icons/si";

const payments = [RiVisaFill, FaCcMastercard, FaPaypal, FaBitcoin, SiQiwi];

const Checkout = () => {
  const bookingSelector = useSelector(selectBooking);
  const bookingArray = Array.isArray(bookingSelector) ? bookingSelector : [];

  let initialPrice = 0;
  
  bookingArray.map((price) => (initialPrice += price.price));

  return (
    <div className={c.checkout}>
      <div className={c.information}>
        <h2>Checkout:</h2>
        <p>Departure: Mixed Route</p>
        <p>Destination: Mixed Route</p>
        <p>Passenger(s): Mixed Pass.</p>
        <p>Class: Mixed classes</p>
        <p>Total Price: {initialPrice}$</p>
      </div>
      <div className={c.button}>
        <div className={c.payments}>
          {payments.map((payment, i) => {
            const Icon = payment;
            return (
              <div key={i}>
                <Icon />
              </div>
            );
          })}
        </div>

        <p>
          By clicking "Complete Booking," you agree to our Terms and Conditions
          and Privacy Policy.
        </p>
        <button>
          Complete Booking <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
