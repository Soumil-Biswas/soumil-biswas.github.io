const FeeCard = ({ finalData,openModal }) => (
 <div className={`absolute ${finalData?"md:top-40  range-1024-1029:top-28 top-24":"md:top-52 top-36"}  lg:left-3 md:left-2 text-center px-5`}>
                <h2 className="text-3xl  font-bold mb-3">Service Fees</h2>
        {finalData ? (
          <>
            <p className="lg:text-lg md:text-sm mb-4">
              The cost to book a Dropbox{" "}
              <span className="text-[#105A88] font-bold">
                {finalData.visaType}
              </span>{" "}
              visa appointment for{" "}
              <span className="text-[#105A88] font-bold">
                {finalData.totalApplicants}
              </span>{" "}
              applicants in{" "}
              <span className="text-[#105A88] font-bold">
                {finalData.preferredOFC}
              </span>{" "}
              location within{" "}
              <span className="text-[#105A88] font-bold">
                {finalData.duration}
              </span>{" "}
              window is
            </p>
            <p className="font-bold text-5xl mb-6">₹{finalData.fee.toLocaleString()}</p>
          </>
        ) : (
          <p className="md:text-lg text-base mb-5 px-2">
            Fill out the form and click<span className="font-bold">{" "}Check Fees</span>  to see the Fees.
          </p>
        )}
        <button
         className="bg-[#105A88] whitespace-nowrap text-white my-2 lg:px-16 lg:w-40 md:px-8 px-3 text-xl py-2 font-semibold rounded-sm range-1024-1029:px-5 custom-1029:px-3"
          type="submit"
          form="paymentForm"
          onClick={ openModal}  
        >
          {finalData? "Book Now" : "Check Fees"}
        </button>
        </div>
);

export default FeeCard;
