'use client';

import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type FAQ = {
    question: string;
    answer: string;
};

type FAQCategory = {
    [key: string]: FAQ[];
};

const faqData: FAQCategory = {
    "General Queries": [
        {
            question: "What are the working hours of Vipul Motors showrooms and service centers?",
            answer:
                "Our showrooms are open from 9:30 AM to 7:00 PM, and service centers operate from 9:00 AM to 6:00 PM, Monday to Sunday. Timings may vary slightly by location.",
        },
        {
            question: "Where are Vipul Motors showrooms located?",
            answer:
                "Vipul Motors has multiple locations across Delhi-NCR, Rajasthan, and Haryana.",
        },
        {
            question: "Which car brands do you deal in?",
            answer:
                "We are an authorized dealer for Maruti Suzuki Arena and Nexa cars.",
        },
    ],
    "Car Sales & Booking": [
        {
            question: "How can I book a test drive?",
            answer:
                "You can book a test drive through our website, WhatsApp, or by calling your nearest showroom.",
        },
        {
            question: "Is home test drive available?",
            answer:
                "Yes, we offer home test drive services for selected models in selected areas.",
        },
        {
            question: "What documents are required to buy a new car?",
            answer:
                "You’ll need a valid ID proof, address proof, PAN card, and recent photographs. For loan cases, additional documents are required.",
        },
    ],
    "Finance & Insurance": [
        {
            question: "Do you provide finance options for car purchase?",
            answer:
                "Yes, we have tie-ups with major banks and NBFCs to offer competitive car loan options with quick approval.",
        },
        {
            question: "Can I get my car insured at Vipul Motors?",
            answer:
                "Absolutely. We offer motor insurance and renewal services through leading insurance providers.",
        },
        {
            question: "Do you assist with exchange offers?",
            answer:
                "Yes, we provide car exchange facilities with best market price valuation of your old car.",
        },
    ],
    "Service & Maintenance": [
        {
            question: "How can I book a car service?",
            answer:
                "You can book a service appointment online, through our mobile app, or by calling our service center directly.",
        },
        {
            question: "What services are included in the routine check-up?",
            answer:
                "Our routine service includes engine oil change, brake inspection, battery check, AC performance, tyre rotation, and more.",
        },
        {
            question: "Do you provide doorstep service or pick-up/drop facility?",
            answer:
                "Yes, we offer free pick-up and drop service in selected areas. Please confirm with your nearest branch.",
        },
    ],
    "Maruti Suzuki Smart Features": [
        {
            question: "What is the Maruti Suzuki Smart Finance platform?",
            answer:
                "It's a one-stop online platform that helps you choose, apply, and get car loan approval instantly.",
        },
        {
            question: "Can I track my service status online?",
            answer:
                "Yes, with the Maruti Suzuki Rewards App or website, you can track service status, history, and billing.",
        },
    ],
    "Others": [
        {
            question: "How can I provide feedback or raise a complaint?",
            answer:
                "You can reach out via our contact page, WhatsApp helpline, or call our customer care team. We value your feedback.",
        },
        {
            question: "Do you offer any loyalty or rewards program?",
            answer:
                "Yes, Maruti Suzuki Rewards program offers points on every service, insurance, and referral – which you can redeem later.",
        },
    ],
};


const categories = Object.keys(faqData);

export default function FAQs() {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            {/* Desktop */}
            <div className="hidden sm:flex gap-16 px-2 sm:px-16 justify-center">
                {/* Left: Categories */}
                <div className="flex flex-col gap-4 text-lg">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setActiveIndex(null); // reset FAQ open state on tab switch
                            }}
                            // className={`text-left font-semibold transition-all duration-200 ${selectedCategory === cat
                            //     ? "text-black border-b border-black"
                            //     : "text-gray-400"
                            //     }`}
                            className="flex gap-4"
                        >
                            <div className="font-semibold text-black/60">{`0${i + 1}.`}</div> <div
                                className={`text-left w-fit font-semibold cursor-pointer transition-all duration-200 ${selectedCategory === cat
                                    ? "text-black border-b border-black"
                                    : "text-gray-400 border-b border-gray-100"
                                    }`}
                            >{cat}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Right: FAQs */}
                {/* <div className="flex flex-col w-[800px] border-x-1 border-x-gray-200 border-t-1 border-t-gray-200"> */}
                <div className="flex flex-col w-[800px] border-t-1 border-t-gray-200">
                    {faqData[selectedCategory].map((faq, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white transition-all"
                        >
                            <button
                                onClick={() => toggleIndex(index)}
                                className="w-full flex justify-between items-center p-4 text-left font-medium cursor-pointer border-b-1 border-gray-200 border-x-1 border-x-gray-200"
                            >
                                <span>{faq.question}</span>
                                <span>{activeIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
                            </button>
                            <div
                                className={`p-4 text-gray-700 text-left transition-all duration-300 ease-in-out ${activeIndex === index ? "block border-b-1 border-gray-200 border-x-1 border-x-gray-200" : "hidden"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="sm:hidden flex flex-col gap-2 w-full">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setActiveIndex(null); // Reset open FAQ
                            }}
                            className={`whitespace-nowrap px-4 py-2 ${selectedCategory === category
                                ? "text-red-500 font-semibold border-b-2 border-b-red-500"
                                : "text-gray-700 border-gray-300"
                                } transition-all duration-200`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQs */}
                {/* <div className="mt-6 space-y-4"> */}
                <div className="flex flex-col border-x-1 border-x-gray-200 border-t-1 border-t-gray-200">
                    {faqData[selectedCategory].map((faq, index) => (
                        <div
                            key={index}
                            className="border-b-1 border-b-gray-200 bg-white overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setActiveIndex((prev) => (prev === index ? null : index))
                                }
                                className="w-full text-left px-4 py-3 bg-white"
                            >
                                <div className="flex justify-between font-semibold">
                                    <span>{faq.question}</span>
                                    <span>{activeIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
                                </div>
                            </button>
                            {activeIndex === index && (
                                <div className="px-4 py-3 bg-white border-t text-gray-700 text-start">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
