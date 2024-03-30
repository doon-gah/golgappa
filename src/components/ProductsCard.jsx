import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

function ProductsCard({
  imageSrc,
  imageAlt,
  productName,
  productDetails,
  productPrice,
}) {
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  const [cardWidth, setCardWidth] = useState(85);
  const [cardHeight, setCardHeight] = useState(40);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const { top, bottom } = cardRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const middleOfViewport = windowHeight / 2;
        const middleOfCard = (top + bottom) / 3;

        if (middleOfCard >= 0 && middleOfCard <= middleOfViewport) {
          setCardWidth(50);
          setCardHeight(30);
          setOverlayOpacity(0.7);
        } else {
          setCardWidth(85);
          setCardHeight(40);
          setOverlayOpacity(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleShowMore = () => {
    setShowMoreInfo((prevState) => !prevState);
  };

  return (
    <div
      className={`products-card ${overlayOpacity ? "overlay-product" : ""}`}
      style={{
        width: `${cardWidth}vw`,
        height: `${cardHeight}vw`,
      }}
      ref={cardRef}
    >
      <h3 className='product-name'>
        {productName}
      </h3>

      <div className="image-overlay-wrapper">
        <img src={imageSrc} alt={imageAlt} />
        <div
          style={{
            opacity: `${overlayOpacity}`,
          }}
          className="image-overlay"
        ></div>
      </div>

      <div className="more-info-wrapper" onClick={toggleShowMore}>
        <div className="more-info">
          <AddOutlinedIcon
            style={{
              opacity: `${!showMoreInfo ? "0" : "1"}`,
              position: "absolute",
              transition: "0.5s",
            }}
          />
          <span
            style={{
              opacity: `${!showMoreInfo ? "0" : "1"}`,
              position: "absolute",
              left: "28px",
              top: "15px",
            }}
          >
            MORE INFO
          </span>
          <RemoveIcon
            style={{ opacity: "1", position: "absolute", transition: "0.5s" }}
          />
          <span
            style={{
              opacity: `${showMoreInfo ? "0" : "1"}`,
              position: "absolute",
              left: "28px",
              top: "15px",
            }}
          >
            LESS INFO
          </span>
        </div>
      </div>

      <div
        className={`product-details-wrapper ${showMoreInfo ? "show" : "hide"}`}
      >
        <div className="product-details">
          <div className="product-icon">
            <CreateOutlinedIcon
              style={{ color: "var(--main-yellow-color)", fontSize: "18px" }}
            />
          </div>
          <p>{productDetails}</p>
        </div>

        <div className="product-details">
          <div className="product-icon">
            <AttachMoneyOutlinedIcon
              style={{ color: "var(--main-yellow-color)", fontSize: "18px" }}
            />
          </div>
          <p>{productPrice}</p>
        </div>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  productName: PropTypes.string,
  productDetails: PropTypes.string,
  productPrice: PropTypes.string,
};

export default ProductsCard;
