import ProductImg from "@/assets/home-images/JAR.png";
import appleImg from "@/assets/home-images/apples.png";
import tripleFruitImg from "@/assets/home-images/triple-fruit.png";
import grapeImg from "@/assets/home-images/grape.png";

const DATABASE = {
  fruit: [
    {
      id: "1",
      category: "fruit",
      title: "Apple Fruit",
      subTitle: "Original Taste",
      price: "10.00",
      currency: "$",
      src: appleImg,
      alt: "apple image",
    },
    {
      id: "2",
      category: "fruit",
      title: "Triple Fruit",
      subTitle: "Original Taste",
      price: "10.00",
      currency: "$",
      src: tripleFruitImg,
      alt: "triple fruit image",
    },
    {
      id: "3",
      category: "fruit",
      title: "Grape Fruit",
      subTitle: "Original Taste",
      price: "10.00",
      currency: "$",
      src: grapeImg,
      alt: "grape image",
    },
  ],
  product: [
    {
      id: "1",
      category: "product",
      title: "Lotus Jar",
      subTitle: "Green Fruit Jelly",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
      price: "4.0",
      currency: "$",
      src: ProductImg,
      alt: "product image",
    },
    {
      id: "2",
      category: "product",
      title: "Lotus Juice",
      subTitle: "Banana Juice",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
      price: "5.5",
      currency: "$",
      src: ProductImg,
      alt: "product image",
    },
  ],
};

export default DATABASE;
export type IBasketProduct = (typeof DATABASE.product)[0];
export type IFruitProduct = (typeof DATABASE.fruit)[0];
