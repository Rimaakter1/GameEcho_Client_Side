import React, { useState } from 'react';

const TrailerShowcase = () => {
    const trailers = [
        {
            title: 'The Legend of Zelda',
            videoUrl: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=dZoxbSepc0sRjDwi',
            description: 'The latest installment in the iconic Zelda series, with an open-world adventure full of puzzles and mysteries!',
        },

        {
            title: 'Starfield Official Trailer',
            videoUrl: 'https://www.youtube.com/embed/kfYEiTdsyas?si=8EB2g0lN4TQ2-mVk',
            description: 'Explore a vast, limitless universe in this sci-fi epic that promises groundbreaking space exploration mechanics!',
        },
        {
            title: 'Marvel’s Spider-Man 2',
            videoUrl: 'https://www.youtube.com/embed/nq1M_Wc4FIc?si=7EgFTDxGbyuq8Usc',
            description: 'Swing into action with Peter Parker and Miles Morales in this thrilling sequel, featuring stunning visuals and combat.',
        },

    ];

    const [openModal, setOpenModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setOpenModal(true);
    };

    return (
        <div className='bg-gray-100 dark:bg-gray-800 py-10'>
            <div className="py-20 w-10/12 md:w-11/12 mx-auto">
                <div className="text-center text-gray-800 mb-16">
                    <h2 className="text-4xl font-Parkinsans dark:text-white font-bold text-black mb-4">Upcoming Game Trailers</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto font-Parkinsans">
                        Dive into the world of upcoming games through their official trailers. Get a glimpse
                        of what these new games have to offer in terms of gameplay, features, and more. Watch
                        the trailers below to experience the excitement before the launch.
                    </p>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trailers.map((trailer, index) => (
                            <div
                                key={index}
                                className="card transition-transform transform hover:scale-105 duration-300 shadow-lg rounded-lg overflow-hidden bg-gray-950"
                                onClick={() => handleVideoClick(trailer.videoUrl)}
                            >
                                <div className="relative">
                                    <iframe
                                        src={trailer.videoUrl}
                                        title={trailer.title}
                                        className="w-full h-56 object-cover"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black opacity-50 hover:opacity-60 transition-opacity duration-300">
                                        <span className="text-2xl font-semibold text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            Watch Now
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-white">{trailer.title}</h3>
                                    <p className=" mt-2 text-gray-200">{trailer.description}</p>
                                    <button className="btn btn-secondary mt-4 rounded-full px-6 py-2 bg-gradient-to-r from-rose-300 via-purple-400 to-blue-300 text-white border-none">
                                        Watch Trailer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {openModal && (
                    <div
                        className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={() => setOpenModal(false)}
                    >
                        <div
                            className="relative bg-white dark:bg-gray-950 p-8 rounded-lg max-w-2xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={selectedVideo}
                                title="Trailer"
                                className="w-full h-80"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <button
                                className="absolute top-4 right-4 text-white font-bold text-lg"
                                onClick={() => setOpenModal(false)}
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrailerShowcase;
