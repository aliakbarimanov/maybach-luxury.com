// import sections
import Hero from "./sections/Hero";
import Shopping from "./sections/Shopping";
import Promotion from "./sections/Promotion";
import VideoSection from "./sections/VideoSection";
import About from "./sections/About";

const Home = () => {
    return (
        <main>
            <Hero />
            <Shopping />
            <Promotion />
            <VideoSection />
            <About />
        </main>
    )
}

export default Home;