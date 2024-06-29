export default function Contact() {
  return (
    <div className="flex flex-col space-y-10  justify-center px-52 py-28 text-black">
      <h1 className="text-4xl font-bold"> Talk to us </h1>

      <div className="font-light flex flex-row space-x-4 w-full">
        <div className="flex flex-col justify-start  w-full">
          Name <input id="name" type="text" className=" border-2  p-5" />
        </div>

        <div className="flex flex-col justify-start  w-full">
          E-mail
          <input id="email" type="email" className="border-2  p-5" />
        </div>
      </div>

      <div className="font-light items-center flex flex-row space-x-4 w-full">
        <div className="flex flex-col justify-start  w-full">
          Your Contact Number
          <input id="contactNumber" type="text" className="border-2  p-5" />
        </div>
        <div className="flex flex-col justify-start  w-full">
          Subject
          <select className="border-2 p-5 w-full" name="">
            <option value="Orders">Orders</option>
            <option value="Returns">Returns</option>
            <option value="Orders">Orders</option>
            <option value="Returns">Returns</option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-start">
          Details
          <textarea
            className=" border-2  p-10"
            name="details"
            id="details"
          ></textarea>
        </div>
      </div>
      <button className="bg-black p-5 rounded-lg text-white w-1/2">Send</button>
    </div>
  );
}
