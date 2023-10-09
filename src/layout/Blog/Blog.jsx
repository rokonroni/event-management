import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { img, title, description, posted_time } = blog;
  return (
    <>
      <div className="mt-8 container mx-auto lg:flex lg:items-center shadow-lg py-6">
        <img
          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-48"
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
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {description}
          </p>
          <p>{posted_time}</p>
          <a
            href="#"
            className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
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
