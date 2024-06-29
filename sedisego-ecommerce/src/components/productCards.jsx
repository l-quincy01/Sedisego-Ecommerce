import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function ProductCards() {
  const productImages = [
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/0/7/07047922c3503d37c93c168d2e6a5acc8ed9f742_I00005665_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/wysiwyg/5._Carpets__708x708_1.jpg?auto=webp&format=pjpg&quality=85",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/f/7/f798d674738993c5bc9f917c8f359a874d07bca7_SOFALL8262__1__1.jpg?auto=webp&format=pjpg&width=2560&height=3200&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/0/4/0433bb00d9f97d1ad6587e2ca1e1e630f66ca30a_STEELFURN0115_1_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/c/f/cf1b249ba57af78816aaf656be7dced515e12cb3_I00007366_1_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/d/1/d1d063ecd75b0e3584ab8ae95d605996b095f862_I00006166_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/9/1/91cc1af932ec28e30c74e0043f4a35927ceff438_CONTFURN9210__1__1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/0/b/0ba3d701f2293a4c061777a63d2ee79d1e9004f7_I00007388__1__1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/1/0/10ad7bcaba7356d6f123c264d1e9e4f2c81b4039_I00005107_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/e/8/e82fc135df9feeae1ab60d9aac763966eba6dede_I00003274__2__1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/catalog/product/cache/e4162207ee7869f6b80ea9e5afe9bee9/0/7/07047922c3503d37c93c168d2e6a5acc8ed9f742_I00005665_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
    "https://www.weylandts.co.za/media/wysiwyg/5._Carpets__708x708_1.jpg?auto=webp&format=pjpg&quality=85",
  ];
  return (
    <div className="grid grid-cols-4 gap-y-20">
      {productImages.map((product, index) => (
        <Link
          to="/product"
          className="border border-y-0 border-l-0 border-r-1 border-gray-500 px-5 flex flex-col items-center justify-center"
          key={index}
        >
          <img
            className="object-cover relative aspect-rectangle duration-700 ease-in-out hover:scale-105"
            src={product}
            alt=""
          />
          <div className="flex flex-row items-end justify-center">
            <div className="mt-3 flex flex-col items-center justify-center text-center space-y-3">
              <div className="font-extralight text-md">Product Name</div>
              <div className="font-light text-gray-500 text-sm">R 625.00</div>
            </div>
            <CiHeart size={24} />
          </div>
        </Link>
      ))}
    </div>
  );
}
