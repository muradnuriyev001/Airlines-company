import MapEmbed from "../../../components/MapEmbed/MapEmbed";
import c from "./ContactForm.module.scss";
import { RiMailSendLine } from "react-icons/ri";

const ContactForm = () => {
  return (
    <div className={c.contact}>
      <div className={c.map}>
        <MapEmbed />
      </div>
      <div className={c.form}>
        <p>Get in touch</p>
        <p>
          Reach out to us effortlessly! We value every message and look forward
          to hearing from you.
        </p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Subject" />
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
          ></textarea>
          <button>
            <RiMailSendLine />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
