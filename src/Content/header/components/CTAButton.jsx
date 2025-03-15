export default function CTAButton({ text, onTop }) {
  return (
    <button
      className={`p-2 lg:p-5 bg-[#202A44] text-white hover:bg-slate-300 hover:text-black duration-300  ${
        onTop 
          // ? "font-semibold hidden md:block h-full text-lg lg:text-3xl md:px-5 lg:px-10" 
          ? "rounded-lg hidden md:block" 
          : "rounded-lg"
      }`}
    >
      {text}
    </button>
  );
}
