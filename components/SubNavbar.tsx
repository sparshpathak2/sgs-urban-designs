import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'
import { Clock, Mail, Phone } from 'lucide-react'
import React from 'react'

export default function SubNavbar() {
    return (
        <div className='flex w-full py-2 px-2 sm:px-16 border-b border-gray-200 text-[15px] justify-end'>
            {/* <div className='flex gap-3 items-center text-[#06046C]'>
                <a href="https://www.instagram.com/vipulmotorspvtltd?igsh=MXMxNGJhdnE3dDV3bw%3D%3D&utm_source=qr"><IconBrandInstagram size={20} stroke={1.8} /></a>
                <a href="https://www.facebook.com/profile.php?id=100094960847061"><IconBrandFacebook size={20} stroke={1.8} /></a>
                <a href="https://www.youtube.com/@vipulmotors8585"><IconBrandYoutube size={20} stroke={1.8} /></a>
                <a href="https://www.linkedin.com/company/vipul-motors-privet-limited/?viewAsMember=true"><IconBrandLinkedin size={20} stroke={1.6} /></a>
            </div> */}

            <div className='flex gap-4 h-full'>
                <div className='flex gap-2 items-center'>
                    <Phone size={14} className='text-red-500' />
                    <a href="tel:+919050725050" target="_blank" className="text-sm font-semibold">
                        +91 9050725050
                    </a>
                </div>
                <div className='flex gap-2 items-center'>
                    <Mail size={14} className='text-red-500' />
                    <a href="mailto:sales@sgstechnicalsolutions.com" target="_blank" className="text-sm font-semibold">
                        sales@sgstechnicalsolutions.com
                    </a>
                </div>
                {/* <div className='flex gap-2 items-center'>
                    <Clock size={14} className='text-blue-700' />
                    <div className='text-sm'>Mon-Sun: 9AM-7PM</div>
                </div> */}
            </div>
        </div>
    )
}
