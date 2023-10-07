import Service from "../Service/Service";
import PropTypes from 'prop-types';

const Services = ({data}) => {

    return (
        <div className="my-6 container mx-auto">
            <h1 className="text-5xl text-center font-bold">Our Services</h1>
            <p className="text-center">Transforming Occasions into Unforgettable Experiences</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-3">
        {data.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
        </div>
    );
};
Services.propTypes = {
  data: PropTypes.array,
}
export default Services;