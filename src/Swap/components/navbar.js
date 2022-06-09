import '../Swap.css';

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg nav-bg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src="images/header-logo-mega-fi.png" alt="mega-fi" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon">
                                    <i className="fas fa-bars" />
                                </span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="https://app.gitbook.com/o/midfNDhpUOzTCNWCsrMl/s/nOZiuC9wCYlPkNwhcOVI/guides/megateam"
                                        >
                                            About us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://discord.gg/xwuxAnkq">
                                            Discord
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            Github
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="https://megafiprotocol.github.io/docs/"
                                        >
                                            Docs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
