import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const AccordionItem = ({ open, toggle, title, desc, editable, index }) => {
    const [showBtn, setShowBtn] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem(index);
        if (savedData) {
            setFormData(JSON.parse(savedData));
        } else {
            const defaultFormData = {};
            desc.forEach((data, index) => {
                defaultFormData[index] = "No";
            });
            setFormData(defaultFormData);
        }
    }, [desc, index]);

    const handleForm = () => setShowBtn(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(index, JSON.stringify(formData));
        setShowBtn(false);
    };

    const handleChange = (index, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [index]: value,
        }));
    };

    const handleCancel = () => {
        setShowBtn(false);
        const savedData = JSON.parse(localStorage.getItem(index)) || {};
        const defaultFormData = Object.assign({}, savedData);

        setFormData(defaultFormData);
    };

    return (
        <div className="pt-2 text-black">
            <div className="bg-white py-4 px-4 flex justify-between items-center cursor-pointer" onClick={toggle}>
                <p className="text-sm font-semibold"> {title} </p>
                <div className="text-sm"> {open ? <FaChevronDown /> : <FaChevronRight />} </div>
            </div>
            <Collapse isOpened={open}>
                <div className="bg-white px-7 pb-4">
                    <form onSubmit={handleSubmit} onChange={handleForm}>
                        {desc.map((data, index) => (
                            <div key={index}>
                                <p className="text-md pt-5 font-bold">{data.Que}</p>
                                <div className="flex gap-4 text-sm pt-1 px-4">
                                    {["Yes", "No", "NA"].map((option) => (
                                        <label key={option} className="flex gap-2">
                                            <input
                                                type="radio"
                                                name={`answer_${index}`}
                                                value={option}
                                                onChange={() => handleChange(index, option)}
                                                checked={formData[index] === option}
                                                disabled={!editable}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {showBtn && (
                            <div className="flex gap-4 mt-7">
                                <button type="submit" className="border py-1 px-3 rounded-md text-red-500">
                                    Save
                                </button>
                                <button type="button" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </Collapse>
        </div>
    );
};

export default AccordionItem;
