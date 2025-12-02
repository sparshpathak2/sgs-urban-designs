'use client'

import { BreadcrumbComponent } from '@/components/BreadcrumbComponent'
import { FormModalComponent } from '@/components/FormModalComponent';
import ProductDetailsComponent from '@/components/ProductDetailsComponent'
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image'
import { notFound } from 'next/navigation';
import React, { use, useState } from 'react'

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function ProductPageClient({ slug }: { slug: string }) {
    const [open, setOpen] = useState(false);

    const product = products.find((p) => p.id === slug);

    if (!product) notFound();

    return (
        <>
            <div className="flex w-full items-center justify-center p-2 sm:px-28 sm:py-4">

                <div className="flex flex-col gap-3 sm:gap-6 w-full max-w-6xl justify-between">

                    <div>
                        {/* <BreadcrumbComponent slug={product.name} /> */}
                        <BreadcrumbComponent />
                    </div>

                    <h1 className={`${libre.className} sm:hidden font-semibold text-2xl sm:text-3xl`}>
                        {product.name}
                    </h1>

                    <div className='flex flex-col sm:flex-row gap-4'>

                        {/* Left: Images */}
                        <div className="w-full sm:w-1/2 flex flex-col gap-2">
                            <div className="h-auto sm:h-100">
                                <Image
                                    width={1200}
                                    height={1200}
                                    alt={product.name}
                                    src={product.images[0]}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className="flex gap-2">
                                {/* {product.images.slice(1).map((img, idx) => ( */}
                                {product?.images?.map((img, idx) => (
                                    <div key={idx} className="h-auto sm:h-50 w-1/3">
                                        <Image
                                            width={300}
                                            height={300}
                                            alt={product.name}
                                            src={img}
                                            className="w-full h-full object-cover object-left"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2 flex flex-col justify-between gap-2'>
                            <div className='flex flex-col w-full h-full gap-2'>

                                <div className={`${libre.className} hidden sm:block font-semibold text-2xl sm:text-3xl`}>
                                    {product.name}
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-2 w-full">
                                    <Button variant="outline" className="flex-1 py-5" onClick={() => setOpen(true)}>Download Brochure</Button>
                                    <Button className="flex-1 group py-5 border-1 border-red-500" onClick={() => setOpen(true)}>
                                        Enquire Now
                                        <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </div>


                                <ProductDetailsComponent product={product} />
                            </div>


                        </div>

                    </div>

                </div>
            </div>


            <FormModalComponent open={open} setOpen={setOpen} />
        </>
    )
}
