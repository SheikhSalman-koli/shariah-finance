import { CheckCircle, Clock, Zap } from 'lucide-react';
import React, { useState } from 'react'

export default function Tabs() {
      const tabs = [
        { id: 'all', name: 'All', icon: Zap },
        { id: 'ongoing', name: 'Ongoing', icon: Clock },
        { id: 'completed', name: 'Completed', icon: CheckCircle },
    ];
     const [activeTab, setActiveTab] = useState("All");

    return (
        <div className="flex w-full bg-indigo-50 p-1  border-t border-gray-300">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.name;
                const Icon = tab.icon;

                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.name)}
                        className={`
                            flex-1 p-3 text-center text-sm font-semibold transition-all duration-150
                            flex items-center justify-center gap-2
                            ${isActive 
                                ? 'border-b-2 border-indigo-600' 
                                : 'text-gray-600 hover:text-indigo-600'
                            }
                        `}
                    >
                        <Icon className="w-4 h-4" />
                        {tab.name}
                    </button>
                );
            })}
        </div>
    )
}
