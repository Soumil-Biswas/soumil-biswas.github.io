import React from 'react'

const Dropdown = ({ label, options, register, name, error }) => {
  return (
    <div>
       <label className="font-bold lg:text-base text-sm whitespace-nowrap ">{label}</label>
      <br />
      <select
        {...register(name)}
        className={`bg-[#E4E4E4] ${name==="preferredOFC" || name==="preferredConsolar"?"lg:w-64 md:w-44":"lg:w-36"}  cursor-pointer mt-2 px-2 py-1  md:w-32 w-full`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value.toUpperCase()}>
            {option.label.toUpperCase()}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  )
}

export default Dropdown
