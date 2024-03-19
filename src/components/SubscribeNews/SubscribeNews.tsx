import c from "./SubscribeNews.module.scss";
import { BiMailSend } from "react-icons/bi";

const SubscribeNews = () => {
  return (
    <div className={c.subscribe}>
      <div className={c.text}>
        <h4>Subscribe To Our Newsletter</h4>
        <p>
          By subscribing to the newsletter, users can stay informed and
          up-to-date with the latest news, updates, and offers from your
          organization.
        </p>
      </div>
      <div className={c.input}>
        <input type="text" placeholder="Enter your message" />
        <button>
          <BiMailSend />
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeNews;
