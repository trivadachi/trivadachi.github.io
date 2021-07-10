import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Isha Trivedi</h2>
        <p><a href="mailto:trivadachi@hotmail.com">trivadachi@hotmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Isha. I like pears. And mangoes. Sometimes.
        I am a <a href="https://economics.ubc.ca/undergraduate/programs/bachelor-of-international-economics/">BIE</a> major at UBC, and a Consulting Director at 180 Degrees Consulting  <a href="https://180dc.org/">180 Degrees Consulting</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Isha Trivedi <Link to="/">trivadachi.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
