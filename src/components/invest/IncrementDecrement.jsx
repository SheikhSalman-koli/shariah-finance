'use client'

import { MinusCircle, PlusCircle } from 'lucide-react'
import React, { useState } from 'react'

export default function IncrementDecrement() {

       const [amount, setAmount] = useState(5)
    const convertToHazar = amount*1000

    return (
        <div className='sticky bottom-12 w-full max-w-xl mx-auto bg-white border-t-4 border border-indigo-500 rounded-t-2xl z-20 px-3 py-4 space-y-3'>
            <p className='text-center text-sm text-gray-800'>The amount you would like to invest?</p>
            <div className='grid grid-cols-3 gap-4 mg:gap-8'>
                {/* decrement */}
                <button
                    disabled={amount === 5}
                    onClick={() => setAmount(amount - 10)}
                    className={`flex justify-center items-center gap-2 rounded-3xl text-white px-3 py-1 hover:bg-indigo-700 ${amount === 5 ? 'cursor-not-allowed bg-indigo-300' : 'bg-indigo-600'} `}>
                    <MinusCircle size={15} />
                    10K
                </button>
                {/* shower button */}
                <button className='rounded-full border-2 border-indigo-600 bg-indigo-50 text-indigo-700 font-extrabold text-xl shadow-inner'>
                    <span className='text-xl'>{amount}K</span>
                </button>
                {/* increment */}
                <button
                    onClick={() => setAmount(amount + 10)}
                    className='flex justify-center items-center gap-2 rounded-3xl bg-indigo-600 text-white px-3 py-1 hover:bg-indigo-700'>
                    <PlusCircle size={15} />
                    10K
                </button>
            </div>

            <p className='text-center text-sm text-gray-800'>৳{convertToHazar}</p>
        </div>
    )
}
