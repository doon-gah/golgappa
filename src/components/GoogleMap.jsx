import { Slide } from "react-awesome-reveal";

function GoogleMap() {
  return (
    <div className="google-map">
      <Slide direction="down">
        <h5>Find us here</h5>
      </Slide>
      <div className="map-iframe-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.610350367658!2d-122.8773618!3d49.1510221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d964d9439557%3A0x2550e88f4814f3d7!2sGolGappa%20Factory!5e0!3m2!1ska!2sge!4v1709370914363!5m2!1ska!2sge"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.93378035045!2d-122.7512254!3d48.992817599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c1559c2c38a3%3A0xf634f172fd4bc7ee!2zODMwIFBlYWNlIFBvcnRhbCBEciwgQmxhaW5lLCBXQSA5ODIzMCwg4YOQ4YOb4YOU4YOg4YOY4YOZ4YOY4YOhIOGDqOGDlOGDlOGDoOGDl-GDlOGDkeGDo-GDmuGDmCDhg6jhg6Lhg5Dhg6Lhg5Thg5Hhg5g!5e0!3m2!1ska!2sge!4v1709571699583!5m2!1ska!2sge"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMap;
