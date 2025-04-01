import banner from '../images/banner.png'

function HeroBanner() {
  return (
    <>
        {/* <!-- carousel section --> */}
        <div class="container-fluid px-3">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    {/*         <!-- Indicators --> */}
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>

{/*             <!-- Carousel Items --> */}
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={banner} class="d-block w-100 carousel-image" alt="Banner"/>
                    <div class="carousel-caption">
                        <h1 class="pb-2">Crafted with Passion, Rooted<br/> in India – Handmade for the<br/> World</h1>
                        <p class="pb-2">We are passionate about preserving Indian craftsmanship. Every product is
                            handmade, designed by us, and crafted under our supervision. We proudly retail globally,
                            ensuring premium quality, fair pricing, and reliable delivery. Our mission is to bring the
                            warmth of Indian artistry into homes worldwide.</p>
                        <a href="#" class="btn btn-custom">VIEW PRODUCTS</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={banner} class="d-block w-100 carousel-image" alt="Banner"/>
                    <div class="carousel-caption">
                        <h1 class="pb-2">Crafted with Passion, Rooted<br/> in India – Handmade for the<br/> World</h1>
                        <p class="pb-2">We are passionate about preserving Indian craftsmanship. Every product is
                            handmade, designed by us, and crafted under our supervision. We proudly retail globally,
                            ensuring premium quality, fair pricing, and reliable delivery. Our mission is to bring the
                            warmth of Indian artistry into homes worldwide.</p>
                        <a href="#" class="btn btn-custom">VIEW PRODUCTS</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={banner} class="d-block w-100 carousel-image" alt="Banner"/>
                    <div class="carousel-caption">
                        <h1 class="pb-2">Crafted with Passion, Rooted<br/> in India – Handmade for the<br/> World</h1>
                        <p class="pb-2">We are passionate about preserving Indian craftsmanship. Every product is
                            handmade, designed by us, and crafted under our supervision. We proudly retail globally,
                            ensuring premium quality, fair pricing, and reliable delivery. Our mission is to bring the
                            warmth of Indian artistry into homes worldwide.
                        </p>
                        <a href="#" class="btn btn-custom">VIEW PRODUCTS</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={banner} class="d-block w-100 carousel-image" alt="Banner"/>
                    <div class="carousel-caption">
                        <h1 class="pb-2 ">Crafted with Passion, Rooted<br/> in India – Handmade for the<br/> World</h1>
                        <p class="pb-2 ">We are passionate about preserving Indian craftsmanship. Every product is
                            handmade, designed by us, and crafted under our supervision. We proudly retail globally,
                            ensuring premium quality, fair pricing, and reliable delivery. Our mission is to bring the
                            warmth of Indian artistry into homes worldwide.</p>
                        <a href="#" class="btn btn-custom">VIEW PRODUCTS</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroBanner