'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export default function NewsCard({ item, index }) {

        const [readMore, setReadMore] = useState(false);

    return (
        <div

            className={`flex flex-col md:flex-row items-center gap-6 border-b-2 border-b-indigo-600 rounded-b-2xl pb-4
                    ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
        >
            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
                <Image
                    width={300}
                    height={360}
                    src={item?.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-xl shadow"
                />
            </div>

            {/* TEXT CONTENT */}
            <div className="md:w-1/2 w-full space-y-3">
                <span className="text-sm text-indigo-600 font-semibold uppercase tracking-wide">
                    {item.category}
                </span>

                <h2 className="text-2xl font-bold text-gray-900">
                    {item.title}
                </h2>

                <p className="text-gray-700 leading-relaxed ">
                    {readMore ? item.description : item.description.slice(0, 120)}

                    <span
                    onClick={() => setReadMore(!readMore)}
                    className='text-indigo-600 font-semibold cursor-pointer '
                    >
                        {readMore ? '... Show less' : '... Read More'}
                    </span>
                </p>

                <p className="text-sm text-gray-500">
                    Published: {item.publishedAt}
                </p>
            </div>
        </div>
    )
}
