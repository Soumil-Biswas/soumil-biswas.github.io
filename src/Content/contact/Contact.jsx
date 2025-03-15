import React from 'react'
import Form from './pages/Form'
import Hero from './pages/Hero'
import RightSection from './pages/RightSection'

const Contact = () => {
  const content = {
    mainTitle: "Feel free to Contact",
    description:
      "Have questions or need assistance with your visa process? We're here to help! Reach out to us for:",
    pointers: [
      "Visa slot booking support",
      "Mock interview training",
      "Filing and documentation guidance",
    ],
    contactDetails: [
      {
        img: "/contact/phone.webp",
        name: "Phone",
        detail: "+91-82228-91986",
      },
      {
        img: "/contact/gmail.webp",
        name: "Gmail",
        detail: "contact@visasprint.itdoubt.com",
      },
    ],
    socialMedia: [
      {
        img: "/contact/insta.webp",
        url: "https://www.instagram.com/visa_sprint/profilecard/?igsh=MWxheGJxdDR3MzJocQ==",
      },
      {
        img: "/contact/linkedin.webp",
        url: "https://www.linkedin.com/company/visa-sprint/posts/?feedView=all",
      },
      {
        img: "/contact/facebook.webp",
        url: "https://www.facebook.com/share/1HQ8i6W7Nu/?mibextid=wwXIfr",
      },
      {
        img: "/footer/icons8-whatsapp-48.webp",
        url: "https://chat.whatsapp.com/BydtI53ImsIK2FVWhDv9yI",
      },
      {
        img: "./contact/telegram.webp",
        url: "https://t.me/visa_slots_itdoubt",
      },
    ],
  };
  return (
    <div className=' bg-gray-100 w-full'>
      <Hero />

      <div className='relative  lg:mx-20  md:gap-2  mx-3 flex md:flex-row flex-col items-center gap-8 md:mt-16 mt-8 pb-10'>
        <Form />
        <RightSection data={content} />
      </div>

    </div>
  )
}

export default Contact
