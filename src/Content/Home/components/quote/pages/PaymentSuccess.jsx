import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const PaymentSuccess = () => {
  const location = useLocation();
  const data = location.state;

  const appointmentDetails = [
    { label: 'Visa Type', value: data?.finalData.visaType },
    { label: 'Appointment Type', value: data?.finalData.appointmentType },
    { label: 'Total Applicants', value: data?.finalData.totalApplicants },
    { label: 'Preferred OFC', value: data?.finalData.preferredOFC },
    { label: 'Preferred Consolar', value: data?.finalData.preferredConsolar },
    { label: 'Start Date', value: data?.finalData.startDate },
    { label: 'End Date', value: data?.finalData.endDate },
    { label: 'Duration', value: data?.finalData.duration },
    { label: 'Fee', value: `₹${data?.finalData.fee}` },
    { label: 'Payment ID', value: data?.paymentDetails.razorpay_payment_id },
    { label: 'Order ID', value: data?.paymentDetails.razorpay_order_id },
  ];

  const downloadPDF = () => {
    const element = document.getElementById('receipt-content');

    // Options for the PDF generation
    const options = {
      margin: 0.5, // Set a smaller margin for more content space
      filename: 'visa_sprint_receipt.pdf',
      image: { type: 'jpeg', quality: 1 }, // Set quality to 1 for best image quality
      html2canvas: { scale: 3 }, // Increase scale for better resolution
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } // Use A4 format for better layout
    };

    html2pdf()
      .from(element) // The HTML element to convert
      .set(options) // Set the options
      .save(); // Save the generated PDF
  };

  return (
    data ?
      <div className="font-sans leading-relaxed p-6">
        <div className='text-center my-12'>
          <button onClick={downloadPDF} className="rounded-full px-8 py-3 bg-green-400 text-white font-semibold">
            Download Receipt
          </button>
        </div>

        <div className='border p-12 border-gray-300'>
          {/* Only the below content must be included in the receipt */}
          <div id="receipt-content">

            <div className='relative flex items-center justify-center py-12'>
              <img className='w-32 absolute top-1/2 right-0 -translate-y-1/2' src="/VISA SPRINT (1).webp" alt="" />
              <h1 className='text-3xl font-semibold uppercase'>Visa Sprint</h1>
            </div>

            <h2 className="text-xl font-semibold mb-2">Appointment Confirmation</h2>
            <p className="">Dear {data?.userDetails.fullName},</p>
            <p className="mb-6">Thank you for booking your appointment with us! Here are the details of your appointment:</p>
            <table className="min-w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {appointmentDetails.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{item.label}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mb-4">If you have any questions or need further assistance, feel free to contact us.</p>
            <p className="mb-4">Best regards,<br />Visa Sprint Team</p>

            {/* Add the company URL link here */}
            <div className="text-center my-8">
              <span className='font-medium'>Visit our Website:&nbsp;&nbsp;</span>
              <a href="https://visasprint.itdoubt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                www.visasprint.itdoubt.com
              </a>
            </div>

          </div>
        </div>

      </div>
      :
      <div className="my-60">
        <h1 className="text-2xl font-semibold">No Payment Receipt Found</h1>
      </div>
  );
};

export default PaymentSuccess;