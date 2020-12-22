import React from 'react'
import NA_IMG from '../images/north_america.jpg'
import Slider from './Slider'
import NA_1 from '../images/NA_1.jpg'
import NA_2 from '../images/NA_2.jpg'
import NA_3 from '../images/NA_3.jpg'
import NA_4 from '../images/NA_4.jpg'
import NA_5 from '../images/NA_5.jpg'
import vancouver from '../images/vancouver.jpg'
import cancun from '../images/cancun.jpg'
import bahamas from '../images/bahamas.jpg'
import newYork from '../images/newyork.jpg'
import ScrollArrow from './ScrollArrow'

function NorthAmerica() {
    return (
        <div>
            <div className="imageContainerStyle">
                <img src={NA_IMG} className="topImageStyle" alt="" />
                <h1 className="pageTitleStyle">North America</h1>
                <ScrollArrow />
            </div>
            <span id="slider"></span>
            <h2  className="popular_destinations">Popular Destinations</h2>
            <div className="destinations_container">
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={cancun} alt=""/>   
                    </div>
                    <p>Enjoy the Beaches of Cancun, Mexico</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={vancouver} alt=""/>   
                    </div>
                    <p>Explore the Wonderful City of Vancouver, Canada</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={newYork} alt=""/>   
                    </div>
                    <p>Visit Wall Street or Become a Broadway Star in New York City, USA</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={bahamas} alt=""/>   
                    </div>
                    <p>Swim in the Bahamas' Beautiful Blue Water</p>
                </div>
            </div>
            <h3 className="photos_sent">Photos Sent to Us By Travelers Like You!</h3>
            <Slider IMGlist = {[NA_1, NA_2, NA_3, NA_4, NA_5]}/>
            <p className="featured"><i>Send Your Photos to LetsTravel247@gmail.com to Get Featured!</i></p>
        </div>
    )
}

export default NorthAmerica
