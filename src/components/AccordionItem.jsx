import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const AccordionItem = ({ open, toggle, title, desc }) => {
    const [showBtn, setShowBtn] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        // Load data from localStorage when component mounts
        const savedData = localStorage.getItem(`accordion_${title}`);
        if (savedData) {
            setFormData(JSON.parse(savedData));
        } else {
            // Set default values to "No" for all questions
            const defaultFormData = {};
            desc.forEach((data, index) => {
                defaultFormData[index] = "No";
            });
            setFormData(defaultFormData);
        }
    }, [title, desc]);

    const handleForm = () => {
        setShowBtn(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to localStorage
        localStorage.setItem(`accordion_${title}`, JSON.stringify(formData));
        setShowBtn(false);
    };

    const handleChange = (index, value) => {
        setFormData({
            ...formData,
            [index]: value
        });
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
                                    <label className="flex gap-2">
                                        <input
                                            type="radio"
                                            name={`answer_${index}`}
                                            value="Yes"
                                            onChange={() => handleChange(index, "Yes")}
                                            checked={formData[index] === "Yes"}
                                        />
                                        <span>Yes</span>
                                    </label>
                                    <label className="flex gap-2">
                                        <input
                                            type="radio"
                                            name={`answer_${index}`}
                                            value="No"
                                            onChange={() => handleChange(index, "No")}
                                            checked={formData[index] === "No"}
                                        />
                                        <span>No</span>
                                    </label>
                                    <label className="flex gap-2">
                                        <input
                                            type="radio"
                                            name={`answer_${index}`}
                                            value="NA"
                                            onChange={() => handleChange(index, "NA")}
                                            checked={formData[index] === "NA"}
                                        />
                                        <span>NA</span>
                                    </label>
                                </div>
                            </div>
                        ))}
                        {showBtn ? (
                            <div className="flex gap-4 mt-7">
                                <button
                                    type="submit"
                                    className="border py-1 px-3 rounded-md text-red-500"
                                >
                                    Save
                                </button>
                                <button type="button" onClick={() => setShowBtn(false)}>Cancel</button>
                            </div>
                        ) : null}
                    </form>
                </div>
            </Collapse>
        </div>
    );
};

export default AccordionItem;
