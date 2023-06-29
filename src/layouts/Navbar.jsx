import { Link } from "react-router-dom";
import jazzyLogo from "../assets/image 2.svg";
import location from "../assets/Vector.svg";
import locationaddress from "../assets/Lagos, Nigeria.svg";
import allproductlogo from "../assets/Group 33.svg";
import guestlogo from "../assets/Group 34.svg";
import notificationlogo from "../assets/Group 2.svg";

const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-5">
          <Link to='/'>
            <img className='img-fluids logo'src={jazzyLogo} alt="jazzy-logo" />
          </Link>
          <img className='img-fluids location' src={location} alt="Location-logo" />
          <img className='img-fluids location' src={locationaddress} alt="address-logo" />
        </div>
        <nav>
          <ul className="d-flex gap-4">
            <li className="list-unstyled">
              <img  className='img-fluids allproduct' src={allproductlogo} alt="all-product-logo" />
            </li>
            <li className="list-unstyled">
              <img  className='img-fluids guest' src={guestlogo} alt="guest-logo" />
            </li>
            <li className="list-unstyled">
                <Link to='/cart'>

              <img  className='img-fluids' src={notificationlogo} alt="notification-logo" />
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
