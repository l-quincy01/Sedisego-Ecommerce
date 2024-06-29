import { Link } from "react-router-dom";

export default function FurnitureGallery({ images }) {
  return (
    <div className="rounded-sm overflow-hidden grid gap-4 grid-cols-[1fr_1fr]">
      <div>
        <Link to="/AllProducts">
          <div className="relative">
            <img
              className="rounded-bl-sm duration-700 ease-in-out hover:scale-105 cursor-pointer"
              src={images[0].src}
              alt=""
            />
            <div className="absolute bottom-4 left-4 text-white text-lg  bg-opacity-50 px-2 py-1 rounded">
              {images[0].text}
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-sm">
        {/*Col 1 */}
        <div className="rounded-sm">
          <Link to="/AllProducts">
            <div className="relative">
              <img
                className="duration-700 ease-in-out hover:scale-105 cursor-pointer"
                src={images[1].src}
                alt=""
              />
              <div className="absolute bottom-4 left-4 text-white text-lg  bg-opacity-50 px-2 py-1 rounded">
                {images[1].text}
              </div>
            </div>
          </Link>
          <Link to="/AllProducts">
            <div className="relative">
              <img
                className="object-cover relative top-4 duration-700 ease-in-out hover:scale-105 cursor-pointer"
                src={images[2].src}
                alt=""
              />
              <div className="absolute bottom-4 left-4 text-white text-lg  bg-opacity-50 px-2 py-1 rounded">
                {images[2].text}
              </div>
            </div>
          </Link>
        </div>

        {/*Col 2 */}
        <div>
          <Link to="/AllProducts">
            <div className="relative">
              <img
                className="object-cover relative duration-700 ease-in-out hover:scale-105 cursor-pointer"
                src={images[3].src}
                alt=""
              />
              <div className="absolute bottom-4 left-4 text-white text-lg  bg-opacity-50 px-2 py-1 rounded">
                {images[3].text}
              </div>
            </div>
          </Link>
          <Link to="/AllProducts">
            <div className="relative">
              <img
                className="object-cover relative top-4 rounded-br-sm duration-700 ease-in-out hover:scale-105 cursor-pointer"
                src={images[4].src}
                alt=""
              />
              <div className="absolute bottom-4 left-4 text-white text-lg  bg-opacity-50 px-2 py-1 rounded">
                {images[4].text}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
