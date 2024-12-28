"use client"

import { XIcon } from "lucide-react";
import React, { useState } from "react";

type InputTagsProps = {
    value: string[];
    onChange: (updatedTags: string[]) => void;
};

function InputTags({ value, onChange }: InputTagsProps) {
    const [pendingDataPoint, setPendingDataPoint] = useState("");

    const addPendingDataPoint = () => {
        if (pendingDataPoint.trim() && !value.includes(pendingDataPoint.trim())) {
            onChange([...value, pendingDataPoint.trim()]);
            setPendingDataPoint("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        onChange(value.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div className="w-full">
            <div className="flex">
                <input
                    type="text"
                    value={pendingDataPoint}
                    onChange={(e) => setPendingDataPoint(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === "," || e.key === " ") {
                            e.preventDefault();
                            addPendingDataPoint();
                        }
                    }}
                    placeholder="Enter a tag"
                    className="flex-grow px-4 py-2 bg-neutral-700 border border-neutral-800 rounded-l-xl focus:outline-none"
                />
                <button
                    type="button"
                    onClick={addPendingDataPoint}
                    className="px-4 py-2 text-black bg-primaryColor rounded-r-xl focus:outline-none"
                >
                    Add
                </button>
            </div>
            {
                value.length > 0 &&
                <div className="flex flex-wrap gap-2 my-1 mt-2  ">
                    {value.length > 0 ? (
                        value.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center px-3 py-2 justify-center capitalize bg-gray-700 text-sm font-medium rounded-full"
                            >
                                {tag}
                                <button
                                    type="button"
                                    onClick={() => removeTag(tag)}
                                    className="ml-2 text-primaryColor focus:outline-none"
                                >
                                    <XIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm">No tags added.</p>
                    )}
                </div>
            }




        </div>
    );
}

export default InputTags;
