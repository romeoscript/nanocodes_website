import number1 from "../images/2.png";
import ContactForm from "./ContactForm";

const LadyForm = () => {
  return (
    <div>
      <h2 className="text-white m-auto font-bold text-3xl text-center w-[50%] my-[3rem]">
        Let Us Create a Custom-Tailored solution for your Digital needs
      </h2>
      <div>
        <aside className="w-[80%] m-auto text-white relative">
          <ContactForm className='w-[40%]'/>

          <img
            src={number1}
            alt=""
            className="w-5/5 absolute bottom-0 h-4/5 right-4"
          />
        </aside>
      </div>
    </div>
  );
};

export default LadyForm;
