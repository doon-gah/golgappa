import Slider from "react-slick";
import imageOne from "../assets/images/franchising-image-1.jpg";
import imageTwo from "../assets/images/franchising-image-2.jpg";
import imageThree from "../assets/images/franchising-image-3.jpg";
import imageFour from "../assets/images/franchising-image-4.jpg";
import imageFive from "../assets/images/franchising-image-5.jpg";
import imageSix from "../assets/images/franchising-image-6.jpg";
import imageSeven from "../assets/images/franchising-image-7.jpg";
import imageEight from "../assets/images/franchising-image-8.jpg";
import imageNine from "../assets/images/franchising-image-9.jpg";
import imageTen from "../assets/images/franchising-image-10.jpg";
import imageEleven from "../assets/images/franchising-image-11.jpg";
import imageTwelve from "../assets/images/franchising-image-12.jpg";

export default function SimpleSlider() {
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
    imageNine,
    imageTen,
    imageEleven,
    imageTwelve,
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    vertical: true,
    verticalSwiping: false,
  };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          {/* <h3 className="slider-food-name">food name here</h3> */}
          <div key={index} className="slider-image">
            <img src={image} alt={`franchising-${index}`} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
