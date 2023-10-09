import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { img, title, description, posted_time } = blog;
  return (
    <>
      <div data-aos="fade-up" className="mt-8 container mx-auto lg:flex lg:items-center shadow-lg py-6 px-6">
        <img
          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-full"
          src={img}
          alt=""
        />
        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
          >
            {title}
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm text-justify">
            {description}
          </p>
          <p className="mt-4 text-gray-400">Posted Date: {posted_time}</p>
          <a
            href="#"
            className="inline-flex mt-3 items-center justify-center px-8 py-3 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
