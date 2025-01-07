import React, { useState } from "react";

const Support = () => {
    const [openFAQ, setOpenFAQ] = useState(false);
    const [openFeedback, setOpenFeedback] = useState(false);

    const toggleFAQModal = () => setOpenFAQ(!openFAQ);
    const toggleFeedbackModal = () => setOpenFeedback(!openFeedback);

    return (
        <div className="dark:bg-gray-800 bg-gray-100 min-h-screen py-20">
            <div className="w-10/12 md:w-8/12 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold dark:text-white mb-4">Need Help?</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
                        We're here to help! Whether you have questions about our game reviews, need assistance with an issue, or have suggestions, feel free to reach out to us. Let us guide you through any problems you're facing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card bg-gray-900 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                        <div className="card-body">
                            <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
                            <p className="text-base mb-4">
                                Our team is here to assist you with any issues. Contact us for a quick resolution.
                            </p>
                            <a
                                href="mailto:support@gamereviews.com"
                                className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 w-full text-white"
                            >
                                Contact Support
                            </a>
                        </div>
                    </div>

                    <div className="card bg-gray-900 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                        <div className="card-body">
                            <h3 className="text-2xl font-bold mb-4">FAQ</h3>
                            <p className="text-base mb-4">
                                Find answers to commonly asked questions about game reviews, gameplay, and more.
                            </p>
                            <button
                                onClick={toggleFAQModal}
                                className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 w-full text-white"
                            >
                                Read FAQs
                            </button>
                        </div>
                    </div>

                    <div className="card bg-gray-900 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                        <div className="card-body">
                            <h3 className="text-2xl font-bold mb-4">Feedback</h3>
                            <p className="text-base mb-4">
                                We would love to hear your feedback to improve our services and game reviews.
                            </p>
                            <button
                                onClick={toggleFeedbackModal}
                                className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 w-full text-white"
                            >
                                Give Feedback
                            </button>
                        </div>
                    </div>
                </div>

                {openFAQ && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={toggleFAQModal}
                    >
                        <div
                            className="relative bg-white dark:bg-gray-900 p-8 rounded-lg max-w-xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                Frequently Asked Questions
                            </h3>
                            <ul className="text-gray-700 dark:text-gray-200 space-y-4">
                                <li>
                                    <strong>Q: What is this website about?</strong>
                                    <p>A: This website provides reviews, ratings, and gameplay previews for various games.</p>
                                </li>
                                <li>
                                    <strong>Q: How often are the reviews updated?</strong>
                                    <p>A: We update our reviews and content regularly to provide the most current insights on games.</p>
                                </li>
                                <li>
                                    <strong>Q: Can I suggest a game for review?</strong>
                                    <p>A: Absolutely! You can submit your game suggestions via the contact form or send us an email.</p>
                                </li>
                            </ul>
                            <button
                                className="absolute top-4 right-4 text-white font-bold text-lg"
                                onClick={toggleFAQModal}
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                )}

                {openFeedback && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={toggleFeedbackModal}
                    >
                        <div
                            className="relative bg-white dark:bg-gray-900 p-8 rounded-lg max-w-xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                Provide Feedback
                            </h3>
                            <textarea
                                className="textarea textarea-bordered bg-gray-200 dark:bg-gray-700 dark:text-white text-black w-full p-4 mb-4"
                                placeholder="Enter your feedback here..."
                                rows="5"
                            ></textarea>
                            <div className="flex justify-end">
                                <button
                                    className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white"
                                    onClick={toggleFeedbackModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Support;
