import c from "./Checkout.module.scss";

import { FaCaretRight } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaPaypal, FaBitcoin } from "react-icons/fa6";
import { SiQiwi } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const payments = [RiVisaFill, FaCcMastercard, FaPaypal, FaBitcoin, SiQiwi];

const Checkout = () => {
  return (
    <div className={c.checkout}>
      <div className={c.information}>
        <h2>Checkout:</h2>
        <p>Departure: Miami</p>
        <p>Destination: Tokio</p>
        <p>Passenger(s): 2 Adults</p>
        <p>Class: Bussiness class</p>
        <p>Total Price: {null}</p>
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
