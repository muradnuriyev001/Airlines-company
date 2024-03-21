import Video from "../../../components/Video/Video";
import c from "./HomeVideo.module.scss";

const HomeVideo = () => {
  return (
    <div className={c.video}>
      <h1>Experience Luxury in Motion</h1>
      <p>Intro Video</p>
      <Video />
    </div>
  );
};

export default HomeVideo;
