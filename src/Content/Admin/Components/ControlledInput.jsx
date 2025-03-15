import React from 'react'
import { Controller } from 'react-hook-form'

function ControlledInput({ id, name, label, control, type, placeholder, error, options, jobType, setJobType, defaultValue }) {
    return (
        <div className='mb-4'>
            <label className='block text-sm p-regular text-black'>{label}</label>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (

                    <>
                        {/* For Select Type Form Fields */}
                        {type === "options" && (
                            <select
                                {...field}
                                disabled={(name === "duration" && jobType === 'Full Time') ? true : false}
                                onChangeCapture={(e) => {
                                    if (id === "create-job") localStorage.setItem(name, e.target.value)
                                    if (name === "jobType") setJobType(e.target.value)
                                }}
                                placeholder={options.default}
                                className="mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 px-4"
                            >
                                {Object.entries(options).map(([key, value]) =>
                                (
                                    <option key={key} value={value}>
                                        {value}
                                    </option>
                                )
                                )}
                            </select>
                        )}

                        {/* For Text Area */}
                        {type === "textArea" && (
                            <textarea
                                {...field}
                                type={type}
                                onChangeCapture={(e) => {
                                    if (id === "create-job") localStorage.setItem(name, e.target.value)
                                }}
                                placeholder={placeholder}
                                className="mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 px-4 "
                            ></textarea>
                        )}

                        {/* For other inputs */}
                        {type !== "options" && type !== "textArea" && (
                            <input
                                {...field}
                                type={type}
                                onChangeCapture={(e) => {
                                    if (id === "create-job") localStorage.setItem(name, e.target.value)
                                }}
                                placeholder={placeholder}
                                className="mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 px-4 "
                            />
                        )}
                    </>
                )}
            />

            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}

        </div>
    )
}

export default ControlledInput