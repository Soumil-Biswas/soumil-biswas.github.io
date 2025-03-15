import React, { useState, useEffect } from "react";

export default function PopupAnnouncement({ showPopup, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showPopup) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  if (!showPopup && !isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 md:p-1 p-2">
      <div
        data-lenis-prevent
        className={`bg-white rounded-lg shadow-lg w-full max-w-xl text-center transform transition-all duration-1000 max-h-screen overflow-y-auto ${
          showPopup
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* Header Section */}
        <div className=" flex justify-center items-center space-x-8 md:pl-0 pl-4">
          <div>
            <h1 className="text-3xl font-bold text-teal-600">IMPORTANT</h1>
            <h2 className="text-xl font-semibold text-gray-700">
              ANNOUNCEMENT
            </h2>
          </div>
          <div>
            <img src="/msg.png" alt="/" className="md:h-32 h-20" />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="bg-blue-900 text-white font-semibold p-2 text-nowrap">
          <p className="text-left md:pl-8 pl-1 md:text-xl text-[18px] pb-1 text-pretty">
            {" "}
            Applicant Schedule OFC Appointment
          </p>

          <p className="text-left md:pl-8 pl-1  md:text-xs text-[8px] flex md:gap-6 gap-4">
            {" "}
            Visa Application Home{" "}
            <span> Applicant Schedule OFC Appointment</span>
          </p>
        </div>

        <div className="p-1 mt-4 mr-4 ml-4 text-gray-600 rounded-lg shadow-2xl">
          <p className="mb-3 bg-yellow-50 rounded-md text-sm p-2">
            You have reached the time for rescheduling your appointment.
            <br />
            Failure to keep the new date will require you to pay a new fee and
            schedule a new appointment. A new fee payment will be required if
            you miss your appointment.
          </p>
        </div>
        <a
          href="#"
          className="text-blue-600 hover:underline text-xs font-medium text-left flex pl-3"
        >
          Return to top
        </a>

        <div className="mt-6 md:p-0 p-2">
          <p className="md:text-lg text-sm font-bold text-teal-700 mb-4">
            THE US EMBASSY HAS ISSUED UPDATES FOR SCHEDULING APPOINTMENTS FOR
            ALL VISA TYPES.
          </p>
          <p className="text-red-600 md:text-1xl text-sm font-bold">
            THERE WILL BE ONLY ONE OPPORTUNITY TO SCHEDULE AND ONE OPPORTUNITY
            TO RESCHEDULE AN APPOINTMENT.
          </p>
          <p className="text-teal-700 md:text-lg text-sm font-bold">
            " This has been implemented starting
            <br />
            January 1, 2025."
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition mb-4"
        >
          I Understand
        </button>
      </div>
    </div>
  );
}
