import { MdContentCopy } from "react-icons/md";
import { useLocation } from "react-router-dom";


const ApplicationCard = ({ key, card, selectState }) => {

  const location = useLocation();

  // console.log(location.pathname.includes("success"));

  const copyToClipboard = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text)
      flash(`${fieldName} Copied to Clipboard`, "Copied")
    } catch (e) { console.error(e) }
  }

  return (
    location.pathname.includes("success")
      ?
      (
        <div
          className="bg-gradient-to-b from-[#b6d4ff] to-[#c6e7ff] flex flex-col justify-between min-w-80 w-auto rounded-3xl overflow-hidden shadow-md p-6 transition duration-500 hover:shadow-xl"
          key={key}
        >
          <h3 className="text-lg font-bold mb-2">{card.user.fullName}</h3>
    
          <div className="space-y-1">
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Applied for:</span> {card.visaType} <span> VISA</span>
            </p>
    
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Appointment Type: </span> {card.appointmentType}
            </p>
    
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Number of Applicants: </span>{" "}
              {card.totalApplicants}
            </p>
    
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Window: </span> {card.duration}
            </p>
    
            <div>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">OFC Location: </span> {card.preferredOFC}
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">Consular Location: </span> {card.preferredConsolar}
              </p>
            </div>
    
            {/* <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Payment Time: </span> {card.PaymentTime}
            </p> */}
    
          </div>
    
          <div className="my-4 space-y-1">
            <h3 className="text-lg font-bold">Contact Details</h3>
    
            <div className="text-gray-700 text-sm md:text-base w-full flex items-center justify-between gap-12">
              <span>
                <span className="font-semibold">Phone: </span>
                {card.user.mobileNumber}
              </span>
    
              <button type="button" onClick={() => copyToClipboard(card.phoneNo, "Contact Number")}>
                <MdContentCopy className="text-xl opacity-80" />
              </button>
            </div>
    
            <div className="text-gray-700 text-sm md:text-base w-full flex items-center justify-between gap-12">
              <span>
                <span className="font-semibold">Email: </span>
                {card.user.email}
              </span>
    
              <button type="button" onClick={() => copyToClipboard(card.email, "Email")}>
                <MdContentCopy className="text-xl opacity-80" />
              </button>
            </div>
    
            <div className="text-gray-700 text-sm md:text-base w-full flex items-center justify-between gap-12">
              <span>
                <span className="font-semibold">Transaction ID: </span>
                {card.payment}
              </span>
    
              <button type="button" onClick={() => copyToClipboard(card.transactionID, "Transaction ID")}>
                <MdContentCopy className="text-xl opacity-80" />
              </button>
            </div>
          </div>
        </div>
      )
      :
      (
        <div
          className="bg-gradient-to-b from-[#b6d4ff] to-[#c6e7ff] flex flex-col justify-between min-w-80 w-auto rounded-3xl overflow-hidden shadow-md p-6 transition duration-500 hover:shadow-xl"
          key={key}
        >
          <h3 className="text-lg font-bold mb-2">{card.user.fullName}</h3>
    
          <div className="space-y-1">
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Applied for:</span> {card.appointment.visaType} <span> VISA</span>
            </p>
    
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Appointment Type: </span> {card.appointment.appointmentType}
            </p>
    
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Number of Applicants: </span>{" "}
              {card.appointment.totalApplicants}
            </p>
    
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Window: </span> {card.appointment.duration}
            </p>
    
            <div>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">Amount to be Paid: </span> {card.appointment.fee}
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">Payment State: </span> Pending
              </p>
            </div>
    
            {/* <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Payment Time: </span> {card.PaymentTime}
            </p> */}
    
          </div>
    
          <div className="my-4 space-y-1">
            <h3 className="text-lg font-bold">Contact Details</h3>
    
            <div className="text-gray-700 text-sm md:text-base w-full flex items-center justify-between gap-12">
              <span>
                <span className="font-semibold">Phone: </span>
                {card.user.mobileNumber}
              </span>
    
              <button type="button" onClick={() => copyToClipboard(card.phoneNo, "Contact Number")}>
                <MdContentCopy className="text-xl opacity-80" />
              </button>
            </div>
    
            <div className="text-gray-700 text-sm md:text-base w-full flex items-center justify-between gap-12">
              <span>
                <span className="font-semibold">Email: </span>
                {card.user.email}
              </span>
    
              <button type="button" onClick={() => copyToClipboard(card.email, "Email")}>
                <MdContentCopy className="text-xl opacity-80" />
              </button>
            </div>
    
            <div className="text-gray-700 text-sm md:text-base w-full flex items-center justify-between gap-12">
              <span>
                <span className="font-semibold">Transaction ID: </span>
                {card.payment}
              </span>
    
              <button type="button" onClick={() => copyToClipboard(card.transactionID, "Transaction ID")}>
                <MdContentCopy className="text-xl opacity-80" />
              </button>
            </div>
          </div>
        </div>      
      )
  )
  
};

export default ApplicationCard;