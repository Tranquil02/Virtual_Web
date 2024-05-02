import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer-area footer--light">
        <div className="footer-big">
          <div className="footer-container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <img
                      src="http://placehold.it/250x80"
                      alt=""
                      className="img-fluid"
                    />
                    <p>
                      Что если тут написать другой текст на русском языке, для
                      проверки шрифта Rubik )
                    </p>
                    <ul className="contact-details">
                      <li>
                        <span className="icon-earphones"></span> Call Us:
                        <a href="tel:344-755-111">344-755-111</a>
                      </li>
                      <li>
                        <span className="icon-envelope-open"></span>
                        <a href="mailto:support@aazztech.com">
                          support@aazztech.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Repeat the structure for other columns */}
            </div>
          </div>
        </div>

        <div className="mini-footer">
          <div className="footer-container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  <p>
                    © 2018
                    <a href="#">DigiPro</a>. All rights reserved. Created by
                    <a href="#">AazzTech</a>
                  </p>
                </div>

                <div className="go_top">
                  <span className="icon-arrow-up"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
