import ProductPageClient from "@/components/ProductPageClient";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    return <ProductPageClient slug={slug} />;
}
