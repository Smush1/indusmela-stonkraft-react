function ContactBulkForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <h4>Please share the details and we will be in touch with you</h4>
          <form action="" method="post">
            <label htmlFor="">Name*</label>
            <input name="name" id="name" type="text" />

            <label htmlFor="">Company Email*</label>
            <input name="company-email" id="company-email" type="text" />

            <label htmlFor="">Phone*</label>
            <input name="phone" id="phone" type="text" />

            <label htmlFor="">Company Name*</label>
            <input name="company-name" id="company-name" type="text" />

            <textarea name="" id=""  rows="10"></textarea>
          </form>
        </div>
      </div>        
    </div>
  )
}

export default ContactBulkForm