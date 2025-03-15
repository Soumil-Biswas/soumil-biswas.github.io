import { gsap } from "gsap";
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Contentvisa = () => {

    const params = useParams();
    const { id } = params;
    const textRef = useRef(null);
    //  const [seletedId,setSelectedId] = useState(null);


    useEffect(() => {
        const textElement = textRef.current;
        const textContent = textElement.textContent;

        const chars = textContent
            .split("")
            .map((char) => (char === " " ? "&nbsp;" : char));
        textElement.innerHTML = chars
            .map((char) => `<span>${char}</span>`)
            .join("");

        gsap.from(textElement.querySelectorAll("span"), {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
        });
    }, []);


    const contentArray = [
        {
            id: "B1B2_Visa",
            isRight: true,
            bannerImage: "/visa/b1 banner.webp",
            title: "B1/B2 Visa (Business/Tourist Visa)",
            desc: "The B1 (Business) and the B2 (Visitor) visas allow a temporary person's entry to and stay into the United States. It is a pretty flexible visa for people visiting the country on professional or leisurely purposes.",
            img: "/visa/B1 mid1.webp",
            subHead: "Key Information :",
            tickimg: "/Vector.webp",
            strong1: "Duration : ",
            para1: " Up to six months in the U.S.Extensions can be possible under specific conditions.",
            strong2: "Applications requirements : ",
            para2: " One must fill out DS-160, have an eligible passport, and have substantial financial stability and strong roots back home.",
            strong3: "Restriction : ",
            para3: "Employment or studies can neither be undertaken nor shall take place in the U.S.A",
            bottomhead: "Application Process",
            subtitle: "5 Step Follow You Can Get Your Visa Easily",
            arrow: "B1/B2 visa is best when staying for a short period to attend a business meeting , or look around for new opportunities for some fun  discoveries about the country ,so there is much to keep busy in the United States",

        },
        {
            id: "F1_Visa",
            isRight: true,
            bannerImage: "/visa/f1 banner.webp",
            title: "F1 Visa (Student Visa)",
            desc: "The F1 visa is for international students who are studying at the SEVP-approved U.S. institution in academic or language programs. It's a step towards someone's study plan at the U.S.",
            img: "/visa/F1 mid2.webp",
            subHead: "Important Points :",
            tickimg: "/Vector.webp",
            strong1: "Eligibility : ",
            para1: "This visa requires that the applicant receives an acceptance from a SEVP-approved U.S. institution.",
            strong2: "Duration of stay : ",
            para2: "The validity of the visa is during the whole course period and 60 more days after the course gets over.",
            strong3: "Work Authorization : ",
            para3: "Part-time work on campus is allowed. Students can also apply for OPT to further work outside the campus.",
            bottomhead: "Application Process",
            subtitle: "6 Step Follow You Can Get Your Visa Easily",
            arrow: "F1 Visa promises you the realization of your academic goals, along with some very rewarding cultural and educational experiences in the U.S.",
        },
        {
            id: "H1B_Visa",
            isRight: true,
            bannerImage: "/visa/h1b banner (2).webp",
            title: "H1B Visa or Work Visa",
            desc: "The H1B visa is perfect for those interested in career growth and who want to contribute their skills in the U.S.",
            img: "/visa/H1B mid3.webp",
            subHead: "Key points :",
            tickimg: "/Vector.webp",
            strong1: "Eligibility : ",
            para1: "A job in a U.S. employer and in addition to this a bachelor's degree or its equivalent.",
            strong2: "Valid-to-Period : ",
            para2: "For three years when first approved, to a maximum period of six years.",
            strong3: "Cap Limit : ",
            para3: "The total available annual cap is 65,000 visa's plus 20,000 where it has acquired a U.S. bachelor degree",
            bottomhead: "Application Process",
            subtitle: "4 Step Follow You Can Get Your Visa Easily",
            arrow: "The H1B visa is perfect for those interested in career growth and who want to contribute their skills in the U.S.",

        },
        {
            id: "J1_Visa",
            isRight: true,
            bannerImage: "/visa/J1 banner.webp",
            title: "J1 Visa (Exchange Visitor Visa)",
            desc: "The J1 visa supports cultural exchange and educational experience for individuals participating in an exchange program in the U.S.",
            img: "/visa/J1 right.webp",
            subHead: "Key Points :",
            tickimg: "/Vector.webp",
            strong1: "Duration : ",
            para1: "The J1 visa is given for the duration of the exchange program.",
            strong2: "Eligibility : ",
            para2: "The applicant must be sponsored by a program that is approved by the U.S. Department of State.",
            strong3: "Work Authorization : ",
            para3: "The J1 visa allows the applicant to work in the U.S. for the duration of the exchange program.",
            bottomhead: "Application Process",
            subtitle: "4 Step Follow You Can Get Your Visa Easily",
            arrow: "The J1 visa supports cultural exchange and educational experience for individuals participating in an exchange program in the U.S.",
        },
        {
            id: "L1_Visa",
            isRight: true,
            bannerImage: "/visa/L1 banner.webp",
            title: "L1 Visa (Intra-Company Transfer Visa)",
            desc: "The L1 visa allows employees moving within the same company into a US office by presenting growth opportunities within the firm.",
            img: "/visa/L1 right.webp",
            subHead: "Key Points :",
            tickimg: "/Vector.webp",
            strong1: "Duration : ",
            para1: "The L1 visa is given for an initial period of three years, which can be extended to a maximum of seven years.",
            strong2: "Eligibility : ",
            para2: "The applicant must have worked for the company for at least one year in the past three years.",
            strong3: "Work Authorization : ",
            para3: "The L1 visa allows the applicant to work in the U.S. for the duration of the exchange program.",
            bottomhead: "Application Process",
            subtitle: "4 Step Follow You Can Get Your Visa Easily",
            arrow: "The L1 visa allows employees moving within the same company into a US office by presenting growth opportunities within the firm.",
        },
        {
            id: "K1_Visa",
            isRight: false,
            bannerImage: "/visa/k1 banner (2).webp",
            title: "K1 Visa (Fiancé(e) Visa)",
            desc: "The K1 visa is also simply called the fiancé(e) visa. This allows an American citizen to bring in the foreign fiancé(e) into the United States to be married to him/her. This requires getting married within 90 days after entering the U.S.",
            img: "/visa/K1 mid6.webp",
            subHead: "Key Points :",
            tickimg: "/Vector.webp",
            strong1: "Duration : ",
            para1: "The K1 visa is valid for 90 days. Within this period, the couple must get married. The foreign spouse may apply a status adjustment to become a permanent resident once they have been wed.",
            strong2: "Application Requirements : ",
            para2: "The petitioner must be a U.S. citizen. Both parties must be free to marry and there should be a bona fide relationship proof of in-person meetings within the past two years, except when prevented for specific reasons.",
            strong3: "Limitations : ",
            para3: "No employment of any kind in the U.S. is permitted under a K1 visa until work authorization is granted. No person will be allowed to stay in the U.S. beyond 90 days without marrying the petitioner.",
            bottomhead: "Application Process",
            subtitle: "7 Step Follow You Can Get Your Visa Easily",
            arrow: "The K1 visa is perfect for those interested in career growth and who want to contribute their skills in the U.S.",

        }
    ]

    const selectedContent = contentArray.find(item => item.id === id);

    if (!selectedContent) {
        return <div>Content not found</div>;
    }


    const { bannerImage, title, desc, subHead, img, tickimg, strong1, para1, strong2, para2, strong3, para3, bottomhead, subtitle, arrow, isRight } = selectedContent;

    return (
        <section className='bg-gray-100'>
            <div>
                <div className="flex mb-10 relative min-h-[300px]">
                    <img className="w-full object-cover" src={bannerImage} alt="Banner" />
                    <div className="absolute  bottom-9 left-6 md:bottom-24 md:left-16 lg:bottom-40 lg:left-32">
                        <h1 ref={textRef} className="text-white text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold">
                            {title}
                        </h1>
                    </div>
                </div>

                <div className="p-4 md:p-12 space-y-2 ">
                    <h2 className="font-semibold text-[32px]">{title}</h2>
                    <p className="mt-10 text-pretty text-lg">{desc}</p>

                    <div className={`mt-1 flex flex-col gap-6 md:gap-8 lg:gap-28 ${isRight? "md:flex-row" : "md:flex-row-reverse"}`}>

                        <div className="space-y-4 lg:w-[60%]">
                            <h3 className=" font-bold mt-5 text-lg">{subHead}</h3>

                            <div className=''>
                                {[
                                    { strong: strong1, para: para1 },
                                    { strong: strong2, para: para2 },
                                    { strong: strong3, para: para3 }
                                ].map((item, index) => (
                                    <div key={index} className='flex items-center mb-2 '>

                                        <div className="hidden sm:hidden bg-gray-200 rounded-full p-2 px-2 md:gap-4 md:flex items-center h-9">

                                            <img src={tickimg} className="h-4 w-4 md:w-16 lg:w-6" alt="icon" />
                                        </div>
                                        <p className="md:ml-2 lg:ml-4">
                                            <strong>{item.strong}</strong> {item.para}
                                        </p>
                                    </div>
                                ))}
                            </div>


                        </div>
                        {/* {
                            id === "e978e401626e6" ? (<img className='mt-8 justify-self-centent flex-row-reverse md:justify-self-start md:h-96  lg:h-96 ' src={img} alt="right Image" />) : (<img className='mt-8 justify-self-centent md:justify-self-start md:h-96  lg:h-96 ' src={img} alt="right Image" />)
                        } */}
                        <img className='mt-8 drop-shadow-xl shadow-gray-500 justify-self-centent md:justify-self-start md:h-96  lg:h-96 ' src={img} alt="right Image" />


                    </div>
                </div>

                {/* Bottom part */}

                <h2 className="text-center pt-6 font-bold text-3xl">
                    {bottomhead}
                </h2>
                <h3 className="text-center pt-3 font-bold text-2xl">
                    {subtitle}
                </h3>

                <div className="flex justify-center pt-8 ">
                    <img className="" src="/visa/steps.png" alt="steps image" />

                </div>

                <div className="relative  ">
                    <img className="relative h-40  mt-16 md:pl-2 w-full " src="/visa/tourArrow  59.webp" alt="rectangle" />
                    <div className="text-sm md:text-lg lg:text-xl ">
                        <p className="absolute text-center md:pl-24 pl-4 pr-12 top-6 left-6 md:top-7  md:left-10 md:pr-12 lg:pr-24">
                            {arrow}
                        </p>
                    </div>

                    <img className="absolute  top-[15px] md:top-[15px] md:left-3  md:w-auto h-33 " src="/visa/tourArrow 9.webp" alt="arrow" />
                </div>
            </div>

        </section>

    )
}

export default Contentvisa;