import React from "react";
import { Link } from "react-router-dom";

const Section3 = ({ data }) => {
  const { title, features } = data;

  const channels = [
    {
      name: "WhatsApp Channel",
      url: "/interview/WhatsAppChannel.svg",
      redirect: "https://www.whatsapp.com/channel/0029Vb0Y1xXGOj9qZe7dAI0Z",
    },
    {
      name: "WhatsApp Group",
      url: "/interview/WhatsAppGroup.svg",
      redirect: "https://chat.whatsapp.com/BydtI53ImsIK2FVWhDv9yI",
    },
    {
      name: "Telegram Channel",
      url: "/interview/Telegram.svg",
      redirect: "https://t.me/visa_slots_itdoubt",
    },
  ];
  return (
    <div className="my-5">
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold my-3">
        {title}
      </h2>

      {features.map((feature, index) => (
        <div key={feature.id} className="lg:text-lg md:text-base text-sm my-5">
          <h3 className="lg:text-2xl md:text-xl text-lg font-bold  ">
            {index + 1}
            {". "}
            {feature.heading}
          </h3>

          <ul>
            {feature.description.map((item, index) => (
              <li key={index} className="my-3 flex items-center  gap-3">
                &nbsp; &nbsp; <div className="rounded-full p-1 bg-black"></div>
                <div>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      <span className="font-bold">{item.bold}</span>
                      {item.text}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* channels */}
      <ul>
        {channels.map((channel, index) => (
          <Link to={channel.redirect} target="_blank"
            key={index}
            className="flex items-center gap-2  md:text-lg text-sm my-1 hover:translate-x-1 duration-300 hover:bg-slate-300 rounded-md"
          >
            <img
              className={`${
                channel.name.startsWith("WhatsApp") ? "h-10" : "w-8 m-1"
              }`}
              src={channel.url}
              alt="social-medai-icon"
            />
            <p className="ml-1">
              {channel.name}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Section3;
