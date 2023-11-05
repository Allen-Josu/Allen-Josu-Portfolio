import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Allen</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="
            https://in.linkedin.com/in/allen-joseph-joy-a5b3a8208
            "
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/__jo.su__?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a> */}
        </div>
        <span className="footer__copy">&#169; MyDesigns. All rigths reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
