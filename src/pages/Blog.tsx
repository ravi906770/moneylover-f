import React from 'react';
import bg from "../assets/hero-bg.png"
import bg1 from "../assets/f1.jpg"
import bg2 from "../assets/f2.jpg"
import bg3 from "../assets/f3.jpg"
import userImg from "../assets/avatar-icon.png"

// 766c314c064842789d936319001bfdc9

const Blog = () => {

  return (
   <>
    <section className=" flex flex-col items-center bg-no-repeat bg-center bg-cover  2xl:h-[800px]" style={{ backgroundImage: `url(${bg})` }}>
    <div className='justify-center items-center text-headingColor text-[44px] leading-[54px] font-[700]'>
            <h1 className='ml-[125px]'>Blog</h1>
            <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">Our Pledge to Streamline Your Financial Path.</p>
        </div>
<div className='mt-10 ml-[25px] overflow-y-auto m-5'>
<div className="max-w-sm w-full lg:max-w-full lg:flex rounded-full">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-full lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${bg1})` }}  title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p className="text-gray-700 text-base">Coffee can enhance alertness and focus, aiding productivity in moderation for some developers.</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={userImg} alt="Avatar of Jonathan Reinink" />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>

<div className="max-w-sm w-full lg:max-w-full lg:flex rounded-full m-20 ">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-full lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${bg2})` }}  title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">
How does diversification reduce investment risk?</div>
      <p className="text-gray-700 text-base">Diversification spreads investment across various assets, lowering risk by minimizing exposure to any single asset or sector.</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={userImg} alt="Avatar of Jonathan Reinink" />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Michael Smith</p>
        <p className="text-gray-600">Jun 05</p>
      </div>
    </div>
  </div>
</div>


<div className="max-w-sm w-full lg:max-w-full lg:flex rounded-full ">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-full lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${bg3})` }}  title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">What role does inflation play in personal finance?</div>
      <p className="text-gray-700 text-base">Inflation erodes purchasing power over time, necessitating investment strategies to preserve wealth and maintain financial stability.</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={userImg} alt="Avatar of Jonathan Reinink" />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Sarah Johnson</p>
        <p className="text-gray-600">Jan 30</p>
      </div>
    </div>
  </div>
</div>



</div>
</section>
   </>
  );
};

export default Blog;
