import PropTypes from "prop-types";

export default function HeaderBackground({ bannerImage }) {
  return (
    <div className="bg-center bg-no-repeat h-3/4 w-full absolute top-0 -z-10 justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img className="w-full h-full object-cover" src={bannerImage} alt="" />
    </div>
  );
}

HeaderBackground.propTypes = {
  bannerImage: PropTypes.string.isRequired,
};
