import HeaderBackground from "../components/headerBackground";
import ProductCards from "../components/productCards";

export default function Sale() {
  return (
    <>
      <HeaderBackground
        bannerImage={
          "https://www.weylandts.co.za/media/wysiwyg/2_3.png?auto=webp&format=png&quality=85"
        }
        className="mb-5"
      />
      <div className="flex flex-col space-y-20 p-20 mt-64">
        <h1 className="text-white text-md md:text-4xl font-light flex items-center justify-center text-center mb-40"></h1>
        <div className="">
          <div className="text-black font-light  mt-20 text-2xl uppercase ">
            Shop Sale
          </div>
          <div className="mt-20 ">
            <ProductCards />
          </div>
        </div>
      </div>
    </>
  );
}
