import React from 'react';

const DateInput = ({
  label,
  name,
  register,
  errors,
  trigger,
  validate,
  
}) => {
  return (
    <div className='mr-2'>
      <label className="font-bold lg:text-sm md:text-xs text-sm ">{label}</label>
      <br />
      <input
        type="date"
        {...register(name, {
          required: `${label} is required`,
          validate: validate,
        })}
        onBlur={() => trigger(name)}
        className="bg-[#E4E4E4] cursor-pointer mt-2 px-2 py-1 lg:w-40 md:w-28 w-full"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default DateInput;
