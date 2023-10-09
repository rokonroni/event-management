
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";


const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  console.log(id);
  const idInt = parseInt(id);
  const data = useLoaderData();
  useEffect(() => {
    const findService = data?.find(service => service.id === idInt);
  setService(findService)
  }, [idInt, data]);
  return (
    <>
    <Navbar></Navbar>
      <div className="pt-20 ">
        <img className="container mx-auto rounded-lg h-[70vh]" src={service.image} />
      </div>
      <div className="container py-5 px-6 mx-auto">
        <h2 className="text-4xl font-bold mt-5 text-blue-600">{service.name}</h2>
        <div className="text-gray-800 text-lg font-bold">
        <p className="text-red-600 mt-3">{service.price}</p>
          </div>
        <p className="text-lg mt-3 font-normal text-justify ">{service.fullDescription}</p>
        <Link to='/contact'> 
             <button
            className="btn px-4 my-6 bg-blue-600 hover:bg-blue-900 p-2 font-semibold rounded-lg text-white"
          >
            Book Now
          </button>
           </Link>
      </div>
    </>
  );
};

export default ServiceDetails;