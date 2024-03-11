import c from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/", { replace: true });

  return (
    <div className={c.notFound}>
      <p>404 - Page Not Found</p>
      <span>
        We're sorry, but it seems like the flight path you were trying to
        navigate has encountered some turbulence.
      </span>
      <button onClick={goHome}>Back to home</button>
    </div>
  );
};

export default NotFound;
