
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
        <img className="w-full h-[70vh]" src={service.image} />
      </div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mt-5">{service.name}</h2>
        <div className="text-gray-800 text-lg font-bold">
        <p>{service.price}</p>
          </div>
        <p className="text-lg mt-3 font-normal">{service.fullDescription}</p>
      </div>
    </>
  );
};

export default ServiceDetails;