import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useForm } from "react-hook-form";

export const AddItems = ({ itemType = "", examples = [], setter = () => {} }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState(examples);
    const [readMore, setReadMore] = useState(true);

    const handleInputChange = (e) => {      // Handle Form input display vlaue
        setNewItem(e.target.value);
    }

    const onSubmit = () => {
        addItem();
        // console.log(data)
    }

    const addItem = () => {     // Add Items in Array to be displayed
        if (newItem.trim() !== "") {
            setItems((t) => [... new Set([...t, newItem])]);
            setter((t) => [... new Set([...t, newItem])]);
            setNewItem("");
        }
    }

    const removeItem = (index) => {     // Remove Items from Array to be displayed
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        setter(updatedItems);
    }

    useEffect(() => {       // Set to LocalStorage
        localStorage.setItem((itemType + "s"), JSON.stringify(items));
    }, [items]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} id="addItems">
                <h2 className="block text-blue-400 font-medium mb-1">
                    {itemType + "s"}
                </h2>
                <div className="flex items-center px-2">
                    {/* Form Input */}
                    <input
                        type="text"
                        placeholder={"Add More..."}
                        className="p-2 w-full border-b border-black/20 outline-none focus:border-black"
                        value={newItem}
                        {...register(itemType, { required: itemType + " must have a name", onChange: handleInputChange })}
                    />
                    {/* Submit Button */}
                    <button
                        className="ml-2 p-2 rounded-lg transition duration-500 hover:bg-[#607C9F] bg-[#1C4476]">
                        <AiOutlinePlus color="white" size={20} type="submit" form="addItems"/>
                    </button>
                </div>
            </form>
            {errors[itemType] && (
                <p className="text-red-500 text-sm">{errors[itemType].message}</p>
            )}
            <div className="flex gap-2 mt-4">
                {items.map((item, index) => {
                    // Display More elements only if Read More button is not required
                    if (index <= 4 || !readMore) {
                        return (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs"
                            >
                                {item}
                                {/* X Button to remove Items */}
                                <button
                                    onClick={() => removeItem(index)}
                                    className="ms-2 text-[10px] font-extrabold leading-5"
                                >
                                    ✕
                                </button>
                            </span>
                        )
                    }
                })}

                {/* Activate / Deactive Read More Button when there are too many elements */}
                {readMore
                    ? <button
                        onClick={() => setReadMore(false)}
                        className={`text-[#5b80b0] font-semibold ${(items.length <= 5)
                            ? "hidden"
                            : ""
                            }`}
                    >
                        {"+ " + (items.length - 4) + " More"}
                    </button>
                    : <button
                        onClick={() => setReadMore(true)}
                        className="text-[#5b80b0] font-semibold"
                    >
                        {"See Less"}
                    </button>
                }
            </div>
        </div>
    )
}