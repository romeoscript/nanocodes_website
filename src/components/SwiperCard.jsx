import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderPerView from "./SliderPerView";
import AI from "../images/Ai.png";
import cd from "../images/cd.png";
import wd from "../images/wd.png";
import cf from "../images/cf.png";

const SwiperCard = () => {
  const cardInfo = [
    {
      img: AI,
      text: "Artificial Intelligience",
    },
    {
      img: wd,
      text: "Web Design",
    },
    {
      img: cd,
      text: "Creative Design",
    },
    {
      img: cf,
      text: "Crypto and Forex",
    },
  ];
  return (
    <section className="py-[3rem]">
      <h2 className="text-center  text-3xl font-bold text-white uppercase mb-[1rem]">
        Get Modern and <br />
        up to date Tech Skills
      </h2>
      <SliderPerView>
        {cardInfo.map((data) => {
          return (
            <SwiperSlide>
              <img src={data.img} alt="" className="w-[220px] h-[250px] object-cover rounded-lg"/>
            </SwiperSlide>
          );
        })}
      </SliderPerView>
    </section>
  );
};

export default SwiperCard;
