import dynamic from 'next/dynamic'
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AboutUs from "../components/Home/AboutUs";
import BlogArea from "../components/Home/BlogArea";
import HeroSlider from "../components/Home/HeroSlider";
import ProcessArea from "../components/Home/ProcessArea";
import ServicesArea from "../components/Home/ServicesArea";
import Testimonial from "../components/Home/Testimonial";
import SEO from "../components/seo";

const index = () => {
    return (
        <main>
          <SEO pageTitle="VAS" />
          <Header/>  
          <HeroSlider/>
          <AboutUs/>
          <ServicesArea/>
          <Testimonial/>
          <ProcessArea/>
          <BlogArea/>
          <Footer/>
        </main>
    );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});