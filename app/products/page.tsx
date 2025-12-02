import ProductsPageClient from "@/components/ProductsPageClient";
import React, { Suspense } from "react";


export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="flex w-full h-full justify-center items-center">Loading products...</div>}>
            <ProductsPageClient />
        </Suspense>
    );
}
