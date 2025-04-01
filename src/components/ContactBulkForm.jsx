

function ContactBulkForm() {
  return (
  <div className="bulk-contact-form--main-container container-fluid ">
    <div className="bulk-contact-inner-container ">
      <div className="row">
        <div className="col-lg-5 text-btn-container">
          <h3 className="bulk-left-heading">Corporate Gifting with <span className="bulk-left-custom-heading">StonKraft</span></h3>
          <p className="bulk-left-para">Whether you’re looking to strengthen client relationships, appreciate employees, or celebrate milestones, our curated selection of premium gifts ensures your brand stands out with class and authenticity.</p>
          <a className="btn btn-primary bulk-buy-btn px-4 py-3 mt-2" href="#" role="button">Contact for bulk buying</a>
        </div>
        <div className="col-lg-5 bulk-contact-form-container m-5">
          <h4 className="bulk-contact-form-heading">Please share the details and we will be in touch with you</h4>
          <form action="" method="post">
            <label htmlFor="name" className="w-100">Name*</label>
            <input name="name" id="name" className="w-100" type="text" />

            <label htmlFor="company-email" className="w-100">Company Email*</label>
            <input name="company-email" className="w-100" id="company-email" type="text" />

            <label htmlFor="phone" className="w-100">Phone*</label>
            <input name="phone" id="phone" className="w-100" type="text" />

            <label htmlFor="company-name" className="w-100">Company Name*</label>
            <input name="company-name" id="company-name" className="w-100" type="text" />

            <label htmlFor="message" className="w-100">Ask us Anything*</label>
            <textarea name="message" id="message" className="w-100"></textarea>

            <input className="btn btn-primary submit-btn px-5 w-100" type="submit" />
          </form>
        </div>
      </div>        
    </div>
  </div>
  )
}

export default ContactBulkForm