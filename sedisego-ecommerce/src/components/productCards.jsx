import { CiHeart } from "react-icons/ci";

export default function ProductCards() {
  return (
    <div className="grid grid-cols-4 gap-y-20 ">
      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105 cursor-pointer"
          src="https://www.weylandts.co.za/media/wysiwyg/5._Carpets__708x708_1.jpg?auto=webp&format=pjpg&quality=85"
          alt=""
        />

        <div className="flex flex-row items-end justify-center ">
          <div className=" mt-3 flex flex-col items-center justify-center text-center space-y-3">
            <div className="font-light text-lg">Product Name</div>
            <div className="font-light text-gray-500 text-sm">R 625.00</div>
          </div>
          <CiHeart size={24} />
        </div>
      </div>
    </div>
  );
}
