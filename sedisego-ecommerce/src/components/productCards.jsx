import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function ProductCards() {
  return (
    <div className="grid grid-cols-4 gap-y-20 ">
      <Link
        to={"/product"}
        className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center"
      >
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
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
      </Link>

      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
          src="https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/4/1/4123fcabae21db38f19c7e5f3724e6c06fc986f8_I00008954_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
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
      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
          src="https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/f/7/f798d674738993c5bc9f917c8f359a874d07bca7_SOFALL8262__1__1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
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
      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
          src="https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/e/7/e78d7c87a9f6a278310111b19d060d33fd44858d_I00000088_1_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
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
      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
          src="https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/0/4/0433bb00d9f97d1ad6587e2ca1e1e630f66ca30a_STEELFURN0115_1_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
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
      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
          src="https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/8/4/84bf86bfb7f4f81178a4d6a846f7c4fb447db202_I00006743_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
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
      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
          src="https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/9/1/91cc1af932ec28e30c74e0043f4a35927ceff438_CONTFURN9210__1__1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
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
      <div className=" border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col  items-center justify-center">
        <img
          className=" object-cover relative  aspect-rectangle duration-700 ease-in-out hover:scale-105"
          src="https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/a/d/ad62a4ad737dac6c626ac084759b3ef7e7df9185_I00005627_1_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
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
