import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";

function AboutUs() {
  useEffect(() => {
    document.getElementById("about").scrollIntoView();
  }, []);

  return (
    <section id="about">
      <div className="about-us-texts">
        <Slide direction="up">
          <h5>About Us</h5>
        </Slide>

        <Slide>
          <div className="about-us-paragraph-wrapper">
            <p>
              Apna Foods Inc. began its family-run manufacturing facility in
              2016 when we noticed the lack of Indian street food cuisines in
              North America. We used our previous experience of the restaurant
              business from Mumbai to bring novelty foods that have seen
              tremendous popularity in India, to North America.
            </p>
            <p>
              GolGappa Factory is a combined manufacturing, retailing and
              distributing facility of novelty products in lower mainland B.C.
              With the support of the South-Asian community, we aim to provide
              mouth-watering products and spread the vastly different styles of
              Indian cuisine.
            </p>
            <p>
              We are currently exporting to the United States and Canada and we
              want to consistently deliver quality food products for all to
              enjoy. We take immense pride in presenting you with new types of
              street foods in an organized format. We hope to continue
              introducing new Indian dishes with GolGappa Express and are very
              thankful for your support!
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default AboutUs;
