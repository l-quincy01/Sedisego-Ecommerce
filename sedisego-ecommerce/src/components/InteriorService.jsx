import { Link } from "react-router-dom";

export default function InteriorService() {
  return (
    <div className="flex flex-row items-center justify-center space-x-8 text-black ">
      <div>
        <img
          className=" max-w-xl object-cover relative duration-700 ease-in-out hover:scale-105"
          src="https://res.cloudinary.com/ddbbsotsg/image/upload/v1658654366/sedisego/gallery_image5_bpbxib.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className=" font-extralight text-md md:text-4xl  flex items-center justify-center text-center ">
          Sedisego Interiors
        </h1>
        <div className="font-light px-5">
          Sedisego is an Interior Design company, directed by Sylvia Pitsi, that
          puts together luxury and meticulous design. What we love about design
          concepts is the cleanliness effortless style and a mix of materials
          that create a serene living space. Each aesthetic focuses on
          simplicity, soft hues, natural materials and comfort.
        </div>
        <Link to={"/About"} className="underline">
          Learn More
        </Link>
      </div>
    </div>
  );
}
