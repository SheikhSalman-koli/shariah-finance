import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function ActionLink({ icon: Icon, title, href, external = false, iconColor = 'text-gray-500' }) {
  return (
     <a 
    href={href} 
    target={external ? "_blank" : "_self"} 
    rel={external ? "noopener noreferrer" : ""}
    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-100 
               hover:bg-gray-50 transition duration-150 group"
  >
    {/* Icon and Title Group */}
    <div className="flex items-center space-x-4">
      <div className={`p-2 rounded-full ${iconColor} bg-gray-50 border border-gray-200`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-base font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
        {title}
      </span>
    </div>

    {/* Chevron Right (The arrow >) */}
    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-transform duration-150" />
  </a>
  )
}
