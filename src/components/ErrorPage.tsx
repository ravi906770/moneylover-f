import React from 'react'
import error from "../assets/error.avif"
import bg from "../assets/hero-bg.png"

type Props = {}

const ErrorPage = (props: Props) => {
  return (
    <>
    <section className=" flex items-center bg-no-repeat bg-center bg-cover py-[20px] 2xl:h-[800px]" >
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          <div className="lg:w-[500px] mx-auto">
            <h2 className="text-[34px] leading-[54px] font-[700] text-headingColor text-center">Something went Wrong!!</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-center">

            {/* ================== Hero Content ================== */}
            <img src={error} alt="" className='rounded-full w-1/2 sm:h-[600px]' />
            {/* ================== Hero Content ================== */}
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage