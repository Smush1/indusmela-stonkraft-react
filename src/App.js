
import ContactBulkForm from "./components/ContactBulkForm";
import ContactUs from "./components/ContactUs";
import FeaturedItems from "./components/FeaturedItems";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import CoreCategories from "./components/CoreCategories";
import EcommercePlatform from "./components/EcommercePlatform";


function App() {


  return (
    <>
    <Header />
    <HeroBanner />
    < CoreCategories /> 
    <EcommercePlatform/>
    <FeaturedItems /> 
    <ContactBulkForm />
    <Testimonial />
    <ContactUs />
    <Footer />
    </>
  );
}

export default App;
