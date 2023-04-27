import AI from "../images/Ai.png";
import cd from "../images/cd.png";
import wd from "../images/wd.png";
import cf from "../images/cf.png";
import { SwiperSlide } from "swiper/react";
import SliderPerView from "./SliderPerView";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CourseCard = () => {
  const cardInfo = [
    {
      img: AI,
      text: "Artificial Intelligience",
      id:1

    },
    {
      img: wd,
      text: "Web Design",
      id:2
    },
    {
      img: cd,
      text: "Creative Design",
      id:3
    },
    {
      img: cf,
      text: "Crypto and Forex",
        id:4
    },
    {
      img: AI,
      text: "Artificial Intelligience",
      id:5
    },
    {
      img: wd,
      text: "Web Design",
        id:6
    },
    {
      img: cd,
      text: "Creative Design",
        id:7
    },
    {
      img: cf,
      text: "Crypto and Forex",
        id:8
    },
    {
      img: AI,
      text: "Artificial Intelligience",
        id:9
    },
    {
      img: wd,
      text: "Web Design",
        id:10
    },
    {
      img: cd,
      text: "Creative Design",
        id:11
    },
    {
      img: cf,
      text: "Crypto and Forex",
        id:12
    },
  ];
  return (
    <>
      <div className="flex text-white items-center gap-3 w-3/5 m-auto mt-[3rem]">
        <WhatshotIcon /> <p>Trending</p> <hr className="w-full"/>
      </div>
      <SliderPerView>
        {cardInfo.map((cardData) => {
          return (
            <SwiperSlide>
              <div className="h-[300px] w-[250px] mb-[1rem] relative">
                <img src={cardData.img} alt="" className="h-full w-full" />
                <aside className="flex w-full justify-between absolute z-20 bottom-[5%] text-white p-[1rem]">
                  <p>{cardData.text}</p>
                  <ChevronRightIcon />
                </aside>
              </div>
            </SwiperSlide>
          );
        })}
      </SliderPerView>
      <hr className="w-3/5 m-auto" />
      <div className="grid grid-cols-4 w-4/5 m-auto my-[2rem] gap-4">
        {cardInfo.map((cardData) => {
          return (
            <div className="h-[300px] w-[250px] mb-[1rem] relative">
              <img src={cardData.img} alt="" className="h-full w-full" />
              <aside className="flex w-full justify-between absolute z-20 bottom-[5%] text-white p-[1rem]">
                <p>{cardData.text}</p>
                <ChevronRightIcon />
              </aside>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CourseCard;
