import nanoImage from "../images/Nanocodes Logo 1.png";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  return (
    <div className="flex justify-around h-[90px] items-center px-[1rem] fixed top-0 w-full z-20">
      <aside className="w-[200px]">
        <img src={nanoImage} alt="" className="w-full" />
      </aside>
      <aside className="flex items-center">
        <ul className="flex items-center mr-3">
          <motion.li
            whileHover={{ originx: 0, scale: 1.3, color: "#f8e112" }}
            className="flex items-center text-white text-[20px] p-[0.5rem] relative"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Courses <BiChevronDown />
            {dropdown && (
              <motion.div
                className="text-[14px] absolute bg-[blue] text-white p-[1rem] left-[-100px] top-[90%] w-[472px] rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
              >
                <ul className="grid grid-cols-3 mb-[1rem] border-b-2">
                  <motion.li>Django</motion.li>
                  <motion.li>Dart</motion.li>
                  <motion.li>web Design</motion.li>
                </ul>
                <ul className="grid grid-cols-3 mb-[1rem] border-b-2">
                  <motion.li>Java</motion.li>
                  <motion.li>React</motion.li>
                  <motion.li>Mobile App development</motion.li>
                </ul>
                <ul className="grid grid-cols-3 mb-[1rem] border-b-2">
                  <motion.li>python </motion.li>
                  <motion.li>Word press</motion.li>
                  <motion.li>Virtual Reality</motion.li>
                </ul>
                <ul className="grid grid-cols-3 mb-[1rem] border-b-2">
                  <motion.li>UI/UX Design </motion.li>
                  <motion.li>Android Studio</motion.li>
                  <motion.li>Artificial Intelligence</motion.li>
                </ul>
                <ul className="grid grid-cols-3 mb-[1rem] border-b-2">
                  <motion.li>Forex </motion.li>
                  <motion.li>Blockchain & Cryptocurrency</motion.li>
                  <motion.li> Data Analysis</motion.li>
                </ul>
                <ul className="grid grid-cols-3 mb-[1rem] border-b-2">
                  <motion.li>Flutter </motion.li>
                  <motion.li>Ethical hacking</motion.li>
                  <motion.li> Animation</motion.li>
                </ul>
              </motion.div>
            )}
          </motion.li>
          <motion.li
            whileHover={{ originx: 0, scale: 1.3, color: "#f8e112" }}
            className="flex items-center text-white text-[20px] p-[0.5rem] relative"
            onMouseOver={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            About us <BiChevronDown />
           
            {about && (
              <motion.div
                className="text-[14px] absolute bg-[blue] text-white p-[1rem] text-center top-[90%] w-[152px] rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
              >
                <ul className=" mb-[1rem] ">
                  <motion.li className="border-b-2 p-[0.5rem]">Who We Are </motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]">Gallery</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Portfolio</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Team</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Mission</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> vision</motion.li>
                </ul>
              </motion.div>
            )}
          </motion.li>
          <motion.li
            whileHover={{ originx: 0, scale: 1.3, color: "#f8e112" }}
            className="flex items-center text-white text-[20px] p-[0.5rem] relative"
            onMouseOver={() => setService(true)}
            onMouseLeave={() => setService(false)}
          >
            {service && (
              <motion.div
                className="text-[14px] absolute bg-[blue] text-white px-[1rem]  top-[90%] w-[200px] text-center rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
              >
                <ul className=" mb-[1rem] ">
                  <motion.li className="border-b-2 p-[0.5rem]">Web Design & Development </motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]">Mobile App Development</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Digital Marketing</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Branding</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Company Registration</motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Cryptocurrency Exchange </motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]"> Web3 </motion.li>
                </ul>
              </motion.div>
            )}
            Services <BiChevronDown />
          </motion.li>
          <motion.li
            whileHover={{ originx: 0, scale: 1.3, color: "#f8e112" }}
            className="flex items-center text-white text-[20px] p-[0.5rem] relative"
            
          >
            Contact us 
          </motion.li>
        </ul>
        <p class="font-medium text-3xl leading-10 text-orange-500 font-poppins">
          Login
        </p>
      </aside>
    </div>
  );
};

export default Navbar;
