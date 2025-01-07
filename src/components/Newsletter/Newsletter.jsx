import newsletterImg from '../../assets/newsletter.avif';

const Newsletter = () => {
    return (
        <div className="relative bg-cover bg-center object-cover py-16 px-6" style={{ backgroundImage: `url(${newsletterImg})` }}>

            <div className="absolute inset-0 flex">
                <div className="w-1/2 bg-black bg-opacity-85"></div>

                <div className="w-1/2 bg-black bg-opacity-80"></div>
            </div>

            <div className="relative w-full md:w-8/12 lg:w-6/12 text-center bg-black bg-opacity-50 rounded-3xl p-10 md:p-12 lg:p-20 mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white font-Parkinsans">
                    Stay Updated with the Latest Reviews!
                </h2>
                <p className="text-lg mb-8 text-white">
                    Subscribe to our newsletter and get exclusive game reviews, updates, and insider news directly to your inbox.
                    Don’t miss out on the next big thing in gaming!
                </p>

                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-4 w-full bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-xl transition-all duration-300"
                    />
                    <button className="w-full mt-5 px-8 py-4 bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300  text-white text-lg font-semibold rounded-xl hover:scale-105 transform transition-all duration-300">
                        Subscribe Now
                    </button>
                </div>

                <div className="mt-6 text-gray-200">
                    <p>We respect your privacy. No spam, just the best gaming news!</p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
