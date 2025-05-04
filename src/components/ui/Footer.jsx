import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: '#6050DC', color: 'white' }}>
      <div className="container text-center">
        {/* Navigation Links */}
        <div className="mb-2">
          <a href="#" className="text-white text-decoration-none mx-2">Home</a>
          <a href="#" className="text-white text-decoration-none mx-2">About</a>
          <a href="#" className="text-white text-decoration-none mx-2">Shop</a>
        </div>

        {/* Social Icons */}
        <div className="mb-2">
          <a href="https://www.facebook.com/login.php/" className="text-white mx-2"><FaFacebook /></a>
          <a href="https://x.com/i/flow/login" className="text-white mx-2"><FaTwitter /></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-white mx-2"><FaInstagram /></a>
        </div>

        {/* Contact Details */}
        <div className="mb-2">
          <p className="mb-1 small">📍 123 Main Street, Chennai, Tamil Nadu</p>
          <p className="mb-1 small">📞 +91 98765 43210</p>
          <p className="mb-1 small">📧 support@layzfy.com</p>
        </div>

        {/* Copyright */}
        <p className="small mb-0">&copy; 2024 Shoppit</p>
      </div>
    </footer>
  );
}

export default Footer;
