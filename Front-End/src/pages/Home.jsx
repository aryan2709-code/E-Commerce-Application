import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollections";


const Home = () => {
    return (
        <div>
          <Hero />
          <LatestCollection/>
          <BestSeller />
        </div>
    )
}

export default Home;