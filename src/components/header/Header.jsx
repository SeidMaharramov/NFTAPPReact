import React, { useState } from "react";
import "./Header.scss";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaBars,
} from "react-icons/fa6";

const Header = () => {
  const [showDiv, setShowDiv] = useState(false); // Başlangıçta div gizli

  const toggleDiv = () => {
    setShowDiv(!showDiv); // State'i tersine çevir (toggle işlemi)
  };

  return (
    <div className="header">
      <header>
        <AnimatePresence>
          {showDiv && (
            <motion.div
              className="gizli"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }} // Çıkış animasyonu
              transition={{ duration: 0.5, type: "spring" }}
            >
              <ul>
                <i onClick={toggleDiv}>
                  <FaBars />
                </i>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li>RoadMap</li>
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="logo">
          <h1>cyFoNii</h1>
        </div>
        <div className="headcenter">
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li>RoadMap</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <i onClick={toggleDiv}>
          <FaBars />
        </i>
        <div className="headright">
          <i>
            <FaMagnifyingGlass />
          </i>
          <button>Join Now</button>
        </div>
      </header>
      <div className="container">
        <nav>
          <div className="top">
            <h1>Visions & Mission</h1>
            <ul>
              <li>Home</li>
              <li>Explore</li>
              <li>Vision & Mission</li>
            </ul>
          </div>
          <div className="bottom">
            <p>Show This Page</p>
            <ul>
              <li>
                <i>
                  <FaFacebook />
                </i>
              </li>
              <li>
                <i>
                  <FaTwitter />
                </i>
              </li>
              <li>
                <i>
                  <FaInstagram />
                </i>
              </li>
              <li>
                <i>
                  <FaYoutube />
                </i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
