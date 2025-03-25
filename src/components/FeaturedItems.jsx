import { useState } from 'react';
import { FeaturedItemsImage, FeaturedItemsTab } from '../data/featuredItem';



function FeaturedItems() {

    const [viewTab, setViewTab] = useState(true);
    



// display and hide the featured items
    function toggleViewTab(){

        // featured items container
        const toggleSectionProducts = document.querySelector('.fi-toggle-section');

        const viewTabBtn = document.querySelector('.view-all-btn');



        setViewTab(!viewTab)
      console.log(viewTab)

       // console.log(toggleSectionProducts)
        
  
        if(viewTab){
            toggleSectionProducts.classList.add('d-flex');
            viewTabBtn.textContent = "Hide"
        }
        else{
            toggleSectionProducts.classList.remove('d-flex');
            viewTabBtn.textContent = "View More"
        }
    }

  return (
    <>
    <div className='container mb-4'>
        <h2 className='featured-items-heading'>Featured Products</h2>
        <p >We bring you a thoughtfully curated range of handmade products across diverse categories</p>
            <div className='row fi-grid--container '>
                {/* Start of rendering 8 featured product items */}
                    {
                        FeaturedItemsImage.map((featureditem, index)=>(
                        <div className='col-lg-3 col-6 fi-item-container' key={index} >
                            <figure>
                                <img src={featureditem.imageLink} alt={featureditem.altText} className='fi-img' />
                                <figcaption>{featureditem.altText}</figcaption>
                                <p className='price'> <s className='sale-price p-1'>₹{featureditem.salePrice} </s> ₹{ featureditem.price } </p>
                            </figure>
                            <button href="#" className='btn btn-outline-danger w-100 buy-btn py-3'  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Buy Now</button>
                        </div>
                        ))
                    }
                {/* End of rendering 8 featured product items */}             
            </div>

            {/* Start of rendering 4 featured product items */}
    </div>
    

    <div className='container mb-4'>
    <div className="row my-4 fi-toggle-section fi-toggle-section-styling">
              {
                FeaturedItemsTab.map((featureditem, index)=>(
                <div className='col-lg-3 col-6 fi-item-container' key={index} >
                    <figure>
                        <img src={featureditem.imageLink} alt={featureditem.altText} className='fi-img' />
                        <figcaption>{featureditem.altText}</figcaption>
                        <p className='price'> <s className='sale-price p-1'>₹{featureditem.salePrice} </s> ₹{ featureditem.price } </p>
                    </figure>
                    <button className='btn btn-outline-danger w-100 buy-btn py-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Buy Now</button>
                </div>
                        ))
              }
            </div>


            {/* End of rendering 4 featured product items */}

            <div className='view-all-btn-container justify-content-center d-flex'>
               <button type="button" onClick={toggleViewTab} className="btn btn-primary w-25 view-all-btn py-3">View More</button>
             </div>
        </div>

       {/*  <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className='d-flex align-content-center pop-up-flex-container'>
                    <img src={FeaturedItemsImage[1].imageLink} className='w-50' alt={FeaturedItemsImage.altText}/>
                    <div className='pop-up-content'>
                        <h5>StonKraft Wooden Chess Board Foldable Table + Wood Chess Pieces – Tournament Size 16″ Inches – Brown</h5>
                        <p className='pop-up-price'>$924</p>
                        <p className='pop-up-para'> Handcrafted Chess Board made on Stone, Pieces are also made of Brown / Black Stone for premium quality and peace of mind. Chess Set itself is having storage for all of it 32 pawns and is laced with satin feel cloth. Pieces are made of Black and Brown color natural stone.</p>
                        <button className='btn btn-outline-danger w-100 submit py-3'> Buy Now </button>
                    <table className=' mt-4'>
                      <tr>
                        <td className='w-50'>SKU</td>
                        <td className='w-50'>SOHAYYE8550</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Kitchen</td>
                      </tr>
                      <tr>
                        <td>Vendor</td>
                        <td>Stonekraft</td>
                      </tr>
                    </table>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

                    
    </>
  )
}

export default FeaturedItems