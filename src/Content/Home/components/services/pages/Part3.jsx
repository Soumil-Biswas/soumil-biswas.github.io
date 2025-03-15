import React from "react";

const Part3 = ({ data }) => {
  return (
    <div  id='section2' className="w-full ">
      <h2 className="md:text-3xl text-2xl font-bold">{data.title}</h2>
      {/* <h4 className="text-xl font-bold mt-2">{data.subTitle}</h4> */}
      
      <div className="md:mx-20 my-2  flex lg:flex-row flex-col items-center lg:gap-10 gap-5">
        <div className="md:mx-0 mr-5 lg:w-2/3">
            <p className="lg:text-lg text-sm my-3">{data.description}</p>
            <h3 className="lg:text-3xl md:text-2xl text-lg font-bold lg:w-7/12 mt-3">{data.subTitle}</h3>
        </div>
        {/* <div className="w-28">
          <buton className="w-full h-20   bg-[#202A44] text-white hover:bg-slate-300 cursor-pointer hover:text-black duration-500 rounded-md md:text-xl text-2xl  py-1  px-2 whitespace-nowrap font-semibold">Read More</buton>
        </div> */}
        <div className="  ">
          <img src={"/services/3-39 7.webp"} className=" w-96 " alt="visa"/>
        </div>
      </div>
    
       
       {/* <div className="grid lg:grid-cols-4 lg:gap-x-8  md:grid-cols-2 grid-cols-1 gap-3 my-3 md:mx-0 mx-8">
        {
          data.content.map((item,index)=>(
            <div key={index} className="w-64 bg-[#C4C4C4] px-8 py-2 rounded-3xl">
              <p className="line-clamp-3"><span className="font-bold">{item.bold}</span>{item.text}</p>
            </div>
          ))
        }
        </div>  */}

   
      <ul className="mt-3">
        {
          data.content.map((item,index)=> <li key={index} className="md:text-lg  text-base mb-5"><span className="font-bold">{item.bold}{" : "}</span>{item.text}</li>)
        }
      </ul>
    </div>
  );
};

export default Part3;
