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

export default function Navbar() {
    const pathname = usePathname()
    const isActive = (href: string) => pathname === href
    const [open, setOpen] = React.useState(false);

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
                <DropdownMenu open={open} onOpenChange={setOpen}>
                    <div
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                        className="relative h-full"
                    >
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center h-full rounded-md cursor-pointer text-gray-700 font-medium">
                                Products
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            className="w-56"
                            align="start"
                            sideOffset={4}
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            {/* 🔹 Category 1 */}
                            <DropdownMenuLabel>Fire Rated Doors</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Wooden</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem asChild>
                                                <Link href="/products/fire-rated-doors/wooden/60-min">
                                                    60 mins Rated
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/products/fire-rated-doors/wooden/120-min">
                                                    120 mins Rated
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Steel</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem asChild>
                                                <Link href="/products/fire-rated-doors/steel/single-leaf">
                                                    Single Leaf
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/products/fire-rated-doors/steel/double-leaf">
                                                    Double Leaf
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>

                            {/* 🔹 Category 2 */}
                            <DropdownMenuLabel>Acoustic Doors</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Wooden</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem asChild>
                                                <Link href="/products/acoustic-doors/wooden/standard">
                                                    Standard Acoustic
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/products/acoustic-doors/wooden/high-performance">
                                                    High Performance
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </div>
                </DropdownMenu>


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