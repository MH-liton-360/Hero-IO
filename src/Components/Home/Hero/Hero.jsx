import { FaGooglePlay, FaApple } from "react-icons/fa";
import imgBg from "../../../assets/hero.png"
const Hero = () => {
    return (
        <section className="bg-yellow-100 pt-24">
            <div className="text-center items-center">
                <h3 className="text-5xl font-bold text-black p-8">We Build <br /> <span className="text-blue-600">Productive</span> Apps</h3>
                <p className="text-black max-w-2xl mx-auto pb-3">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className="flex justify-center gap-3">

                    <button className="btn btn-outline btn-secondary flex items-center gap-2">
                        <FaGooglePlay />
                        Google Play
                    </button>
                    <button className="btn btn-outline btn-secondary flex items-center gap-2">
                        <FaApple />
                        App Store
                    </button>

                </div>
            </div>

            <div className="p-12">
                <img src={imgBg} alt="" className="mx-auto" />
            </div>
        </section>
    );
};

export default Hero;