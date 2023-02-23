import React from "react";
import Swiperjs from "./Swiperjs";
import { SwiperSlide } from "swiper/react";
import slide1 from '../images/slider1.png'
import float1 from '../images/float1.png'
import float2 from '../images/float2.png'
import float3 from '../images/float3.png'

const Wrapper = () => {
  return (
    <section className="mt-[90px] flex items-center justify-around min-h-[90vh] p-[1rem]">
      <div className="basis-[45%] relative">
        <h2 className="text-5xl text-white font-bold mb-[2rem]">
          Coding Hub <br /> <span>For All</span>
        </h2>
        <button className="bg-gradient-to-r from-blue-900 via-transparent to-red-500 rounded-[10px] px-[4rem] py-[0.7rem] text-white font-bold">
          Get Started
        </button>
        <img src={float1} alt="" className="absolute top-[-40%] left-[-5%]" />
      </div>
     <div className="basis-[45%] w-[300px] relative">
     <Swiperjs >
        <SwiperSlide>
            <div className="relative min-h-[350px]">
                <img src={slide1} alt=""  className="w-[400px] m-auto h-[300px] "/>
                <div className="absolute bottom-[10%] z-[10] flex items-center justify-center w-full">
                    <p className="  bg-blue-900 shadow-lg rounded-[10px] w-[50%] py-[0.5rem] font-bold text-2xl text-white text-center">We Teach</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiperjs>
      <img src={float2} alt="" className="absolute top-0 right-[10%] z-10"/>
      <img src={float3} alt="" className="absolute bottom-0 left-[0%] "/>
     </div>
    </section>
  );
};

export default Wrapper;
