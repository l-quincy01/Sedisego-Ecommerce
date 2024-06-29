import HeaderBackground from "../components/headerBackground";
import ProductCards from "../components/productCards";

export default function AllProducts() {
  return (
    <>
      <HeaderBackground
        bannerImage={
          "https://www.weylandts.co.za/media/catalog/category/Outdoor_Homepage_Banner_Desktop_3200x1400_.jpg"
        }
        className="mb-5"
      />
      <div className="flex flex-col space-y-20 p-20 mt-20">
        <div className="text-black font-light mt-80 text-4xl ">
          Shop by category
        </div>
        <div className="mt-20 ">
          <ProductCards />
        </div>
      </div>
    </>
  );
}
