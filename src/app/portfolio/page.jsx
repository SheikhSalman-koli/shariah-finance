

import SearchInput from '@/src/components/portfolio/SearchInput'
import Tabs from '@/src/components/portfolio/Tabs';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import data from '../../data/campaigns.json'

export default async function PortfoloiPage() {

    const email = "redwan@gmail.com"

    // const res = await fetch('http://localhost:3000/campaigns.json')
    // const data = await res.json()
    const myCampaigns = data.filter(camp => camp.email === email);
  

    return (
        <div className='w-full max-w-xl mx-auto space-y-8'>
            <SearchInput />


            {/* Content Area */}
            <div className="">
                {myCampaigns.length > 0 ? (
                    <Tabs 
                    myCampaigns={myCampaigns}
                    />

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
