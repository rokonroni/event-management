
import { useLoaderData } from "react-router-dom";
import Banner from "../../layout/Banner/Banner";
import NavBar from "../../layout/Navbar/Navbar";
import Services from "../../layout/Services/Services";

const Home = () => {
 const data = useLoaderData()
  return (
    <div className="">
      <NavBar></NavBar>
      <Banner></Banner>
      <Services data={data}></Services>
    </div>
  );
};

export default Home;
