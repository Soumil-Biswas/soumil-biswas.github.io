import React from "react";
import { Link } from "react-router-dom";

function Section5() {
  return (
    <div className=" text-center md:pl-20 md:pr-20 pt-4 p-4 mb-8">
      <h2 className="text-4xl font-bold">Join Our Growing Community</h2>
      <p className="pb-4 md:pb-1 pt-4 text-lg">
        Keep up with the most recent visa updates, expert insights, and
        motivating success stories by connecting with us on social media. Become
        a member of our community and take the next step in reaching your
        international aspirations!
      </p>
      <Link to="/Contact">
        <button className="bg-[#202A44] lg:mt-10  shadow-[0px_4px_25px_0px_#00000040] text-white px-8 py-3 rounded-lg  text-2xl font-bold  hover:bg-slate-300 hover:text-black duration-300">
          Join Now
        </button>
      </Link>
    </div>
  );
}

export default Section5;
