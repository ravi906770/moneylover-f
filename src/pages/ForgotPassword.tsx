import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fp from "../assets/fp2.avif"
import bg from "../assets/hero-bg.png"

type Props = {}

const ForgotPassword = (props: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <>
    <section className=" flex items-center  bg-no-repeat bg-center bg-cover py-[60px] 2xl:h-[800px]" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-full w-[1440px] px-5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

          {/* ================== Hero Content ================== */}
          <div className="justify-between items-end">
            <img src={fp} alt="" className="w-full rounded-full ml-[50px]" />
          </div>
          {/* ================== Hero Content ================== */}
          <div className="flex gap-[30px] justify-between items-start w-full">
            <form className="w-full max-w-lg ml-[100px]" >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    email
                  </label>
                  <input  onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter Your Email" required />
                </div>
                
              </div>
              <div className="w-full md:w-1/2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    New Password
                  </label>
                  <input  onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="Enter Your Password" required />
                </div>
                <div className="w-full md:w-1/2 mt-10">
                  <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Confirm New Password
                  </label>
                  <input  onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="Enter Your Password" required />
                </div>
               
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <Link to="/login">
                    <button type='submit' className="mt-10 bg-primaryColor text-white w-full h-full font-bold hover:bg-green-400 rounded-full">Update</button>
                    </Link>
                </div>
              </div>
            </form>
            
          </div>


        </div>
      </div>
    </section>
    </>
  )
}

export default ForgotPassword