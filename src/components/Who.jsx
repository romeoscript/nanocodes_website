import laptop from "../images/laptop.png";

const Who = () => {
  return (
    <div className="flex items-center justify-around py-[3rem] px-[1rem] gap-[2%]">
      <aside className="basis-[40%] text-white p-[2rem]">
        <h2 className="text-4xl font-bold">Who We Are</h2>
        <p className="my-[1rem]">
          Lorem ipsum dolor sit amet consecte t ur. Nec tempus ut nibh
          ullamcorper duis. Lorem ipsum dolor sit amet consectet ur. Nec tempus
          ut nibh ullamcorper duis. 
        </p>
        <p className="my-[1rem]">Lorem ipsum dolor sit amet consecte t ur.
          Nec tempus ut nibh ullamcorper duis.Lorem ipsum dolor sit amet consect
          et ur. Nec tempus ut nibh ullamcorper duis.</p>
        <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-red-500 rounded-sm w-full h-[10px]"></div>
      </aside>
      <aside className="basis-[40%]">
        <img src={laptop} alt="" />
      </aside>
    </div>
  );
};

export default Who;
