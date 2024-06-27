export default function FurnitureGallery() {
  return (
    <div className="rounded-sm overflow-hidden grid gap-4   grid-cols-[1fr_1fr] ">
      <div>
        <img
          className=" rounded-bl-sm"
          src="https://www.weylandts.co.za/media/wysiwyg/Homepage_Category_Blocks_-_Seating_1475x1475_.jpg?auto=webp&format=pjpg&quality=85"
          alt=""
        />
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-sm ">
        {/*Col 1 */}
        <div className="rounded-sm ">
          <img
            src="https://www.weylandts.co.za/media/wysiwyg/Homepage_Category_Blocks_-_Bedroom_1475x1475_.jpg?auto=webp&format=pjpg&quality=85"
            alt=""
          />
          <img
            className=" object-cover relative top-4"
            src="https://www.weylandts.co.za/media/wysiwyg/5._Carpets__708x708_1.jpg?auto=webp&format=pjpg&quality=85"
            alt=""
          />
        </div>

        {/*Col 2 */}
        <div className="">
          <img
            className=" object-cover relative "
            src="https://www.weylandts.co.za/media/wysiwyg/Homepage_Category_Blocks_-_Bedroom_1475x1475_.jpg?auto=webp&format=pjpg&quality=85"
            alt=""
          />
          <img
            className=" object-cover relative top-4 rounded-br-sm  "
            src="https://www.weylandts.co.za/media/wysiwyg/5._Carpets__708x708_1.jpg?auto=webp&format=pjpg&quality=85"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
