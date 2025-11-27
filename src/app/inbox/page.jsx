import NewsCard from '@/src/components/inbox/NewsCard';
import React from 'react'


export default async function InboxPage() {

    const res = await fetch('http://localhost:3000/news.json', { cache: 'no-store' })

    const news = await res.json()
    // console.log(news)   


  return (
    <div className='max-w-xl mx-auto px-4 pt-4'>

        <div className="space-y-10">
            {news.map((item, index) => (
                <NewsCard 
                 key={item.id}
                 index={index}
                 item={item}
                />
            ))}
        </div>
    </div>
  )
}
