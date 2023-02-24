import cate from "../images/cate.png";
import phone from "../images/contact.png";
import lappy from "../images/coding-monitor-svgrepo-com 1.png";

const Journey = () => {
  const items = [
    {
      id: 1,
      img: cate,
      text: "Choose A Course From our Catalogue",
    },
    {
      id: 2,
      img: phone,
      text: "Get in Touch with usand tell us",
    },
    {
      id: 3,
      img: lappy,
      text: "Start Learning and become a pro",
    },
  ];
  return (
    <div className="my-[2rem]">
      <h2 className="text-center font-bold text-3xl my-8 text-white">
        How to Begin your Journey in Tech in 3 Easy Steps
      </h2>
      <div className="flex items-center justify-around p-4">
        {items.map((item) => {
          return (
            <aside className="text-white gap-4 items-center flex w-[200px]" key={item.id}>
              <span className="text-white font-bold text-5xl">{item.id}</span>
              <span>
                <img src={item.img} alt="" className="w-[50px]" />
                <h2  className="mt-4">{item.text}</h2>
              </span>
            </aside>
          );
        })}
      </div>
    </div>
  );
};

export default Journey;
