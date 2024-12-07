const Banner = ({ title, description }) => {
    return (
        <div className="text-white py-12 px-6 text-center rounded-lg">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8 text-center">{description}</p>
            </div>
        </div>
    );
};

export default Banner;