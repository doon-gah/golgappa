import Slider from "./Slider";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";

function Franchising() {
  useEffect(() => {
    document.getElementById("franchising").scrollIntoView();
  }, []);

  return (
    <section id="franchising" className="franchising">
      <Slide>
        <h5>Golgappa Express </h5>
      </Slide>

      <div className="slider-wrapper">
        <Slider />
      </div>

      <Slide>
        <div className="franchising-paragraphs-wrapper">
          <p>
            Golgappa Express is growing in North America, Innovative business
            model delivers high profit margins, and as a franchise partner you
            can generate good return on investment.
          </p>
          <p>
            Indian street food is as diverse as Indian cuisine and GolGappa
            Express aims to bring you food straight from the streets of Mumbai
          </p>
          <p>
            All of our meals are carefully prepared, and made fresh daily on the
            premises using only quality ingredients. We pride ourselves by
            offering great food at reasonable prices.
          </p>
        </div>
      </Slide>
    </section>
  );
}

export default Franchising;
