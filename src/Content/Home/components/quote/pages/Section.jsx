import axios from "axios";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
import DateInput from "./DateInput";
import Dropdown from "./Dropdown";
import FeeCard from "./FeeCard";
import UserDetails from "./UserDetails";

const Section = () => {

  const [finalData, setFinalData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [hasPaymentError, setHasPaymentError] = useState(false)

  const {
    control,
    register,
    
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({

    defaultValues: {
      visaType: "L1",
      appointmentType: "FRESH",
      totalApplicants: 1,
      preferredOFC: "KOLKATA VAC",
      preferredConsolar: "KOLKATA CONSOLAR",
      startDate: "",
      endDate: "",
      duration: "3-5 DAYS",
      description: "",
    },
  });

  // const formData = watch();

  const formData = useWatch({ control }); // Watches all fields

  const navigate = useNavigate()

  const handleCheckout = async (userDetails) => {
    try {
      const { data: { key } } = await axios.get(`${import.meta.env.REACT_SERVER_URL}/visa/payment/razor-key`)

      const { appointmentType, duration, fee } = finalData;

      const { data: { order } } = await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/payment/checkout`, { appointmentType, duration, fee });

      const options = {
        key,
        amount: order.amount,
        currency: order.currency,
        name: 'VisaSprint',
        description: 'Test Transaction',
        order_id: order.id,
        handler: async (response) => {
          try {
            await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/payment/verify-payment`, { finalData, userDetails, response })
            navigate('/payment-success', { state: { finalData, userDetails, paymentDetails: { razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, } } })
          } catch (e) {
            console.error(e)
            throwPaymentError()
            // flash("Unable to proceed the request at this moment", "Error")
          }
        },
        modal: {
          onDismiss: async () => {
            try {
              await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/appointment?status=pending`, { finalData, userDetails })
            } catch (e) { console.error(e) }

            throwPaymentError()
          }
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '1234567890',
        },
        theme: {
          color: '#202A44',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (e) {
      console.error(e)
      throwPaymentError()
      // flash("Unable to proceed the request at this moment", "Error")
    }
  }

  // Fee calculation logic
  const calculateFee = () => {

    let baseFee = 10000;

    if (formData.appointmentType === "RESCHEDULED") baseFee += 2000;

    // Add ₹2000 for 3-5 days
    if (formData.duration === "3-5 DAYS") baseFee += 2000;

    else if (formData.duration === "5-10 DAYS") baseFee += 1000;   // Add ₹1000 for 5-10 days

    return baseFee;
  };

 
  useEffect(() => {
    const finalFee = calculateFee();
    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors && formData.startDate !== "" && formData.endDate !== "") {
      setFinalData({ ...formData, fee: finalFee });
    }
  }, [formData, errors]);

  const onSubmit = (data) => {
    const finalFee = calculateFee();
    setFinalData({ ...data, fee: finalFee });  // Store finalized data in state
  };

  const handleClick = async () => {
    const isValid = await trigger(); // Validate all fields
    if (isValid && Object.keys(errors).length === 0 && finalData) {
      setShowModal(true); // Only show modal if the form is valid
    } else {
      console.error("Validation failed, please check errors.");
    }
  }

  const throwPaymentError = () => {
    setHasPaymentError(true)
    setTimeout(() => setHasPaymentError(false), 5000)
  }

  // applicants validation
  const validateApplicants = (value) => {
  if (value < 1) {
    return "Applicants cannot be less than 1";
  } else if (value > 20) {
    return "Applicants cannot be more than 20";
  }
  return true;
};

// start date validation
const validateStartDate = (value) => {
  const selectedDate = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today || "Start date cannot be in the past";
};

// Watching startDate dynamically
const startDate = useWatch({ control, name: "startDate" });

// end date validation
const validateEndDate = (value) => {
  const selectedEndDate = new Date(value);
  const selectedStartDate = new Date(startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedEndDate < today) {
    return "End date cannot be in the past";
  }
  if (selectedEndDate < selectedStartDate) {
    return "End date must follow start date";
  }
  return true;
};




  const visaOptions = [
    { value: "L1", label: "L1" },
    { value: "B1/B2", label: "B1/B2" },
    { value: "F1", label: "F1" },
    { value: "J1", label: "J1" },
    { value: "H1B", label: "H1B" },
  ];

  const appointmentOptions = [
    { value: "FRESH", label: "FRESH" },
    { value: "RESCHEDULED", label: "RESCHEDULED" },
    { value: "REFUSAL", label: "REFUSAL" },
  ];
  const ofcOptions = [
    { value: "MUMBAI VAC", label: "MUMBAI VAC" },
    { value: "KOLKATA VAC", label: "KOLKATA VAC" },
    { value: "NEW DELHI VAC", label: "NEW DELHI VAC" },
    { value: "CHENNAI VAC", label: "CHENNAI VAC" },
    { value: "HYDERABAD VAC", label: "HYDERABAD VAC" },
  ];

  const consolarOptions = [
  { value: "MUMBAI CONSOLAR", label: "MUMBAI CONSOLAR" },
  { value: "KOLKATA CONSOLAR", label: "KOLKATA CONSOLAR" },
  { value: "NEW DELHI CONSOLAR", label: "NEW DELHI CONSOLAR" },
  { value: "CHENNAI CONSOLAR", label: "CHENNAI CONSOLAR" },
  { value: "HYDERABAD CONSOLAR", label: "HYDERABAD CONSOLAR" },
];

const duration=[
    { value: "3-5 DAYS", label: "3-5 DAYS" },
    { value: "5-10 DAYS", label: "5-10 DAYS" },
    { value: "11-30 DAYS", label: "11-30 DAYS" },
  ]

  return (
    <div className="lg:flex lg:justify-center justify-center 400-767:w-[80%] 400-767:mx-auto md:block md:w-full  mt-10 " >
      <div className="relative bg-gray-50 shadow-4xl rounded-2xl lg:w-11/12 items-center flex md:flex-row-reverse  flex-col lg:justify-between md:gap-2 gap-8">

        {
          hasPaymentError && (
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              className="bg-red-600 text-white w-full absolute z-10 -top-6 left-0 py-1.5 text-center font-medium rounded-t-2xl">
              <h1>Something went wrong !!</h1>
            </motion.div>
          )
        }

         {/* Service fee  card*/}
      <div className="relative xl:flex-1 w-full"  >
        
          <img src={"/Untitled design (13).jpg"} className="w-full lg:h-full md:h-[550px] h-full  range-1024-1029:h-[550px] custom-1029:h-[550px] 400-767:h-[420px] rounded-2xl md:rounded-r-2xl md:rounded-tl-[180px] md:rounded-bl-[60px] shadow-xl  " alt=""/>
        
        <FeeCard finalData={finalData} openModal={handleClick}/>

      </div>
      
    

        {/* modal popup */}
        {
          showModal && <UserDetails onClose={() => setShowModal(false)} isModal={showModal} handleCheckout={handleCheckout} />
        }

       {/* Visa Application Details Form */}
      <div className="px-5 flex flex-col 2xl:items-center xl:flex-5 range-1024-1029:w-10/12 custom-1029:w-7/12  lg:w-7/12 md:w-8/12 w-full py-2 ">
        <h2 className="2xl:text-center 2xl:text-4xl  w-full font-bold md:text-3xl text-xl">
          Visa Application Details
        </h2>
        <form
          className=" mt-5  2xl:mt-10 flex flex-col  2xl:w-auto w-full  "
          onSubmit={handleSubmit(onSubmit)}
          id="paymentForm"

        >
          {/* Row 1: Visa Type, Appointment Type, Total Applicants */}
          <div className="flex flex-col md:flex-row w-full md:justify-between gap-3 lg:mb-6 md:mb-3">

            {/* Visa Type */}
            <Dropdown 
            label="Visa Type"
            options={visaOptions}
            register={register}
            name="visaType"
            />

            {/* Appointment Type */}
            <Dropdown
          label="Appointment Type"
          options={appointmentOptions}
          register={register}
          name="appointmentType"
           />

           {/* Total Applicants */}
             <CustomInput
          label="Total Applicants"
          type="number"
          register={register}
          name="totalApplicants"
          validation={{
            validate: validateApplicants
          }}
          error={errors.totalApplicants}
        />
          </div>

         
            {/* Row 2: Preferred Locations */}
            <div className="lg:mb-3">
              <div className="flex md:flex-row flex-col md:justify-between gap-3  ">
                {/*OFC locations  */}
              <Dropdown 
               label="Preferred OFC Locations"
              options={ofcOptions}
              register={register}
              name="preferredOFC"
              />
             {/* consolar locations */}
              <Dropdown
              label="Preferred Consolar Locations"
              options={consolarOptions}
              register={register}
              name="preferredConsolar"
              />
            </div>
            <p className="md:text-base text-sm mt-1">More locations yield early appointments; costs less.</p>
            </div>
            

            {/* Row 3: Preferred Slot Dates and Duration */}
            <div className="flex flex-col md:flex-row md:items-center w-full lg:justify-between md:gap-1 gap-6 mt-4">

           {/* start date */}
              <DateInput
              label="Preferred Slot Start Date"
              name="startDate"
              register={register}
              errors={errors}
              trigger={trigger}
              validate={validateStartDate}
              />

              {/* end date */}
              <DateInput
              label="Preferred Slot End Date"
              name="endDate"
              register={register}
              errors={errors}
              trigger={trigger}
              validate={validateEndDate}
              />

              {/* duration */}
              <Dropdown
              label="Duration"
              name="duration"
              register={register}
              options={duration}
              />
            </div>
          <p className="md:text-base text-sm mt-1">Wider window yield quicker appointments costs less.</p>

          {/* Row 5: Description */}
            <div className="mt-5 w-full">
              <label className="font-bold">Description</label>
              <textarea
                placeholder="Provide any additional details or comments (optional)"
                {...register("description")}
                className="bg-[#E4E4E4] mt-2 px-3 py-2 w-full rounded-md "
                rows="3"
              />
            </div>
             </form>
          </div>
      </div>

    </div>
  );
};

export default Section;
