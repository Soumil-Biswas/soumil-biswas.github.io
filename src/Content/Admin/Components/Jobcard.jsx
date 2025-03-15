import { useState } from "react"

const Jobcard = () => {

    const [expandedCard, setExpandedCard] = useState(false)
    const [cards, setCards] = useState([
        {
            id: 1,
            heading: "Software Development",
            location: "Remote",
            stipend: "₹10K/month - ₹25K/month",
            description: "Join our Software Development team and work with the most advanced technologies in the industry: React, Node.js, Java, Python, and HTML/CSS to build scalable and efficient solutions.",
            details: {
                head: "Skills",
                skills: ["Java", "SQL", "Flutter"],
                deshead: "Full job description",
                point1: " Full Stack Development: implementing robust end-to-end solutions by utilizing the front-end and the back-end technologies. ",
                point2: " Backend Development: Develop the back-end logic for high-speed applications in a server.",
                point3: "Frontend Development: Design interactive and responsive user interfaces to make users have an easy time.",
            },
        },
        {
            id: 2,
            heading: "Digital Marketing",
            location: "Remote",
            stipend: "₹10K/month - ₹25K/month",
            description: "Join our Software Development team and work with the most advanced technologies in the industry: React, Node.js, Java, Python, and HTML/CSS to build scalable and efficient solutions.",
            details: {
                head: "Skills",
                skills: ["Java", "SQL", "Flutter"],
                deshead: "Full job description",
                point1: " Full Stack Development: implementing robust end-to-end solutions by utilizing the front-end and the back-end technologies. ",
                point2: " Backend Development: Develop the back-end logic for high-speed applications in a server.",
                point3: "Frontend Development: Design interactive and responsive user interfaces to make users have an easy time.",
            },
        },
        {
            id: 3,
            heading: "UI/UX",
            location: "Remote",
            stipend: "₹10K/month - ₹25K/month",
            description: "Join our Software Development team and work with the most advanced technologies in the industry: React, Node.js, Java, Python, and HTML/CSS to build scalable and efficient solutions.",
            details: {
                head: "Skills",
                skills: ["Java", "SQL", "Flutter"],
                deshead: "Full job description",
                point1: " Full Stack Development: implementing robust end-to-end solutions by utilizing the front-end and the back-end technologies. ",
                point2: " Backend Development: Develop the back-end logic for high-speed applications in a server.",
                point3: "Frontend Development: Design interactive and responsive user interfaces to make users have an easy time.",
            },
        },
        {
            id: 4,
            heading: "Software Development",
            location: "Remote",
            stipend: "₹10K/month - ₹25K/month",
            description: "Join our Software Development team and work with the most advanced technologies in the industry: React, Node.js, Java, Python, and HTML/CSS to build scalable and efficient solutions.",
            details: {
                head: "Skills",
                skills: ["Java", "SQL", "Flutter"],
                deshead: "Full job description",
                point1: " Full Stack Development: implementing robust end-to-end solutions by utilizing the front-end and the back-end technologies. ",
                point2: " Backend Development: Develop the back-end logic for high-speed applications in a server.",
                point3: "Frontend Development: Design interactive and responsive user interfaces to make users have an easy time.",
            },
        },

    ]

    )



    const handleClose = (id) => {
        const updatetask = cards.filter((card) => card.id !== id)
        setCards(updatetask)
    }

    const handleToggleDetails = (id) => {
        setExpandedCard(expandedCard === id ? false : id);
    }


    return (
        <section className="m-12">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-12 ">
                {
                    cards.map((items) => {
                        const { id, heading, location, stipend, description, details } = items
                        return <div key={id} className="bg-[#F0FBFF] w-auto p-4 sm:p-4 lg:p-12 border-2 border-black rounded-xl space-y-3 shadow-lg shadow-slate-400  ">
                            <h1 className="p-bold text-md sm:text-md md:text-lg lg:text-[28px] underline">{heading}</h1>
                            <div className="flex sm:flex-auto">
                                <h4 className="mt-2">{location} </h4>
                                <span className="bg-[#235D83] p-1 ml-2 sm:ml-2 lg:ml-6 rounded-lg text-white">{stipend}</span>
                            </div>
                            <div className="" >

                                <p>{description} </p>
                                {expandedCard === id && (<div className="space-y-3">

                                    <h2 className="mt-4 h-auto">{details.head}</h2>
                                    <div className="flex space-x-4 text-center ">
                                        <span className="bg-slate-300 w-20  rounded-lg border-2 border-black ">{details.skills[0]}</span>
                                        <span className="bg-slate-300 w-20  rounded-lg border-2 border-black">{details.skills[1]}</span>
                                        <span className="bg-slate-300 w-20  rounded-lg border-2 border-black ">{details.skills[2]}</span>
                                    </div>

                                    <h2>{details.deshead}</h2>
                                    <p>{details.point1}</p>
                                    <p>{details.point2}</p>
                                    <p>{details.point3}</p>
                                </div>)}

                                <button className="text-blue-500" onClick={() => handleToggleDetails(id)} >{expandedCard === id ? "Show Less" : "Read More..."}</button>

                            </div>



                            <div className="space-x-4 pt-4 justify-end text-end">
                                <button className="bg-[#235D83] p-1 rounded-lg w-24 cursor-pointer text-white">Edit</button>
                                <button className="bg-[#C9C9C9]  p-1 w-24 rounded-lg" onClick={() => handleClose(id)}>Delete</button>
                            </div>
                        </div>

                    })
                }




            </div>
        </section>
    )
}

export default Jobcard