
const AboutUs = () => {
  return (
    <section className="pt-20 container mx-auto lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden ">
      <div className="container px-6 lg:px-0">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div data-aos="zoom-in" className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div data-aos="zoom-in" className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-2 text-xl font-semibold text-primary">
                About Our Event Management Company
              </span>
              <h2 data-aos="slide-left" className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                Creating Unforgettable Events for Every Occasion
              </h2>
              <p data-aos="flip-up" className="mb-8 text-base text-body-color">
                We specialize in turning your dreams into reality by designing and managing spectacular events. Our experienced team is dedicated to making your special moments truly unforgettable.
              </p>
              <a data-aos="slide-up"
                href="/#"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Get Started with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
