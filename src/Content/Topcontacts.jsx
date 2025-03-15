export default function Topcontacts() {
  const icons = [
    {
      img: "/footer/Group 21.webp",
      url: "https://www.instagram.com/visa_sprint/profilecard/?igsh=MWxheGJxdDR3MzJocQ==",
    },
    {
      img: "/footer/Group 24.webp",
      url: "https://www.linkedin.com/company/visa-sprint/posts/?feedView=all",
    },
    {
      img: "/footer/Group 22.webp",
      url: "https://www.facebook.com/share/1HQ8i6W7Nu/?mibextid=wwXIfr",
    },
    {
      img: "/footer/icons8-whatsapp-48.webp",
      url: "https://chat.whatsapp.com/BydtI53ImsIK2FVWhDv9yI",
    },
  ];

  const objects = {
    phone: "+91 82228-91986",
    email: "contact@visasprint.itdoubt.com",
  };

  return (
    <div className="flex md:justify-end w-full bg-[#202A44] gap-2 p-2 text-[10px] sm:text-[15px] print:hidden fixed z-20 top-0 h-10">
      {icons.map((items, key) => (
        <div className=" items-center flex" key={key}>
          <a
            href={items.url}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className="cursor-pointer h-4  "
              src={items.img}
              alt={`Social media ${key}`}
            />
          </a>
        </div>
      ))}
      <div className=" justify-end flex gap-2">
        <p className="text-white ">{objects.phone}</p>
        <p className="text-white ">{objects.email}</p>
      </div>
    </div>
  );
}
