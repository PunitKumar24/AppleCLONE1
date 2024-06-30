import React, { useState } from 'react';
import '../style/Footer.css';

function Footer() {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const [dropdownOpen5, setDropdownOpen5] = useState(false);
    const [dropdownOpen6, setDropdownOpen6] = useState(false);
    const [dropdownOpen7, setDropdownOpen7] = useState(false);
    const [dropdownOpen8, setDropdownOpen8] = useState(false);
    const [dropdownOpen9, setDropdownOpen9] = useState(false);
    const [dropdownOpen10, setDropdownOpen10] = useState(false);
    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };
    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };
    const toggleDropdown3 = () => {
        setDropdownOpen3(!dropdownOpen3);
    };
    const toggleDropdown4 = () => {
        setDropdownOpen4(!dropdownOpen4);
    };
    const toggleDropdown5 = () => {
        setDropdownOpen5(!dropdownOpen5);
    };
    const toggleDropdown6 = () => {
        setDropdownOpen6(!dropdownOpen6);
    }; const toggleDropdown7 = () => {
        setDropdownOpen7(!dropdownOpen7);
    };
    const toggleDropdown8 = () => {
        setDropdownOpen8(!dropdownOpen8);
    };
    const toggleDropdown9 = () => {
        setDropdownOpen9(!dropdownOpen9);
    };
    const toggleDropdown10 = () => {
        setDropdownOpen10(!dropdownOpen10);
    };

    return (
        <>
            <div className='body5'>
                <div className="body5subpart">
                    <div>
                        <p>‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
                            Representative example:</p>
                        <br />
                        <p>Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.</p>
                        <br />
                        <p>Based on a 24-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹11242.00, paid over 24 months as 24 monthly payments of ₹3329.00.</p>

                        <br /><p>*Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.
                            A subscription is required for Apple TV+.</p>
                        <br />
                    </div>
                    <br />
                    <hr />

                    <div className="list1">
                        <button className="dropbtn" onClick={toggleDropdown1}>Shop and Learn</button>
                        <div className={`dropdown-content ${dropdownOpen1 ? 'show' : ''}`}>
                            <a href="#store">Store</a>
                            <a href="#mac">Mac</a>
                            <a href="#ipad">iPad</a>
                            <a href="#iphone">iPhone</a>
                            <a href="#watch">Watch</a>
                            <a href="#airpods">AirPods</a>
                            <a href="#tv-home">TV & Home</a>
                            <a href="#airtag">AirTag</a>
                            <a href="#accessories">Accessories</a>
                            <a href="#gift-cards">Gift Cards</a>
                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown2}>Apple Wallet</button>
                        <div className={`dropdown-content ${dropdownOpen2 ? 'show' : ''}`}>
                            <a href="#wallet">Wallet</a>
                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown3}>Account</button>
                        <div className={`dropdown-content ${dropdownOpen3 ? 'show' : ''}`}>
                            <a href="#ManageYourAppleID">Manage Your Apple ID</a>
                            <a href="#AppleStoreAccount">Apple Store Account</a>
                            <a href="#option3">iCloud.com</a>

                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown4}>Entertainment</button>
                        <div className={`dropdown-content ${dropdownOpen4 ? 'show' : ''}`}>
                            <a href="#apple-one">Apple One</a>
                            <a href="#apple-tv-plus">Apple TV+</a>
                            <a href="#apple-music">Apple Music</a>
                            <a href="#apple-arcade">Apple Arcade</a>
                            <a href="#apple-podcasts">Apple Podcasts</a>
                            <a href="#apple-books">Apple Books</a>
                            <a href="#app-store">App Store</a>
                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown5}>Apple Store</button>
                        <div className={`dropdown-content ${dropdownOpen5 ? 'show' : ''}`}>
                            <a href="#option1">Option 1</a>
                            <a href="#option2">Option 2</a>
                            <a href="#option3">Option 3</a>
                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown6}>For Business</button>
                        <div className={`dropdown-content ${dropdownOpen6 ? 'show' : ''}`}>
                            <a href="#AppleandBussiness">Apple and Business</a>
                            <a href="#ShopFOrBusiness">Shop for Business</a>

                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown7}>For Education</button>
                        <div className={`dropdown-content ${dropdownOpen7 ? 'show' : ''}`}>
                            <a href="#option1">Education</a>
                            <a href="#option2">shop for education</a>
                            <a href="#option3">University</a>
                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown8}>For Healthcare</button>
                        <div className={`dropdown-content ${dropdownOpen8 ? 'show' : ''}`}>
                            <a href="#option1">Health care</a>
                            <a href="#option2">Health</a>

                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown9}>Apple Values</button>
                        <div className={`dropdown-content ${dropdownOpen9 ? 'show' : ''}`}>
                            <a href="#accessibility">Accessibility</a>
                            <a href="#education">Education</a>
                            <a href="#environment">Environment</a>
                            <a href="#privacy">Privacy</a>
                            <a href="#supply-chain">Supply Chain</a>
                        </div>
                        <hr />
                        <button className="dropbtn" onClick={toggleDropdown10}>About Apple</button>
                        <div className={`dropdown-content ${dropdownOpen10 ? 'show' : ''}`}>
                            <a href="#newsroom">Newsroom</a>
                            <a href="#apple-leadership">Apple Leadership</a>
                            <a href="#career-opportunities">Career Opportunities</a>
                            <a href="#investors">Investors</a>
                            <a href="#ethics-compliance">Ethics & Compliance</a>
                            <a href="#events">Events</a>
                            <a href="#contact-apple">Contact Apple</a>
                        </div>
                        <hr />

                    </div>

                    <div className='lists'>
                        <div>
                            <h4>Shop and Learn</h4>
                            <br />
                            <ul>
                                <li>Store</li>
                                <li>Mac</li>
                                <li>iPad</li>
                                <li>iPhone</li>
                                <li>Watch</li>
                                <li>AirPods</li>
                                <li>TV & Home</li>
                                <li>AirTag</li>
                                <li>Accessories</li>
                                <li>Gift Cards</li>
                            </ul>
                            <br />
                            <h4>Apple Wallet</h4>
                            <br />
                            <ul>
                                <li>Wallet</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Account</h4>
                            <br />
                            <ul>

                                <li>Manage Your Apple ID</li>
                                <li>Apple Store Account</li>
                                <li>iCloud.com</li>
                            </ul>
                            <br />
                            <h4>Entertainment</h4>
                            <br />
                            <ul>
                                <li>Apple One</li>
                                <li>Apple TV+</li>
                                <li>Apple Music</li>
                                <li>Apple Arcade</li>
                                <li>Apple Podcasts</li>
                                <li>Apple Books</li>
                                <li>App Store</li>
                            </ul>
                        </div>


                        <div>
                            <h4>Apple Store</h4>
                            <br />
                            <ul>

                                <li>Find a Store</li>
                                <li>Genius Bar</li>
                                <li>Today at Apple</li>
                                <li>Group Reservations</li>
                                <li>Apple Camp</li>
                                <li>Apple Trade In</li>
                                <li>Ways to Buy</li>
                                <li>Recycling Programme</li>
                                <li>Order Status</li>
                                <li>Shopping Help</li>
                            </ul>

                        </div>

                        <div>
                            <h4>For Bussiness</h4>
                            <br />
                            <ul>
                                <li>Apple and Bussiness</li>
                                <li>Shop for Bussiness</li>
                            </ul>
                            <br />
                            <h4>For Education</h4>
                            <br />
                            <ul>
                                <li>Apple and Education</li>
                                <li>Shop for Education</li>
                                <li>Shop for University</li>
                            </ul>
                            <br />
                            <h4>For Healthcare</h4>
                            <br />
                            <ul>
                                <li>Apple in Healthcare</li>
                                <li>Health on Apple Watch</li>
                            </ul>


                        </div>

                        <div>
                            <h4>Apple Values</h4>
                            <br />
                            <ul>
                                <li>Accessiblity</li>
                                <li>Education</li>
                                <li>Environment</li>
                                <li>Privacy</li>
                                <li>Supply chain</li>
                            </ul>
                            <br />
                            <h4>About Apple</h4>
                            <br />
                            <ul>
                                <li>Newsroom</li>
                                <li>Apple LeaderShip</li>
                                <li>Career Opportunites</li>
                                <li>Investors</li>
                                <li>Ethics & Compliance</li>
                                <li>Events</li>
                                <li>Contact Apple</li>
                            </ul>
                        </div>
                    </div>

                    <p>More ways to shop: <span>Find an Apple Store</span> or <span>other retailer </span>near you. Or call 000800 040 1966.</p>
                    <br />
                    <hr />
                    <br />
                    <p>Copyright © 2024 Apple Inc. All rights reserved. <span className='lastline'>Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</span> </p>
                </div>
            </div>
        </>
    );
}

export default Footer;