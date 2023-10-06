
const Banner = () => {
    return (
        <>
  <section className="px-5 lg:px-0">
    <div>
      <div className="carousel w-full md:h-[500px] lg:h-[600px] h-[400px]">
        <div
          id="slide1"
          className="carousel-item  relative w-full "
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1533146303127-f2ef440cfeb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="hero-overlay flex  w-full py-48 bg-opacity-60">
            <div className="hero-content mx-auto text-center text-white">
              <div className="w-full flex-col">
                <h1 className="mb-5 lg:text-7xl md:text-4xl text-3xl font-bold">
                  Wedding Planning
                </h1>
                 <p className="mb-5 mx-auto w-[70%] md:w-full text-xl lg:text-2xl">
                  We decorate in your Wedding planning 
                </p>
                <button className="btn bg-red-500 border border-red-500 text-white hover:text-black">
                  Book Now
                </button>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide4"
                  className="btn  bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn  bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item  relative w-full "
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1562967005-a3c85514d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="hero-overlay flex w-full py-48 bg-opacity-60">
            <div className="hero-content mx-auto text-center text-white">
              <div className="w-full flex-col">
                <h1 className="mb-5 lg:text-7xl md:text-4xl text-3xl font-bold">
                  Birthday Party Planning
                </h1>
                 <p className="mb-5 mx-auto w-[70%] md:w-full text-xl lg:text-2xl">
                  We decorate in your weeding celebration  
                </p>
                <button className="btn bg-red-500 border border-red-500 text-white hover:text-black">
                  Book Now
                </button>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn  bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item  relative w-full "
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1496285416008-dfb54bbaedff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="hero-overlay flex w-full py-48 bg-opacity-60">
            <div className="hero-content mx-auto text-center text-white">
              <div className="w-full flex-col">
                <h1 className="mb-5 lg:text-7xl md:text-4xl text-3xl font-bold">
                  Engagement Party Planning
                </h1>
                 <p className="mb-5 mx-auto w-[70%] md:w-full text-xl lg:text-2xl">
                  We decorate in your Engagement party   
                </p>
                <button className="btn bg-red-500 border border-red-500 text-white hover:text-black">
                  Book Now
                </button>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn  bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❮
                </a>
                <a
                  href="#slide4"
                  className="btn  bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item  relative w-full "
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="hero-overlay flex  w-full lg:py-48 md:py-10 py-0 bg-opacity-60">
            <div className="hero-content mx-auto text-center text-white">
              <div className="w-full flex-col">
                <h1 className="mb-5 lg:text-7xl md:text-4xl text-3xl font-bold">
                  Anniversary Celebration
                </h1>
                <p className="mb-5 mx-auto w-[70%] md:w-full text-xl lg:text-2xl">
                  We decorate in your weeding/ marriage anniversary celebration  
                </p>
                <button className="btn bg-red-500 border border-red-500 text-white hover:text-black">
                  Book Now
                </button>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn bg-transparent hover:text-gray-900 text-white btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    );
};

export default Banner;