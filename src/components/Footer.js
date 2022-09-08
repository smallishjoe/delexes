function Footer(){
    return(
        <div id="footer-wrapper" className="footer-dark">
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <ul className="col-md-3 col-sm-6 footer-widget-container clearfix">
                            
                            <li className="widget widget_newsletterwidget">
                                <div className="title">
                                    <h3>newsletter subscribe</h3>
                                </div>

                                <p>
                                    Subscribe to our newsletter and we will 
                                    inform you about newest projects and promotions.
                                </p>

                                <br />

                                <form className="newsletter">
                                    <input className="email" type="email" placeholder="Your email..."/>
                                    <input type="submit" className="submit" value=""/>
                                </form>
                            </li>
                        </ul>

                        <ul className="col-md-3 col-sm-6 footer-widget-container">
                           
                            <li className="widget widget_pages">
                                <div className="title">
                                    <h3>quick links</h3>
                                </div>

                                <ul>
                                    <li><a href="about01.html">About us</a></li>
                                    <li><a href="company-history.html">Company history</a></li>
                                    <li><a href="events.html">Company Events</a></li>
                                    <li><a href="supply-chain-management.html">Supply chain management</a></li>
                                    <li><a href="warehousing.html">Warehousing</a></li>
                                    <li><a href="news-standard.html">Company news</a></li>
                                    <li><a href="driver-application.html">Online driver application</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="col-md-3 col-sm-6 footer-widget-container">
                            
                            <li className="widget widget_pages">
                                <div className="title">
                                    <h3>Industry solutions</h3>
                                </div>

                                <ul>
                                    <li><a href="overland-transportation.html">Overland transportation</a></li>
                                    <li><a href="air-freight.html">Air freight</a></li>
                                    <li><a href="ocean-freight.html">Ocean freight</a></li>
                                    <li><a href="large-projects.html">Large projects</a></li>
                                    <li><a href="rail-transportation.html">Rail international shipping</a></li>
                                    <li><a href="contract-logistics.html">Contract logistics</a></li>
                                    <li><a href="packaging-options.html">Packaging options</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="col-md-3 col-sm-6 footer-widget-container">
                            <li className="widget widget-text">
                                <div className="title">
                                    <h3>contact us</h3>
                                </div>

                                <address>
                                    123 Second Street Fifth Avenue, <br />
                                    Manhattan, New York
                                </address>

                                <span className="text-big">
                                    +00 41 258 489 6587
                                </span>
                                <br />

                                <a href="mailto:">info@trucking.com</a>
                                <br />
                                <ul className="footer-social-icons">
                                    <li><a href="#" className="fa fa-facebook"></a></li>
                                    <li><a href="#" className="fa fa-twitter"></a></li>
                                    <li><a href="#" className="fa fa-google-plus"></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            <div className="copyright-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>TRUCKING 2015. All RIGHTS RESERVED.</p>
                        </div>

                        <div className="col-md-6">
                            <p className="align-right">DESIGNED AND DEVELOPED BY <a href="www.pixel-industry.html">PIXEL INDUSTRY.</a> ELITE AUTHOR.</p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="scroll-up">Scroll</a>
        </div>
    )
}

export default Footer;