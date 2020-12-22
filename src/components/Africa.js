import React, {useEffect} from 'react'
import Africa_IMG from '../images/africa.jpg'
import Slider from './Slider'
import africa_1 from '../images/Africa_1.jpg'
import africa_2 from '../images/Africa_2.jpg'
import africa_3 from '../images/Africa_3.jpg'
import africa_4 from '../images/Africa_4.jpg'
import africa_5 from '../images/Africa_5.jpg'
import marrakech from '../images/marrakech.jpg'
import capetown from '../images/capetown.jpg'
import kilimanjaro from '../images/kilimanjaro.jpg'
import pyramids from '../images/pyramids.jpg'

import ScrollArrow from './ScrollArrow'

function Africa() {
    return (
        <div>
            <div className="imageContainerStyle">
                <img src={Africa_IMG} className="topImageStyle" alt="" />
                <h1 className="pageTitleStyle">Africa</h1>
                <ScrollArrow />
            </div>
            <span id="slider"></span>
            <h2  className="popular_destinations">Popular Destinations</h2>
            <div className="destinations_container">
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={kilimanjaro} alt=""/>
                    </div>
                    <p>Climb to New Heights at Mount Kilimanjaro, Kenya</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={capetown} alt=""/>
                    </div>
                    <p>Catch Some Sun in Capetown, South Africa</p>

                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={marrakech} alt=""/>   
                    </div>
                    <p>Explore Morroco's Many Beauties and Bizarres</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={pyramids} alt=""/>
                    </div>
                    <p>Gasp at the Size of the Pyramids in Egypt</p>
                </div>
            </div>
            <h3 className="photos_sent">Photos Sent to Us By Travelers Like You!</h3>
            <Slider IMGlist = {[africa_1, africa_2, africa_3, africa_4, africa_5]}/>
            <p className="featured"><i>Send Your Photos to LetsTravel247@gmail.com to Get Featured!</i></p>
        </div>
    )
}


export default Africa
