"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function HeroCarousel() {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // simulate loading (optional)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const videoSrc = isMobile ? "/hero-video-1.mp4" : "/hero-video-1.mp4";

    return (
        <div
            className={`relative w-full mx-auto overflow-hidden ${isMobile ? "aspect-[360/283]" : "aspect-[1366/523]"
                }`}
        >
            {loading ? (
                <Skeleton className="w-full h-full" />
            ) : (
                <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
}
