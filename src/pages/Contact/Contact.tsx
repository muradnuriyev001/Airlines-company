import usePageTitle from "../../hooks/usePageTitle";
import ContactBanner from "./ContactBanner/ContactBanner";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = () => {
  usePageTitle("AirLine Jet | Contact")
  return (
    <div>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
