import React, { useState } from 'react'
import bg from "../assets/hero-bg.png"

type Props = {}

const FAQ = (props: Props) => {


    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      if (openAccordion === index) {
        setOpenAccordion(null);
      } else {
        setOpenAccordion(index);
      }
    };

  return (
   <>
    <section className="flex flex-col items-center bg-no-repeat bg-center bg-cover py-[10px] 2xl:h-[800px]" style={{ backgroundImage: `url(${bg})` }}>
        <div className='justify-center text-headingColor text-[44px] leading-[54px] font-[700]'>
            <h1>Frequently Ask Questions?</h1>
            <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">Here to simplify your financial journey.</p>
        </div>
    <div id="accordion-collapse" data-accordion="collapse" className="flex flex-col items-center justify-center mt-10">
      {[1, 2, 3].map((index) => (
        <div key={index} className="w-full max-w-[700px]">
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-textColor border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={openAccordion === index ? "true" : "false"}
              aria-controls={`accordion-collapse-body-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <span>
                {index === 1 && "Why is expense tracking important?"}
                {index === 2 && "What is the benefits of Expense Tracking?"}
                {index === 3 && "What are Tips for effective expense tracking"}
              </span>
              <svg
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${
              openAccordion === index ? "" : "hidden"
            } border border-b-0 border-gray-200 text-textColor`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {index === 1 &&
                  "Expense tracking is essential for maintaining financial awareness, identifying spending patterns, and making informed financial decisions."}
                {index === 2 &&
                  "Expense tracking software automates recording, organizes expenses, provides real-time insights, integrates with bank accounts, and helps in budgeting."}
                {index === 3 &&
                  "Establish a tracking system, be consistent in recording expenses, categorize expenses, regularly review spending, and adjust budget and habits accordingly."}
              </p>
              {index === 3 && (
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  
                </p>
              )}
              {index === 3 && (
                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              )}
              {index === 3 && (
                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">
                    ClearTax
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
                    MoneyControl
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
   </>
  )
}

export default FAQ