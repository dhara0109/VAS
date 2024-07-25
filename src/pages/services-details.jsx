import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import AboutArea from "../components/ServicesDetails/AboutArea";



const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Services Details" />
            <Header/>
            <Breadcrumb title="Details" subtitle="Services Details" backgroundImage="assets/img/bg/service.jpg" />
            <AboutArea/>
            <Footer/>
        </main>
    );
};

export default ServicesDetails;