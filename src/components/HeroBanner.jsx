function HeroBanner() {
  return (
    <>
        {/* <!-- carousel section --> */}
        <div className="container-fluid px-3 mt-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="active carousel-item">
                    <div className="d-md-block d-none carousel-caption">
                        <h1 className="pb-2">Crafted with Passion, Rooted <br />in India – Handmade for the<br /> World</h1>
                        <p>We are passionate about preserving Indian craftsmanship. Every product is handmade, designed
                            by us, and crafted under our supervision. We proudly retail globally, ensuring premium
                            quality, fair pricing, and reliable delivery. Our mission is to bring the warmth of Indian
                            artistry into homes worldwide.</p>
                        <a href="#" className="btn btn-custom mt-5">VIEW PRODUCTS</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-md-block d-none carousel-caption">
                        <h1 className="pb-2">Crafted with Passion, Rooted <br />in India – Handmade for the<br/> World</h1>
                        <p>We are passionate about preserving Indian craftsmanship. Every product is handmade, designed
                            by us, and crafted under our supervision. We proudly retail globally, ensuring premium
                            quality, fair pricing, and reliable delivery. Our mission is to bring the warmth of Indian
                            artistry into homes worldwide.</p>
                        <a href="#" className="btn btn-custom mt-5">VIEW PRODUCTS</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-md-block d-none carousel-caption">
                        <h1 className="pb-2">Crafted with Passion, Rooted <br/>in India – Handmade for the<br/> World</h1>
                        <p>We are passionate about preserving Indian craftsmanship. Every product is handmade, designed
                            by us, and crafted under our supervision. We proudly retail globally, ensuring premium
                            quality, fair pricing, and reliable delivery. Our mission is to bring the warmth of Indian
                            artistry into homes worldwide.</p>
                        <a href="#" className="btn btn-custom mt-5">VIEW PRODUCTS</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-md-block d-none carousel-caption">
                        <h1 className="pb-2">Crafted with Passion, Rooted <br/>in India – Handmade for the<br/> World</h1>
                        <p>We are passionate about preserving Indian craftsmanship. Every product is handmade, designed
                            by us, and crafted under our supervision. We proudly retail globally, ensuring premium
                            quality, fair pricing, and reliable delivery. Our mission is to bring the warmth of Indian
                            artistry into homes worldwide.</p>
                        <a href="#" className="btn btn-custom mt-5">VIEW PRODUCTS</a>
                    </div>
                </div>
            </div>
            {/* <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button> --> */}
        </div>
    </div>
    </>
  )
}

export default HeroBanner