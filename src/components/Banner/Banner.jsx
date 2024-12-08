import PropTypes from 'prop-types';

const Banner = ({ title, description }) => {
    return (
        <div className="text-white pt-12 pb-8 px-2 lg:px-6 text-center rounded-lg">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8 text-center">{description}</p>
            </div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Banner;