
import React from 'react'
import IncrementDecrement from './IncrementDecrement'
import CampaignCard from '../shared/CampaignCard'


export default async function OnGoingCamp() {

    const res = await fetch('http://localhost:3000/campaigns.json', { cache: 'no-store' })

    const onGoing = await res.json()
    // console.log(onGoing)

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
