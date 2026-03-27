import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const App = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app;
    const navigate = useNavigate();
    return (
        <section>

            <div onClick={() => navigate(`/app/${id}`)}
                className="card bg-amber-100 shadow-lg cursor-pointer hover:scale-105 transition"
            >
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl h-56 w-96 object-cover" />
                </figure>
                <div className="card-body text-left pl-10">
                    <h2 className="card-title text-sm"> {title}</h2>

                    <div className="flex gap-32 items-center">
                        <p className="flex items-center gap-2">
                            <FaDownload className="text-blue-500" /> {/* Download icon */}
                            {downloads}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaStar className="text-yellow-400" /> {/* Star icon */}
                            {ratingAvg}
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default App;