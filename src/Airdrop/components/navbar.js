import '../airdrop.css';


function Navbar() {
    return (
        <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
            <div className="flex justify-between">
                <a href="#" className="flex items-center p-2 mr-4 no-underline">
                    <img className="max-h-l2 w-auto" src="assets/images/logo.png" />
                </a>
                <a
                    data-toggle="toggle-nav"
                    data-target="#nav-items"
                    href="#"
                    className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3"
                >
                    <i data-feather="menu" />
                </a>
            </div>
            <div
                id="nav-items"
                className="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center"
            >
                <a
                    href="#home"
                    className="fs-s1 mx-3 py-3 white no-underline hover-underline"
                >
                    Home
                </a>
                <a
                    href="#features"
                    className="fs-s1 mx-3 py-3 white no-underline hover-underline"
                >
                    Features
                </a>
                <a
                    href="#pricing"
                    className="fs-s1 mx-3 py-3 white no-underline hover-underline"
                >
                    Pricing
                </a>
                <a
                    href="#blog"
                    className="fs-s1 mx-3 py-3 indigo no-underline hover-underline"
                >
                    Blog
                </a>
                <a href="#" className="button bg-white black fw-600 no-underline mx-5">
                    Register
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
