import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-black text-white p-5">
      <div className="flex flex-row p-10  justify-between items-center">
        <div className="flex flex-col">
          <div>Call us today:</div>
          <div>+27 82 90 777 05</div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-row space-x-10">
            <ul>
              <li className=" font-semibold">The Company</li>
              <li>
                <ul>
                  <li className="cursor-pointer">About Us</li>
                  <li className="cursor-pointer">Careers</li>
                  <li className="cursor-pointer">Contact</li>
                  <li className="cursor-pointer">Registration</li>
                </ul>
              </li>
            </ul>

            <ul>
              <li className=" font-semibold">Help Cemter</li>
              <li>
                <ul>
                  <li className="cursor-pointer">Privacy Policy</li>
                  <li className="cursor-pointer">FAQ</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-row space-x-4">
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <MdEmail className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white flex flex-row justify-between text-white p-10 ">
        <div>© 2024 Sedisego Pty Ltd. All rights reserved</div>
        <div>Pretoria, South Africa</div>
      </div>
    </div>
  );
}
