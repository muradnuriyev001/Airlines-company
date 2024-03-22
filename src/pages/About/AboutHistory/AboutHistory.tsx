import AboutHistoryInfo from "./AboutHistoryInfo/AboutHistoryInfo";

//Component data

import oldPlane from "../../../assets/img/About/Planes/oldPlane.png";
import newPlane from "../../../assets/img/About/Planes/newPlane.jpg";

const oldPlaneText =
  "Welcome to a legacy of luxury that has shaped the skies for nearly acentury. Since our inception in 1936, we have been pioneers inaviation, revolutionizing the way the world travels. With a richhistory steeped in innovation and elegance, we continue to set thestandard for unparalleled luxury jet travel. Step aboard our time-honored fleet and embark on a journey throughaviation history. From the iconic aircraft that graced the skies indecades past to our modern-day marvels, each of our jets tells a storyof ingenuity and sophistication. As you settle into our meticulouslyrestored cabins, you'll be transported to a bygone era of glamour andrefinement, where every detail is crafted with care to ensure anunforgettable experience. Indulge in the timeless elegance of ouronboard amenities, where the golden age of travel meets modern luxury.Savor gourmet cuisine prepared by our world-class chefs, accompaniedby the finest wines and spirits. Relax in plush, sumptuously appointedseats as our attentive cabin crew attends to your every need with thegrace and hospitality that have defined our brand for generations.Experience the thrill of flying with a company that has shaped thecourse of aviation history. From introducing groundbreaking aircraftdesigns to pioneering new routes and destinations, we have always beenat the forefront of innovation, pushing the boundaries of what'spossible in the sky. Welcome aboard a journey through history, wherethe spirit of adventure and the pursuit of elegance converge in theskies.";
const newPlaneText =
  "In the annals of aviation, few companies have left a mark as indelible          as ours. From our humble beginnings in 1936 to our position as a          global leader in luxury jet travel today, our journey has been one of          constant evolution and innovation. In the modern era, we remain committed to upholding the values that have defined us for nearly a          century: excellence, luxury, and a relentless pursuit of perfection.          Our fleet has grown to encompass the latest in state-of-the-art          aircraft, equipped with cutting-edge technology and amenities designed          to meet the needs of the modern traveler. But our commitment to          innovation extends beyond our aircraft. We have embraced          sustainability as a core principle, investing in eco-friendly          initiatives and pioneering new ways to reduce our environmental          impact. From alternative fuels to carbon offset programs, we are          dedicated to preserving the planet for future generations while          continuing to deliver unparalleled luxury and comfort to our          passengers. As we look to the future, we remain guided by the same          spirit of adventure and exploration that inspired our founders more          than eight decades ago. With a focus on innovation, sustainability,          and unmatched service, we are poised to continue shaping the future of          aviation for generations to come. Welcome aboard as we embark on the next chapter of our extraordinary journey.";

const AboutHistory = () => {
  return (
    <div>
      <AboutHistoryInfo
        oldPlaneImg={oldPlane}
        newPlaneImg={newPlane}
        oldPlaneText={oldPlaneText}
        newPlaneText={newPlaneText}
      />
    </div>
  );
};

export default AboutHistory;
