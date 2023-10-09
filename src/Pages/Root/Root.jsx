import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";
import { Helmet } from "react-helmet-async";


const Root = () => {
    return (
        <div>
            <Helmet>
                <title>RR Event Management || Home</title>
            </Helmet>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;