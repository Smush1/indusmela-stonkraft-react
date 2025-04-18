import locationSvg from '../images/location.svg'
import phoneSvg from '../images/phone.svg'
import emailSvg from '../images/email.svg'

function ContactUs() {
  return (
    <div className="container contact-us-section" id="contact-us">
        <div className="mx-auto w-100 d-flex ">
          <div className='row contact-us-main--inner-container justify-content-center'>
            <div className="left-add-info d-grid col-lg-4 align-items-center py-5 col-sm-12">
                <div className="add-info-item d-flex">
                    <div className="add-icon-container">
                        <img src={locationSvg} alt="" />
                    </div>
                    <div className="add-icon-info">
                        <h4 className=""> Write to Us</h4>
                        <p className='mb-0'> We’re here to help with any questions or partnership inquiries!</p>
                        <a href="mailto:istonkraft@gmail.com" rel="noreferrer" className='mt-0'>istonkraft@gmail.com</a>
                    </div>
                </div>
                <div className="add-info-item d-flex">
                    <div className="add-icon-container">
                    <img src={phoneSvg} alt=""  />                   
                    </div>
                    <div className="add-icon-info">
                        <h4>Call Us</h4>
                        <p className='mb-0'> We’d love to hear from you!</p>
                        <a href="tel:+917060602250" rel="noreferrer" className='mt-0'>+917060602250</a>
                    </div>
                </div>
                <div className="add-info-item d-flex">
                    <div className="add-icon-container">
                    <img src={emailSvg} alt="" />
                    </div>
                    <div className="add-icon-info">
                        <h4>Visit Us</h4>
                        <p className='mb-0'>If you’d like to meet us!</p>
                        <p className='mt-0'>JP Nagar 7th Phase, Bangalore</p>
                    </div>
                </div>
              
            </div>
            <div className="right-contact-us col-lg-7 py-5 px-3 col-sm-12">
                <h3>Get in touch with us!</h3>
                <p>We’d love to hear from you! Whether you have partnership inquiries or general questions, simply fill out the form below, and our team will get back to you shortly.</p>


                <form action="" method="post" className='container'>
                  <div className="row"> 
                    <div className=" d-inline-block col-6">
                        <label htmlFor="name">Your Name*</label>
                        <input id="name" type="text" name="name" className="d-block contact-us-field w-100" />
                    </div>
                    <div className=" d-inline-block col-6">
                        <label htmlFor="phone">Your Phone Number*</label>
                        <input id="phone" type="text" name="phone" className="d-block contact-us-field w-100" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="email">Your Email*</label>
                        <input id="email" type="text" name="email" className="d-block contact-us-field w-100"  />
                    </div>
                    <div className="col-12">
                        <label htmlFor="message">Write Us</label>   
                        <textarea type="text" className="d-block contact-us-msg w-100" />
                    </div>
                    <div className='col-12'>
                        <input type="submit" className='btn btn-primary submit-btn col-12 mt-3' />
                    </div>
                  </div> 
                </form>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs