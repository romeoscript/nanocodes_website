import Layout from "../components/Layout"

const Registration = () => {
  return (
    <Layout>
    <div className='min-h-[100vh] flex items-center flex-col text-white justify-center'>
        <p className='font-bold text-3xl'>Sign UP</p>
        <form action="#" className="w-[40%]">
       <aside className="flex gap-4">
       <div className="basis-[50%]">
          <label htmlFor="#">First Name </label> <br />
          <input
            type="text"
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
          />
        </div>
        <div className="basis-[50%]">
          <label htmlFor="#">Last Name</label> <br />
          <input
            type="text"
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
          />
        </div>
       </aside>
       <aside className="flex gap-4 my-[1rem]">
       <div className="basis-[50%]">
          <label htmlFor="#">Email </label> <br />
          <input
            type="email"
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
          />
        </div>
        <div className="basis-[50%]">
          <label htmlFor="#">Phone</label> <br />
          <input
            type="tel"
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
          />
        </div>
       </aside>
       <aside className="flex gap-4">
       <div className="basis-[50%]">
          <label htmlFor="#">Password </label> <br />
          <input
            type="password"
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
          />
        </div>
        <div className="basis-[50%]">
          <label htmlFor="#"> Confirm password</label> <br />
          <input
            type="password"
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
          />
        </div>
       </aside>
       
   
        <button className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full my-[2rem] p-[0.7rem]">
       Register
        </button>
      </form>
    </div>
</Layout>
  )
}

export default Registration
