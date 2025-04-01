
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


import showPiece from '../images/show-piece.png'
import idols from '../images/idols.png'


import homeOrganizer1 from '../images/home-organiser1.png'
import homeOrganizer2 from '../images/home-organiser2.png'


import artCraft1 from '../images/art-craft1.png'
import artCraft2 from '../images/art-craft2.png'


import kitchenBathroom1 from '../images/kitchenbathroom1.png'
import kitchenBathroom2 from '../images/kitchenbathroom2.png'

import hinduIdols from '../images/hinduidols.png'

import statues from '../images/statues.png'


import sportEquipments1 from '../images/sportsequip1.png'
import sportEquipments2 from '../images/sportsequip2.png'

function CoreCategories() {
  return (
    <>
{/*       <!-- Categories Section --> */}
    <div class="container category my-5 py-5">
        <h2 class="fw-bold">Our Core Categories</h2>
        <p class="pb-5">We bring you a thoughtfully curated range of handmade products across diverse categories</p>

        <div class="g-4 row">
            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#toysgames">
                    <div class="category-text">
                        <h5>TOYS & GAMES</h5>
                    </div>
                    <div class="category-img">
                        <img src={chess} alt="Toys & Games"/>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#homedecor">
                    <div class="category-text">
                        <h5>HOME DECOR</h5>
                    </div>
                    <div class="category-img">
                        <img src={elephant} alt="Home Decor"/>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#homeorganiser">
                    <div class="category-text">
                        <h5>HOME ORGANISER</h5>
                    </div>
                    <div class="category-img">
                        <img src={flowerPot} alt="Home Organiser"/>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#artscraft">
                    <div class="category-text">
                        <h5>ARTS & CRAFT</h5>
                    </div>
                    <div class="category-img">
                        <img src={penStand} alt="Arts & Craft"/>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#kitchenbathroom">
                    <div class="category-text">
                        <h5>KITCHEN & BATHROOM</h5>
                    </div>
                    <div class="category-img">
                        <img src={kitchenSet} alt="Kitchen & Bathroom"/>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#religiousitems">
                    <div class="category-text">
                        <h5>RELIGIOUS ITEMS</h5>
                    </div>
                    <div class="category-img">
                        <img src={cross} alt="Home Decor"/>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#sportsequipment">
                    <div class="category-text">
                        <h5>SPORTS EQUIPMENT</h5>
                    </div>
                    <div class="category-img">
                        <img src={skippingRope} alt="Toys & Games"/>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3 col-md-6 pb-3">
                <div class="d-flex category-card" data-bs-toggle="modal" data-bs-target="#statuessculptures">
                    <div class="category-text">
                        <h5>STATUES & <br/>SCULPTURES</h5>
                    </div>
                    <div class="category-img">
                        <img src={ganeshJi} alt="Statues & Sculptures"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="toysgames" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                       {/*  <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                        {/*     <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                          {/*       <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item">
                                        <img src={popupChess} alt="Chess Table"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={popupChess} alt="Board Games"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={popupChess} alt="Card Games"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>TOYS & GAMES</b></h4>
                            <p>Discover handcrafted toys and games from Stonekraft, blending tradition with fun.
                                Designed for all ages, our collection brings joy, creativity, and timeless play to every
                                home.</p>
                            <div class="category-list">
                                <div>
                                    <a
                                        href="https://indusmela.com/products/stonkraft-plastic-playing-cards-poker-size-cards-set-of-2-poker-playing-cards-for-flash-rummy-bridge-party-games" target="_blank"><img
                                            src={cardGames} alt="Card Games"/></a>
                                    <p>Card Games</p>
                                </div>
                                <div>
                                    <a
                                        href="https://indusmela.com/search?q=board+games&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&filter.p.t.category=tg-2-5&sort_by=relevance" target="_blank"><img
                                            src={boardGames} alt="Board Games"/></a>
                                    <p>Board Games</p>
                                </div>
                                <div>
                                    <a
                                        href="https://indusmela.com/collections/puzzles-construction-toys?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&filter.p.t.category=tg-4" target="_blank"><img
                                            src={puzzleKits} alt="Puzzle Kits"/></a>
                                    <p>Puzzle Kits</p>
                                </div>
                            </div>
                            <button class="view-more-btn"><a
                                    href="https://indusmela.com/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.t.category=tg-2-5&filter.p.t.category=tg-2-7&filter.p.t.category=hg-11-1-8&filter.p.t.category=sg-1-8&filter.p.t.category=sg-1-8-3"
                                    target="_blank">VIEW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/*     <!-- home decor modal  --> */}
        <div class="modal fade" id="homedecor" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                  {/*       <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                   {/*          <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                          {/*       <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item" style={{ height: "47vh" }}>
                                        <img src={showPiece} alt="show piece"/>
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={idols} alt="idols"/>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>Home Decor</b></h4>
                            <p>Elevate your space with Stonekraft’s handcrafted home décor—timeless wall accents,
                                sculptures, and statement pieces that blend tradition with elegance, bringing warmth and
                                artistry to every corner.</p>
                            <div class="category-list justify-content-start">
                                <div>
                                    <a href="https://indusmela.in/collections/stonkraft?filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Standing+Diya&sort_by=best-selling"
                                        target="_blank"><img src={showPiece} alt="show piece"/></a>
                                    <p>Show piece</p>
                                </div>

                                <div>
                                    <a href="https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte="
                                        target="_blank"><img src={idols} alt="idols"/></a>
                                    <p>Idols</p>
                                </div>

                            </div>
                            <button class="view-more-btn"><a
                                    href="https://indusmela.in/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Idols&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Shiva+Idol%2C+Lingam&filter.p.product_type=Standing+Diya "
                                    target="_blank">VIEW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




       {/*  <!-- home organiser modal  --> */}
        <div class="modal fade" id="homeorganiser" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                     {/*    <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                           {/*  <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                           {/*      <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item" style={{ height: "47vh" }}>
                                        <img src={homeOrganizer1} alt="show piece"/>
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={homeOrganizer2} alt="idols"/>
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={homeOrganizer1} alt="idols"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>Home Organiser</b></h4>
                            <p>Keep your space clutter-free with Stonekraft’s handcrafted home organizers—elegant,
                                functional, and designed to add a touch of tradition while keeping your essentials
                                neatly arranged.</p>
                          {/*   <!-- <div class="category-list justify-content-start">
                                <div>
                                    <a href="https://indusmela.in/collections/stonkraft?filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Standing+Diya&sort_by=best-selling" target="_blank"><img src="Images/show-piece.png" alt="show piece"></a>
                                    <p>Show piece</p>
                                </div>

                                <div>
                                    <a href="https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=" target="_blank"><img src="Images/idols.png" alt="idols"></a>
                                    <p>Idols</p>
                                </div>
                               
                            </div> --> */}
                            <button class="view-more-btn"><a
                                    href="https://indusmela.in/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Office+Miscellaneous&filter.p.product_type=Soap+Dish&filter.p.product_type=Table+Tops&filter.p.product_type=Vase  "
                                    target="_blank">VIEW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/*   <!-- Arts and craft modal --> */}
        <div class="modal fade" id="artscraft" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                  {/*       <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                    {/*         <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                          {/*       <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item" style={{ height: "47vh" }}>
                                        <img src={artCraft1} alt="show piece"/>
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={artCraft2} alt="idols"/>
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={artCraft2} alt="idols"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>Arts & Craft</b></h4>
                            <p> Unleash your creativity with Stonekraft’s arts and crafts collection—handcrafted DIY
                                kits and artistic pieces that celebrate traditional craftsmanship and inspire endless
                                possibilities.</p>
                            {/* <!-- <div class="category-list justify-content-start">
                                <div>
                                    <a href="https://indusmela.in/collections/stonkraft?filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Standing+Diya&sort_by=best-selling" target="_blank"><img src="Images/show-piece.png" alt="show piece"></a>
                                    <p>Show piece</p>
                                </div>

                                <div>
                                    <a href="https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=" target="_blank"><img src="Images/idols.png" alt="idols"></a>
                                    <p>Idols</p>
                                </div>
                               
                            </div> --> */}
                            <button class="view-more-btn"><a
                                    href="https://indusmela.in/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Maze%2C+3D+Puzzles&filter.p.product_type=Toddlers+%281+-+6+Years%29&filter.p.product_type=Wooden+Dollhouse "
                                    target="_blank">VIEW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


       {/*  <!-- kitchen and bathroom modal --> */}
        <div class="modal fade" id="kitchenbathroom" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                    {/*     <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                          {/*   <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                       {/*          <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item" style={{ height: "47vh" }}>
                                        <img src={kitchenBathroom1} alt="show piece" />
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={kitchenBathroom1} alt="idols"/>
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={kitchenBathroom1} alt="idols"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>Kitchen & Bathroom</b></h4>
                            <p>Enhance your kitchen and bathroom with Stonekraft’s elegant handcrafted décor—timeless
                                designs that add sophistication, charm, and a touch of artistry to your everyday spaces.
                            </p>
                         {/*    <!-- <div class="category-list justify-content-start">
                                <div>
                                    <a href="https://indusmela.in/collections/stonkraft?filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Standing+Diya&sort_by=best-selling" target="_blank"><img src="Images/show-piece.png" alt="show piece"></a>
                                    <p>Show piece</p>
                                </div>

                                <div>
                                    <a href="https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=" target="_blank"><img src="Images/idols.png" alt="idols"></a>
                                    <p>Idols</p>
                                </div>
                               
                            </div> --> */}
                            <button class="view-more-btn"><a
                                    href="https://indusmela.in/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Bar+Glasses&filter.p.product_type=Soap+Dish"
                                    target="_blank">VIEW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/*   <!-- Religious Items modal --> */}
        <div class="modal fade" id="religiousitems" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                    {/*     <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                          {/*   <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                       {/*          <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item">
                                        <img src={cross} alt="Chess Table"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={hinduIdols} alt="Board Games"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={cross} alt="Card Games"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>Religious Items</b></h4>
                            <p> Enhance your kitchen and bathroom with Stonekraft’s elegant handcrafted décor—timeless
                                designs that add sophistication, charm, and a touch of artistry to your everyday spaces.
                            </p>
                            <div class="category-list">
                                <div>
                                    <a href="https://indusmela.in/search?q=cross&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&sort_by=relevance"
                                        target="_blank"><img src={cardGames} alt="Card Games"/></a>
                                    <p>Cross</p>
                                </div>
                                <div>
                                    <a href="https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte="
                                        target="_blank"><img src={boardGames} alt="Board Games"/></a>
                                    <p>Hindu Idols</p>
                                </div>
                                <div>
                                    <a href="https://indusmela.in/search?q=diya&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Hanging+Diya&filter.p.product_type=Standing+Diya&sort_by=relevance"
                                        target="_blank"><img src={puzzleKits} alt="Puzzle Kits"/></a>
                                    <p>Diyas</p>
                                </div>
                            </div>
                            <button class="view-more-btn"><a href="https://indusmela.in/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Balaji&filter.p.product_type=Cross&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Idols&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Shiva+Idol%2C+Lingam&filter.p.product_type=Standing+Diya 
                                " target="_blank">VIEW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


   {/*      <!-- Statues & Sculptures modal--> */}
        <div class="modal fade" id="statuessculptures" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                     {/*    <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                          {/*   <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                           {/*      <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item" style={{ height: "47vh" }}>
                                        <img src={statues} alt="show piece"/>
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={hinduIdols} alt="idols" />
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={statues} alt="idols" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>Statues & Sculptures
                            </b></h4>
                            <p>Bring timeless artistry into your space with Stonekraft’s handcrafted statues and sculptures—exquisite pieces that embody tradition, spirituality, and elegance in every detail.

                            </p>
              
                            <button class="view-more-btn"><a
                                    href="https://indusmela.in/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Balaji&filter.p.product_type=Cross&filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Idols&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Shiva+Idol%2C+Lingam "
                                    target="_blank">VIEW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       {/*  <!-- sports equipment modal --> */}
        <div class="modal fade" id="sportsequipment" tabIndex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        {/* <!-- Close Button --> */}
                        <button type="button" class="close-btn" data-bs-dismiss="modal">&times;</button>

                        <div class="col-md-6 left-section">
                           {/*  <!-- Bootstrap Carousel --> */}
                            <div id="popupCarousel" class="carousel slide" data-bs-ride="carousel">
                             {/*    <!-- Indicators --> */}
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="0"
                                        class="active"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#popupCarousel" data-bs-slide-to="2"></button>
                                </div>

                                <div class="carousel-inner categories">
                                    <div class="active carousel-item" style={{ height: "47vh" }}>
                                        <img src={sportEquipments1} alt="show piece" />
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={sportEquipments2} alt="idols" />
                                    </div>
                                    <div class="carousel-item" style={{ height: "47vh" }}>
                                        <img src={sportEquipments1} alt="idols" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 right-section">
                            <h4><b>Sports Accessories
                            </b></h4>
                            <p>Elevate your game with Stonekraft’s handcrafted sports accessories—a blend of durability, tradition, and artistry, designed to add a unique touch to your sporting experience.

                            </p>

                            <button class="view-more-btn"><a
                                    href="https://indusmela.in/collections/stonkraft?sort_by=best-selling&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Sports+Accessories "
                                    target="_blank">VIEW MORE</a></button>
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