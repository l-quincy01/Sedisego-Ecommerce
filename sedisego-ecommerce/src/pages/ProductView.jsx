import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import Carousel from "../components/carousel";
import { useState } from "react";

export default function ProductView() {
  const [itemCount, setItemCount] = useState(1);

  const increaseItemCount = () => {
    if (itemCount < 5) {
      setItemCount(itemCount + 1);
    }
  };
  const decreaseItemCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  const productImages = [
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/7/e/7e0a792984b8c2d690a5828f0fa3cdc184de564f_I00005665_1_1.jpg?auto=webp&format=pjpg&width=1600&height=2000&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/c/c/cc5ae3c6e36ca857146dc918d23740937a04cd45_I00005665_03_1_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/d/b/dbdaf9fe4958f0d85cf86665c3517ea062dd1ce8_I00005665_01_1_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/c/3/c3da9e1bc197500cc887294a1ccaa5505f22f9e7_I00005665_SIDE_1_1.jpg?auto=webp&format=pjpg&width=1600&height=2000&fit=cover",
  ];
  return (
    <>
      <div className="flex flex-col space-y-20 p-20 ">
        <div className="flex flex-row items-start justify-center  space-x-10 mt-20 ">
          {/* Product Images */}
          <div className="space-y-5">
            <Carousel slides={productImages} />
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-start justify-center space-y-5">
            <h1 className="text-3xl font-light ">
              {" "}
              Gaucho Bar Stool | Black Leather
            </h1>

            <div className="flex flex-row space-x-4 items-center justify-center">
              <div
                onClick={decreaseItemCount}
                className="border border-black p-2 cursor-pointer"
              >
                <FiMinus />
              </div>
              <div> {itemCount}</div>

              <div
                onClick={increaseItemCount}
                className="border border-black p-2 cursor-pointer"
              >
                <FaPlus />
              </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-5">
              <button className="p-5 bg-black hover:bg-gray-700 text-white text-md font-light  rounded-md">
                Add to cart
              </button>
              <button className="p-5 border rounded-md border-black">
                <CiHeart size={24} />
              </button>
            </div>

            <h4 className="text-md font-extralight">R5950.00</h4>
            <h2 className="text-xl font-light">Description</h2>

            <div className="font-light">
              Named for its equestrian-inspired detailing, the Gaucho range is a
              masterclass in contemporary design. The bar stool is crafted from
              a statement-making combination of brown leather and steel,
              handmade in India.
            </div>
            <div className="border-y-2 border-black py-5 w-full flex flex-row justify-between items-center pr-2">
              <div>Dimensions</div>
              <FaPlus />
            </div>
            <div className="border-b-2 border-black pb-5 w-full flex flex-row justify-between items-center pr-2">
              <div> Care Instructions</div>
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
