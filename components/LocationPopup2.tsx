"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// const cities = ["delhi", "noida", "faridabad", "ghaziabad"]

const cities = [
    { name: "delhi", image: "/delhi.jpeg" },
    { name: "noida", image: "/noida.jpg" },
    { name: "haryana", image: "/haryana.jpg" },
    { name: "rajasthan", image: "/rajasthan.jpg" },
]

const LocationPopup: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const hasConfirmedLocation = sessionStorage.getItem("locationConfirmed")
        if (!hasConfirmedLocation) {
            setShowPopup(true)
        }
    }, [])

    // 🧠 Prevent body scroll when menu is open
    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up on unmount
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showPopup]);

    const handleSelectLocation = (city: string) => {
        sessionStorage.setItem("locationConfirmed", "true")
        setShowPopup(false)
        // router.push(`/dealer/${city.toLowerCase()}`)
        window.open(`/dealer/${city.toLowerCase()}`, "_blank")
    }

    if (!showPopup) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            {/* <div className="bg-white p-6 rounded-lg text-center shadow-lg min-w-[600px]"> */}
            <div className="bg-white p-4 sm:p-6 mx-2 sm:mx-0 w-full rounded-lg text-center shadow-lg max-w-[600px]">
                <p className="mb-4 text-gray-800 font-semibold text-2xl">
                    Select City
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {/* {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => handleSelectLocation(city)}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            {city.charAt(0).toUpperCase() + city.slice(1)}
                        </button>
                    ))} */}

                    {cities.map(({ name, image }) => (
                        <button
                            key={name}
                            onClick={() => handleSelectLocation(name)}
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="relative h-36 text-white font-bold text-xl rounded-md overflow-hidden hover:opacity-90 transition"
                        >
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </div>
                        </button>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default LocationPopup
