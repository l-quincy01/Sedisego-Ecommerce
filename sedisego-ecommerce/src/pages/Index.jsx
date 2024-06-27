import FurnitureGallery from "../components/furnitureGallery";
import ProductCards from "../components/productCards";

export default function Index() {
  return (
    <div className="flex flex-col space-y-20 ">
      <h1 className="text-white text-md md:text-4xl font-light flex items-center justify-center text-center mb-40">
        Our Handcrafted Selection
      </h1>

      <div className="">
        <div className="text-black font-light mt-20 text-2xl ">
          Shop by category
        </div>
        <div className="mt-20 ">
          <FurnitureGallery />
        </div>
        <div className="mt-20  ">
          <div className="flex flex-row items-center justify-between mt-10">
            <div className="text-black font-light  text-2xl">New Arrivals</div>
            <div className=" text-sm underline cursor-pointer">View All</div>
          </div>
          <div className="mt-20 ">
            <ProductCards />
          </div>
        </div>
      </div>
    </div>
  );
}
