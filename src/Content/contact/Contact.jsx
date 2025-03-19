import React from 'react'
import ContactItem from './components/ContactItem'
import Hero from '../../Components/Hero'

const Contact = () => {
  const contacts = [
    {
      name:"email",
      icon:"/images/logos/logo-gmail.png",
      hoverIcon:"/images/logos/logo-gmail-new.png",
      detail:"soumil.biswas19@gmail.com",
      color:"bg-[#ea4334b3]",
    },
    {
      name:"facebook",
      icon:"/images/logos/logo-facebook.png",
      hoverIcon:"/images/logos/logo-facebook-inverted.png",
      detail:"Soumil Biswas",
      color:"bg-[#4b64b4b3]",
      url: "https://www.facebook.com/soumil.biswas.1",
    },
    {
      name:"linkedIn",
      icon:"/images/logos/logo-linkedin.png",
      hoverIcon:"/images/logos/logo-linkedin-inverted.png",
      detail:"soumil-biswas-254206246",
      color:"bg-[#389cffb3]",
      url: "https://www.linkedin.com/in/soumil-biswas-254206246/",
    },
    {
      name:"gitHub",
      icon:"/images/logos/logo-github.png",
      hoverIcon:"/images/logos/logo-github-inverted.png",
      detail:"Soumil-Biswas",
      color:"bg-gradient-to-b from-[#a735f3b3] to-[#8168fdb3]",
      url: "https://github.com/Soumil-Biswas",
    },
    {
      name:"gitHub2",
      icon:"/images/logos/logo-github-inverted.png",
      hoverIcon:"/images/logos/logo-github.png",
      detail:"Soumil-Biswas-Web",
      // color:"bg-gradient-to-b from-[#00786fb3] to-[#005f5ab3]",
      color:"bg-gradient-to-t from-[#a735f3b3] to-[#8168fdb3]",
      url: "https://github.com/Soumil-Biswas-Web",
    },
    {
      name:"youTube",
      icon:"/images/logos/logo-youtube.png",
      hoverIcon:"/images/logos/logo-youtube-inverted.png",
      detail:"@soumilbiswas1841",
      color:"bg-[#ff0000b3]",
      url: "https://www.youtube.com/@soumilbiswas1841",
    },
    {
      name:"DVDR",
      icon:"/images/logos/logo-inverted.png",
      hoverIcon:"/images/logos/logo.png",
      detail:"@DVDR-Main",
      color:"bg-DVDR bg-right bottom-0 top-auto bg-[0_300px] h-[600px] bg-cover",
      url: "https://soumil-biswas-web.github.io/DVDR/",
    },
    {
      name:"email2",
      icon:"/images/logos/logo-microsoft.png",
      hoverIcon:"/images/logos/logo-microsoft-inverted.png",
      detail:"soumil.biswas19@hotmail.com",
      color:"bg-[#4dc7ffb3]",
    },
  ]
  return (
    <div className='magic-center gap-5 mb-10 w-[90vw]'>
      <Hero
        h1="Contacts"
        h3="Where to find me."
      />
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </div>
  )
}

export default Contact
