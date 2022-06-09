import '../Lathe.css';


function Navbar() {
  return (
    <div class="container-fluid">
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-expand-lg nav-bg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="images/header-logo-mega-fi.png" alt="mega-fi" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://app.gitbook.com/o/midfNDhpUOzTCNWCsrMl/s/nOZiuC9wCYlPkNwhcOVI/guides/megateam">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://discord.gg/xwuxAnkq">Discord</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Github</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://megafiprotocol.github.io/docs/">Docs</a>
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
