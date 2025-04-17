import amazon from '../images/Amazon.png'
import indusmela from '../images/Indusmela.png'


function EcommercePlatform() {
  return (
    <>
  
    {/* <!-- E-commerce Shopping Platform --> */}
    <div className="container store-container">
        <div className="g-3 row">
            {/* <!-- Amazon Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://www.amazon.in/stores/StonKraft/page/B4E8B06D-B977-4B7A-BCC6-EC923DB769E1" target="_blank" className="text-decoration-underline">
                    <div className="amazon-box store-box">
                        <span>Also Available on</span>
                        <img src={amazon} alt="Amazon" />
                    </div>
                </a>
            </div>

            {/* <!-- Indusmela Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://indusmela.in/collections/stonkraft" target="_blank" className="text-decoration-none">
                    <div className="indusmela-box store-box">
                        <span>Shop from our<br/>one-stop store!</span>
                        <img src={indusmela} alt="IndusMela" />
                    </div>
                </a>
            </div>
        </div>
    </div>

    </>
  )
}

export default EcommercePlatform






