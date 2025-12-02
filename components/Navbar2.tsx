"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"

interface SubSubCategory {
    name: string
    href: string
}

interface SubCategory {
    name: string
    subSubCategories: SubSubCategory[]
}

interface Category {
    name: string
    subCategories: SubCategory[]
}

const productCategories: Category[] = [
    {
        name: "Fire Rated Doors",
        subCategories: [
            {
                name: "Wooden",
                subSubCategories: [
                    { name: "Wooden Fire Rated Door", href: "/products/fire-rated/wooden" },
                ],
            },
            {
                name: "Steel",
                subSubCategories: [
                    { name: "Steel Fire Rated Door", href: "/products/fire-rated/steel" },
                ],
            },
        ],
    },
    {
        name: "Acoustic Doors",
        subCategories: [
            {
                name: "Wooden Acoustic Doors",
                subSubCategories: [
                    { name: "Wooden Acoustic Door", href: "/products/acoustic/wooden" },
                ],
            },
            {
                name: "Steel Acoustic Doors",
                subSubCategories: [
                    { name: "Steel Acoustic Door", href: "/products/acoustic/steel" },
                ],
            },
        ],
    },
]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openCategory, setOpenCategory] = useState<string | null>(null)
    const [openSubCategory, setOpenSubCategory] = useState<string | null>(null)
    const [showProductsMenu, setShowProductsMenu] = useState(false)

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl text-red-600">
                    FireSafe
                </Link>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">
                        Home
                    </Link>

                    {/* PRODUCTS DROPDOWN */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowProductsMenu(true)}
                        onMouseLeave={() => {
                            setShowProductsMenu(false)
                            setOpenCategory(null)
                            setOpenSubCategory(null)
                        }}
                    >
                        <button className="text-gray-700 hover:text-red-600 font-medium flex items-center">
                            Products <ChevronDown size={16} className="ml-1" />
                        </button>

                        {showProductsMenu && (
                            <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-md p-3 z-50">
                                {productCategories.map((category) => (
                                    <div key={category.name} className="mb-2">
                                        <button
                                            onMouseEnter={() =>
                                                setOpenCategory(openCategory === category.name ? null : category.name)
                                            }
                                            className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-red-600"
                                        >
                                            {category.name}
                                            {openCategory === category.name ? (
                                                <ChevronDown size={14} />
                                            ) : (
                                                <ChevronRight size={14} />
                                            )}
                                        </button>

                                        {openCategory === category.name && (
                                            <div className="ml-3 mt-1 space-y-1">
                                                {category.subCategories.map((subCategory) => (
                                                    <div key={subCategory.name}>
                                                        <button
                                                            onMouseEnter={() =>
                                                                setOpenSubCategory(
                                                                    openSubCategory === subCategory.name
                                                                        ? null
                                                                        : subCategory.name
                                                                )
                                                            }
                                                            className="flex justify-between items-center w-full text-left text-sm font-medium text-gray-700 hover:text-red-500"
                                                        >
                                                            {subCategory.name}
                                                            {openSubCategory === subCategory.name ? (
                                                                <ChevronDown size={12} />
                                                            ) : (
                                                                <ChevronRight size={12} />
                                                            )}
                                                        </button>

                                                        {openSubCategory === subCategory.name && (
                                                            <ul className="ml-4 mt-1 space-y-1">
                                                                {subCategory.subSubCategories.map((subSub) => (
                                                                    <li key={subSub.name}>
                                                                        <Link
                                                                            href={subSub.href}
                                                                            className="block text-sm text-red-600 hover:underline"
                                                                        >
                                                                            {subSub.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden text-gray-700"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="sm:hidden border-t border-gray-200 bg-white shadow-md">
                    <div className="flex flex-col px-4 py-3 space-y-2">
                        <Link href="/" className="py-2 text-gray-700 font-medium hover:text-red-600">
                            Home
                        </Link>

                        {/* PRODUCTS */}
                        <div>
                            <button
                                className="flex justify-between items-center w-full py-2 text-gray-700 font-medium hover:text-red-600"
                                onClick={() => setShowProductsMenu(!showProductsMenu)}
                            >
                                Products
                                {showProductsMenu ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </button>

                            {showProductsMenu && (
                                <div className="ml-3 space-y-2">
                                    {productCategories.map((category) => (
                                        <div key={category.name}>
                                            <button
                                                onClick={() =>
                                                    setOpenCategory(openCategory === category.name ? null : category.name)
                                                }
                                                className="flex justify-between items-center w-full text-gray-800 font-medium"
                                            >
                                                {category.name}
                                                {openCategory === category.name ? (
                                                    <ChevronDown size={14} />
                                                ) : (
                                                    <ChevronRight size={14} />
                                                )}
                                            </button>

                                            {openCategory === category.name && (
                                                <div className="ml-3 space-y-1 mt-1">
                                                    {category.subCategories.map((subCategory) => (
                                                        <div key={subCategory.name}>
                                                            <button
                                                                onClick={() =>
                                                                    setOpenSubCategory(
                                                                        openSubCategory === subCategory.name
                                                                            ? null
                                                                            : subCategory.name
                                                                    )
                                                                }
                                                                className="flex justify-between items-center w-full text-sm text-gray-700"
                                                            >
                                                                {subCategory.name}
                                                                {openSubCategory === subCategory.name ? (
                                                                    <ChevronDown size={12} />
                                                                ) : (
                                                                    <ChevronRight size={12} />
                                                                )}
                                                            </button>

                                                            {openSubCategory === subCategory.name && (
                                                                <ul className="ml-4 mt-1 space-y-1">
                                                                    {subCategory.subSubCategories.map((subSub) => (
                                                                        <li key={subSub.name}>
                                                                            <Link
                                                                                href={subSub.href}
                                                                                className="block text-sm text-red-600 hover:underline"
                                                                                onClick={() => setMobileOpen(false)}
                                                                            >
                                                                                {subSub.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="py-2 text-gray-700 font-medium hover:text-red-600">
                            About
                        </Link>
                        <Link href="/contact" className="py-2 text-gray-700 font-medium hover:text-red-600">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
