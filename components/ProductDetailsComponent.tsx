'use client'

import { Product } from "@/lib/types"
import React, { useState } from "react"

type Props = {
    product: Product
}

export default function ProductDetailsComponent({ product }: Props) {
    // 1️⃣ State to track which tab is active
    const [activeTab, setActiveTab] = useState<"description" | "specifications">(
        "description"
    )

    // 2️⃣ Tab click handler
    const handleTabClick = (tab: typeof activeTab) => {
        setActiveTab(tab)
    }

    return (
        <div className="flex flex-col w-full h-full">
            {/* Tabs */}
            <div className="flex border-b">
                <div
                    className={`font-semibold p-2 cursor-pointer border-b-2 ${activeTab === "description" ? "border-red-500" : "border-transparent"
                        }`}
                    onClick={() => handleTabClick("description")}
                >
                    Description
                </div>

                <div
                    className={`font-semibold p-2 cursor-pointer border-b-2 ${activeTab === "specifications" ? "border-red-500" : "border-transparent"
                        }`}
                    onClick={() => handleTabClick("specifications")}
                >
                    Specifications
                </div>
            </div>

            {/* Tab content */}
            <div className="flex-1 py-4 overflow-y-auto">
                {activeTab === "description" && (
                    <div className="flex flex-col gap-3">
                        {product?.description && product.description.length > 0 ? (
                            product.description.map((item, idx) => {
                                if (item.type === "title") {
                                    return <h2 key={idx} className="text-xl font-bold">{item.content}</h2>;
                                }
                                if (item.type === "subtitle") {
                                    return <h3 key={idx} className="text-lg font-semibold">{item.content}</h3>;
                                }
                                if (item.type === "paragraph") {
                                    return <p key={idx} className="text-gray-700">{item.content}</p>;
                                }
                                if (item.type === "boldParagraph") {
                                    return <p key={idx} className="text-gray-700 font-semibold">{item.content}</p>;
                                }
                                if (item.type === "list") {
                                    return (
                                        <ul key={idx} className="list-disc ml-5 text-gray-700">
                                            {item?.items?.map((bullet: string, i: number) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return null;
                            })
                        ) : (
                            <p className="text-gray-500 italic">
                                Description is not available for this product.
                            </p>
                        )}
                    </div>
                )}

                {activeTab === "specifications" && (
                    <div className="flex flex-col gap-4">
                        {product?.specifications?.variants && product.specifications.variants.length > 0 ? (
                            product?.specifications?.variants.map((variant, idx) => (
                                <div key={idx} className="border p-2">
                                    <h4 className="font-semibold text-lg mb-2">{variant.name}</h4>
                                    {variant.specs && Object.keys(variant.specs).length > 0 ? (
                                        <table className="w-full text-sm">
                                            <tbody>
                                                {Object.entries(variant.specs).map(([key, value], i) => (
                                                    <tr key={i}>
                                                        <td className="font-medium py-1 pr-4 w-1/3">{key}</td>
                                                        <td className="text-gray-700 py-1">{value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p className="text-gray-500 italic">No specifications available for this variant.</p>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">
                                Specifications are not available for this product.
                            </p>
                        )}
                    </div>
                )}

            </div>


        </div>
    )
}
