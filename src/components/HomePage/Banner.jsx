
import banner_bg from './../../assets/Banner_bg.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{backgroundImage: `url(${banner_bg})` }}>
            {/* <img src={banner_bg} alt="" /> */}
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">RevMax Auto Hub</h1>
                    <p className="mb-5">Your Destination for Quality Cars and Exceptional Service. Drive Home in Style with Our Premium Selection</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
