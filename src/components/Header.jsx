import logo from '../images/logo.png'

function Header() {
  return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
           {/*  <!-- Left-aligned Navigation --> */}
            <div className="d-flex">
                <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Collection</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>

          {/*   <!-- Centered Logo --> */}
            <a className="navbar-brand mx-auto" href="#">
                <img src={logo} alt="StonKraft" className="logo-img" />
            </a>

        {/*     <!-- Right-aligned Button --> */}
            <a href="#" className="d-lg-block d-none corporate-btn">CORPORATE GIFTING</a>
        </div>
        </nav>
      </header>
  )
}



export default Header