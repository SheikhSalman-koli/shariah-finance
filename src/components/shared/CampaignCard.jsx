import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function CampaignCard({ camp }) {

     const getRiskGradeColors = (grade) => {
        switch (grade.toUpperCase()) {
            case 'A': return 'bg-green-500 text-white';
            case 'B': return 'bg-red-500 text-white'; 
            case 'C': return 'bg-yellow-500 text-white';
            default: return 'bg-gray-200 text-gray-700';
        }
    };

    const riskColors = getRiskGradeColors(camp?.riskGrade)

    return (
        <div
            className='bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition duration-300'
        >
            {/* Header Section: Company Name & Days Left */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-sm md:text-xl font-bold text-gray-800">{camp.companyName}</h2>
                    <p className="text-[10px] md:text-sm text-gray-500">{camp.tagline}</p>
                </div>
                <div className="flex items-center text-gray-500 text-sm font-medium  px-2 py-1 rounded-full">
                    <Clock className="h-4 w-4 mr-1 text-indigo-500" />
                    <span>{camp.daysLeft} days Left</span>
                </div>
            </div>

            {/* Main Content: Description, Annualized Return, Logo, Risk Grade */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex-1 pr-4">
                    <p className="text-gray-700 text-sm md:text-base mb-3 leading-snug">
                        {camp.description}
                    </p>
                    <p className="text-xl font-bold text-gray-800">
                        {camp.annualizedReturn}% <span className="text-gray-500 text-base font-medium">annualized</span>
                    </p>
                </div>

                {/* Logo and Risk Grade Block */}
                <div className="flex flex-col items-center justify-center w-20 h-20 relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    {/* Company Logo - Placeholder or actual image */}
                    {camp.logoSrc ? (
                        <Image
                            width={120}
                            height={160}
                            src={camp.logoSrc}
                            alt={`${camp.companyName}`}
                            className="w-full h-full object-cover p-1"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-indigo-600 bg-indigo-50">
                            {camp.companyName[0]}
                        </div>
                    )}

                    {/* Risk Grade Overlay - Now using dynamic risk colors and consistent styling */}
                    <div className="absolute bottom-0 left-0 w-full h-8 flex flex-col justify-end items-center">
                        <span className="text-xs text-gray-600 font-medium mb-0.5">RISK GRADE</span>
                        <div className={`w-full py-0.5 text-center text-sm font-bold ${riskColors}`}>
                            {camp?.riskGrade}
                        </div>
                    </div>
                </div>
            </div>

            {/* Campaign Details Button - Now consistent with primary Indigo color */}
            <button
                // onClick={() => handleDetailsClick(camp.companyName)}
                className="w-full py-2 md:py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center mb-4"
            >
                Campaign Details <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            {/* Projected Return */}
            <p className="text-center text-gray-600 text-sm">
                Get up to ৳<span className="font-bold text-base text-gray-800">{camp.projectedReturn}</span> in {camp.projectedMonths} months
            </p>
        </div>
    )
}
