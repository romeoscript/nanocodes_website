import React, { useState } from "react";
import { BsChevronRight as ChevronDownIcon } from "react-icons/bs";
import Layout from "../components/Layout";
import detailimg from "../images/detailsimg.png";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import tutor from "../images/tutor.png";

const faqs = [
  {
    question: "Description",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sapien blandit ante mattis massa consectetur convallis. Quisque pulvinar nibh ac rhoncus congue metus proin dictum rhoncus. Ut arcu purus risus gravida odio arcu nisi. Lectus iaculis tempus feugiat in enim posuere adipiscing aliquam. Lectus arcu porta fusce turpis laoreet odio egestas arcu. Quam eget nibh est mattis tristique. Nunc quisque id fermentum sapien interdum leo. Sed sed leo varius orci. Lacus vel nisi id amet in urna sit vivamus cras.",
  },
  {
    question: "What You Will Learn",
    answer:
      "Tailwind is a utility-first CSS framework that allows you to quickly build custom designs without writing any CSS. It provides a set of pre-defined classes that you can use to style your HTML elements.",
  },
  {
    question: "What is Required",
    answer:
      "You can install React and Tailwind using npm or yarn. Here's an example command: npm install react tailwindcss",
  },
  {
    question: "Course Outline",
    answer:
      "You can install React and Tailwind using npm or yarn. Here's an example command: npm install react tailwindcss",
  },
];

const CourseDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }
  return (
    <div>
      <Layout>
        <div className="mt-[8rem] mb-[4rem] w-4/5 m-auto">
          <div className="flex gap-6 items-start">
            <aside className="basis-[70%]">
              <div className="h-[250px] w-full rounded-md">
                <img
                  src={detailimg}
                  alt=""
                  className="h-full object-fit w-full rounded-md"
                />
              </div>

              <div className="text-white  m-auto mt-[8rem] ">
                {faqs.map((faq, index) => (
                  <div key={index} className=" py-4">
                    <button
                      onClick={() => handleClick(index)}
                      className="flex justify-between  rounded-sm   text-white items-center w-full px-4 py-2 text-lg font-medium text-left  focus:outline-none "
                    >
                      <span>{faq.question}</span>
                      <ChevronDownIcon
                        className={`${
                          activeIndex === index ? "transform rotate-90" : ""
                        } w-5 h-5`}
                      />
                    </button>
                    {activeIndex === index && (
                      <p className="mt-2 px-4 text-gray-500 p-[1.5rem]  bg-gray-300 bg-opacity-5 backdrop-blur-md rounded-md">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </aside>
            <aside className="basis-[30%]">
              <fig
                className="min-h-[400px] w-[300px] text-center text-white rounded-[10px] bg-gradient-to-r-yellow-blue-white
                my-[1rem] mx-[0.5rem] border-2 p-[1rem] flex flex-col justify-center items-center bg-white/30 backdrop-blur-sm hover:scale-[1.1] cursor-pointer hover:border-[#030C4B] hover:border-4 card_content"
              >
                <h2 className="text-3xl font-bold my-[1rem]">#100,000</h2>
                <ul className="text-left p-[1rem]">
                  <li className="my-[0.7rem]">
                    {" "}
                    <WorkspacePremiumIcon /> Internationally accepted
                    Certificate
                  </li>
                  <li className="my-[0.7rem]">
                    {" "}
                    <BrowserUpdatedIcon />
                    Downloadable Resorces
                  </li>
                  <li className="my-[0.7rem]">
                    {" "}
                    <BrowserUpdatedIcon />
                    Lifetime access to Resources
                  </li>
                </ul>
                <button className="my-[1rem] px-[3rem] rounded-lg py-[0.5rem] bg-gradient-to-br from-blue-600 to-red-500">
                  Get Started
                </button>
              </fig>

              <figure className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-white text-3xl font-bold">Tutor</h1>

                <div className="min-h-[420px] w-[300px]  py-[1rem] relative">
                  <img
                    src={tutor}
                    alt=""
                    className="m-auto h-[300px] w-[300px] my-[1rem] z-20 relative"
                  />
                  <main className=" h-[50%] w-full  absolute bottom-0 flex flex-col justify-end bg-white/30 bg-gradient-to-t-via-gray-100/90-to-transparent backdrop-blur-sm">
                    <h1 className="text-[white] z-70 relative text-3xl font-bold text-center ">
                      Harrison Ozioko
                    </h1>
                    <h4 className="text-[white] text-2xl  text-center font-bold">
                      Python Programmer
                    </h4>
                  </main>
                </div>
              </figure>
            </aside>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CourseDetails;
