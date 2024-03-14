import c from "./SubscribeNews.module.scss";
import { BiMailSend } from "react-icons/bi";

const SubscribeNews = () => {
  return (
    <div className={c.subscribe}>
      <div className={c.text}>
        <h4>Subscribe To Our Newsletter</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
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
