import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const { id, name, image, price , shortDescription } = service;
  return (
    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card bg-white rounded-lg shadow-xl space-y-4">
      <div className="flex flex-col justify-between h-full gap-3">
        <div>
        <figure>
          <img src={image} alt="Shoes" className="rounded-xl mx-auto w-full" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <p className="text-center text-gray-500">
            {shortDescription}
          </p>
        </div>
      </div>
      <div className="space-y-3">
          <div className="text-gray-800 text-center text-lg font-bold">
            
               <p>Price: {price} USD</p>
          </div>
        <div className="card-actions">
           <Link className='w-full text-center' to={`/serviceDetails/${id}`}> 
             <button
            className="btn w-3/4 mb-6 bg-blue-600 hover:bg-blue-900 p-2 font-semibold rounded-lg text-white"
          >
            See Details
          </button>

           </Link>
         
        </div>
      </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object,
}
export default Service;
