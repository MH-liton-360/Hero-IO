import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";

import iconDownloads from "../../assets/icon-downloads.png"

const AppDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [app, setApp] = useState(null);

    useEffect(() => {
        fetch("/apps.json")
            .then((res) => res.json())
            .then((data) => {
                const singleApp = data.find((app) => app.id == id);
                setApp(singleApp);
            });
    }, [id]);

    if (!app) {
        return <span className="loading loading-bars loading-xl"></span>;
    }

    const {
        image,
        title,
        companyName,
        description,
        reviews,
        ratingAvg,
        downloads,
        ratings,
        size,
    } = app;

    const handleInstall = () => {
        // Get installed apps from localStorage
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

        // Prevent duplicate installation
        const isAlreadyInstalled = installedApps.find((a) => a.id === app.id);
        if (!isAlreadyInstalled) {
            installedApps.push(app);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
        }

        // Navigate to Installation page
        navigate("/installation");
    };

    return (
        <div className="max-w-4xl mx-auto pt-28 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-5">
                {/* App Image */}
                <div className="md:w-1/2">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </div>

                {/* App Details */}
                <div className="md:w-1/2">
                    <h1 className="text-2xl font-bold mt-4">{title}</h1>
                    <p className="text-gray-500">Developed by: {companyName}</p>

                    <div className="divider"></div>

                    {/* Stats */}
                    <div className="flex justify-between gap-6 text-gray-700">
                        <div className="flex flex-col items-center">
                            <span className="text-xl"><FaDownload className="text-blue-500"></FaDownload></span>
                            <span className="text-sm">Downloads</span>
                            <span className="text-sm">{downloads}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-xl"> <FaStar className="text-yellow-400"></FaStar> </span>
                            <span className="text-sm">Avg Rating</span>
                            <span className="text-sm">{ratingAvg}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-xl">💬</span>
                            <span className="text-sm">Reviews</span>
                            <span className="text-sm">{reviews}</span>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button
                        onClick={handleInstall}
                        className="flex items-center justify-center gap-2 mt-4 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
                    >
                        <img src={iconDownloads} alt="Download Icon" className="h-6 w-6" />
                        <span>Install Now ({size} MB)</span>
                    </button>
                </div>
            </div>

            {/* Ratings Distribution */}
            {ratings && ratings.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold">Ratings</h2>
                    <div className="space-y-2 mt-2">
                        {ratings.map((r) => (
                            <div key={r.name} className="flex items-center gap-2">
                                <span className="w-16">{r.name}</span>
                                <div className="flex-1 bg-gray-200 h-3 rounded">
                                    <div
                                        className="bg-yellow-400 h-3 rounded"
                                        style={{ width: `${(r.count / reviews) * 100}%` }}
                                    ></div>
                                </div>
                                <span>{r.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Description */}
            <div className="mt-8">
                <h3 className="font-semibold">Description</h3>
                <p className="text-gray-600 whitespace-pre-line">{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;