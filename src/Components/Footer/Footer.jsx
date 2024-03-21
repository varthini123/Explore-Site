import React ,{useEffect}from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up"className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Explore with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address " />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SUBMIT <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Explore
              </a>
            </div>

            <div data-aos="fade-up"className="footerParagraph">
            We are providing our services in Himachal, Kashmir, Delhi, Chandigarh, Rajasthan, Uttranchal, Corbett, Sikkim, Darjeeling, Kerala, & Andaman & Nicobar Island. Send Your Queries, Get Quotes, Compare & Book.
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* group one */}
            <div data-aos="fade-up" data-aos-duration="3000"className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* group two */}
            <div data-aos="fade-up"
            data-aos-duration="4000"className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* group three */}
            <div data-aos="fade-up" 
            data-aos-duration="5000"className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST EXPLORER WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED-VTECH 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
