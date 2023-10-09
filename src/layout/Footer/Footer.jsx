import { BsFacebook } from 'react-icons/bs';
import {BiLogoInstagramAlt, BiLogoLinkedin, } from 'react-icons/bi';
const Footer = () => {
  return (
    <>
    <footer className="footer px-10 pt-10 bg-blue-600 text-white">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h2 className="text-2xl font-bold">Event Management</h2>
      <p className="mt-4">Your trusted partner for exceptional events since 2020.</p>
    </div>

    <div>
      <h2 className="text-2xl font-bold">Services</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <a href="#">Weadding Events</a>
        </li>
        <li>
          <a href="#">Birthday Parties</a>
        </li>
        <li>
          <a href="#">Retirement Parties</a>
        </li>
        <li>
          <a href="#">Anniversaries Parties</a>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="mt-4">123 Main Street, City</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@rreventmanagement.com</p>
    </div>

    <div>
      <h2 className="text-2xl font-bold">Follow Us</h2>
      <div className="mt-4 space-x-4 text-2xl flex">
        <a href="#">
          
          <BsFacebook ></BsFacebook>
        </a>
        <a href="#">
          <BiLogoInstagramAlt ></BiLogoInstagramAlt>
        </a>
        <a href="#">
          <BiLogoLinkedin></BiLogoLinkedin>
        </a>
      </div>
    </div>
  </div>
</footer>
<div className="bg-blue-600 text-center py-6 text-white">
    <p>&copy; {new Date().getFullYear()} RR Event Management || All Rights Reserved.</p>
  </div>
    
    </>

  );
};

export default Footer;
