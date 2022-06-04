import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
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
                                            <a className="nav-link" href="#">
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
                <div className="container bgs">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row mt-5 mb-5">
                                <p className="top-heading">Earn Crypto With NFTs</p>
                                <p className="top-heading ">
                                    &amp; <b className="repeat ">Repeat</b>
                                </p>
                            </div>
                            <div className="row mb-5">
                                <p className="txt">
                                    A whole new way to get passive income with you in control.
                                </p>
                            </div>
                            <div className="row">
                                <p>No Sign ups required</p>
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-4">
                                    <button type="button" className="btn btn-light btn-block airdrop">
                                        AirDrop
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="loader">Loading...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="row mt-5">
                                <h1>Our Mission</h1>
                                <p className="mt-3">
                                    Our Mission To Empower Businesses and Investors To Transact In A
                                    trustless Environment.
                                </p>
                                <div className="col-lg-12 mb-5">
                                    <button type="button" className="btn btn-light btn-block airdrop">
                                        Begin your journey
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ms-auto">
                            <div className="row mb-2">
                                <div className="col-lg-5 mission-box p-4 m-3">
                                    <h5>Low Gas Fees</h5>
                                    <p>We built megafi on the polygon network.</p>
                                </div>
                                <div className="col-lg-5 mission-box p-4 m-3">
                                    <h5>Voting Power</h5>
                                    <p>
                                        Help us build a strong product by proposing ideas and the
                                        community vote on it
                                    </p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-lg-5 mission-box p-4 m-3">
                                    <h5>No Signups</h5>
                                    <p>
                                        We dont need your email to sign up. All you need to do is
                                        connect your metamask wallet.
                                    </p>
                                </div>
                                <div className="col-lg-5 mission-box p-4 m-3">
                                    <h5>Data Based Economy </h5>
                                    <p>The mega economy is open and driven by data.</p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-lg-5 mission-box p-4 m-3">
                                    <h5>Community Driven</h5>
                                    <p>
                                        We listen to you and want you to be informed about everything
                                    </p>
                                </div>
                                <div className="col-lg-5 mission-box p-4 m-3">
                                    <h5>100% Ownership </h5>
                                    <p>You have 100% control of your crypto at all times.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid white-bg">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-lg-6">
                            <p className="black-text">
                                On-chain transactional/order data.
                                <br />
                                Cached NFT assets for better user experience
                                <br />
                                Live indexing to get the latest NFT data from on-chain
                                <br />
                            </p>
                            <div className="col-lg-6 mb-5">
                                <button type="button" className="btn btn-dark">
                                    Begin your journey
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 ms-auto">
                            <h2 className="black-text black-text-bold">
                                Bring NFTs <br /> Driven by
                                <br /> Businesses, Customers, &amp; Investors To You.{" "}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row p-5">
                        <h1 className="text-center">#EarnMega</h1>
                        <div className="row mt-5">
                            <div className="col-lg-3 mission-box p-3   m-4">
                                <h5>Mega compound</h5>
                                <p>Put your digital assets to work for you.</p>
                            </div>
                            <div className="col-lg-3 mission-box p-3 m-4">
                                <h5>NFTs</h5>
                                <p>
                                    {" "}
                                    A token that is transforming the future and you will be part of
                                    it.
                                </p>
                            </div>
                            <div className="col-lg-3 mission-box p-3  m-4">
                                <h5>Mega Launch Pad</h5>
                                <p>
                                    Discover the digital assets of innovative companies of tomorrow.
                                </p>
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

export default LandingPage;
