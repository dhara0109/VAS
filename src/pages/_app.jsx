import SEO from '../components/seo';
import AppContext from '../context/AppContext';
import './index.scss';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SEO font="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"/>
     <AppContext>
       <Component {...pageProps} />
     </AppContext>
    </>
  )
}

export default MyApp
