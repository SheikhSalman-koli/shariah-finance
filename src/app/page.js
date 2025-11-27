
import React from 'react'
import {ChevronRight, Facebook, HelpCircle, Star, TrendingUp} from 'lucide-react';
import FirstTime from '../components/home/FirstTime';
import TopBanner from '../components/home/TopBanner';
import VideoBanner from '../components/home/VideoBanner';
import ActionLink from '../components/shared/ActionLink';


export default function Home() {

  return (
     <main className="w-full max-w-xl mx-auto p-4 pb-6 space-y-8">
        <TopBanner />
        
        <VideoBanner />

        {/* First Time */}
        <FirstTime />
  
        {/* Explore Campaigns Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-between border border-gray-100">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Explore New Opportunities</h3>
            <p className="text-sm text-gray-500 mt-1">See 3+ Campaign Campaigns in progress.</p>
          </div>
          <button className="flex items-center justify-center h-10 w-10 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300">
            <TrendingUp className="h-5 w-5" />
          </button>
        </div>

        {/*  Explore Campaigns Section with Action Button Group --- */}
        <div className="space-y-3">
          <ActionLink 
            icon={Star} 
            title="Leave us a Review" 
            href="/review-page" 
            iconColor="text-yellow-500"
          />
          <ActionLink 
            icon={HelpCircle} 
            title="Ask a Question" 
            href="/faq-support" 
            iconColor="text-indigo-500"
          />
          <ActionLink 
            icon={Facebook} 
            title="facebook.com/sharia.io" 
            href="https://www.facebook.com/sharia.io" 
            external={true}
            iconColor="text-blue-600"
          />
        </div>
        
      </main>
  );
}
