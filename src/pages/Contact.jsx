import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import {
  BsFillTelephoneFill,
  BsWhatsapp,
  BsFacebook,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <figure className="mt-[7rem] min-h-[100vh]">
        <h2 className="font-bold text-3xl text-white text-center m-[2rem]">
          Contact us
        </h2>
        <div className=" text-white w-4/5 p-[1rem] m-auto flex justify-around">
          <aside className="basis-[40%]">
            <p className="flex items-center  text-xl mb-6">
              {" "}
              <BsFillTelephoneFill />
              +2347012345678
            </p>
            <p className="flex items-center text-xl  mb-6">
              {" "}
              <BsWhatsapp />
              +2347012345678
            </p>
            <p className="flex items-center text-xl  mb-6">
              {" "}
              <HiLocationMarker /> Opp. St. Theresa Cathederal, Nsukka, Enugu
              Rd. Enugu state.
            </p>
            <p className="flex items-center text-xl  mb-6">
              {" "}
              <FaRegEnvelope /> Support@nanocodes.com
            </p>
            <p className="flex    font-bold text-xl ">
              <BsFacebook className="mx-[0.5rem] text-2xl" />{" "}
              <BsTwitter className="mx-[0.5rem]" />{" "}
              <BsInstagram className="mx-[0.5rem]" />
            </p>
          </aside>
          <aside className="basis-[50%]">
            <ContactForm className="w-full" />
          </aside>
        </div>
      </figure>
    </Layout>
  );
};

export default Contact;
