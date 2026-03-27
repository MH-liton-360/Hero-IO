import { Suspense } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import Apps from "../../Components/Home/Apps/Apps";

const AllApps = () => {
    const appsPromise = fetch('./apps.json').then(res => res.json())

    return (
        <section className="pt-24">
            <SectionTitle
                heading={"Our All Applications"}
                subHeading={"Explore All Apps on the Market developed by us. We code for Millions"}
            ></SectionTitle>

            <div className="">
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>} >
                    <Apps appsPromise={appsPromise} ></Apps>
                </Suspense>
            </div>
        </section>
    );
};

export default AllApps;