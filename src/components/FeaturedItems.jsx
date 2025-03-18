import React from 'react'

import coffeeTable from '../images/coffee-table.png';
import chessTable from '../images/foldable-chess-table.png';
import keyChains from '../images/DIY-square-key-chains.png';
import woodenComb from '../images/wooden-comb.png'


const FeaturedItemsImage =[
    {
        "id" : 1,
        "imageLink" : coffeeTable,
        "altText": `Round Corner Table Stand Coffee Table for Living Room – Wood – 21″ Inches Height – Brown`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    },
    {
        "id" : 2,
        "imageLink" : chessTable,
        "altText": `StonKraft Wooden Chess Board Foldable Table + Wood Chess Pieces – Tournament Size 16″ Inches – Brown`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    },
    {
        "id" : 3,
        "imageLink" : woodenComb,
        "altText": `Wooden Comb for Men & Women – Sheesham Wood Handmade Anti-Static Hair, Beard Comb. (6 Inch)`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    },
    {
        "id" : 4,
        "imageLink" : keyChains,
        "altText": `DIY MDF Square Keychains – Set of 20 (2x2 inch) for Painting, Decoupage, Resin Art & Craft`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    },
    {
        "id" : 5,
        "imageLink" : coffeeTable,
        "altText": `Round Corner Table Stand Coffee Table for Living Room – Wood – 21″ Inches Height – Brown`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    },
    {
        "id" : 6,
        "imageLink" : chessTable,
        "altText": `StonKraft Wooden Chess Board Foldable Table + Wood Chess Pieces – Tournament Size 16″ Inches – Brown`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    },
    {
        "id" : 7,
        "imageLink" : woodenComb,
        "altText": `Wooden Comb for Men & Women – Sheesham Wood Handmade Anti-Static Hair, Beard Comb. (6 Inch)`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    },
    {
        "id" : 8,
        "imageLink" : keyChains,
        "altText": `DIY MDF Square Keychains – Set of 20 (2x2 inch) for Painting, Decoupage, Resin Art & Craft`,
        "productLink": "",
        "price": "165",
        "salePrice": "220"
    }
]

function FeaturedItems() {

  return (
    <div className='container mb-4'>
        <section>
        <h2>Featured Products</h2>
        <p>We bring you a thoughtfully curated range of handmade products across diverse categories</p>
            <div className='row fi-grid--container'>
                {
                    FeaturedItemsImage.map((featureditem)=>(
                       <div className='col-lg-3 col-6 fi-item-container'>
                        <figure>
                            <img src={featureditem.imageLink} alt={featureditem.altText} className='fi-img' />
                            <figcaption>{featureditem.altText}</figcaption>
                            <p className='price'> <s className='sale-price p-1'>₹{featureditem.salePrice} </s> ₹{ featureditem.price } </p>
                        </figure>
                        <button href="" className='btn btn-outline-danger w-100 buy-btn py-3'>Buy Now</button>
                      </div>
                    ))

                }
             <div className='view-all-btn-container justify-content-center d-flex'>
               <button type="button" className="btn btn-primary w-25 view-all-btn py-3">View More</button>
             </div>
                
            </div>
        </section>
    </div>
  )
}

export default FeaturedItems