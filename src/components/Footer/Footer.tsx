import c from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

import { GiAirplaneDeparture } from "react-icons/gi";

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

import { IoReturnDownForwardOutline, IoMailSharp } from "react-icons/io5";

import { FaMapLocationDot, FaPhone, FaClock } from "react-icons/fa6";

const links = [
  { "About Us": "about" },
  { "FAQ's": "faq" },
  { "Terms Of Service": "terms" },
  { "Privacy policy": "policy" },
  { "Our Services": "out-service" },
];

// const contacts = [
//   { FaMapLocationDot: "15/B Road, New York, USA" },
//   { FaPhone: "+2 123 4566 789" },
//   { IoMailSharp: "info@example.com" },
//   { FaClock: "Sun - Fri (10AM - 08PM)" },
// ];

const contactsText = [
  "15/B Road, New York, USA",
  "+2 123 4566 789",
  "info@example.com",
  "Sun - Fri (10AM - 08PM)",
];

const contactsIcons = [FaMapLocationDot, FaPhone, IoMailSharp, FaClock];

const getStarted = [
  { Register: "register" },
  { "Our package": "our-package" },
  { "Contact Us": "contact0-us" },
  { "Private jet": "jets" },
  { Career: "out-service" },
];

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.footerContent}>
        <div className={c.left}>
          <div className={c.logo}>
            <NavLink to={"/"}>
              <GiAirplaneDeparture />
              <p>
                AIR
                <span>LINE</span>
              </p>
            </NavLink>
          </div>
          <div className={c.text}>
            <p>
              There are many variations of the passages available the majority
              have suffered alteration in some form by injected humour.
            </p>
          </div>
          <div className={c.icons}>
            <TiSocialFacebook />
            <TiSocialTwitter />
            <TiSocialYoutube />
            <TiSocialInstagram />
          </div>
        </div>
        <div className={c.links}>
          <p>Quick Links</p>
          <IoReturnDownForwardOutline />
          <ul>
            {links.map((link, key) => (
              <NavLink to={`/${Object.values(link)}`} key={key}>
                <li>{Object.keys(link)}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className={c.getStart}>
          <p>Get Started</p>
          <IoReturnDownForwardOutline />
          <ul>
            {getStarted.map((link, key) => (
              <NavLink to={`/${Object.values(link)}`} key={key}>
                <li>{Object.keys(link)}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className={c.contact}>
          <p>Contact Us</p>
          <IoReturnDownForwardOutline />
          <div className={c.icons}>
            {contactsText.map((contact, index) => {
              const Icon = contactsIcons[index];
              return (
                <div key={index}>
                  <Icon />
                  <span>{contact}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={c.line}>
        <p>© Copyright 2024 MN All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
