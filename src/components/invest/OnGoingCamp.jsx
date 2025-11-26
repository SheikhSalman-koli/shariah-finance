
import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import IncrementDecrement from './IncrementDecrement'
import CampaignCard from '../shared/CampaignCard'


// const onGoing = [ { id: 2343, companyName: "Green Harvest Farms", tagline: "Sustainable Organic Produce", description: "Funding the expansion of hydroponic systems for year-round vegetable production.", annualizedReturn: 14, daysLeft: 15, riskGrade: "A", logoSrc: "/drill.jpg", projectedReturn: "35,000*", projectedMonths: 9, }, { id: 43454, companyName: "Digital Edge Agency", tagline: "Creative Marketing Solutions", description: "Capital injection to hire specialized AI/ML engineers for a new product line.", annualizedReturn: 24, daysLeft: 7, riskGrade: "C", logoSrc: "/plasType.jpeg", projectedReturn: "82,500*", projectedMonths: 12, }, { id: 45657, companyName: "Metro Cafe Chain", tagline: "Premium Coffee & Bakery", description: "Securing funds for the opening of three new high-traffic location franchises.", annualizedReturn: 18, daysLeft: 30, riskGrade: "B", logoSrc: "/veriusType.jpeg", projectedReturn: "48,700*", projectedMonths: 6, }, { id: 577, companyName: "Local Logistics Hub", tagline: "Last-Mile Delivery Network", description: "Investing in new electric vehicle fleet for eco-friendly, efficient urban delivery.", annualizedReturn: 16, daysLeft: 19, riskGrade: "A", logoSrc: "/wire.jpeg", projectedReturn: "95,100*", projectedMonths: 18, }, { id: 6768, companyName: "Artisan Textile Mills", tagline: "Handmade Woven Fabrics", description: "Supporting working capital and raw material procurement for the peak season.", annualizedReturn: 19, daysLeft: 4, riskGrade: "C", logoSrc: "/rod-cutting.jpg", projectedReturn: "61,200*", projectedMonths: 7, } ]

export default async function OnGoingCamp() {

    const res = await fetch('http://localhost:3000/campaigns.json', { cache: 'no-store' })

    const onGoing = await res.json()
    console.log(onGoing)

    // riskGradeColor

    // increment and decrement state



    return (
        <div className="max-w-xl mx-auto px-4 pt-4 ">
            <div className="space-y-4 mb-5">
                {onGoing.map(camp => {
                    return(
                        <CampaignCard
                        key={camp?.id}
                        camp={camp}
                    />
                    )
                })}
            </div>

            <IncrementDecrement />
        </div>
    )
}
