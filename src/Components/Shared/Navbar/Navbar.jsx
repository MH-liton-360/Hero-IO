
import logoHIO from "../../../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router";


const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = [
        { name: "Home", to: "/" },
        { name: "Apps", to: "/apps" },
        { name: "Installation", to: "/installation" },
    ]

    const renderNavItems = (isMobile = false) => {
        return menuItems.map((item) => (
            <li key={item.to}>
                <Link
                    to={item.to}
                    className={`cursor-pointer px-4 py-2 block rounded-lg transition ${currentPath === item.to
                        ? "bg-yellow-400 text-black font-semibold"
                        : "text-black hover:text-yellow-500"
                        } ${isMobile ? "w-full text-center" : ""}`}
                >
                    {item.name}
                </Link>
            </li>
        ));
    };

    return (
        <section>
            <div className="fixed navbar bg-base-100 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-1 items-center justify-between px-4 h-16">

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} className="btn btn-ghost p-2">
                                ☰
                            </div>
                            <ul className="dropdown-content bg-white rounded-box mt-3 w-56 p-2 shadow">
                                {renderNavItems(true)}
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logoHIO} className="h-8 w-8" />
                            <span className="text-xl font-bold text-black hover:text-yellow-500">
                                Hero-IO
                            </span>
                        </Link>
                    </div>

                    {/* desktop  */}
                    <ul className="hidden lg:flex gap-6">
                        {renderNavItems()}
                    </ul>

                    <div className="flex-1 flex navbar-end">
                        <a
                            href="https://github.com/your-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn flex items-center gap-2 rounded-lg bg-blue-600 text-white"
                        >
                            <FaGithub className="text-lg" />
                            <span className="text-sm font-medium">Contribute</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Navbar;