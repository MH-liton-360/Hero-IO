import { Suspense } from "react";
import Apps from "../Apps/Apps";

const TrendingApps = () => {

    const appsPromise = fetch('./apps.json').then(res => res.json())
    return (
        <section>

            <div className="">
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>} >
                    <Apps appsPromise={appsPromise} ></Apps>
                </Suspense>
            </div>
        </section>
    );
};

export default TrendingApps;