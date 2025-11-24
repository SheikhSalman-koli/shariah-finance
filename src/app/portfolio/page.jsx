'use client'

import SearchInput from '@/src/components/portfolio/SearchInput'
import Tabs from '@/src/components/portfolio/Tabs';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

export default function PortfoloiPage() {

    const filteredCampaigns = []

    return (
        <div className='w-full max-w-xl mx-auto space-y-8'>
            <SearchInput />

            <Tabs />

            {/* Content Area */}
            <div className=" px-4">
                {filteredCampaigns.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredCampaigns.map(campaign => (
                            <div key={campaign.id} campaign={campaign} />
                        ))}
                    </div>
                ) : (
                    <div className="min-h-screen mt-4 p-10 bg-white rounded-xl mb-4 border border-gray-200 text-center">
                        <Clock className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">No Campaigns Found</h3>
                        <p className="mt-2 text-md text-gray-500">
                            You have not made any investment yet.
                        </p>
                        <Link
                            href='/invest'
                            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                        >
                            Explore Ongoing Opportunities
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
