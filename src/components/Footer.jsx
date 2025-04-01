import footerLogo from '../images/footer-logo.png'

function Footer() {
  return (
    <>
    {/* <!-- footer section starts here --> */}
    <footer className="footer-section">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="company-intro-widget widget">
                            <a href="index.html" className="site-logo"><img src={footerLogo} alt="logo" /></a>
                            <p>Consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et <br />
                                dolore magna aliqua. </p>
                        </div>
                    </div>{/* <!-- widget end --> */}
                    <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                        <div className="course-links-widget widget">
                            <h5 className="widget-title">Other Links</h5>
                            <ul className="courses-link-list">
                                <li><a href="#">Shop StoneKraft</a></li>
                                <li><a href="#">Our Group</a></li>
                                <li><a href="#">Sell Global</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQs</a></li>
                            {/*     <li><a href="#">Blogs</a></li> */}
                            </ul>
                        </div>
                    </div>{/* <!-- widget end --> */}

                    <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                        <div className="course-links-widget widget">
                            <h5 className="widget-title">Main Links</h5>
                            <ul className="courses-link-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Collection</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </div>
                    </div>{/* <!-- widget end --> */}

                    <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                        <div className="course-links-widget widget">
                            <h5 className="widget-title">Policies</h5>
                            <ul className="courses-link-list">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Exchange Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>{/* <!-- widget end --> */}
                    <div className="container">
                        <div className="d-flex row justify-content-between">
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="contact course-links-widget">
                                    <h5 className="pb-3 widget-title">Contact</h5>
                                    <ul className="company-footer-contact-list">
                                        <li><a href=""><i className="fa-phone fa-solid pb-2"></i></a>+91 70606 02250</li>
                                        <li><a href=""><i className="fa-envelope fa-solid"></i></a>istonkraft@gmail.com</li>
                                    </ul>
                                </div>
                            </div>{/* <!-- widget end --> */}
                            <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                            <div className="socialLinks">
                                <h5 className=" widget-title">Follow Us</h5>
                                <ul  className="d-flex company-footer-Follow-us">
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- widget end --> */}
                        </div>
                    </div>
                   

            </div>
        </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center text-sm-left">
                        <span className="copy-right-text">Made with 💛 by <a className="" target="_blank"
                                href="https://mediax.co.in/">MediaX</a></span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer-bottom end --> */}
    </footer>
    </>
  )
}

export default Footer