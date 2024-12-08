import aboutImg from "../../assets/about.jpg"
import { Slide } from "react-awesome-reveal";

const AboutUs = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white py-8 md:py-10 lg:py-16 px-6">
            <div className="max-w-screen-xl mx-auto lg:flex items-center justify-between">
                <div className="lg:w-1/2 pr-0 lg:pr-8">
                    <Slide direction="left">
                        <p className="text-pink-400 font-Parkinsans mb-7">WHO WE ARE</p>
                        <h2 className="text-4xl font-bold mb-6">About Us</h2>
                        <p className="text-lg  mb-6">
                            At GameEcho, we are passionate about gaming. Our goal is to provide honest, in-depth reviews that help players find the best games across all platforms. Whether you are a casual gamer or a hardcore enthusiast, our expert opinions are here to guide you through the latest releases and hidden gems in the gaming world.
                        </p>

                        <button className="px-6 py-3 bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-xl  rounded-3xl text-white font-semibold ">
                            Learn More About Us
                        </button>
                    </Slide>
                </div>

                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <Slide direction="right">
                        <img
                            src={aboutImg}
                            alt="Gaming Image"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </Slide>
                </div>

            </div>
        </div>

    );
};

export default AboutUs;