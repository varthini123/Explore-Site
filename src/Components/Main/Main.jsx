import React ,{useEffect}from "react";
import "./main.css";
import img from "../../Assets/img.jpeg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpeg";
import img4 from "../../Assets/img4.jpeg";
import img5 from "../../Assets/img5.jpeg";
import img6 from "../../Assets/img6.jpeg";
import img7 from "../../Assets/img7.jpeg";
import img8 from "../../Assets/img8.jpeg";
import img9 from "../../Assets/img9.jpeg";

import Aos from 'aos'
import 'aos/dist/aos.css'


//icons importing
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fee: "$700",
    description:
      "Bora Bora is a volcano set on one of the most beautiful lagoons in the world, a million shades of blue. The huge motu of Bora Bora white sand beaches lined with coconut trees encircle the emerald lagoon populated with myriad fish and multi-colored corals.",
  },
  ,
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fee: "$600",
    description:
      " A symbol of the Incan Empire and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007. 10.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Auistralia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Cappadocia , Ancient district, eastern Anatolia. It is a mountainous area located in present-day Turkey; its earliest records date from the 6th century bc, when it was a Persian satrapy. A period of semi-autonomy followed Alexander the Greats conquest of the Persian empire (330 bc).",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 meters) above sea level. Guanajuato was founded in 1554 and given city status in 1741.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: " Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      'The Cinque Terre (Italian pronunciation: [ˈtʃiŋkwe ˈtɛrre], meaning "Five Lands") is a coastal area within Liguria, in the northwest of Italy. It lies in the west of La Spezia Province, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. ',
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: " Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkor is therefore a major site exemplifying cultural, religious and symbolic values, as well as containing high architectural, archaeological and artistic significance. The park is inhabited, and many villages, some of whom the ancestors are dating back to the Angkor period are scattered throughout the park.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$990",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: " Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Welcome to Bali, The island of Bali is part of the Republic of Indonesia and is located 8 to 9 degrees south of the equator between Java in the West and Lombok and the rest of the Lesser Sunda Islands (Sumbawa, Flores, Sumba and Timor) in the East. Bali is one of the most popular tourist destinations in the world.",
  },
];

const Main = () => {
  //creating a react hook to add a scroll animation


useEffect(()=>{
  Aos.init({duration:2000})
},[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>

      <div className="setContent grid">
        {/* map method is used for higher order array */}
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} 
              data-aos="fade-up"className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="desiTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                     DETAILS<HiOutlineClipboardCheck classsName="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
