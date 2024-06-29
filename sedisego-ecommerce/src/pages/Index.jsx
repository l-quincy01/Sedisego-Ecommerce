import { Link } from "react-router-dom";
import FurnitureGallery from "../components/furnitureGallery";
import HeaderBackground from "../components/headerBackground";
import ProductCards from "../components/productCards";
import InteriorService from "../components/InteriorService";

export default function Index() {
  //gallery grid images array
  const images = [
    {
      src: "https://www.weylandts.co.za/media/wysiwyg/Homepage_Category_Blocks_-_Seating_1475x1475_.jpg?auto=webp&format=pjpg&quality=85",
      text: "Seating",
    },
    {
      src: "https://www.weylandts.co.za/media/wysiwyg/Homepage_Category_Blocks_-_Bedroom_1475x1475_.jpg?auto=webp&format=pjpg&quality=85",
      text: "Bedroom",
    },
    {
      src: "https://www.weylandts.co.za/media/wysiwyg/Homepage_Category_Blocks_-_Kitchen_1475x1475_.jpg?auto=webp&format=pjpg&quality=85",
      text: "Kitchen",
    },
    {
      src: "https://www.weylandts.co.za/media/wysiwyg/4._Art_Mirrors__708x708_2_.jpg?auto=webp&format=pjpg&quality=85",
      text: "Art & Mirrors",
    },
    {
      src: "https://www.weylandts.co.za/media/wysiwyg/5._Carpets__708x708_1.jpg?auto=webp&format=pjpg&quality=85",
      text: "Carpets",
    },
  ];
  return (
    <>
      <HeaderBackground
        bannerImage={
          "https://www.weylandts.co.za/media/cms/header/Homepage_Mobile_Banner__750x784_3_.jpg"
        }
        className="mb-5"
      />

      <div className="flex flex-col space-y-20 p-20 mt-64">
        <h1 className="text-white text-md md:text-4xl font-light flex items-center justify-center text-center mb-40">
          Our Handcrafted Selection
        </h1>

        <div className="">
          <div className="text-black font-light mt-20 text-2xl ">
            Shop by category
          </div>
          <div className="mt-20 ">
            <FurnitureGallery images={images} />
          </div>
          <div className="mt-20  ">
            <div className="flex flex-row items-center justify-between mt-10">
              <div className="text-black font-light  text-2xl">
                New Arrivals
              </div>
              <Link
                to={"/AllProducts"}
                className=" text-sm underline cursor-pointer"
              >
                View All
              </Link>
            </div>
            <div className="mt-20 ">
              <ProductCards />
            </div>
            <div className=" mt-32 ">
              <InteriorService />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
