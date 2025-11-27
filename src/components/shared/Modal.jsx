import React from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
      if (!isOpen) return null;
  return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-11/12 max-w-md">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  )
}
