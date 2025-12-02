import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function Footer() {
    return (
        <div className='flex flex-col w-full bg-red-50'>
            <div className="flex flex-col sm:flex-row w-full justify-between border-t-1 border-black/10 px-4 sm:px-16 py-8 gap-8">

                <div className='w-full sm:w-2/5 flex flex-col gap-1'>
                    {/* <Image
                        width={64}
                        height={64}
                        alt='Vipul Motors Logo'
                        // className='h-10'
                        // className='h-full w-full'
                        className='h-24 w-24'
                        // src='/Vipul-Motors-Logo-1.svg'
                        src='/sgs-logo-1.svg'
                    /> */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            {/* <span className='text-2xl font-semibold'>DRIVEN BY TRUST.</span>
                            <span className='text-2xl font-semibold'>DEFINED BY EXCELLENCE.</span> */}
                            <div className='font-semibold'>Follow us on:</div>
                            {/* <div className={`${libre.className} font-bold`}>Follow us on:</div> */}

                        </div>
                        <div className="flex gap-4">
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
                            </a>
                            <a
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

                <div className='w-full sm:w-2/5 flex flex-col sm:flex-row gap-8 sm:gap-0'>

                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <div className='font-semibold'>Important Links</div>
                        <div className='flex flex-col gap-1 text-sm'>
                            {/* <a href='/about-us'>About Us</a> */}
                            <a href='/products'>Products</a>
                            <a href='/infrastructure'>Infrastructure</a>
                            <a href='/about-us'>About us</a>
                            <a href='/contact-us'>Contact Us</a>
                            {/* <a href='terms-and-conditions'>Terms & Conditions</a> */}
                            {/* <a href='privacy-policy'>Privacy Policy</a> */}
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <div className='font-semibold'>Contact Details</div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <MapPin size={16} />
                                </div>
                                <div className='flex flex-col'>
                                    <div>SGS Technical Solutions, 30/6/2 village Bhagru, Sonipat 131022</div>
                                    <div>Office E-56-57 Industrial Area, Sonipat 131001</div>
                                </div>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Phone size={16} />
                                </div>
                                <a href="tel:+919050725050" target="_blank" className="font-semibold underline">
                                    +91 9050725050
                                </a>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Mail size={16} />
                                </div>
                                <a href="mailto:sales@sgstechnicalsolutions.com" target="_blank" className="font-semibold underline">
                                    sales@sgstechnicalsolutions.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='text-sm py-2 text-center border-t-1 border-black/10'>
                Copyright © 2025 SGS Technical Solutions. All rights reserved.
            </div>
        </div>
    )
}
