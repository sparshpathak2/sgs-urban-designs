'use client'

import Image from 'next/image'
import React from 'react'
import MobileMenu from './MobileMenu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'

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

                {/* Products Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='flex items-center h-full hover:cursor-pointer gap-2'>
                            Products
                            <ChevronDown size={18} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-44" align="start" sideOffset={0}>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Fire Rated Doors</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className="w-44">
                                    {/* <DropdownMenuItem>Wooden</DropdownMenuItem> */}
                                    <DropdownMenuLabel className='font-bold'>Wooden</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Laminate">Laminate</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Veneer">Veneer</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Paint+Finish">Paint Finish</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    {/* <DropdownMenuItem>Steel</DropdownMenuItem> */}
                                    <DropdownMenuLabel className='font-bold'>Steel</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Rockwool">Rockwool Doors</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Puff">Puff Doors</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Honeycomb">Honeycomb Pressed Steel</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Single+Glazed">Single Glazed</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Double+Glazed">Double Glazed</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Panels & Partitions</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className="w-44">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Cleanroom+Partitions">Cleanroom Partitions</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Lab+Furniture">Lab Furniture</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Flooring">Flooring</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Cleanroom+Equipment">Cleanroom Equipment</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Building+Management+System">Building Management System</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Qualification+And+Validations">Qualification & Validations</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Office+Partitions">Office Partitions</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Utilities+%26+Piping">Utilities & Piping</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Modular Spaces</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className="w-44">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products">Kitchens</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products">Wardrobes</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products">TV Units</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/products">Bathrooms</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        {/* <DropdownMenuItem>All</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>


                {/* <Link href="/infrastructure" className={linkClass('/infrastructure')}>
                    Infrastructure
                </Link> */}

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