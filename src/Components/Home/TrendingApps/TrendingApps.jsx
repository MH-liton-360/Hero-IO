import { Suspense } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Apps from "../Apps/Apps";

const TrendingApps = () => {
    const appsPromise = fetch('./apps.json').then(res => res.json());

    return (
        <section>
            <SectionTitle
                heading="Trending Apps"
                subHeading="Explore All Trending Apps on the Market developed by us"
            />

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Apps appsPromise={appsPromise} limit={8} />
            </Suspense>
        </section>
    );
};

export default TrendingApps;