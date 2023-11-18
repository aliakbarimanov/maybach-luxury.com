// import video
import maybachPromotionVideo from "../../assets/video/maybachPromotionVideo.mp4"

const VideoSection = () => {
    return (
        <section className="videoSection">
            <video autoplay="autoplay" muted loop playsInline>
                <source
                    src={maybachPromotionVideo}
                    type="video/mp4"
                />
                Your browser does not support HTML5 video.
            </video>
        </section>
    )
}

export default VideoSection;