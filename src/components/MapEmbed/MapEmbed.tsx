const MapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97527.40444193852!2d49.76329738761556!3d40.39473745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dbd743b2999%3A0x400bad0c192c5c0!2sBaku%2C%20Azerbaijan!5e0!3m2!1str!2saz!4v1716129876543!5m2!1str!2saz"
      width="500"
      height="600"
      style={{ border: "2px solid var(--orange-color2)", borderRadius: "15px" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapEmbed;
