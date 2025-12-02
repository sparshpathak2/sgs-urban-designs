'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Clock, Mail, Menu, Phone, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const [corporateOpen, setCorporateOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [fireDoorsOpen, setFireDoorsOpen] = useState(false);
    const [panelsOpen, setPanelsOpen] = useState(false);
    const [modularOpen, setModularOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const toggleMenu = () => setOpen(!open);

    // 🧠 Prevent body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up on unmount
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    return (
        <div className="lg:hidden relative">
            <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="p-2 focus:outline-none"
            >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {open && (
                // <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                // <div className="absolute right-[-8px] mt-2 w-screen bg-white shadow-lg py-2 z-50 h-screen border-t border-black">
                // <div className="fixed flex flex-col justify-between top-18 left-0 w-screen h-screen bg-white shadow-lg z-50">
                <div
                    className="fixed flex flex-col top-18 left-0 w-screen bg-white shadow-lg z-50 overflow-y-auto gap-4"
                    style={{ height: 'calc(100vh - 4.5rem)' }} // 4.5rem = h-18 = 72px
                >
                    <div className='flex flex-col w-full'>
                        {/* <div className="border-b border-gray-200"> */}
                        <div className="">
                            <button
                                onClick={() => setProductsOpen(!productsOpen)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 flex justify-between items-center border-b border-gray-200"
                            >
                                <span>Products</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {productsOpen && (
                                <div className="bg-white">
                                    {/* Fire Rated Doors */}
                                    <button
                                        onClick={() => setFireDoorsOpen(!fireDoorsOpen)}
                                        className="w-full text-left pl-6 pr-4 py-2 flex justify-between items-center hover:bg-gray-100 border-b border-gray-200"
                                    >
                                        Fire Rated Doors
                                        <ChevronDown className={`w-4 h-4 transition-transform ${fireDoorsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {fireDoorsOpen && (
                                        <div className="flex flex-col bg-gray-50 hover:bg-gray-100">
                                            <div className='pl-6 pr-4 py-2 text-gray-500 border-b border-gray-200 italic font-semibold'>Wooden</div>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Laminate" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Laminate</Link>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Veneer" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Veneer</Link>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Paint+Finish" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Paint Finish</Link>

                                            <div className='pl-6 pr-4 py-2 text-gray-500 border-b border-gray-200 italic font-semibold'>Steel</div>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Rockwool+Doors" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Rockwool Doors</Link>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Puff+Doors" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Puff Doors</Link>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Honeycomb+Pressed+Steel" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Honeycomb Pressed Steel</Link>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Single+Glazed" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Single Glazed</Link>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Double+Glazed" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Double Glazed</Link>
                                        </div>
                                    )}

                                    {/* Panels & Partitions */}
                                    <button
                                        onClick={() => setPanelsOpen(!panelsOpen)}
                                        className="w-full text-left pl-6 pr-4 py-2 flex justify-between items-center hover:bg-gray-100 border-b border-gray-200"
                                    >
                                        Panels & Partitions
                                        <ChevronDown className={`w-4 h-4 transition-transform ${panelsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {panelsOpen && (
                                        <div className="flex flex-col bg-gray-50 hover:bg-gray-100">
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Cleanroom+Partitions" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Cleanroom Partitions</Link>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Lab+Furniture" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Lab Furniture</Link>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Office+Partitions" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Office Partitions</Link>
                                        </div>
                                    )}

                                    {/* Modular Spaces */}
                                    <button
                                        onClick={() => setModularOpen(!modularOpen)}
                                        className="w-full text-left pl-6 pr-4 py-2 flex justify-between items-center hover:bg-gray-100 border-b border-gray-200"
                                    >
                                        Modular Spaces
                                        <ChevronDown className={`w-4 h-4 transition-transform ${modularOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {modularOpen && (
                                        <div className="flex flex-col bg-gray-50 hover:bg-gray-100">
                                            <Link href="/products" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Kitchens</Link>
                                            <Link href="/products" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Wardrobes</Link>
                                            <Link href="/products" className="py-1.5 pl-6 border-b border-gray-200" onClick={() => setOpen(false)}>Bathrooms</Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/about-us"
                            className={`block px-4 py-2 border-b border-gray-200 ${isActive('/about-us') ? 'font-semibold bg-gray-100' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => setOpen(false)}
                        >
                            About Us
                        </Link>

                        <Link
                            href="/contact-us"
                            className={`block px-4 py-2 border-b border-gray-200 ${isActive('/contact-us') ? 'font-semibold bg-gray-100' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => setOpen(false)}
                        >
                            Contact Us
                        </Link>


                        {/* <div className="border-b border-gray-200">
                            <button
                                onClick={() => setCorporateOpen(!corporateOpen)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 flex justify-between items-center"
                            >
                                <span>Corporate</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${corporateOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {corporateOpen && (
                                <div className="bg-gray-50">
                                    <Link
                                        href="/contact-us"
                                        className="block pl-6 py-2 border-y border-gray-200 hover:bg-gray-100"
                                        onClick={() => setOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="/"
                                        className="block pl-6 py-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                </div>
                            )}
                        </div> */}
                    </div>

                    <div className='flex flex-col gap-8 h-full p-4'>
                        <div className='flex flex-col gap-1'>
                            <div className='font-semibold text-gray-500'>CONTACT DETAILS</div>
                            <div className='flex gap-2 items-center'>
                                <Phone size={16} className='text-red-500' />
                                {/* <div>+91 9990057744</div> */}
                                <a href="tel:+919050725050" target="_blank" className="font-semibold underline">
                                    +91 9050725050
                                </a>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Mail size={16} className='text-red-500' />
                                {/* <div>contactus@vipulmotors.com</div> */}
                                <a href="mailto:sales@sgstechnicalsolutions.com" target="_blank" className="font-semibold underline">
                                    sales@sgstechnicalsolutions.com
                                </a>
                            </div>
                            {/* <div className='flex gap-2 items-center'>
                                <Clock size={16} className='text-blue-700' />
                                <div>Mon-Sun: 9AM-7PM</div>
                            </div> */}
                        </div>

                        <div className='flex gap-3 items-center text-red-500'>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/instagram-icon.svg"
                                    alt="Instagram"
                                    className="w-6 h-6"
                                />
                            </a><a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/facebook-icon.svg"
                                    alt="Facebook"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/youtube-icon.svg"
                                    alt="YouTube"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/linkedin-icon.svg"
                                    alt="LinkedIn"
                                    className="w-6 h-6"
                                />
                            </a>

                        </div>
                    </div>

                </div>
            )}

        </div>
    );
};

export default MobileMenu;
