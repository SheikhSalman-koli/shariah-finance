
'use client'
import React, { useState, useRef, useEffect } from 'react';
import { X, CirclePlay } from 'lucide-react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// --- 1. MODAL COMPONENT ---
// Reusable component for the modal structure and backdrop logic.
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        // Overlay (The Backdrop)
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={onClose}
        >

            {/* Modal Content Box */}
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg md:max-w-3xl mx-4 transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Modal Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Modal Body (Content) */}
                <div className="p-0 bg-black rounded-b-xl overflow-hidden">
                    {children}
                </div>

            </div>
        </div>
    );
};



const getYouTubeID = (url) => {
  const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const VideoPlayer = ({ videoUrl, isOpen }) => {
    const videoRef = useRef(null);
    // if (!videoUrl) return null; // Do not render iframe if no URL

  const videoID = getYouTubeID(videoUrl);
 
  const embedUrl = `https://www.youtube.com/embed/${videoID}?rel=0&modestbranding=1&autoplay=1`;

    // Crucial: Use useEffect to pause the video when the modal closes
    useEffect(() => {
        if (!isOpen && videoRef.current) {
            videoRef.current.pause();
            // Optional: Rewind to the beginning
            videoRef.current.currentTime = 0;
        }
    }, [isOpen]);

    return (
        <div className="w-full relative pb-[56.25%] h-0">
            <iframe
                key={videoUrl} // forces remount if URL changes
                className="absolute top-0 left-0 w-full h-full"
                src={embedUrl}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

const resourses = [
    {
        id: 234234,
        title: 'Explanation of project',
        thumbnail: '/kerat.png',
        videourl: 'https://youtu.be/0XZdIY7bYZA?si=A7FUAlt8I-cMCBSS'
    },
    {
        id: 234754,
        title: 'Mustafa Mustafa',
        thumbnail: '/mustafaThumb.png',
        videourl: 'https://youtu.be/7-dG0wjd8P8?si=xMU4JWvaXC2CJPDb'
    },
    {
        id: 567234,
        title: 'Oh jis ke liye mahfile kawnain',
        thumbnail: '/ohJiskeThubm.png',
        videourl: 'https://youtu.be/QRmtS2aKHzU?si=E1CpZ7-X8RPFuGFP'
    }
]
// --- 3. DEMONSTRATION APP (Using Thumbnail) ---
const VideoBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mockVideoUrl, setMockVideoUrl] = useState('')

    return (
        <div className="">


            <Splide
                className="my-splide"
                options={{
                    type: 'loop',
                    perPage: 1,
                    gap: '20px',
                    autoplay: true,
                    speed: 700,
                    focus: 'center', // Keep focus center for a nice transition effect
                    trimSpace: false,
                    pagination: false,
                    arrows: false,
                    drag: true,
                    focus: 'center',

                    padding: {
                        right: '25%',
                        left: '25%', // Keep the left side clean, or set it to '25%' to center the active card nicely
                    },

                    width: '100%',

                    breakpoints: {
                        640: {
                            padding: { right: '15%' }, // Less padding on very small screens
                        },
                    }
                }}
            >

                {
                    resourses.map(video => {
                        return (
                            <SplideSlide
                                key={video?.id}
                            >
                                <div
                                    onClick={() => setIsModalOpen(true)}
                                    className="relative cursor-pointer rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 group"
                                >
                                    {/* The Thumbnail Image */}
                                    <Image
                                        height={400}
                                        width={300}
                                        src={video?.thumbnail}
                                        alt={video?.title}
                                        className="w-full h-38 object-cover"
                                    />

                                    {/* Play Icon Overlay for clear interaction */}
                                    <div
                                        onClick={() => setMockVideoUrl(video?.videourl)}
                                        className="absolute inset-0 flex items-center justify-center bg-opacity-30 group-hover:bg-opacity-10 transition-opacity">
                                        <CirclePlay className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                    </div>
                                </div>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>

            {/* The Modal Component */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Campaign Overview Video"
            >
                {/* The Video Player inside the Modal */}
                <VideoPlayer
                    videoUrl={mockVideoUrl}
                    isOpen={isModalOpen}
                />
            </Modal>
        </div>
    );
};

export default VideoBanner;