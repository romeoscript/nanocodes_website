import React from 'react'
import Layout from '../components/Layout'

const Login = () => {
  return (
    <Layout>
        <div className='min-h-[100vh] flex items-center flex-col text-white justify-center'>
            <p className='font-bold text-3xl'>Sign In</p>
            <form action="#" className="w-[40%]">
            <div>
              <label htmlFor="#">Email </label> <br />
              <input
                type="email"
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
            <div>
              <label htmlFor="#">password</label> <br />
              <input
                type="password"
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
           
       
            <button className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full my-[2rem] p-[0.7rem]">
           Login
            </button>
          </form>
        </div>
    </Layout>
  )
}

export default Login
