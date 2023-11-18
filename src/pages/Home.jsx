// import sections
import Hero from "./sections/Hero";
import Shopping from "./sections/Shopping";
import Promotion from "./sections/Promotion";
import VideoSection from "./sections/VideoSection";

const Home = () => {
    return (
        <main>
            <Hero />
            <Shopping />
            <Promotion/>
            <VideoSection/>
        </main>
    )
}

export default Home;