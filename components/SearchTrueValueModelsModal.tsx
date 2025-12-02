import { X } from "lucide-react";
import React, { useEffect } from "react";

type SelectedFilter =
    | { type: "modelName"; value: string }
    | { type: "year"; value: number }
    | null;

interface Props {
    isOpen: boolean;
    onClose: () => void;
    filters: {
        modelNames: Set<string>;
        years: Set<number>;
    };
    selectedFilter: SelectedFilter;
    setSelectedFilter: React.Dispatch<React.SetStateAction<SelectedFilter>>;
}

export default function SearchTrueValueModelsModal({
    isOpen,
    onClose,
    filters,
    selectedFilter,
    setSelectedFilter,
}: Props) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white shadow-lg w-full max-w-md relative h-[500px]">
                <div className="flex justify-between items-center p-3 border-b border-gray-200">
                    <div className="font-semibold">Filter</div>
                    <button onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto h-[calc(100%-64px)] flex flex-col gap-6">
                    {/* Model Names */}
                    <div>
                        <div className="font-semibold">Model Names</div>
                        <div className="flex flex-col gap-2 py-2">
                            {Array.from(filters.modelNames).map((name) => (
                                <button
                                    key={name}
                                    onClick={() => {
                                        setSelectedFilter({ type: "modelName", value: name });
                                        onClose();
                                    }}
                                    className={`text-left underline ${selectedFilter?.type === "modelName" &&
                                            selectedFilter.value === name
                                            ? "text-blue-600 font-bold"
                                            : "text-blue-600"
                                        }`}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Years */}
                    <div>
                        <div className="font-semibold">Years</div>
                        <div className="flex flex-col gap-2 py-2">
                            {Array.from(filters.years).map((year) => (
                                <button
                                    key={year}
                                    onClick={() => {
                                        setSelectedFilter({ type: "year", value: year });
                                        onClose();
                                    }}
                                    className={`text-left underline ${selectedFilter?.type === "year" &&
                                            selectedFilter.value === year
                                            ? "text-blue-600 font-bold"
                                            : "text-blue-600"
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
