import { Link } from "react-router-dom";

const PriceTable = () => {
  return (
    <div className="bg-blue-500 py-10">
      <h1 className="text-5xl mb-2 text-white text-center font-bold">
        Pricing
      </h1>
      <p className="text-white text-center">The best price in the town</p>
      <div className="w-full bg-blue pt-8">
        <div className="flex flex-col lg:flex-row px-6 lg:px-0 container mx-auto justify-center mb-6 sm:mb-0">
          <div
            data-aos="fade-up"
            className="flex-1 lg:flex-initial lg:w-1/4 rounded-lg lg:rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg bg-white mt-4 -mr-1 flex flex-col"
          >
            <div className="p-8 text-3xl font-bold text-center">
              Basic Package
            </div>
            <div className="border-0 border-grey-light border-t border-solid text-sm">
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Half Day Event Coordination
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Event Coordination
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Venue Selection Assistance
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Single Vendor Coordination
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Budget Planning
              </div>
            </div>
            <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
              Starting at $1,500
              <span className="ml-2 text-grey-light italic line-through">
                $1,800
              </span>
            </div>
            <div className="text-center pt-8 mb-8 mt-auto">
              <Link to="/contact">
                <button className="btn w-3/4 mb-6 bg-blue-600 hover:bg-blue-900 p-2 font-semibold rounded-lg text-white">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex-1 rounded-lg lg:flex-initial lg:w-1/4 lg:rounded-t-lg bg-white mt-4 lg:-mt-4 shadow-lg z-10 flex flex-col"
          >
            <div className="w-full p-8 text-3xl font-bold text-center">
              Premium Package
            </div>
            <div className="w-full border-0 border-grey-light border-t border-solid text-sm">
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Everything in Standard Package
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Customized Event Design
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                On-site Event Management
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                RSVP Management
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited Vendor Coordination
              </div>
            </div>
            <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
              Starting at $2,500
              <span className="ml-2 text-grey-light italic line-through">
                $3,000
              </span>
            </div>

            <div className="w-full text-center mb-8 mt-auto">
              <Link to="/contact">
                <button className="btn w-3/4 mb-6 lg:bg-green-600 bg-blue-600 hover:bg-blue-900 lg:hover:bg-green-900 p-2 font-semibold rounded-lg text-white mt-8 lg:mt-0">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="flex-1 lg:flex-initial lg:w-1/4 rounded-lg lg:rounded-t-lg lg:rounded-tl-none lg:rounded-br-lg bg-white mt-4 flex -ml-1  flex-col"
          >
            <div className="p-8 text-3xl font-bold text-center">
              Standard Package
            </div>
            <div className="border-0 border-grey-light border-t border-solid text-sm">
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Everything in Basic Package
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Full Day Event Coordination
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited Vendor Coordination
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Detailed Timeline Creation
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Guest List Management
              </div>
            </div>
            <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
              Starting at $2,000
              <span className="ml-2 text-grey-light italic line-through">
                $2,400
              </span>
            </div>
            <div className="text-center pt-8 mb-8 mt-auto">
              <Link to="/contact">
                <button className="btn w-3/4 mb-6 bg-blue-600 hover:bg-blue-900 p-2 font-semibold rounded-lg text-white">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
