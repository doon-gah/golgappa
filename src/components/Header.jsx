import { useState, useEffect } from "react";
import mainLogo from "../assets/images/logo.png";
import titledLogo from "../assets/images/titled-logo-removed-bg.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(15);
  const [scrollBarHeight, setScrollBarHeight] = useState(15);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);

    if (!navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleLinkClick = (e) => {
    if (e.target.tagName === "A") {
      toggleNavbar();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrolled = (scrollTop / windowHeight) * 100 + 20;
      setScrollPercentage(Math.max(15, scrolled));
      setScrollBarHeight(Math.max(15, scrolled));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className={`navigation ${navbarOpen ? "active" : ""}`}>
        <div className="titled-logo">
          <img src={titledLogo} alt="golgappa factory titled logo" />
        </div>

        <ul onClick={handleLinkClick}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/franchising">Franchising</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="close-navbar" onClick={toggleNavbar}>
          <CloseOutlinedIcon
            style={{ fontSize: "calc(5vw + 1.5vh)", color: "var(--color-eight)" }}
          />
        </div>
      </div>

      <div className="navbar">
        <div></div>

        <div onClick={toggleNavbar}>
          <MenuIcon
            style={{ fontSize: "calc(5vw + 1.5vh)", cursor: "pointer", color: "#fff" }}
          />
        </div>
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-line">
          <div
            className="scroll-bar"
            style={{
              height: `${scrollBarHeight}%`,
              bottom: `${Math.min(70, (100 - scrollPercentage) / 2)}%`,
            }}
          ></div>
        </div>
        <p>Scroll</p>
      </div>

      <div className="logo-title-wrapper">
        <div className="logo">
          <img src={mainLogo} alt="golgappa factory main logo" />
        </div>

        <div className="header-text-wrapper">
          <div className="titled-logo">
            <img src={titledLogo} alt="golgappa factory titled logo" />
          </div>
          <Fade direction="up">
            <p className="header-text">
              WE MANUFACTURE GOLGAPPE & OTHER STREET FOOD PRODUCTS AND ARE
              ENGAGED IN STREET FOOD FRANCHISING WITH GOLGAPPA EXPRESS. GOLGAPPA
              FACTORY HAS BUILT STRONG REPUTATION THROUGH QUALITY NOVELTY FOODS
              AND UNMATCHED SERVICE.
            </p>
          </Fade>
        </div>
      </div>
    </header>
  );
}

export default Header;
