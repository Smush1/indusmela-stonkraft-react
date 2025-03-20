import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from '../data/testimonials'


function Testimonial() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    
   
  return (
    <section className="testimonial">
      <h3 className="testimonial-heading text-center">Hear from our happy customers</h3>
      <p className="testimonial-para text-center mx-auto">Look at what our happy customers say about their purchase & product!</p>
      <div className='container'>
      <Slider {...settings}>

        {/* Start of Testimonial */}

        {
          Testimonials.map((singleTestimonial, index)=>(

        <div className='single-testimonial-outer-container d-flex justify-content-center text-center' key={index}>
          <div className="single-testimonial d-flex align-items-center">
            <div className="left-img">
              <img src={singleTestimonial.image} alt="" className='w-100'/>
            </div>
            <div className="right-test w-75">
                <img src={ singleTestimonial.rating } alt="" className='d-block mx-auto mb-3' />
                <p className='test-para'>{singleTestimonial.testimonial}</p>
            </div>

          </div> 
        </div>
          ))
        }


        {/* End of Testimonial */}
      </Slider>
      </div>



    </section>
  )
}

export default Testimonial