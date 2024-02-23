import React, { useState } from 'react'
import register from "../assets/register.avif"
import bg from "../assets/hero-bg.png"
import { toast } from 'react-toastify';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

type Props = {}

const Register = (props: Props) => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_no, setMoblieNo] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/register`, { firstname, lastname, email, password, mobile_no })
      if (res && res.data.success) {

        Navigate("/login")
        console.log(res)
      }
      else {
        toast.error(res && res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>

      <section className=" flex items-center  bg-no-repeat bg-center bg-cover py-[60px] 2xl:h-[800px]" style={{ backgroundImage: `url(${bg})` }}>
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/* ================== Hero Content ================== */}
            <div className="justify-between items-end">
              <img src={register} alt="" className="w-full rounded-full" />
            </div>
            {/* ================== Hero Content ================== */}
            <div className="flex gap-[30px] justify-between items-start w-full">
              <form className="w-full max-w-lg" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                      First Name
                    </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Last Name
                    </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email
                    </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="xyz@gmail.com" required />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Password
                    </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" required />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                      Mobile No.
                    </label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoblieNo(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="1234567890" required />
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    Profile Pic
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="file" />
                </div>
              </div> */}
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button type='submit' className="mt-10 bg-primaryColor text-white w-full h-full font-bold hover:bg-green-400 rounded-full">Sign Up</button>
                  </div>
                </div>

                <Link to="/login">
                <div className="flex flex-wrap -mx-3 mt-[75px]">
                  <div className="w-full px-3">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Already Sign Up ? Go to <span className='text-primaryColor text-[15px] font-bold underline'>Login</span>
                    </label>
                  </div>
                </div>
                </Link>
                
              </form>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Register