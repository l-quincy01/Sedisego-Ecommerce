import { useState } from "react";
import PropTypes from "prop-types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Carousel({ slides }) {
  Carousel.propTypes = {
    slides: PropTypes.array.isRequired,
  };

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative w-[300px]">
      <div
        className={`flex transition ease-out duration-40 `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => {
          return <img key={index} src={s} className="" />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-black px-10 text-3xl">
        <div
          className="cursor-pointer bg-gray-200 rounded-xl"
          onClick={previousSlide}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div
          className="cursor-pointer  bg-gray-200 rounded-xl"
          onClick={nextSlide}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}
