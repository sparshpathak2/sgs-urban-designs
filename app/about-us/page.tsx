import { BreadcrumbComponent } from '@/components/BreadcrumbComponent';
import { IconBuildingStore, IconCar, IconCarSuv, IconUsers } from '@tabler/icons-react'
import { ArrowUpRight } from 'lucide-react'
import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "About Us | Vipul Motors",
    description: "Discover the story behind Vipul Motors – our legacy, values, and commitment to delivering unmatched car buying and ownership experiences.",
};

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });


export default function page() {
    return (
        <div className='flex w-full justify-center'>
            <div className='flex flex-col w-full justify-center'>
                {/* <div>
                    <BreadcrumbComponent />
                </div> */}

                <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                    <div className='text-xl sm:text-2xl font-semibold'>About Us</div>
                    <div className='flex gap-2 items-center'>
                        <a href="/">
                            <div className='text-sm text-red-500 hover:text-text-600'>Home</div>
                        </a>
                        <div className='text-sm'>/</div>
                        <div className='text-sm'>About Us</div>
                    </div>
                </div>

                <div className='flex w-full justify-center'>
                    {/* <div className='flex w-full md:w-[65%] flex-col sm:justify-center py-4 sm:pt-8 sm:pb-16 px-4 md:px-0 gap-12 sm:gap-16'> */}
                    <div className='flex w-full flex-col sm:justify-center p-4 sm:py-8 gap-12 sm:gap-16 max-w-6xl'>

                        {/* <div className='sm:w-1/2 w-full flex flex-col gap-4'> */}
                        <div className='w-full flex flex-col sm:flex-row gap-8 sm:gap-4 h-full'>
                            <div className='w-full sm:w-1/3 flex flex-col gap-4 justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <div className={`${libre.className} text-xl font-semibold`}>DRIVEN BY TRUST.</div>
                                    <div className={`${libre.className} text-xl font-semibold`}>DEFINED BY EXCELLENCE.</div>
                                </div>

                                <div className="hidden sm:flex w-full flex-col justify-center gap-8">

                                    <div className="flex flex-col gap-1 w-full">

                                        <div className="flex gap-4 items-center">
                                            <div className="py-1.5">
                                                <IconUsers size={22} />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="font-semibold">100+ Happy Customers</div>
                                                {/* <div>Trusted by over 50 lakh satisfied customers across the country.</div> */}
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="py-1">
                                                <IconBuildingStore size={22} />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="font-semibold">2 Workshops</div>
                                                {/* <div>Get expert care and service at our 19 authorized workshops.</div> */}
                                            </div>
                                        </div>

                                    </div>

                                    {/* <Button className='w-fit'>Contact Us</Button> */}
                                    <a href="/contact-us" className="group flex gap-2 items-center border-1 bg-red-500 hover:bg-red-600 text-white w-fit h-fit px-4 py-3">
                                        <div className="text-sm">Contact Us</div>
                                        <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>

                                </div>

                            </div>

                            <div className="w-full sm:w-2/3 flex flex-col gap-2">
                                <p>
                                    SGS Technical Solutions is a dynamic and innovation-driven manufacturing enterprise delivering precision-engineered solutions across modular kitchens (wooden & stainless steel), fire safety, cleanroom equipment, electrical panels, and insulation systems. Built on a foundation of quality craftsmanship, stringent compliance standards, and customer-centric service, we strive to set new benchmarks in safety, durability, and performance for industrial, commercial, and residential infrastructure.
                                </p>
                                <p>
                                    Led by a team of seasoned industry professionals, SGS Technical Solutions combines advanced manufacturing capabilities with deep technical expertise to ensure robust product development, timely project execution, and unmatched service reliability.
                                </p>
                                <p>
                                    At SGS Technical Solutions, we believe excellence is achieved through a blend of technical expertise, meticulous execution, and customer-centric service. Our team of skilled engineers, technicians, and project managers brings in-depth knowledge, hands-on experience, and dedication to every project, ensuring timely delivery without compromising quality.
                                </p>
                                <p className="font-semibold mt-2">Our Core Values</p>

                                <ol className="list-decimal list-inside">
                                    <li>Innovation & Quality</li>
                                    <li>Timely Delivery & Reliability</li>
                                    <li>Safety & Compliance</li>
                                    <li>Customer Satisfaction & Transparency</li>
                                </ol>

                                <h3 className='text-2xl mt-2 font-bold'>Our Divisions & Offerings</h3>

                                <p>Kitchen Division (Residential & Commercial – Wooden & Stainless Steel)</p>
                                <p>We design and manufacture high-performance kitchen solutions tailored for homes, restaurants, hotels, industrial canteens, and large commercial setups.</p>

                                <p className="font-semibold mt-2">Residential Modular Kitchens</p>
                                <ol className="list-decimal list-inside">
                                    <li>Premium Wooden Modular Kitchens</li>
                                    <li>Stainless Steel Modular Kitchens</li>
                                    <li>Custom Cabinets, Shutters & Storage Systems</li>
                                    <li>Elegant Countertop & Backsplash Solutions</li>
                                    <li>Soft-close Hardware, Accessories & Functional Modular Systems</li>
                                </ol>

                                <p className="font-semibold mt-2">Commercial Kitchens</p>
                                <ol className="list-decimal list-inside">
                                    <li>Stainless-Steel Commercial Kitchen Fabrication</li>
                                    <li>Worktables, Sinks, Storage Racks & Shelving</li>
                                    <li>Exhaust Hoods, Ducting & Ventilation Systems</li>
                                    <li>Customized Cooking Range Bases, Prep Counters & Dishwashing Units</li>
                                    <li>Hygienic, durable and industry-grade kitchen installations</li>
                                </ol>

                                <p className="font-semibold mt-2">Fire Safety Division</p>
                                <ol className="list-decimal list-inside">
                                    <li>Fire Rated Doors (Single/Double Leaf, Shaft Doors, Emergency Exits)</li>
                                    <li>Fire Rated Glazed Doors</li>
                                    <li>Pressed Steel Doors</li>
                                </ol>

                                <p className="font-semibold mt-2">Cleanroom Solutions Division</p>
                                <ol className="list-decimal list-inside">
                                    <li>Cleanroom Doors (PUF Insulated, Sliding, Hermetically Sealed)</li>
                                    <li>Cleanroom Equipment (Pass Boxes, Laminar Air Flow Units, Bio Safety Cabinets, Air Showers)</li>
                                </ol>

                                <p className="font-semibold mt-2">Electrical Panels Division</p>
                                <ol className="list-decimal list-inside">
                                    <li>LT Panels, MDP, SDP, MCC Panels</li>
                                    <li>APFC Panels, Synchronization Panels, Customized Control Panels</li>
                                </ol>

                                <p className="font-semibold mt-2">Insulated Panels Division</p>
                                <ol className="list-decimal list-inside">
                                    <li>PUF Wall, Roof & Partition Panels</li>
                                    <li>Rockwool / Mineral Wool Panels for Thermal & Acoustic Insulation</li>
                                </ol>

                                <h3 className='text-2xl mt-2 font-bold'>Our Divisions & Offerings</h3>

                                <ol className="list-decimal list-inside">
                                    <li>State-of-the-art Manufacturing Facilities</li>
                                    <li>Experienced Technical & Design Team</li>
                                    <li>Compliance with IS/EN/BS Fire Standards, NABL Testing & GMP Guidelines</li>
                                    <li>Turnkey Project Capabilities & Custom Engineering Solutions</li>
                                    <li>Comprehensive After-Sales Support</li>
                                </ol>
                            </div>


                            <div className="flex sm:hidden w-full flex-col justify-center gap-8">

                                {/* <div className="flex flex-col gap-1 w-full"> */}
                                <div className="grid grid-cols-2 gap-1 w-full">

                                    <div className="flex flex-col gap-1">
                                        <div className="py-1">
                                            <IconUsers size={36} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">100+ Happy Customers</div>
                                            {/* <div>Trusted by over 50 lakh satisfied customers across the country.</div> */}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <div className="py-1">
                                            <IconBuildingStore size={36} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">2 Workshops</div>
                                            {/* <div>Get expert care and service at our 19 authorized workshops.</div> */}
                                        </div>
                                    </div>

                                </div>

                                {/* <Button className='w-fit'>Contact Us</Button> */}
                                <a href="/contact-us" className="group flex gap-2 items-center border-1 bg-red-500 hover:bg-red-600 text-white w-fit h-fit px-4 py-3">
                                    <div className="text-sm">Contact Us</div>
                                    <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>

                            </div>

                        </div>

                        {/* Our team */}
                        {/* <div className='flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>Our Team</div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 w-full h-full sm:gap-4 gap-8'>

                            <div className='flex flex-col gap-2'>
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Vinit-Beriwala.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Vinit Beriwala</div>
                                    <div className='text-sm'>Managing Director, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Vitthal-Beriwala.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Vitthal Beriwala</div>
                                    <div className='text-sm'>Director, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Manan-Kedia.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Manan Kedia</div>
                                    <div className='text-sm'>CEO Nexa, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>


                        </div>
                    </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
