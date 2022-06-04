import './Swap.css';


function Swap() {

    return (
        <div className="Swap">
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
                <hr />
                <div className="container-fluid ">
                    <div className="container">
                        <div className="row mb-4">
                            <a href="index.html">
                                <i className="fas fa-arrow-left" /> Back
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-lg-12  mb-5 p-5">
                                <div className="row d-flex justify-content-between d-grid">
                                    <div className="col-lg-6 p-4 mission-box mission-radius mission-border">
                                        <div className="row">
                                            <div className="col">
                                                <h1>Swap</h1>
                                            </div>
                                            <div className="col">
                                                <h1 className="text-end">
                                                    <a href="#">
                                                        <i className="fas fa-cog" />
                                                    </a>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <p className="lathe-special-text"> From</p>
                                        </div>
                                        <div className="row">
                                            <div className="input-group mb-3">
                                                <button
                                                    className="btn btn-outline-secondary dropdown-toggle transparent-dropdown-border"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <img src="images/image 11.png" /> MATIC
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </li>
                                                </ul>
                                                <input
                                                    type="text"
                                                    className="form-control transparent-input-border text-end"
                                                    defaultValue={0}
                                                    aria-label="Text input with dropdown button "
                                                />
                                            </div>
                                        </div>
                                        <div className="row m-3">
                                            <h1 className="text-center">
                                                <i className="far fa-arrow-alt-circle-down" />
                                            </h1>
                                        </div>
                                        <div className="row">
                                            <p className="lathe-special-text"> To</p>
                                        </div>
                                        <div className="row">
                                            <div className="input-group mb-3">
                                                <button
                                                    className="btn btn-outline-secondary dropdown-toggle transparent-dropdown-border"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <img src="images/WhatsApp Image 2022-05-21 at 11.47 1.png" />{" "}
                                                    MEFAFI
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Separated link
                                                        </a>
                                                    </li>
                                                </ul>
                                                <input
                                                    type="text"
                                                    className="form-control transparent-input-border text-end"
                                                    defaultValue={0}
                                                    aria-label="Text input with dropdown button "
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row ps-5 pe-5">
                                            <button
                                                className="btn btn-light  btn-lg btn-block"
                                                type="button"
                                            >
                                                Connect Wallet
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 p-4 mission-box mission-radius mission-border">
                                        <div className="row">
                                            <h3 className="text-left">Upcoming projects</h3>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-4">
                                                <img
                                                    src="images/Group 36697.png"
                                                    className="lathe-images-small"
                                                />
                                            </div>
                                            <div className="col">
                                                <div className="row">
                                                    <h4>
                                                        <b>LATHE</b>
                                                    </h4>
                                                </div>
                                                <div className="row">
                                                    <p className="lathe-special-text">-IMAGEXA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <p>
                                                Lathe is running on MEGAFI network, inspired by a Imagexa
                                                product. Lathes that are used in modern industry to save time
                                                and improve work precision, since CNC centers are very useful
                                                for complex machining.
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <p className="lathe-special-text">NAME</p>
                                                        </th>
                                                        <td>
                                                            <b>Lathe</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <p className="lathe-special-text">SYMBOL</p>
                                                        </th>
                                                        <td>
                                                            <b>LTHE</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <p className="lathe-special-text">DECIMALS</p>
                                                        </th>
                                                        <td>
                                                            <b>18</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <p className="lathe-special-text">ADDRESS</p>
                                                        </th>
                                                        <td>
                                                            <b>TBA</b>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ borderBottom: "solid thin #1a1a1a" }}>
                                                        <th scope="row">
                                                            <p className="lathe-special-text">TOTAL SUPPLY</p>
                                                        </th>
                                                        <td>
                                                            <b>0</b>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mission-box">
                    <div className="container">
                        <div className="row p-5 ">
                            <div className="col-lg-4">
                                <img
                                    src="images/footer-logo-mega-fi.png"
                                    className="img-fluid"
                                    alt="MegaFi"
                                />
                                <div className="row mt-5">
                                    <p>
                                        MegaFi allow you to discover emerging non-fungible token(NFT).{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <h5>Quick Links</h5>
                                <p>
                                    <a href="#"> Docs</a>
                                </p>
                                <p>
                                    <a href="#"> Contact</a>
                                </p>
                            </div>
                            <div className="col-lg-2">
                                <h5>Community</h5>
                                <p>
                                    <a href="#"> Help Center</a>
                                </p>
                                <p>
                                    <a href="#"> Careers</a>
                                </p>
                                <p>
                                    <a href="#"> Blog</a>
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <h5>Follow us on</h5>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p className="icon p-2">
                                            <a href="https://t.me/+LdFqD-mMu082ZjYx">
                                                <i className="fab fa-telegram-plane" />
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="icon p-2">
                                            <a href="https://twitter.com/megafiprotocol">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="icon p-2">
                                            <a href="https://www.youtube.com/channel/UCcPcWN4irqZDgSpj9fJkBUg">
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p className="icon p-2">
                                            <a href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="icon p-2">
                                            <a href="https://www.tiktok.com/t/ZTdn66sdn/">
                                                <i className="fab fa-tiktok" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default Swap;
