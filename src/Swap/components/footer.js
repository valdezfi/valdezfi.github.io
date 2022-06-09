import '../Swap.css';

function Footer() {
    return (
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
    );
}

export default Footer;
