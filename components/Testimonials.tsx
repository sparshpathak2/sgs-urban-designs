import { Libre_Baskerville } from 'next/font/google';
import React from 'react'

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const testimonials = [
    {
        name: 'Ravi Sharma',
        text: `We hired SGS technical solutions for installing fire-rated doors and partitions in our office complex. The team was professional, efficient, and ensured everything met safety standards. The quality of work exceeded our expectations, and the project was completed on time. Highly recommended!`,
    },
    {
        name: 'Sunil Kumar',
        text: `The modular spaces and fire-rated panels provided by SGS Technical Solutions transformed our workspace. The installation was seamless, and the team guided us in selecting the right solutions for both safety and aesthetics. Their attention to detail and commitment to quality is commendable.`,
    },
    {
        name: 'Ashish Singh',
        text: `We worked with SGS to upgrade our manufacturing facility with fire-rated doors and partitions. From consultation to execution, they were thorough and knowledgeable. The installations are sturdy, compliant with all safety regulations, and have significantly improved our facility’s safety standards.`,
    },
];

export default function Testimonials() {
    return (
        <>
            <div className='flex flex-col gap-8 w-full'>

                <div className='flex flex-col items-center gap-1'>
                    <h2 className={`${libre.className} font-semibold text-2xl md:text-3xl`}>Testimonials</h2>
                    <div className='text-center'>Don't just take our word for it — hear it from our customers!</div>
                </div>

                <div className='hidden sm:flex justify-between gap-16 w-full over-x-hidden'>

                    {testimonials.map((item, index) => (
                        <div key={index} className='flex flex-col gap-4 w-full'>
                            <div className='text-wrap whitespace-pre-line'>{item.text}</div>
                            <div className='flex gap-2 items-center'>
                                <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>
                                    {item.name.charAt(0)}
                                </div>
                                <div className='flex flex-col'>
                                    <div>{item.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Mobile View - Auto Scroll */}
                <div className='sm:hidden w-full overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar'>
                    <div className='flex gap-4 w-max pb-8'>
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className='flex-shrink-0 w-70 flex flex-col gap-4 border-1 border-gray-200 shadow-md p-4'
                            >
                                <div className='text-wrap whitespace-pre-line'>{item.text}</div>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>
                                        {item.name.charAt(0)}
                                    </div>
                                    <div className='flex flex-col'>
                                        <div>{item.name}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>



        </>
    )
}
