import { useLoaderData } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";
import Blog from "../../layout/Blog/Blog";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <>
    <Helmet>
      <title>Blogs</title>
    </Helmet>
      <Navbar></Navbar>
      <div className="pt-16">
        <h1 className="underline text-3xl font-bold text-center mt-5 ">Feature Blogs</h1>
        {data.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
