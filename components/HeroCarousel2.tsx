"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    // 🔹 Define your static banner data here
    const bannerData = [
        {
            screen: "desktop",
            order: 1,
            image: { url: "/db-1.jpg" },
        },
        // {
        //     screen: "desktop",
        //     order: 2,
        //     image: { url: "/images/banner2-desktop.jpg" },
        // },
        {
            screen: "mobile",
            order: 1,
            image: { url: "/mb-1.jpg" },
        },
        // {
        //     screen: "mobile",
        //     order: 2,
        //     image: { url: "/images/banner2-mobile.jpg" },
        // },
    ];

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Simulate loading effect (optional)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    // Filter banners based on screen type
    const images = bannerData
        .filter((b) => b.screen === (isMobile ? "mobile" : "desktop"))
        .sort((a, b) => a.order - b.order)
        .map((b) => b.image.url);

    const nextSlide = () =>
        setCurrent((prev) => (images.length ? (prev + 1) % images.length : 0));
    const prevSlide = () =>
        setCurrent((prev) => (images.length ? (prev - 1 + images.length) % images.length : 0));

    useEffect(() => {
        if (!images.length) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [images]);

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
            {/* Carousel Track */}
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

            {/* Navigation */}
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
