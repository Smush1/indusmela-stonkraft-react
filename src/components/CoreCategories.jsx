
import chess from '../images/chess.png'
import elephant from '../images/elephant.png'
import flowerPot from '../images/flower-pot.png'
import penStand from '../images/pen-stand.png'
import kitchenSet from '../images/kitchen-set.png'
import cross from '../images/cross.png'
import ganeshJi from '../images/ganesh-ji.png'
import skippingRope from '../images/skipping-rope.png'

import popupChess from '../images/popupchess.png'
import cardGames from '../images/card-games.png'
import boardGames from '../images/Board-games.png'
import puzzleKits from '../images/Puzzle-kits.png'


function CoreCategories() {
  return (
    <>
      {/* <!-- Categories Section --> */}
      <div className="container category my-5 py-5">
        <h2 className="fw-bold">Our Core Categories</h2>
        <p className="pb-5">We bring you a thoughtfully curated range of handmade products across diverse categories</p>

        <div className="g-4 row">
            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>TOYS & GAMES</h5>
                    </div>
                    <div className="category-img">
                        <img src={chess} alt="Toys & Games" />
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>HOME DECOR</h5>
                    </div>
                    <div className="category-img">
                        <img src={elephant} alt="Home Decor"/>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>HOME ORGANISER</h5>
                    </div>
                    <div className="category-img">
                        <img src={flowerPot} alt="Home Organiser"/>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>ARTS & CRAFT</h5>
                    </div>
                    <div className="category-img">
                        <img src={penStand} alt="Arts & Craft" />
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>KITCHEN & BATHROOM</h5>
                    </div>
                    <div className="category-img">
                        <img src={kitchenSet} alt="Kitchen & Bathroom" />
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>RELIGIOUS ITEMS</h5>
                    </div>
                    <div className="category-img">
                        <img src={cross} alt="Home Decor" />
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>TOYS & GAMES</h5>
                    </div>
                    <div className="category-img">
                        <img src={skippingRope} alt="Toys & Games" />
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 pb-3">
                <div className="d-flex category-card" data-bs-toggle="modal" data-bs-target="#popupModal">
                    <div className="category-text">
                        <h5>STATUES & <br/>SCULPTURES</h5>
                    </div>
                    <div className="category-img">
                        <img src={ganeshJi} alt="Statues & Sculptures"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="popupModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                     {/*    <!-- Close Button --> */}
                        <button type="button" className="close-btn" data-bs-dismiss="modal">&times;</button>
        
                        <div className="col-md-6 left-section">
                           {/*  <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" className="carousel slide" data-bs-ride="carousel">
                              {/*   <!-- Indicators --> */}
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>
        
                                <div className="carousel-inner categories">
                                    <div className="active carousel-item">
                                        <img src={popupChess} alt="Chess Table" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={boardGames} alt="Board Games" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={cardGames} alt="Card Games" />
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-md-6 right-section">
                            <h4><b>TOYS & GAMES</b></h4>
                            <p>Discover handcrafted toys and games from Stonekraft, blending tradition with fun.
                                Designed for all ages, our collection brings joy, creativity, and timeless play to every
                                home.</p>
                            <div className="category-list">
                                <div>
                                    <img src={cardGames} alt="Card Games" />
                                    <p>Card Games</p>
                                </div>
                                <div>
                                    <img src={boardGames} alt="Board Games" />
                                    <p>Board Games</p>
                                </div>
                                <div>
                                    <img src={puzzleKits} alt="Puzzle Kits" />
                                    <p>Puzzle Kits</p>
                                </div>
                            </div>
                            <button className="view-more-btn">VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>


    </>
  )
}

export default CoreCategories