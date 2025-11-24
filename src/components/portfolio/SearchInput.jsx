import { Search } from 'lucide-react'
import React from 'react'

export default function SearchInput() {
  return (
    <div className='px-2 py-4 flex items-center gap-2 text-gray-700 mb-0'>
        <Search/>
        <input 
            type="text" 
            placeholder="Type Campaign Name..." 
            className="w-full outline-none border-none "
        />
    </div>
  )
}
