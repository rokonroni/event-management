
const WhyChoose = () => {
    return (
        <div  className="bg-red-200">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-red-900 to-red-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Your Premier Event Planning Partner
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-black">
            We turn your dreams into unforgettable moments. Discover why we are
            the perfect choice for your special events.
          </p>
        </div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 lg:grid-cols-3">
          <div  data-aos="flip-left" className="rounded-md bg-blue-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="mt-6 text-white text-2xl font-bold">Reliability</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
              Count on us to deliver seamless, stress-free events that exceed
              your expectations.
            </p>
          </div>
          <div data-aos="zoom-in" className="rounded-md bg-blue-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-heart"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 4a3.3 3.3 0 0 0 -2.4 1" />
                <path d="M18 8a3.3 3.3 0 0 0 -2.4 1" />
                <path d="M18 12a3.3 3.3 0 0 0 -2.4 1" />
                <path d="M6 4a3.3 3.3 0 0 1 2.4 1" />
                <path d="M6 8a3.3 3.3 0 0 1 2.4 1" />
                <path d="M6 12a3.3 3.3 0 0 1 2.4 1" />
                <path d="M12 18l-2.4-2.4a5 5 0 0 1 -1.6-3.6h0a5 5 0 0 1 1.6-3.6l2.4-2.4" />
              </svg>
            </div>
            <h3 className="mt-6 text-white text-2xl font-bold">Passion</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
              Our team is driven by a genuine passion for creating magical
              moments that leave lasting memories.
            </p>
          </div>
          <div data-aos="flip-right" className="rounded-md bg-blue-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-calendar-event"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x={4} y={5} width={16} height={16} rx={2} />
                <line x1={16} y1={3} x2={16} y2={7} />
                <line x1={8} y1={3} x2={8} y2={7} />
                <line x1={4} y1={11} x2={20} y2={11} />
                <rect x={8} y={15} width={2} height={2} />
              </svg>
            </div>
            <h3 className="mt-6 text-white text-2xl font-bold">Experience</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
              With years of experience, we bring expertise and creativity to
              every event we plan.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
    );
};

export default WhyChoose;