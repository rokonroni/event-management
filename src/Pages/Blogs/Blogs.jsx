import { useLoaderData } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";
import Blog from "../../layout/Blog/Blog";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <>
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
