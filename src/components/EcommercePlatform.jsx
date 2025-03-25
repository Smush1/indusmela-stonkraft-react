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
                <a href="https://www.amazon.com" target="_blank" className="text-decoration-underline">
                    <div className="amazon-box store-box">
                        <span>Also Available on</span>
                        <img src={amazon} alt="Amazon" />
                    </div>
                </a>
            </div>

            {/* <!-- Indusmela Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://www.indusmela.com" target="_blank" className="text-decoration-none">
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






