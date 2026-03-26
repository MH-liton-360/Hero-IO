import Error404 from "../../assets/error-404.png";

const Error = () => {

    return (
        <div className="flex items-center justify-center h-screen">
            <img src={Error404} alt="404 Error" className="max-w-full h-auto" />
        </div>
    );
};

export default Error;