import './Lathe.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PoolInformation from '../components/poolinformation';
import ConnectWallet from '../components/connectwallet';

function Lathe() {
    return (
        <div className="Lathe">
            <Navbar />
            <hr />
            <div class="container-fluid ">
                <div class="container">
                    <div class="row">
                        <a href="index.html"><i class="fas fa-arrow-left"></i>  Back</a>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mission-box mission-radius mission-border mt-5 mb-5 p-5">
                            <div class="row">
                                <div class="col-lg-3">
                                    <img src="images/Group 36697.png" class="img-fluid" />
                                </div>
                                <div class="col-lg-9">
                                    <h2><b>LATHE</b></h2>
                                    <p class="mt-5">
                                        <a class="icon p-2" href="https://t.me/+LdFqD-mMu082ZjYx"><i class="fab fa-telegram-plane"></i></a>
                                        <a class="icon p-2" href="https://twitter.com/megafiprotocol"><i class="fab fa-twitter"></i></a>
                                        <a class="icon p-2" href="https://www.youtube.com/channel/UCcPcWN4irqZDgSpj9fJkBUg"><i class="fab fa-youtube"></i></a>
                                        <a class="icon p-2" href="#"><i class="fab fa-instagram"></i></a>
                                        <a class="icon p-2" href="https://www.tiktok.com/t/ZTdn66sdn/"><i class="fab fa-tiktok"></i></a>
                                    </p>
                                </div>
                            </div>
                            <div class="row"><p class="mt-5">Lathe is running on MEGAFI network, inspired by a Imagexa product. Lathes that are used in modern industry to save time and improve work precision, since CNC centers are very useful for complex machining. Lathe machine is one of the most important machine tools which is used in the metalworking industry. It operates on the principle of a rotating work piece and a fixed cutting tool. The cutting tool is feed into the work piece which rotates about its own axis causing the workpiece to form the desired shape. The revolutionized design of a lathe  allows metal parts enthusiasts to enjoy and have a high-profit stream with no prior investment.</p></div>
                            <div class="row"><a class="mt-5" href="#">Full Research <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mission-box mission-radius mission-border mb-5 p-5">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="row"><p class="text-center">LTHE in the pool</p></div>
                                    <div class="row"><h2 class="text-center">756,220</h2></div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="row"><p class="text-center">LTHE minted</p></div>
                                    <div class="row"><h2 class="text-center">606,420</h2></div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="row"><p class="text-center">1 x MFi = </p></div>
                                    <div class="row"><h2 class="text-center">1.247 LTHE</h2></div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="row"><p class="text-center">Completed</p></div>
                                    <div class="row"><h2 class="text-center">128.30%</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mission-box mission-radius mission-border mb-5 p-5">
                            <div class="row"><p><b>Total Raised</b></p><p><h1>0 MFI</h1></p></div>
                            <div class="row">
                                <div class="col"><p class="text-left"><b>Progress </b> 0%</p></div>
                                <div class="col"><p class="text-end"><b>0/0 LATHE</b></p></div>
                            </div>
                            <div class="row">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ConnectWallet />

            <PoolInformation />

            <Footer />
        </div>
    );
}

export default Lathe;
