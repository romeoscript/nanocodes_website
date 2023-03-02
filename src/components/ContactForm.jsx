import React from 'react'

const ContactForm = ({className}) => {
  const classes = className
  return (
    <div>
        <form action="#" className={classes}>
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
    </div>
  )
}

export default ContactForm
