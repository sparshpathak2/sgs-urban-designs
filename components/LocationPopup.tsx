"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const cities = ["delhi", "noida", "faridabad", "ghaziabad"]

const LocationPopup: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const hasConfirmedLocation = localStorage.getItem("locationConfirmed")
        if (!hasConfirmedLocation) {
            setShowPopup(true)
        }
    }, [])

    const handleSelectLocation = (city: string) => {
        localStorage.setItem("locationConfirmed", "true")
        setShowPopup(false)
        router.push(`/dealer/${city.toLowerCase()}`)
    }

    if (!showPopup) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md text-center shadow-lg min-w-[600px]">
                <p className="mb-4 text-gray-800 font-semibold text-2xl">
                    Select City
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => handleSelectLocation(city)}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            {city.charAt(0).toUpperCase() + city.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LocationPopup
