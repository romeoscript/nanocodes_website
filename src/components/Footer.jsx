import React from "react";
import logo from "../images/Nanocodes Logo 1.png";
import { BsFillTelephoneFill,BsWhatsapp,BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';


const Footer = () => {
  return (
    <>
      <section className="grid bg-[#02072f] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2%] p-[1rem] text-white">
        <aside>
          <img src={logo} alt="" />
          <ul>
            <li>About us</li>
            <li>products</li>
            <li>Courses</li>
            <li>Nanotech</li>
            <li>Contact us</li>
            <li>FAQs</li>
          </ul>
        </aside>
        <aside>
          <p className="flex items-center mb-4"> <BsFillTelephoneFill />+2347012345678</p>
          <p className="flex items-center mb-4"> <BsWhatsapp />+2347012345678</p>
          <p className="flex items-center mb-4"> <HiLocationMarker/> Opp. St. Theresa Cathederal, Nsukka, Enugu Rd. Enugu state.</p>
        </aside>
        <aside className="text-center">
          <p className="text-2xl font-bold">Subscribe to our newsletter</p>
          <div className="my-3  rounded-lg border-2 bg-white">
            <input type="text" className="w-[70%] h-[40px] bg-opacity-10 backdrop-blur-17 outline-none text-black px-[0.5rem]"  />
            <button className="w-[30%] bg-[#247BD6] h-[40px] font-bold rounded-lg">Subscribe</button>
          </div>
          <p>
            Get the latest tech news and job opportunities by subscribing to our
            news letter
          </p>
          <p className="flex items-center justify-center mt-[1rem] font-bold"><BsFacebook className="mx-[0.5rem]"/> <BsTwitter className="mx-[0.5rem]"/> <BsInstagram className="mx-[0.5rem]"/></p>
        </aside>
      </section>
      <p className="text-center text-white bg-[#02072f]">@Nanocodes Programming 2023</p>
    </>
  );
};

export default Footer;
