import FurnitureGallery from "../components/furnitureGallery";
import HeaderBackground from "../components/headerBackground";

export default function About() {
  return (
    <>
      <HeaderBackground
        bannerImage={
          "https://www.weylandts.co.za/media/catalog/category/Paper_Lights_Collections_Landing_Page_Desktop__1400x810.jpg"
        }
        className="mb-5"
      />

      <div className="flex flex-col space-y-20 p-20 mt-64">
        <h1 className="text-white text-md md:text-4xl font-light flex items-center justify-center text-center mb-40">
          About
        </h1>

        <div className="text-center">
          <div className="text-black font-light mt-20 text-2xl ">
            We are passionate about modern Interior & Exterior Design.
          </div>
          <div className="mt-20 font-extralight">
            Sedisego is an Interior Design company, directed by Sylvia Pitsi,
            that excels in crafting luxury and meticulously curated design. What
            we love about design concepts is the seamless blend of cleanliness
            and effortless style, alongside a sophisticated mix of materials
            that cultivate a serene living space. Each aesthetic we create
            focuses on simplicity, soft hues, natural materials, and ultimate
            comfort. Our approach is characterized by a harmonious balance,
            where minimalism meets elegance, resulting in timeless interiors
            that offer both beauty and functionality. We take pride in
            transforming spaces into havens of tranquility and style, ensuring
            that every detail is thoughtfully considered and executed to
            perfection.
          </div>
          <div className="mt-20 ">
            <FurnitureGallery />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-8 text-black mt-20 ">
          {/* <div>
            <img
              className=" max-w-xl object-cover relative duration-700 ease-in-out hover:scale-105"
              src="https://res.cloudinary.com/ddbbsotsg/image/upload/v1654534011/sedisego/gallery_4_xubwko.png"
              alt=""
            />
          </div> */}
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h1 className=" font-extralight text-4xl md:text-4xl  flex items-center justify-center text-center ">
              Our mission is to bring simplicity to modern interior design
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
