import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="p-4 lg:py-6">
            <div className="flex justify-between items-center m-auto max-w-4xl">
                <button className="md:hidden p-2">
                    <img src="/icons/menu.svg" alt="menu icon" height={"24px"} width={"25px"} className="h-6" />
                </button>
                <img src="/img/logo.svg" alt="Little Lemon logo" height={"40px"} width={"148px"} />
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="/#About">About</a>
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
                <button className="md:hidden p-2">
                    <img src="/icons/basket.svg" alt="cart icon" height={"24px"} width={"25px"} className="h-6" />
                </button>
            </div>
        </header>
    );
}