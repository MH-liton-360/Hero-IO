import { useEffect, useState } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(apps);
    }, []);

    return (
        <section className="pt-24">
            <SectionTitle
                heading={"Your Installed Apps"}
                subHeading={"Explore all apps on the market developed by us."}
            />

            <div className="mt-6 space-y-4">
                {installedApps.length === 0 && <p>No apps installed yet.</p>}

                {installedApps.map((app) => (
                    <div
                        key={app.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                    >
                        {/* Left side: image + info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-16 h-16 object-cover rounded bg-gray-200"
                            />
                            <div>
                                <h3 className="font-semibold">{app.title}</h3>
                                <div className="flex gap-4 text-sm text-gray-600 mt-1">
                                    <span>📥 {app.downloads}</span>
                                    <span>⭐ {app.ratingAvg}</span>
                                    <span>{app.size} MB</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side: uninstall button */}
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Installation;
