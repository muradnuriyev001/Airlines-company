import c from "./AboutInfo.module.scss";

const crewInfo = [
  { number: 12, name: "Professional Pilots" },
  { number: 26, name: "Jet Airplanes" },
  { number: 265, name: "World Airports" },
  { number: 185, name: "Directions" },
];

const AboutInfo = () => {
  return (
    <div className={c.info}>
      {crewInfo.map((crew, i) => (
        <div key={i} className={c.crew}>
          <p>{crew.number}</p>
          <p>{crew.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutInfo;
