import React from "react";

const Section2 = ({ data }) => {

  const colors = []

  const { title, features } = data;

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold my-3 text-start w-full">
          {title}
        </h2>

        <div className=" w-full lg:w-[100vw] justify-items-center">
          <div className="grid [grid-template-areas:'stack'] lg:w-[800px] xl:w-[1200px] place-items-center">
            <img
              className="hidden lg:block [grid-area:stack] object-fill w-full"
              src="/interview/Interview_background.svg"
              alt="container"
            />
            <div className="grid grid-cols-1 [grid-area:stack] lg:h-[75%] lg:ml-32 xl:ml-52 gap-10 lg:gap-0 xl:gap-12">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`text-white w-full lg:w-[75%] rounded-se-[2rem] rounded-es-[2rem] p-5 lg:p-0 shadow-[0_0_20px_0_rgba(0,0,0,0.4)] lg:shadow-none lg:bg-transparent
                    ${(index === 0) && ("bg-[#6F7EC7] justify-self-end self-start")}
                    ${(index === 1) && ("bg-[#5B69A7] justify-self-center self-center")}
                    ${(index === 2) && ("bg-[#495486] justify-self-start self-end")}
                  `}
                >
                  <div className="flex place-items-center md:gap-5">
                    <div className="">
                      <span className="text-lg lg:text-xl xl:text-3xl font-bold underline">
                        {feature.heading}
                      </span>
                      {feature.visaTypes 
                        ? (
                          <div className="">
                            <ul className="text-xs xl:text-lg">
                              {feature.visaTypes.map((visa, index) => (
                                <li key={index} className="">
                                  <span className="font-semibold mr-1 ">{visa.type}:</span>
                                  <span className="font-light">{visa.details}</span>                            
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) 
                        : (
                          <div className="mt-4">
                            <p className="text-xs xl:text-lg font-light">{feature.description}</p>
                          </div>
                        )
                      }
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>      
        </div>
      </div>

    {/* <div className="py-8 ">
        Title Section
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
       {title}
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:gap-20 gap-2 mt-8">
                Left Section (Image)
        <div className="relative shrink-0 w-full lg:w-1/3">
          <img
            src="/why1.png"
            alt="Student holding books"
            className="rounded-lg w-full h-auto sm:h-auto md:h-[620px] lg:mt-0 mt-10 object-contain "
          />
          <div  className="absolute w-max    lg:top-16 top-6 left-8 lg:left-16 md:top-10 md:left-24 bg-gray-800 text-white md:text-sm text-xs  p-2 py-2 rounded-md shadow-lg tooltip">
           Why Choose <span className="font-bold">Visa Sprint’s Mock Interview</span>
            <div className="absolute w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800 top-full right-2/2 transform translate-x-2/2"></div>
          </div>
          
        </div>

          Right Section (Cards)
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 w-full lg:w-2/3">
             {features.map((feature, index) => (
          <div
            key={feature.id}
           className={`bg-gray-200 p-5 rounded-lg shadow-md lg:text-lg md:text-base text-sm my-5 ${index === 2 ? 'lg:col-span-2 col-span-1' : ''}`}
          >
            <h3 className="lg:text-2xl md:text-xl text-lg font-bold ">
              {index + 1}
              {". "}
              {feature.heading}
            </h3>

            {feature.visaTypes ? (
              <ul className="mt-1 col-span-2">
                {feature.visaTypes.map((visa, index) => (
                  <li key={index} className="my-3 flex items-center gap-2 ">
                   <div>
                      <strong>{visa.type}:</strong> {visa.details}
                    </div>
                    
                  </li>
                ))}
              </ul>
            ) : (
              <li className="flex gap-2 my-2 items-center">
               {feature.description}
              </li>
            )}
          </div>
        ))}
          </div>

      </div>
    </div> */}
    </>  
  
  );
};

export default Section2;
