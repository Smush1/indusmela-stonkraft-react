import deskBanner from '../images/stonkraft-desk-banner.webp'
import mobileBanner from '../images/stonkraft-mob-banner.webp'

function HeroBanner() {
  return (
    <>
        {/* <!-- carousel section --> */}
        <div id='main-banner-section' className="container-fluid px-3">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    {/*         <!-- Indicators --> */}
       {/*      <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div> */}

{/*             <!-- Carousel Items --> */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img fetchPriority="high" src={mobileBanner} className="w-100 carousel-image mobile-banner" alt="Banner" />
                    <img src={deskBanner} className="w-100 carousel-image desktop-banner" alt="Banner"/>              
                    <div className="carousel-caption">
                        <h1 className="pb-2">Proudly Retailing on <br/> IndusMela & Amazon</h1>
                        <p className="pb-2">Explore our handcrafted collection, trusted by customers across the globe. Every product is
                            handmade, designed by us, and crafted under our supervision. We proudly retail globally,
                            ensuring premium quality, fair pricing, and reliable delivery. Our mission is to bring the
                            warmth of Indian artistry into homes worldwide.</p>
                        <a href="#featured-products" className="btn btn-custom" aria-label='View Products' >VIEW PRODUCTS</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroBanner