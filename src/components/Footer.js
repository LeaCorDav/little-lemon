import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer id="footer" className="p-4 lg:py-16 bg-lightColor text-darkColor">
            <div className="m-auto max-w-4xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-start">
                <img src="/img/logo-green.png" alt="Little Lemon logo" width={"83px"} className="h-36 object-contain"/>
                
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-semibold">Doormat Navigation</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <a href="/#">About</a>
                            </li>
                            <li>
                                <a href="/#">Menu</a>
                            </li>
                            <li>
                                <Link to="/booking">Reservations</Link>
                            </li>
                            <li>
                                <a href="/#">Order Online</a>
                            </li>
                            <li>
                                <a href="/#">Login</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <ul>
                        <li>
                            Adress
                        </li>
                        <li>
                            <a href="/#">Phone number</a>
                        </li>
                        <li>
                            <a href="mailto:customers@littlelemon.com">customers@littlelemon.com</a>
                        </li>
                    </ul>
                </div>
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-semibold">Social Media Links</h2>
                    <ul>
                        <li>
                            <a href="/#">Facebook</a>
                        </li>
                        <li>
                            <a href="/#">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}