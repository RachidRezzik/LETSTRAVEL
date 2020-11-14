import React, {useEffect} from 'react'
import {
    Link
} from 'react-router-dom'

export default function Footer() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <div className="footer">
                <h3>Join the <span style={{color: "greenyellow"}}>LETS</span>TRAVEL Newsletter to Find Out About New Travel Spots!</h3>
                <p>You Can Unsubscribe Anytime</p>
                <div className="newsletter">
                    <input type="email" placeholder="Enter your email" />
                    <input type="submit" id="email_submit" value="Submit" />
                </div>
                <div className="footer_nav">
                    <Link to="/" onClick={handleScrollTop}>Home</Link>
                    <Link to="/Africa" onClick={handleScrollTop}>Africa</Link>
                    <Link to="/Asia" onClick={handleScrollTop}>Asia</Link>
                    <Link to="/NorthAmerica" onClick={handleScrollTop}>NA</Link>
                    <Link to="/SouthAmerica" onClick={handleScrollTop}>SA</Link>
                    <Link to="/Europe" onClick={handleScrollTop}>Europe</Link>
                </div>
            </div>
        </div>
    )
}
