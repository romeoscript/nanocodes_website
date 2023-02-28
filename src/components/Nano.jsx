import dell from "../images/dell.png";
import key from "../images/keyboard.png";
import watch from "../images/watch.png";
import mouse from "../images/mouse.png";

const Nano = () => {
  return (
    <section className="flex gap-[2%] items-center justify-center my-[4rem]">
      <div className="text-white">
        <h2 className="text-5xl">Nanotech</h2>
        <p className="italic mb-[3rem] mt-4">
          Top Gadgets at Affordable Rates!
        </p>
        <aside className="w-[324px] h-[400px] bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={dell} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-2xl font-bold ">Dell Aspiron GT54</span>
            <span className="text-[12px]">
              <p className="text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <aside className="w-[324px] h-[400px] bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={mouse} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-2xl font-bold ">
              Logitech Wireless Mouse{" "}
            </span>
            <span className="text-[12px]">
              <p className="text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
      </div>
      <div className="text-white ">
        <aside className="w-[324px] h-[400px] bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={key} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-2xl font-bold ">Dell Gaming Keyboard</span>
            <span className="text-[12px]">
              <p className="text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <aside className="w-[324px] h-[400px] bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
          <img src={watch} alt="" className="w-[95%] m-auto rounded-[7px]" />
          <div className="flex justify-between gap-[4%] p-[0.5rem]">
            <span className="text-2xl font-bold ">Smart watch GT54 </span>
            <span className="text-[12px]">
              <p className="text-2xl">75,000</p>
              210 Units Sold
            </span>
          </div>
        </aside>
        <h2 className="text-xl italic">See All Products</h2>
      </div>
    </section>
  );
};

export default Nano;
