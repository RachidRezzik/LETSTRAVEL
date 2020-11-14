import React from 'react'
import {
    Link
} from 'react-router-dom'
import x_mark from '../images/x_mark.png'
import africa_preview from '../images/africa_preview.jpg'
import asia_preview from '../images/asia_preview.jpg'
import NA_preview from '../images/NA_preview.jpg'
import SA_preview from '../images/SA_preview.jpg'
import europe_preview from '../images/europe_preview.jpg'


function HomeModal(props) {
    const open = props.modal    
    const continent = props.modal_continent
    const handleModalClose = () => {
        props.modal_close()
    }

    const handleScrollTop = () => {
        window.scroll({
            top: 0 
        });
    }

    let continent_div
    let see_more = <button id="see_more" onClick={handleModalClose}>See More!</button>
    
    if (continent === "africa"){
        continent_div = 
        <div className="continent_preview">
            <h2>Visit Africa!</h2>
            <img src={africa_preview} alt="" />
            <p>Africa is home to many wonders. Visit the pyramids, go on a safari, or visit Mount Kilimanjaro!</p>
            <Link to="/Africa" onClick={handleScrollTop}>{see_more}</Link>
        </div>
    } else if (continent === "asia"){
        continent_div = 
        <div className="continent_preview">
            <h2>Visit Asia!</h2>
            <img src={asia_preview} alt="" />
            <p>Asia is a vast land with many different cultures and experiences to enjoy! </p>
            <Link to="/Asia" onClick={handleScrollTop}>{see_more}</Link>
        </div>
    } else if (continent === "NA"){
        continent_div = 
        <div className="continent_preview">
            <h2>Visit North America!</h2>
            <img src={NA_preview} alt="" />
            <p>North America contains exotic beaches, mountain ranges for hiking fans, and some great cities.</p>
            <Link to="/NorthAmerica" onClick={handleScrollTop}>{see_more}</Link>
        </div>
    } else if (continent === "SA"){
        continent_div = 
        <div className="continent_preview">
            <h2>Visit South America!</h2>
            <img src={SA_preview} alt="" />
            <p>Fans of nature and vibrant culture will love South Americas beauty and people.</p>
            <Link to="/SouthAmerica" onClick={handleScrollTop}>{see_more}</Link>
        </div>
    } else{
        continent_div = 
        <div className="continent_preview">
            <h2>Visit Europe!</h2>
            <img src={europe_preview} alt="" />
            <p>Europe has many of the world's most popular attractions and could very well be your next destination!</p>
            <Link to="/Europe" onClick={handleScrollTop}>{see_more}</Link>
        </div>
    }
    return (
        <div>
            <div className={open ? "home_modal active" : "home_modal"}>
                    {continent_div}
                    <img className={open ? "exit_modal active" : "exit_modal"} src={x_mark} onClick={handleModalClose}
                    alt=""/>
            </div>
        </div>
    )
}


export default HomeModal