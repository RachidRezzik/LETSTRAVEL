import React from 'react'
import SA_IMG from '../images/brazil.jpg'
import Slider from './Slider'
import SA_1 from '../images/SA_1.jpg'
import SA_2 from '../images/SA_2.jpg'
import SA_3 from '../images/SA_3.jpg'
import SA_4 from '../images/SA_4.jpg'
import SA_5 from '../images/SA_5.jpg'
import torres from '../images/torres.jpg'
import patagonia from '../images/patagonia.jpg'
import pichu from '../images/pichu.jpg'
import rio from '../images/rio.jpg'
import ScrollArrow from './ScrollArrow'

function SouthAmerica() {
    return (
        <div>
            <div className="imageContainerStyle">
                <img src={SA_IMG} className="topImageStyle" alt="" />
                <h1 className="pageTitleStyle">South America</h1>
                <ScrollArrow />
            </div>
            <span id="slider"></span>
            <h2  className="popular_destinations">Popular Destinations</h2>
            <div className="destinations_container">
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={rio} alt=""/>   
                    </div>
                    <p>Dance in the Streets of Rio de Janeiro, Brazil</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={patagonia} alt=""/>   
                    </div>
                    <p>View the Wonders of Patagonia, Argentina</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={torres} alt=""/>   
                    </div>
                    <p>Explore the Beaufiful Nature of Torres del Paine, Chile</p>
                </div>
                <div className="destination">
                    <div className="dest_img_container">
                        <img src={pichu} alt=""/>   
                    </div>
                    <p>Breathe the Fresh Air of Machu Pichu, Peru</p>
                </div>
            </div>
            <h3 className="photos_sent">Photos Sent to Us By Travelers Like You!</h3>
            <Slider IMGlist = {[SA_1, SA_2, SA_3, SA_4, SA_5]}/>
            <p className="featured"><i>Send Your Photos to LetsTravel247@gmail.com to Get Featured!</i></p>
        </div>
    )
}

export default SouthAmerica
