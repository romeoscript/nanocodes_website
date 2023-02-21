import nanoImage from "../images/Nanocodes Logo 1.png";
import { BiChevronDown } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className="flex justify-around h-[90px] items-center px-[1rem]">
      <aside className="w-[200px]">
        <img src={nanoImage} alt="" className="w-full" />
      </aside>
      <aside className="flex items-center">
        <ul className="flex items-center mr-3">
          <li className="flex items-center text-white text-[20px] p-[0.5rem]">Courses <BiChevronDown /></li>
          <li className="flex items-center text-white text-[20px] p-[0.5rem]">About us <BiChevronDown /></li>
          <li className="flex items-center text-white text-[20px] p-[0.5rem]">Services <BiChevronDown /></li>
          <li className="flex items-center text-white text-[20px] p-[0.5rem]">Contact us <BiChevronDown /></li>
        </ul>
        <p class="font-medium text-3xl leading-10 text-orange-500 font-poppins">
          Login
        </p>
      </aside>
    </div>
  );
};

export default Navbar;
