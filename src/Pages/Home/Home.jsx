
import { useLoaderData } from "react-router-dom";
import Banner from "../../layout/Banner/Banner";
import NavBar from "../../layout/Navbar/Navbar";
import Services from "../../layout/Services/Services";
import PriceTable from "../../layout/PriceTable/PriceTable";
import AboutUs from "../../layout/AboutUs/AboutUs";
import WhyChoose from "../../layout/WhyChoose/WhyChoose";
import { Helmet } from "react-helmet-async";

const Home = () => {
 const data = useLoaderData()
  return (
    <div className="">
      <Helmet>RR Event Management || Home</Helmet>
      <NavBar></NavBar>
      <Banner></Banner>
      <Services data={data}></Services>
      <PriceTable></PriceTable>
      <AboutUs></AboutUs>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
