"use client";

import { getBanners } from "@/app/api/media";
import { Banner } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Fetch banners
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await getBanners();
                setBanners(response.data);
            } catch (err) {
                console.error("Failed to load banners", err);
            } finally {
                setLoading(false);
            }
        };
        fetchBanners();
    }, []);

    // const images = isMobile ? mobileImages : desktopImages;

    // Filter images based on screen type
    const images = banners
        .filter((b) => b.screen === (isMobile ? "mobile" : "desktop"))
        .sort((a, b) => a.order - b.order) // ensure correct order
        .map((b) => b.image?.url)
        .filter(Boolean) as string[];

    // const nextSlide = () =>
    //     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    // const prevSlide = () =>
    //     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const nextSlide = () =>
        setCurrent((prev) => (images.length ? (prev + 1) % images.length : 0));
    const prevSlide = () =>
        setCurrent((prev) => (images.length ? (prev - 1 + images.length) % images.length : 0));


    useEffect(() => {
        if (!images.length) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [images]);

    // 🔹 Show loader while fetching
    // if (loading) {
    //     return (
    //         <div className="w-full h-64 flex items-center justify-center bg-gray-100">
    //             <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-400 border-t-transparent"></div>
    //         </div>
    //     );
    // }

    // 🔹 Show skeleton while fetching
    if (loading) {
        return (
            <div
                className={`relative w-full mx-auto overflow-hidden ${isMobile ? "aspect-[360/283]" : "aspect-[1366/523]"
                    }`}
            >
                <Skeleton className="w-full h-full" />
            </div>
        );
    }

    // 🔹 Show empty state only if API returned no banners
    if (!images.length) {
        return (
            <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">No banners available</p>
            </div>
        );
    }

    return (
        <div
            className={`relative w-full mx-auto overflow-hidden ${isMobile ? "aspect-[360/283]" : "aspect-[1366/523]"
                }`}
        >
            {/* Carousel track */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                    transform: `translateX(-${current * (100 / images.length)}%)`,
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative"
                        style={{ width: `${100 / images.length}%`, height: "100%" }}
                    >
                        <img
                            src={src}
                            alt={`Slide ${idx}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 w-2 rounded-full ${current === idx ? "bg-blue-600" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
