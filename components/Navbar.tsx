'use client'

import Image from 'next/image'
import React from 'react'
import MobileMenu from './MobileMenu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const pathname = usePathname()
    const isActive = (href: string) => pathname === href

    const linkClass = (href: string) =>
        `flex h-full items-center border-b-2 transition ${isActive(href)
            ? 'font-semibold border-red-500'
            : 'border-transparent hover:border-red-500'
        }`


    return (
        <div className='flex w-full px-2 sm:px-16 h-18 justify-between items-center border-b border-gray-200'>
            {/* <div>
                Navbar
            </div> */}
            {/* <div className='flex items-center gap-2'> */}
            <a href='/'>
                <Image
                    width={100}
                    height={100}
                    alt='Vipul Motors Logo'
                    // className='h-10'
                    // className='h-full w-full'
                    className='h-16 w-full'
                    // src='/Vipul-Motors-Logo-1.svg'
                    src='/sgs-logo-1.svg'
                />
            </a>
            {/* </div> */}

            {/* Desktop Menu */}
            <div className='hidden lg:flex gap-8 h-full items-center'>
                {/* <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    New Cars
                </a> */}

                <div className="relative group h-full">
                    <a
                        href="#"
                        className="flex h-full items-center border-b-2 border-transparent"
                    >
                        Products
                    </a>
                    <div className="absolute left-0 top-full mt-0 hidden bg-white border border-gray-200 shadow-md group-hover:block z-50 min-w-max">
                        <a
                            href="/modular-cleanroom-partitions"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Fire Rated Doors
                        </a>
                        <a
                            href="/metal-doorsets"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Metal Doorsets
                        </a>
                        <a
                            href="/cleanroom-equipment"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Cleanroom Equipment
                        </a>
                        <a
                            href="/office-partitions"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Office Partitions
                        </a>
                        <a
                            href="/lab-furniture"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Lab Furniture
                        </a>
                        <a
                            href="/modular-kitchens"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Modular Kitchens
                        </a>
                        <a
                            href="/modular-wardrobe-furniture"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Modular Wardrobe Furniture
                        </a>
                        <a
                            href="/fire-doors"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Fire Doors
                        </a>
                    </div>
                </div>

                <Link href="/infrastructure" className={linkClass('/infrastructure')}>
                    Infrastructure
                </Link>

                <Link href="/about-us" className={linkClass('/about-us')}>
                    About Us
                </Link>

                <Link href="/contact-us" className={linkClass('/contact-us')}>
                    Contact Us
                </Link>

                {/* <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    Corporate
                </a> */}

                {/* <div className="relative group h-full">
                    <a
                        href="#"
                        className="flex h-full items-center border-b-2 border-transparent"
                    >
                        Corporate
                    </a>
                    <div className="absolute left-0 top-full hidden bg-white border border-gray-200 shadow-md group-hover:block z-50 min-w-max">
                        <a
                            href="/corporate/fleet"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/corporate/lease"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            About Us
                        </a>
                    </div>
                </div> */}

            </div>

            {/* Mobile Menu */}
            <MobileMenu />
        </div>
    )
}