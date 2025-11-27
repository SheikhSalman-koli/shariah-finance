'use client'

import { ChevronRight } from 'lucide-react'
import React from 'react'


export default function ModalButton({ icon: Icon, title, iconColor = 'text-gray-500', modalType, setModalType }) {
    return (
        <div className='flex flex-col gap-3'>
            <button
                onClick={() => setModalType(modalType)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-100 
                 hover:bg-gray-50 transition duration-150 group text-left"
            >
                {/* Icon + Title */}
                <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${iconColor} bg-gray-50 border border-gray-200`}>
                        <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-base font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                        {title}
                    </span>
                </div>

                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-transform duration-150" />
            </button>

        </div>
    )
}
