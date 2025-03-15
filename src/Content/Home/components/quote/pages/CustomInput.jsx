import React from "react";

const CustomInput = ({
  label,
  type = "text",
  register,
  name,
  validation,
  error,
  onBlur,
}) => {
  return (
    <div>
      <label className="font-bold lg:text-base text-sm whitespace-nowrap ">{label}</label>
      <br />
      <input
        type={type}
        {...register(name, validation)}
        onBlur={onBlur}
        className="bg-[#E4E4E4] mt-2 px-2 py-1 w-full"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
