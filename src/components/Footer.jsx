import footerLogo from '../images/footer-logo.png'

function Footer() {
  return (
    <>
    {/* <!-- footer section starts here --> */}
    <footer className="footer-section">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="company-intro-widget widget">
                            <a href="index.html" className="site-logo"><img src={footerLogo} alt="logo" /></a>
                           
                        </div>
                    </div>{/* <!-- widget end --> */}
                    <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                        <div className="course-links-widget widget">
                            <h5 className="widget-title">Other Links</h5>
                            <ul className="courses-link-list">
                                <li><a href="https://indusmela.in/collections/stonkraft"  target="_blank" rel="noreferrer">Shop StonKraft</a></li>
                                <li><a href="https://indusretailgrp.odoo.com/"  target="_blank" rel="noreferrer">Our Group</a></li>
                                <li><a href="https://indusmela.com/"  target="_blank" rel="noreferrer">Sell Global</a></li>
                                <li><a href="#contact-us">Contact Us</a></li>
                            {/*     <li><a href="#">Blogs</a></li> */}
                            </ul>
                        </div>
                    </div>{/* <!-- widget end --> */}

                    <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                        <div className="course-links-widget widget">
                            <h5 className="widget-title">Main Links</h5>
                            <ul className="courses-link-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#core-categories">Collection</a></li>
                                <li><a href="#bulk-buy">Bulk Buy</a></li>
                            </ul>
                        </div>
                    </div>{/* <!-- widget end --> */}

                    {/* <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                        <div className="course-links-widget widget">
                            <h5 className="widget-title">Policies</h5>
                            <ul className="courses-link-list">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Exchange Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div> */}
                    
                    {/* <!-- widget end --> */}
                    <div className="container">
                        <div className="d-flex row justify-content-between">
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="contact course-links-widget">
                                    <h5 className="pb-3 widget-title">Contact</h5>
                                    <ul className="company-footer-contact-list">
                                        <li><a href="tel:+917060602250"><i className="fa-phone fa-solid pb-2"></i></a>+91 70606 02250</li>
                                        <li><a href="mailto:istonkraft@gmail.com"><i className="fa-envelope fa-solid"></i></a>istonkraft@gmail.com</li>
                                    </ul>
                                </div>
                            </div>{/* <!-- widget end --> */}
                            <div className="col-lg-2 col-md-6 col-sm-6 course-links">
                            <div className="socialLinks">
                                <h5 className=" widget-title">Follow Us</h5>
                                <ul  className="d-flex company-footer-Follow-us">
                                    <li>
                                        <a href="https://www.instagram.com/indusmela/" target="_blank">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/indusmela" target="_blank">
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                    </li>
                                  {/*   <li>
                                        <a href="#">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </li> */}
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