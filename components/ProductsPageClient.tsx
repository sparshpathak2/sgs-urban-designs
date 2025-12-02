'use client'

import React, { useMemo, useState } from 'react'
import { products } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbComponent } from '@/components/BreadcrumbComponent'
import SearchOutletsModal from '@/components/SearchOutletsModal'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function ProductsPageClient() {
    const [searchOutletsModal, setSearchOutletsModal] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    // const [selectedFilter, setSelectedFilter] = useState<{
    //     category: string
    //     subCategory: string
    //     subSubCategory: string
    // } | null>(null)

    // 🔹 Build nested filters (Type-safe)
    // const filters = products.reduce((acc, curr) => {
    //     const { category, subCategory, subSubCategory } = curr

    //     // ✅ Skip if any key is missing
    //     if (!category || !subCategory || !subSubCategory) return acc

    //     if (!acc[category]) acc[category] = {}
    //     if (!acc[category][subCategory]) acc[category][subCategory] = {}
    //     if (!acc[category][subCategory][subSubCategory])
    //         acc[category][subCategory][subSubCategory] = 1
    //     else acc[category][subCategory][subSubCategory]++

    //     return acc
    // }, {} as Record<string, Record<string, Record<string, number>>>)

    // 🔹 Build filters tree
    // const filters = useMemo(() => {
    //     return products.reduce((acc, curr) => {
    //         const { category, subCategory, subSubCategory } = curr
    //         if (!category || !subCategory || !subSubCategory) return acc

    //         if (!acc[category]) acc[category] = {}
    //         if (!acc[category][subCategory]) acc[category][subCategory] = {}
    //         if (!acc[category][subCategory][subSubCategory])
    //             acc[category][subCategory][subSubCategory] = 1
    //         else acc[category][subCategory][subSubCategory]++

    //         return acc
    //     }, {} as Record<string, Record<string, Record<string, number>>>)
    // }, [])

    const filters = useMemo(() => {
        return products.reduce((acc, curr) => {
            const { category, subCategory, subSubCategory } = curr

            if (!category) return acc // Category is mandatory
            const subCatKey = subCategory || "" // allow empty
            const subSubCatKey = subSubCategory || "" // allow empty

            if (!acc[category]) acc[category] = {}
            if (!acc[category][subCatKey]) acc[category][subCatKey] = {}
            if (!acc[category][subCatKey][subSubCatKey])
                acc[category][subCatKey][subSubCatKey] = 1
            else acc[category][subCatKey][subSubCatKey]++

            return acc
        }, {} as Record<string, Record<string, Record<string, number>>>)
    }, [])




    // 🔹 Apply filters
    // const filteredProducts = selectedFilter
    //     ? products.filter(
    //         (p) =>
    //             p.category === selectedFilter.category &&
    //             p.subCategory === selectedFilter.subCategory &&
    //             p.subSubCategory === selectedFilter.subSubCategory
    //     )
    //     : products

    // 🔹 Read filters from URL
    const selectedFilter = useMemo(() => {
        const category = searchParams.get('category')
        const subCategory = searchParams.get('subCategory') || ''  // default empty
        const subSubCategory = searchParams.get('subSubCategory') || ''  // default empty

        if (category) return { category, subCategory, subSubCategory }

        return null
    }, [searchParams])

    // 🔹 Apply filters
    const filteredProducts = useMemo(() => {
        if (!selectedFilter) return products

        return products.filter((p) => {
            // Category must always match
            if (p.category !== selectedFilter.category) return false

            // Only filter by subCategory if it's non-empty
            if (selectedFilter.subCategory && p.subCategory !== selectedFilter.subCategory) return false

            // Only filter by subSubCategory if it's non-empty
            if (selectedFilter.subSubCategory && p.subSubCategory !== selectedFilter.subSubCategory) return false

            return true
        })
    }, [selectedFilter])


    // 🔹 Handle filter change
    const handleFilterSelect = (category: string, subCategory: string, subSubCategory: string) => {
        const params = new URLSearchParams()
        params.set('category', category)
        params.set('subCategory', subCategory)
        params.set('subSubCategory', subSubCategory)
        router.push(`${pathname}?${params.toString()}`)
    }

    // 🔹 Clear filter (remove query params)
    const handleClearFilter = () => {
        router.push(pathname)
    }

    return (
        <>
            <div className="flex flex-col w-full p-2 sm:px-28 sm:py-4">
                {/* Header */}
                {/* <div className="flex flex-col w-full border-b border-gray-200 bg-white items-center gap-2 py-4">
                <div className="text-xl sm:text-2xl font-semibold">Products</div>
                <div className="flex gap-2 items-center text-sm">
                    <Link href="/" className="text-blue-600 hover:text-blue-800">
                        Home
                    </Link>
                    <span>/</span>
                    <span>Products</span>
                </div>
            </div> */}

                <div className='flex flex-col w-full max-w-6xl gap-2 mx-auto'>
                    <div>
                        <BreadcrumbComponent />
                    </div>


                    {/* Main Content */}
                    <div className="flex w-full mx-auto gap-6">

                        {/* Left Filters */}
                        <div className="hidden sm:flex flex-col w-1/4 gap-4">
                            <div className="text-gray-700 font-semibold py-1">Filter by Category</div>
                            <div className="flex flex-col gap-6">
                                {Object.entries(filters).map(([category, subCategories]) => (
                                    <div key={category} className="flex flex-col gap-1 border overflow-hidden">
                                        <div className="font-semibold bg-red-500 px-2 py-1 text-white">
                                            {category}
                                        </div>

                                        <div className="flex flex-col gap-3 py-2 px-3 bg-white">
                                            {Object.entries(subCategories).map(([subCategory, subSubs]) => (
                                                <div key={subCategory}>
                                                    {subCategory &&
                                                        <div className="font-medium text-gray-800 mb-1">{subCategory}</div>
                                                    }
                                                    <div className="flex flex-col gap-1">
                                                        {Object.entries(subSubs).map(([subSubCategory, count]) => {
                                                            const isSelected =
                                                                selectedFilter?.category === category &&
                                                                selectedFilter?.subCategory === subCategory &&
                                                                selectedFilter?.subSubCategory === subSubCategory

                                                            return (
                                                                <div
                                                                    key={subSubCategory}
                                                                    className={`cursor-pointer text-red-500 underline ${isSelected ? 'font-bold' : ''
                                                                        }`}
                                                                    // onClick={() =>
                                                                    //     setSelectedFilter({
                                                                    //         category,
                                                                    //         subCategory,
                                                                    //         subSubCategory,
                                                                    //     })
                                                                    // }
                                                                    onClick={() =>
                                                                        handleFilterSelect(category, subCategory, subSubCategory)
                                                                    }
                                                                >
                                                                    {subSubCategory} ({count})
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right List */}
                        <div className="flex flex-col w-full sm:w-3/4 gap-4">
                            <div className="flex justify-between items-center">
                                <div className='py-1'>
                                    <span className="font-semibold mr-1">{filteredProducts.length}</span>
                                    result(s)
                                </div>
                                {selectedFilter && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full flex gap-1"
                                        // onClick={() => setSelectedFilter(null)}
                                        onClick={handleClearFilter}
                                    >
                                        <X size={14} />
                                        Clear Filter
                                    </Button>
                                )}
                            </div>

                            {/* <Button
                                variant='outline'
                                size='sm'
                                onClick={() => setSearchOutletsModal(true)}
                            >
                                <Search size={16} />
                                <div >Filter outlet</div>
                            </Button> */}
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 w-full'>
                                {filteredProducts.map((product) => (
                                    // <div
                                    //     key={product.id}
                                    //     className="flex flex-col sm:flex-row border border-gray-200 shadow-sm overflow-hidden"
                                    // >
                                    //     <div className="w-full sm:w-1/3">
                                    //         <Image
                                    //             src={product.images[0]}
                                    //             alt={product.name}
                                    //             width={400}
                                    //             height={400}
                                    //             className="object-cover w-full h-full"
                                    //         />
                                    //     </div>
                                    //     <div className="flex flex-col justify-between w-full sm:w-2/3 p-4">
                                    //         <div>
                                    //             <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    //             <p className="text-gray-700 mb-2">
                                    //                 {product.description.find((d) => d.type === 'paragraph')?.content}
                                    //             </p>
                                    //         </div>

                                    //         <div className="flex gap-2 mt-2">
                                    //             <Button variant="outline">
                                    //                 <a href={product.brochure} target="_blank" rel="noopener noreferrer">
                                    //                     Brochure
                                    //                 </a>
                                    //             </Button>
                                    //             <Link href={`/products/${product.id}`}>
                                    //                 <Button>View Details</Button>
                                    //             </Link>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <div
                                        key={product.id}
                                        className="flex flex-col w-full border border-gray-200 shadow-sm overflow-hidden"
                                    // className="grid grid-cols-1 sm:grid-col-3 border border-gray-200 shadow-sm overflow-hidden"
                                    >
                                        {/* <div className="w-full sm:w-1/3"> */}
                                        <div className="w-full h-56">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                width={400}
                                                height={400}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        {/* <div className="flex flex-col justify-between w-full sm:w-2/3 p-4"> */}
                                        <div className="flex flex-col justify-between w-full p-2 h-48 sm:h-40">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                                {/* <p className="text-gray-700 mb-2">
                                                    {product.description.find((d) => d.type === 'paragraph')?.content}
                                                </p> */}
                                            </div>

                                            <div className="flex gap-2 mt-2 w-full">
                                                {/* <Button variant="outline">
                                                    <a href={product.brochure} target="_blank" rel="noopener noreferrer">
                                                        Brochure
                                                    </a>
                                                </Button> */}
                                                {/* <Link href={`/products/${product.id}`} className='w-full'>
                                                    <Button className='w-full'>View Details</Button>
                                                </Link> */}
                                                <Link
                                                    href={`/products/${product.id}`}
                                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-red-500 text-white hover:bg-red-600"
                                                >
                                                    View Details
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <SearchOutletsModal
                isOpen={searchOutletsModal}
                onClose={() => setSearchOutletsModal(false)}
                filters={filters}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            /> */}

        </>
    )
}
