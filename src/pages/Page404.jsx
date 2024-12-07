import { useNavigate } from "react-router";
import banner from "../assets/Free-download-Batman-Who-Laughs-Image.jpg"
const Page404 = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");

    }

    return (
        <div className=" bg-cover bg-center pb-24 h-screen pt-32 pl-24"
            style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-black w-6/12 bg-opacity-40 text-center p-16 rounded-xl">
                <h2 className="text-6xl font-bold font-Parkinsans text-white">404</h2>
                <h4 className="text-white font-Parkinsans font-bold text-3xl my-2">Page not found</h4>
                <p className="text-white font-Parkinsans text-lg">Sorry, we couldn’t find the page you are looking for.
                </p>
                <button onClick={handleNavigate} className="bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white btn rounded-full mt-4">Back to Home</button>
            </div>
        </div>
    );
};

export default Page404;