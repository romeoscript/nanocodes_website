import React, { useState } from "react";
import { BsChevronRight as ChevronDownIcon } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Layout from "../components/Layout";
import rect1 from "../images/Rectangle 43.png";
import rect2 from "../images/Rectangle 44.png";
import rect3 from "../images/Rectangle 45.png";
const faqs = [
  {
    question: "Mobile Applications",

    images: [rect1, rect2, rect3],
  },
  {
    question: "Websites",
    images: [rect1, rect2, rect3],
  },
  {
    question: "Corporate Branding ",
    images: [rect1, rect2, rect3],
  },
];

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <Layout>
      <div className="text-white w-3/5 m-auto mt-[8rem] min-h-[100vh] ">
        <h2 className="text-white text-center text-3xl font-bold p-[2rem] ">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className=" py-4">
            <button
              onClick={() => handleClick(index)}
              className="flex justify-between   text-white items-center w-full px-4 py-2 text-lg font-medium text-left  focus:outline-none "
            >
              <span>{faq.question}</span>
              <ChevronDownIcon
                className={`${
                  activeIndex === index ? "transform rotate-90" : ""
                } w-5 h-5`}
              />
            </button>
            {activeIndex === index && (
              <div>
                <p className="mt-2 px-4 text-gray-500 w-full p-[1.5rem] border flex items-center justify-around border-white bg-gray-300 bg-opacity-5 backdrop-blur-md rounded-md">
                {faq.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} className='h-[200px] rounded-lg w-[200px] ' />
                ))}
                </p>
                <p className="italic text-right flex items-center justify-end my-3 cursor-pointer">See All Applications <AiOutlineArrowRight /></p>
              </div>

              
            )}
            
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Portfolio;
