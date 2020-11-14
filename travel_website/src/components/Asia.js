import React from 'react'
import Asia_IMG from '../images/asia.jpg'
import Slider from './Slider'
import asia_1 from '../images/asia_1.jpeg'
import asia_2 from '../images/asia_2.jpeg'
import asia_3 from '../images/asia_3.jpeg'
import asia_4 from '../images/asia_4.jpeg'
import asia_5 from '../images/asia_5.jpeg'
import greatwall from '../images/greatwall.jpg'
import tajmahal from '../images/tajmahal.jpg'
import tokyo from '../images/tokyo.jpg'
import dubai from '../images/dubai.jpg'
import ScrollArrow from './ScrollArrow'

function Asia() {
    return (
        <div>
            <div className="imageContainerStyle">
                <img src={Asia_IMG} className="topImageStyle" alt="" />
                <h1 className="pageTitleStyle">Asia</h1>
                <ScrollArrow />
            </div>
            <span id="slider"></span>
            <h2  className="popular_destinations">Popular Destinations</h2>
            <div className="destinations_container">
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={greatwall} alt=""/>   
                    </div>
                    <p>Walk the Entire Length of China's Great Wall</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={tokyo} alt=""/>   
                    </div>
                    <p>Get to Know the Great People of Tokyo, Japan</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={dubai} alt=""/>   
                    </div>
                    <p>Experience Luxury Like You've Never Seen Before in Dubai, UAE</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={tajmahal} alt=""/>   
                    </div>
                    <p>Visit India's Taj Mahal</p>
                </div>
            </div>
            <h3 className="photos_sent">Photos Sent to Us By Travelers Like You!</h3>
            <Slider IMGlist = {[asia_1, asia_2, asia_3, asia_4, asia_5]}/>
            <p className="featured"><i>Send Your Photos to LetsTravel247@gmail.com to Get Featured!</i></p>
        </div>
    )
}

export default Asia
