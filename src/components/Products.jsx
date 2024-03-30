import imageOne from "../assets/images/products-middle-img.jpg";
import imageSecond from "../assets/images/products-right-img.jpg";
import imageThird from "../assets/images/products-left-img.jpg";
import ProductsCard from "./ProductsCard";
import { Slide } from "react-awesome-reveal";

function Products() {
  const imagesMap = [
    {
      imageSrc: imageOne,
      imageAlt: "Golgappa Set",
      productName: "Golgappa Set",
      productDetails:
        "Freshly made ready-to-eat GolGappe. Comes with approx. 80 pcs, one litre water of your choice and aloo channa.",
      productPrice: "$24.99 for set",
    },
    {
      imageSrc: imageSecond,
      imageAlt: "Golgappa 500",
      productName: "Golgappa 250/500",
      productDetails:
        "Eat as many as you can & store for later! Or throw a GolGappe party to share with your family and friends!      ",
      productPrice:
        "$34.99 Box for approx. 250 pcs(per weight), $64.99 Box for approx. 500 pcs(per weight)",
    },
    {
      imageSrc: imageThird,
      imageAlt: "Golgappa 250",
      productName: "Golgappa Water (Pouch)",
      productDetails:
        "Flavours: Jeera, Hajmola, Pudina, Hing, Imli, Spicy, Khatta Mitha and Sweet ($5.99 each)",
      productPrice:
        "$6 per litre (Depending on availability & while supplies last)",
    },
  ];
  return (
    <section className="products-section" id="products">
      <div className="products-card-wrapper">
        {imagesMap.map((image, index) => {
          return (
            <ProductsCard
              key={index}
              imageSrc={image.imageSrc}
              imageAlt={image.imageAlt}
              productName={image.productName}
              productDetails={image.productDetails}
              productPrice={image.productPrice}
            />
          );
        })}
      </div>

      <div className="additional-products">
        <Slide>
          <h4>Additional Products</h4>
        </Slide>
        <ul>
          <li>Plain Papri</li>
          <li>Spicy Papri</li>
          <li>Imli Chutney</li>
          <li>Raj Kachori</li>
          <li>Chocolate Golgappa</li>
        </ul>
      </div>
    </section>
  );
}

export default Products;
