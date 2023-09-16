import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer1" id="footer">
      <div className="footer-main">
        <div className="footer-1">
          <p className="p-c1">COMPANY</p>
          <p className="p-c">About</p>
          <p className="p-c">Careers</p>
          <p className="p-c">Brand Center</p>
          <p className="p-c">Blog</p>
        </div>

        <div className="footer-1">
          <p className="p-c1">HELP CENTER</p>
          <p className="p-c">Discord Server</p>
          <p className="p-c">Twitter</p>
          <p className="p-c">Facebook</p>
          <p className="p-c">Contact Us</p>
        </div>
        <div className="footer-1">
          <p className="p-c1">LEGAL</p>
          <p className="p-c">Privacy Policy</p>
          <p className="p-c">Liscensing</p>
          <p className="p-c">Terms & Conditions</p>
        </div>
        <div className="footer-1">
          <p className="p-c1">DOWNLOAD</p>
          <p className="p-c">IOS</p>
          <p className="p-c">Android</p>
          <p className="p-c">Windows</p>
          <p className="p-c">MacsOS</p>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
