import React from 'react'
import Europe_IMG from '../images/europe.jpeg'
import Slider from './Slider'
import europe_1 from '../images/europe_1.jpeg'
import europe_2 from '../images/europe_2.jpeg'
import europe_3 from '../images/europe_3.jpeg'
import europe_4 from '../images/europe_4.jpeg'
import europe_5 from '../images/europe_5.jpeg'
import lisbon from '../images/lisbon.jpg'
import rome from '../images/rome.jpg'
import mikonos from '../images/mikonos.jpg'
import amsterdam from '../images/amsterdam.jpg'
import ScrollArrow from './ScrollArrow'

function Europe() {
    return (
        <div>
            <div className="imageContainerStyle">
                <img src={Europe_IMG} className="topImageStyle" alt="" />
                <h1 className="pageTitleStyle">Europe</h1>
                <ScrollArrow />
            </div>
            <span id="slider"></span>
            <h2  className="popular_destinations">Popular Destinations</h2>
            <div className="destinations_container">
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={rome} alt=""/>   
                    </div>
                    <p>Prove You're a Gladiator at the Colliseum in Rome, Italy</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={amsterdam} alt=""/>   
                    </div>
                    <p>Ride a Bike Through the Wonderful City of Amsterdam, Holland</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={mikonos} alt=""/>   
                    </div>
                    <p>Experience the Beauty of Mykonos, Greece</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={lisbon} alt=""/>   
                    </div>
                    <p>Relax in the Sunshine of Lisbon, Portugal</p>
                </div>
            </div>
            <h3 className="photos_sent">Photos Sent to Us By Travelers Like You!</h3>
            <Slider IMGlist = {[europe_1, europe_2, europe_3, europe_4, europe_5]}/>
            <p className="featured"><i>Send Your Photos to LetsTravel247@gmail.com to Get Featured!</i></p>
        </div>
    )
}

export default Europe
