export default function HeaderBackground() {
  return (
    <div
      className=" bg-center bg-no-repeat h-3/4 w-full absolute top-0 -z-10"
      style={{
        backgroundImage:
          " linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.weylandts.co.za/media/cms/header/Homepage_Mobile_Banner__750x784_3_.jpg')",
      }}
    ></div>
  );
}
