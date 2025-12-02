import { BreadcrumbComponent } from '@/components/BreadcrumbComponent';
import ContactForm from '@/components/Forms/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export const metadata = {
    title: "Contact Us | Vipul Motors",
    description: "Have questions? Get in touch with Vipul Motors for sales, service, support, or any general queries. We're here to help!",
};

export default function page() {
    return (
        <div className='flex flex-col w-full justify-center'>


            <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                <div className='text-xl sm:text-2xl font-semibold'>Contact Us</div>
                <div className='flex gap-2 items-center'>
                    <a href="/">
                        <div className='text-sm text-red-500 hover:text-red-600'>Home</div>
                    </a>
                    <div className='text-sm'>/</div>
                    <div className='text-sm'>Contact Us</div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-4 sm:py-8 px-4 sm:px-0 gap-6 sm:gap-20'>

                    <div className='sm:w-1/2 w-full flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>How can we help!</div>

                        <div className='flex flex-col gap-3'>

                            <div className='flex flex-col gap-2'>
                                <div className='text-md sm:text-lg font-semibold'>Visit Us</div>
                                <div className='flex gap-2 text-sm'>
                                    <div className='py-1'>
                                        <MapPin size={16} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='font-semibold'>Factory Address</div>
                                        <div>SGS Technical Solutions</div>
                                        <div>30/6/2 village Bhagru Sonipat 131022</div>
                                    </div>
                                </div>
                                <div className='flex gap-2 text-sm'>
                                    <div className='py-1'>
                                        <MapPin size={16} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='font-semibold'>Office Address</div>
                                        <div>E-56-57 Industrial Area, Sonipat 131001</div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='text-md sm:text-lg font-semibold'>Chat With Us</div>
                                <div className='flex gap-2 text-sm'>
                                    <div className='py-1'>
                                        <Mail size={16} />
                                    </div>
                                    <a href="mailto:sales@sgstechnicalsolutions.com" target="_blank" className="font-semibold text-red-500 underline">
                                        sales@sgstechnicalsolutions.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='text-md sm:text-lg font-semibold'>Call Us</div>

                                <div className='flex gap-2 text-sm'>
                                    <div className='py-1'>
                                        <Phone size={16} />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <a href="tel:+919050725050" target="_blank" className="font-semibold text-red-500 underline">
                                            +91 9050725050
                                        </a>
                                        <div>Mon-Sat from 9 AM to 8 PM</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='flex flex-col gap-4 w-full sm:w-1/2'>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    )
}
