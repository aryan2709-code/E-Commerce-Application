import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollections";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";


const Home = () => {
    return (
        <div>
          <Hero />
          <LatestCollection/>
          <BestSeller />
          <OurPolicy />
          <NewsletterBox />
        </div>
    )
}

export default Home;