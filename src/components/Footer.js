import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .footerlayout {
    background: #222;
    color: #797979;
    margin: 40px 0 0 0;
    text-align: center;
    padding: 10px;
  }
  .footerlayout p {
    margin: 0;
  }
  .footer{
    background-color: tan
  }
`;

export const Footer = () => (
  
<div className='footerlayout'>
<Container>
<Styles>
   <footer id="footer" className="footer bg-overlay">
    <div className="footer-main">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 footer-widget footer-about">
                    <h3 className="widget-title">About Us</h3>
                    <img className="footer-logo" src="imgs/image250a.jpg" alt="Optical Automation, LLC" />
                      <p>We are your Website Network and Mobile App leaders in Information Technology.   </p>
                        <div className="footer-social">
                            <ul>
                                <li><a href="https://facebook.com/themefisher"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/themefisher"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://instagram.com/themefisher"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://github.com/themefisher"><i className="fa fa-github"></i></a></li>
                            </ul>
                    </div>
                </div>
 
                <div className="col-md-4 col-sm-12 footer-widget">
                    <h3 className="widget-title">Services</h3>
                    <ul className="list-arrow">
                        <li><a href="service-single.html">Pre-product Design </a></li>
                        <li><a href="service-single.html">General Development Websites</a></li>
                        <li><a href="service-single.html">Information Management Architecture</a></li>
                        <li><a href="service-single.html">Development and Production Services</a></li>
                        <li><a href="service-single.html">Product Distrubution</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <div className="copyright-info">
                        <span>Disclaimer: All tradenames and trademarks are owned by each respective company.							</span>
                        <span>The product and company names are registered in the U.S. Patent and Trademark Office to include Optical Automation, ShopperLady(R), and 
                            The ProductList Network(R), <a href="https://www.theproductlistnetwork.com">The ProductList Network(R) website. </a></span>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <div className="footer-menu">
                        <ul className="nav unstyled">
                            <li><a href="about.html">About</a></li>
                            <li><a href="team.html">Terms of Use</a></li>
                            <li><a href="faq.html">Privacy Policy</a></li>
                            <li><a href="news-left-sidebar.html">Blog</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top affix">
                <button className="btn btn-primary" title="Back to Top">
                    <i className="fa fa-angle-double-up"></i>
                </button>
            </div>

        </div>
    </div>

    <div className="copyright">
       <div className="copyright-info">
          <span>©2020, All rights reserved, <a href="https://www.opticalautomation.com">Optical Automation, LLC</a></span>
       </div>
     </div>

     </footer>
     </Styles>
  </Container>
</div>
);
