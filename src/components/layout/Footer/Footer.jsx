import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaSquareXTwitter } from 'react-icons/fa6';
import VerbyoLogo from '../../../assets/verbyo-logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="main-footer-container container m-auto">
        <div className="top-footer-part py-5 flex justify-between">
          <div className="logo-container text-black gap-2 flex justify-center items-center">
            <img src={VerbyoLogo} alt="verbyo website logo" />
            <h1 className="font-bold">Verbyo</h1>
          </div>
          <div className="logo-container text-black gap-4 flex justify-center items-center">
            <span>Follow us</span>
            <a
              className="footer-icons fb-icon"
              href="https://www.facebook.com/verbyo"
              target="_blank"
            >
              <BiLogoFacebookCircle />
            </a>
            <a
              className="footer-icons special-footer-link"
              href="https://x.com/@verbyoapp"
              target="_blank"
            >
              <FaSquareXTwitter />
            </a>
            <a
              className="footer-icons insta-icon"
              href="https://www.instagram.com/verbyo"
              target="_blank"
            >
              <BiLogoInstagramAlt />
            </a>
          </div>
        </div>
        <div className="bottom-footer-part py-10 flex justify-between">
          <div className="left-bottom-side flex gap-5">
            <a
              className="footer-links"
              target="_blank"
              href="https://verbyo.com/terms"
            >
              Terms and conditions
            </a>
            <a
              className="footer-links"
              target="_blank"
              href="https://verbyo.com/terms/?active=privacy-policy"
            >
              Privacy policy
            </a>
            <a className="footer-links" target="_blank" href="#">
              Contact Us
            </a>
          </div>
          <div className="right-bottom-side">
            <span className="font-bold">
              Copyright © Verbyo 2019 All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
