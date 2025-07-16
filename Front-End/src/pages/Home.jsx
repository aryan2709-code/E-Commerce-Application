import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollections";
import OurPolicy from "../components/OurPolicy";


const Home = () => {
    return (
        <div>
          <Hero />
          <LatestCollection/>
          <BestSeller />
          <OurPolicy />
        </div>
    )
}

export default Home;