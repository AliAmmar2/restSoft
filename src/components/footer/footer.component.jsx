import './footer.styles.scss';
import tempLogo from '../../assets/tempLogo.png'
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Mailto from '../Mailto/mailto.component';

const Footer = () => {

  const phoneNumber = '+96170766902';
  const email = 'ammarsoltan51@gmail.com';
  const subject = 'Website Creation';
  const body = 'Hello';
  const facebook = "https://www.facebook.com/ali.am.9889";
  const twitter = "https://twitter.com/thealiammarr";
  const whatsapp = "https://wa.me/96170766902";
  const instagram = "https://www.instagram.com/aliammar136/";

    return (
        <footer className="footer">
          <div className='divider'></div>
          <div className="footer-content">
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="icons">
                <Mailto email={email} subject={subject} body={body} className="icon">
                  <FaEnvelope/>
                </Mailto>
                <a href={`tel:${phoneNumber}`} className="icon"><FaPhone/></a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="icon"><FaWhatsapp/></a>
              </div>
            </div>
            <div className="footer-logo">
              <img src={tempLogo} alt="Logo" />
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="icons">
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="icon"><FaTwitter /></a>
                <a href={facebook} target="_blank" rel="noopener noreferrer" className="icon"><FaFacebook /></a>
                <a href={instagram} target="_blank" rel="noopener noreferrer"  className="icon"><FaInstagram /></a>
               </div> 
            </div>
          </div>
        </footer>
      );
    }

export default Footer;