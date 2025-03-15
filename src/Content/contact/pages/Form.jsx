import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from 'framer-motion';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import * as yup from 'yup';

const schema=yup.object().shape({
  fullName:yup
  .string()
  .max(30,"Full Name must be 30 characters or less")
  .matches(/^[a-zA-Z ]*$/,"No special characters allowed in name.")
  .required("Full Name is required"),
  gmail:yup
  .string()
  .required("Gmail is required")
  .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Invalid Gmail format")
  ,
  subject: yup
    .string()
    .test('max-words','Subject cannot exceed 30 words',(value)=> {
      const wordCount = value ? value.trim().split(/\s+/).length : 0;
      return wordCount <= 30;
    })
    .required("Subject is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
   ,
  message: yup.string()
})



const Form = ({ containerClass, messagePosition, fullWidthButton }) => {

  const{register,handleSubmit,formState:{errors},reset}=useForm({resolver:yupResolver(schema)})
   const [statusMessage, setStatusMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); // 'success' or 'error'
  
  const onSubmit = (data) => {
   try {

       // Simulating an error 
    // throw new Error("Simulated error"); 

      // Store form data in localStorage
      localStorage.setItem("formData", JSON.stringify(data));

      // Check if data is successfully saved
      const savedData = localStorage.getItem("formData");

      if (savedData) {

        setStatusMessage("Message successfully sent!");

        setMessageType("success");

        // Hide message after 3 seconds, then reset form
        setTimeout(() => {
           setStatusMessage(null);
          reset(); // Reset form after the success message disappears
        }, 3000);

      } else {
         throw new Error("Failed to save data in localStorage");
      }
    } catch (error) {
      console.error("Error storing data:", error);

       setStatusMessage("Something went wrong. Please try again!");
       
       setMessageType("error");

       // Hide error message after 3 seconds
          setTimeout(() => {
              setStatusMessage("");
             }, 3000);
    }
  };


  return (
    <div className={`md:static relative  md:w-6/12  w-[100%] max-w-full  md:mr-8 py-2 px-5  md:mt-0 mt-5 ${containerClass}`}>
      <h2 className="text-3xl font-bold">Write a Message</h2>
      <form className="mt-5 " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m  mb-3">

             {/* Full Name input */}
         
         <div>
             <input
            type="text"
            placeholder="Full Name"
             {...register("fullName")}
            className="w-full  bg-[#E4E4E4] py-3 px-5 rounded-md outline-none"
          />
           {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
         </div>

            {/* Gmail input */}
        <div>
          <input
            type="email"
            placeholder="Gmail"
           {...register("gmail")}
            className="w-full bg-[#E4E4E4] py-3 px-5 rounded-md outline-none"
          />
          {errors.gmail && <p className="text-red-500 text-sm">{errors.gmail.message}</p>}
        </div>
          
             {/* Subject input */}
          <div>
            <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="w-full bg-[#E4E4E4] py-3 px-5 rounded-md outline-none"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
          </div>
          
           {/* Phone input */}
         <div>
              <input
            type="text"
            placeholder="Phone"
             {...register("phone")}
            className="w-full bg-[#E4E4E4] py-3 px-5 rounded-md outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
       
        </div>
        </div>  
        
       {/* Message textarea */}
        <>
          <textarea
            className="bg-[#E4E4E4] px-5 py-2 w-full h-40 rounded-md outline-none"
            placeholder="Message"
            {...register("message")}
          ></textarea>
        </>
        

        {/* Send Button */}
        <button className={`bg-[#202A44]   hover:bg-slate-300 hover:text-black duration-300 text-white my-2 px-8 py-3 mt-6 font-semibold  ${fullWidthButton ? "w-full rounded-sm":"w-auto rounded-3xl "}`}>
          Send Message
        </button>

      </form>
       {/*  Message */}
      {statusMessage && (
        <motion.div
          initial={{ y: '100vh' }}  // Start below the screen (100vh)
          animate={{ y: 0 }}        // Animate it into its final position (slide from bottom to top)
          exit={{ y: '100vh' }}     // Exit by sliding back down (off-screen)
          transition={{ duration: 1, ease: 'easeOut' }}  // Increased to 1 second duration
          className={`flex items-center gap-3  absolute md:-top-12 -top-14  ${messagePosition === "left"?"md:left-0 left-3":"md:right-0 right-10"}   rounded-md mt-2 shadow-lg text-white ${
            messageType === "success" ? "bg-[#202A44] md:px-10 px-5 py-3" : "bg-red-600 px-4 py-2"
          }`}
        >
          {messageType === "success" && <IoMdCheckmarkCircleOutline  className=" text-4xl shrink-0" />}
          {statusMessage}
        </motion.div>
      )}
    </div>
  );
};

export default Form;
