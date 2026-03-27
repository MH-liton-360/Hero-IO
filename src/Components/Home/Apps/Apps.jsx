import { use } from "react";
import App from "../App/App";
import { useNavigate } from "react-router";

const Apps = ({ appsPromise, limit }) => {
    const appData = use(appsPromise);
    const navigate = useNavigate();

    const appsToDisplay = limit ? appData.slice(0, limit) : appData;

    return (
        <section>
            <h1 className="pl-8 mb-2 font-bold">({appData.length}): Apps found</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
                {appsToDisplay.map(app => <App key={app.id} app={app} />)}
            </div>

            {limit && (
                <div className="text-center mt-6">
                    <button
                        onClick={() => navigate("/all-apps")}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Show All
                    </button>
                </div>
            )}
        </section>
    );
};

export default Apps;