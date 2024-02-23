import React from 'react'
import { Link } from 'react-router-dom'
// import bg from "../assets/hero-bg.png"
import heroImg01 from "../assets/contact01.avif"
import logo from "../assets/logo2.png"
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <>
            <section className=" flex items-center bg-no-repeat bg-center bg-cover py-[20px] 2xl:h-[800px]">
                <div className="max-w-full w-[1440px] px-5 mx-auto">
                    <div className="lg:w-[500px] mx-auto">
                        <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">Contact us</h2>
                        <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">Our Commitment to Simplifying Your Financial Journey.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

                        {/* ================== Hero Content ================== */}
                        <img src={heroImg01} alt="" className='rounded-full' />
                        {/* ================== Hero Content ================== */}
                        <div className="flex gap-[30px] justify-end">
                            <section className="bg-white-200 pt-8 pb-6 mt-100px">
                                <div className="container mx-auto">
                                    <div>
                                        <h1 className='text-[35px] font-600 underline font-sans text-textColor'>Let's Connect with us</h1>
                                    </div>
                                <div className="mt-6 lg:mb-0 mb-20">
                                                <button className="bg-white text-red-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-red-300" type="button">
                                                    <SiMinutemailer className="ml-3" /></button>zipmoney@gmail.com<br />
                                                <button className="bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-blue-400" type="button">
                                                    <MdOutlineWifiCalling3 className="ml-3" /></button>1800 200 100<br />
                                                <button className="bg-white text-white-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-pink-300" type="button">
                                                    <TbWorldCheck className="ml-3" /></button>zip@money.com<br />
                                            </div>
                                    <div className="flex flex-wrap text-left lg:text-left mt-10">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <img src={logo} alt="" />
                                            <h5 className="text-500 mt-0 mb-2  text-textColor font-sans">
                                                Find us on any of these platforms, we respond in 1-2 business days.
                                            </h5>
                                            <div className="mt-6 lg:mb-0 mb-6">
                                                <button className="bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-blue-300" type="button">
                                                    <SlSocialFacebook className="ml-3" /></button>
                                                <button className="bg-white text-red-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-red-400" type="button">
                                                    <TiSocialYoutube className="ml-3" /></button>
                                                <button className="bg-white text-pink-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-pink-300" type="button">
                                                    <SlSocialInstagram className="ml-3" /></button>
                                                <button className="bg-white text-green-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-green-300" type="button">
                                                    <FaWhatsapp className="ml-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs




{/* <section className=" flex items-center bg-no-repeat bg-center bg-cover py-[20px] 2xl:h-[800px]">
<div className="max-w-full w-[1440px] px-5 mx-auto">
<div className="lg:w-[500px] mx-auto">
        <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">Contact Us</h2>
        <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">Our Commitment to Simplifying Your Financial Journey.</p>
    </div>
    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

      
        <img src={heroImg01} alt="" className='rounded-full'/>
     

        <div className="flex gap-[30px] justify-end">
          
        </div>

    </div>
</div>
</section> */}