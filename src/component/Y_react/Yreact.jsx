import React from 'react'
import "./Yreact.css";
import Landcomp from './Landcomp';
function Yreact() {
    let landarr = [ "https://treact.owaiskhan.me/static/media/RestaurantLandingPage.e0dec44b.jpeg"  , 'https://treact.owaiskhan.me/static/media/HotelTravelLandingPage.7cba2215.jpeg','https://treact.owaiskhan.me/static/media/SaaSProductLandingPage.557f15c1.jpeg','https://treact.owaiskhan.me/static/media/ServiceLandingPage.b2005010.jpeg','https://treact.owaiskhan.me/static/media/EventLandingPage.875a4181.jpeg','https://treact.owaiskhan.me/static/media/AgencyLandingPage.717f8ed6.jpeg'];
    return (
        <div>
        <navbar className="navbar">
            <div className="company">
                <i className="companylogo fab fa-y-combinator"> </i>
                <span className="companyname">
                    Yreact
                </span>
            </div>
            <div className="navbaritem">
                <li className="navitem"> <a  className="navitemlink"href="https://treact.owaiskhan.me/" alt='blank_'>  Home </a> </li>
                <li className="navitem"> <a  className="navitemlink"href="#"> Who Am I ?  </a> </li>
                <li className="navitem"> <a  className="navitemlink"href="#">  Linkedin </a> </li>
                <li className="navitem"> <a  className="navitemlink"href="#">   Hire Me! </a></li>
            </div>
        </navbar>
        <header className="header">
            <div className="headingblock">
                <h1 className="heading">
                Yogesh Modern React Templates for every need.
                </h1>
                <p className="headingpara">
                Easily customizable modern React UI Templates and Components built using HTML and CSS which 
                are also lightweight and simple to setup. All components are modular and fully responsive for 
                great mobile experience as well as big desktop screens. Brand Colors are also fully customizable. 
                Free for personal as well as commercial use.
                <ul className="aboutcontent">
                    <li className="contentitem"><i class="fas fa-check"></i> 7 Landing Page Demos</li>
                    <li className="contentitem"><i class="fas fa-check"></i> 8 Inner Pages </li>
                    <li className="contentitem"><i class="fas fa-check"></i> 52 Components </li>
                    <li className="contentitem"><i class="fas fa-check"></i>  Fully Responsive</li>
                    <li className="contentitem"><i class="fas fa-check"></i>  Fully Customizable</li>
                    <li className="contentitem"><i class="fas fa-check"></i>  Used React  </li>
                </ul>
                <div className="headingbuttons">
                    <button className='headbutton1'>Explore Demos</button>
                    <button className='headbutton2'>View Components</button>
                </div>
                </p>
            </div>
            <figure className='headerimg'>
                <img  className="headimg" src="https://treact.owaiskhan.me/static/media/MainLandingPageHero.30b38078.png" alt="#"  />
            </figure>
        </header>
        <section className='landingpage'>
            <header className="landinghead">
                <h1 className="landheading">Landing Pages</h1>
                <p className="landpara">
                We have 7 premade landing pages. Click on the "View Live Demo" button to see them in action. Customizing or Creating
                your own custom landing page is really simple by using our UI components.
                </p>
            </header>
            <article className='landcomponents'>
                <Landcomp landarr={landarr}/>
            </article>
        </section>
        </div>
    )
}

export default Yreact
