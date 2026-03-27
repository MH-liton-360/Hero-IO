import { use } from "react";
import App from "../App/App";
import { useNavigate } from "react-router";

const Apps = ({ appsPromise }) => {
    const appData = use(appsPromise);
    const navigate = useNavigate();
    const appsToDisplay = appData.slice(0, 8);
    return (
        <section>
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
                {appsToDisplay.map(app => <App key={app.id} app={app} />)}
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={() => navigate("/all-apps")}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Show All
                </button>
            </div>
        </section>
    );
};

export default Apps;