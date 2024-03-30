import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import titledLogo from "../assets/images/titled-logo-removed-bg.png";
import GoogleMap from "./GoogleMap";
import { Slide } from "react-awesome-reveal";

function Contact() {
  return (
    <>
      <footer className="contact" id="contact">
        <Slide>
          <div className="titled-logo">
            <img src={titledLogo} alt="golgappa factory titled logo" />
          </div>
        </Slide>

        <div className="contact-details-wrapper">
          <div className="contact-links">
            <a
              href="mailto:golgappafactory@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon-wrapper">
                <EmailOutlinedIcon
                  style={{
                    fontSize: "28px",
                    color: "var(--main-yellow-color)",
                  }}
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/golgappa_express"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon-wrapper">
                <InstagramIcon
                  style={{
                    fontSize: "26px",
                    color: "var(--main-yellow-color)",
                  }}
                />
              </div>
            </a>
          </div>
          <div>
            <h4>Opening hours</h4>
            <Slide direction="up">
              <p> Monday - Saturday: 9AM - 6PM</p>
              <p> Sunday: Closed</p>
            </Slide>
          </div>

          <div>
            <h4>Contact Us</h4>
            <Slide direction="up">
              <p>
                <span>address:</span> Unit #20 12468 82nd Ave Surrey, B.C. V3W
                3E9
              </p>
              <p>
                <span>phone:</span> (604) 800-3064
              </p>
              <p>
                <span>email:</span> golgappafactory@gmail.com
              </p>
            </Slide>
          </div>
        </div>
      </footer>
      <GoogleMap />

      <Slide direction="up">
        <p className="copyright">
          &copy; 2024 GolGappa Factory. All rights reserved
        </p>
      </Slide>
    </>
  );
}

export default Contact;
