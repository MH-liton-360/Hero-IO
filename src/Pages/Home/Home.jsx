import Hero from "../../Components/Home/Hero/Hero";
import Stats from "../../Components/Home/Stats/Stats";
import TrendingApps from "../../Components/Home/TrendingApps/TrendingApps";

const Home = () => {
    return (
        <div id="home">
            <Hero></Hero>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;