import number1 from "../images/2.png";

const LadyForm = () => {
  return (
    <div>
      <h2 className="text-white m-auto font-bold text-3xl text-center w-[50%] my-[3rem]">
        Let Us Create a Custom-Tailored solution for your Digital needs
      </h2>
      <div>
        <aside className="w-[80%] m-auto text-white relative">
          <form action="#" className="w-[40%]">
            <div>
              <label htmlFor="#">Name </label> <br />
              <input
                type="text"
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
            <div>
              <label htmlFor="#">E-mail </label> <br />
              <input
                type="text"
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
            <label htmlFor="#">Message </label>
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10 "
              className=" w-full p-2 rounded-md mb-2 outline-none maini"
            ></textarea>
            <button className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full p-[0.7rem]">
              Get in Touch
            </button>
          </form>

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
