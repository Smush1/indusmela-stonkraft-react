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
                            <button href="#" className='btn btn-outline-danger w-100 buy-btn py-3'>Buy Now</button>
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
                    <button href="#" className='btn btn-outline-danger w-100 buy-btn py-3'>Buy Now</button>
                </div>
                        ))
              }
            </div>
            {/* End of rendering 4 featured product items */}

            <div className='view-all-btn-container justify-content-center d-flex'>
               <button type="button" onClick={toggleViewTab} className="btn btn-primary w-25 view-all-btn py-3">View More</button>
             </div>
        </div>

        <div className='w-50'>

        </div>
    </>
  )
}

export default FeaturedItems