import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Your message has been sent! We will get back to you shortly.");
        setName("");
        setEmail("");
        setMessage("");
        setShowModal(true);
    };

    return (
        <div className="dark:bg-gray-800 bg-gray-100 min-h-screen py-20">
            <div className="w-11/12 mx-auto flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold dark:text-white mb-4">Contact Us</h2>
                    <p className="text-lg dark:text-gray-200 max-w-3xl mx-auto">
                        Have questions or feedback? Reach out to us below, and we'll get back to you as soon as possible!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 w-full ">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-900 dark:bg-gray-700 p-8 rounded-xl shadow-2xl space-y-8"
                    >
                        <h3 className="text-xl font-bold font-Parkinsans text-white mb-4 ">Send Us a Message</h3>

                        <div>
                            <label htmlFor="name" className="text-lg text-white mb-2 font-Parkinsans">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-full p-4 bg-gray-100 dark:bg-gray-800 dark:text-white border-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-lg text-white mb-2 font-Parkinsans">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input w-full p-4 bg-gray-100 text-white border-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-lg text-white mb-2 font-Parkinsans">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="textarea w-full p-4 bg-gray-100 text-black border-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your message"
                                required
                                rows="6"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300  text-white rounded-full w-full py-2 border-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    <div className="bg-gray-900 dark:bg-gray-700 p-8 rounded-xl shadow-2xl space-y-8">
                        <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>

                        <div>
                            <p className="text-lg text-gray-200 mb-4">
                                If you need assistance or have any inquiries, feel free to contact us. Our team is
                                here to help you with your queries, feedback, or anything related to our services.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center text-gray-300">
                                <i className="fas fa-phone mr-3"></i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <i className="fas fa-envelope mr-3"></i>
                                <span>contact@yourcompany.com</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <i className="fas fa-map-marker-alt mr-3"></i>
                                <span>1234 Game Street, City, State, Country</span>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => alert("Thanks for reaching out!")}
                                className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white border-none  w-full py-2 rounded-full"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
