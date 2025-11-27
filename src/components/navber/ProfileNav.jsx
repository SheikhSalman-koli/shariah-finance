import React from 'react'

export default function ProfileNav() {
  return (
    <div className="flex items-center justify-between p-3">
                {/* Profile Circle */}
                <h3 className='font-bold text-[18px]'>Profile</h3>
                
                <button className='text-sm text-red-600 font-semibold bg-red-100 px-4 py-1.5 rounded-full hover:bg-red-200'>
                    Sign Out
                </button>
            </div>
  )
}
