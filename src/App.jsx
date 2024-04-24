import { useState, useEffect } from "react";
import AccordionItem from "./components/AccordionItem";

function App() {
    const accordionData = [
        {
            id: 1,
            title: "HTML",
            content: [
                {
                    Que: "Is HTML a programming language?",
                    ans: "No",
                },
                {
                    Que: "Can HTML be used to create interactive web pages?",
                    ans: "Yes",
                },
                {
                    Que: "Does HTML stand for Hyper Text Markup Language?",
                    ans: "Yes",
                },
                {
                    Que: "Is HTML5 the latest version of HTML?",
                    ans: "Yes",
                },
                {
                    Que: "Can HTML elements have multiple attributes?",
                    ans: "Yes",
                },
            ],
        },
        {
            id: 2,
            title: "CSS",
            content: [
                {
                    Que: "Is CSS a programming language?",
                    ans: "No",
                },
                {
                    Que: "Can CSS be used to style HTML documents?",
                    ans: "Yes",
                },
                {
                    Que: "Does CSS stand for Cascading Style Sheets?",
                    ans: "Yes",
                },
                {
                    Que: "Is CSS3 the latest version of CSS?",
                    ans: "Yes",
                },
                {
                    Que: "Can CSS properties be applied directly to HTML elements?",
                    ans: "Yes",
                },
            ],
        },
        {
            id: 3,
            title: "JavaScript",
            content: [
                {
                    Que: "Is JavaScript a statically typed language?",
                    ans: "No",
                },
                {
                    Que: "Can JavaScript run on both the client-side and server-side?",
                    ans: "Yes",
                },
                {
                    Que: "Does JavaScript support object-oriented programming (OOP)?",
                    ans: "Yes",
                },
                {
                    Que: "Is JavaScript a subset of Java?",
                    ans: "No",
                },
                {
                    Que: "Can JavaScript be used to manipulate HTML elements?",
                    ans: "Yes",
                },
            ],
        },
        {
            id: 4,
            title: "React",
            content: [
                {
                    Que: "Is React a JavaScript library for building user interfaces?",
                    ans: "Yes",
                },
                {
                    Que: "Does React use a virtual DOM for optimal performance?",
                    ans: "Yes",
                },
                {
                    Que: "Can React components have their own state?",
                    ans: "Yes",
                },
                {
                    Que: "Is JSX a syntax extension for JavaScript?",
                    ans: "Yes",
                },
                {
                    Que: "Can React be used to create both web and mobile applications?",
                    ans: "Yes",
                },
            ],
        },
    ];

    const [open, setOpen] = useState(null);
    const [editable, setEditable] = useState(false);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    useEffect(() => {
        const checkEditable = () => {
            for (let i = open; i > 0; i--) {
                const savedData = localStorage.getItem(i - 1);
                if (!savedData) {
                    setEditable(false);
                    return;
                }
                const previousFormData = JSON.parse(savedData);
                const allValuesYesOrNA = Object.values(previousFormData).every(
                    (value) => value === "Yes" || value === "NA"
                );
                if (allValuesYesOrNA) {
                    setEditable(true);
                } else {
                    setEditable(false);
                    return;
                }
            }
            setEditable(true);
        };

        checkEditable();
    }, [open]);

    return (
        <div className="">
            <section className="bg-[#F6F6F6] text-white h-screen grid place-items-center">
                <div className="px-[40px] max-w-7xl">
                    <button
                        onClick={clearLocalStorage}
                        className="mb-4 bg-blue-500 text-white px-4 text-sm py-2 rounded-md"
                    >
                        Clear Local Storage
                    </button>
                    {accordionData.map((data, index) => (
                        <AccordionItem
                            key={data.id}
                            open={index === open}
                            toggle={() => toggle(index)}
                            title={data.title}
                            desc={data.content}
                            editable={editable}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
