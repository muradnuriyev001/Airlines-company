import c from "./ContactInfo.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const hours = [
  { Monday: "9.00-19-00" },
  { Tuesday: "9.00-19-00" },
  { Wednesday: "9.00-19-00" },
  { Thursday: "9.00-19-00" },
  { Friday: "10.00-18-00" },
  { Saturday: "10.00-16-00" },
  { Sunday: "12.00-16.00" },
];

const ContactInfo = () => {
  return (
    <div className={c.info}>
      <div className={c.contacts}>
        <h1>Central Office</h1>
        <p>
          Questions about booking flights, inquiries about our services, or
          feedback on your travel experience? Reach out to us! Our team at
          Airline is here to assist you.
        </p>
        <div className={c.contact}>
          <div className={c.contactInfo}>
            <FaPhoneAlt />
            <span>0(800) 890-90-609</span>
          </div>
          <div className={c.contactInfo}>
            <MdEmail />
            <span>info@airline.com</span>
          </div>
          <div className={c.contactInfo}>
            <MdLocationOn />
            <span>1337 Street, Kampala, Uganda</span>
          </div>
        </div>
        <div className={c.icons}>
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
          <FaLinkedin />
        </div>
      </div>
      <div className={c.openingHours}>
        <h1>Opening Hours</h1>
        <p>
          Our team at AirLine is available to assist. Our operating hours are:
        </p>
        <div className={c.week}>
          {hours.map((hour, i) => (
            <div className={c.days} key={i}>
              <p>{Object.keys(hour)}</p>
              <span>{Object.values(hour)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={c.refund}>
        <h1>Refunds and Compensation</h1>
        <p>Refund Requests:</p>
        <span>
          If your flight has been canceled or if you're eligible for a refund
          due to other circumstances, you can submit a refund request through
          our online form or by contacting our customer service team. Please
          ensure you have your booking reference or ticket number handy for
          faster processing.
        </span>
        <p>Flight Compensation:</p>
        <span>
          In the event of a flight delay, cancellation, or denied boarding
          (involuntary denied boarding), you may be entitled to compensation
          under our policies and relevant regulations. Our customer service
          representatives are available to assist you in understanding your
          rights and initiating compensation claims where applicable.
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
