import { Link } from "react-router-dom";

const PriceTable = () => {
  return (
    <div className="bg-blue-600 py-10">
      <div className="w-full bg-blue pt-8">
        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
          <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none rounded-bl-lg bg-white mt-4 flex flex-col">
            <div className="p-8 text-3xl font-bold text-center">Basic Package</div>
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
                Vendor Coordination (up to 3 vendors)
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Budget Planning
              </div>
            </div>
            <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
             Starting at $1,500  
              <span className="ml-2 text-grey-light italic line-through">$1,800</span>
            </div>
            <div className="text-center pt-8 mb-8 mt-auto">
              <button className="btn w-3/4 mb-6 bg-blue-600 hover:bg-blue-900 p-2 font-semibold rounded-lg text-white">
                <Link to="/register">Book Now</Link>
              </button>
            </div>
          </div>
          <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
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
              <span className="ml-2 text-grey-light italic line-through">$3,000</span>
            </div>
            
            <div className="w-full text-center mb-8 mt-auto">
              <button className="btn w-3/4 mb-6 bg-green-600 hover:bg-green-900 p-2 font-semibold rounded-lg text-white">
                <Link to="/register">Book Now</Link>
              </button>
            </div>
          </div>
          <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tl-none rounded-br-lg bg-white mt-4 flex flex-col">
            <div className="p-8 text-3xl font-bold text-center">Standard Package</div>
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
              <span className="ml-2 text-grey-light italic line-through">$2,400</span>
            </div>
            <div className="text-center pt-8 mb-8 mt-auto">
              <button className="btn w-3/4 mb-6 bg-blue-600 hover:bg-blue-900 p-2 font-semibold rounded-lg text-white">
                <Link to="/register">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
