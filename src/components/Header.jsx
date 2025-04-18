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
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#core-categories">Collection</a></li>
                        <li className="nav-item"><a className="nav-link" href="#featured-products">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact-us">Contact</a></li>
                    </ul>
                </div>
            </div>

          {/*   <!-- Centered Logo --> */}
            <a className="navbar-brand mx-auto" href="#">
                <img src={logo} alt="StonKraft" className="logo-img" />
            </a>

        {/*     <!-- Right-aligned Button --> */}
            <a href="#bulk-buy" className="d-lg-block d-none corporate-btn">CONTACT FOR BULK BUY</a>
        </div>
        </nav>
      </header>
  )
}



export default Header