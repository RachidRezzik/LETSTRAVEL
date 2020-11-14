import React from 'react'
import scrollArrow from '../images/arrowDown.png'


function ScrollArrow() {
    const handleScrollArrow = () => {
        window.scroll({
            top: window.innerHeight, 
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div className="slow_scroll_arrow" onClick={handleScrollArrow}><img src={scrollArrow} alt=""/></div>
        </div>
    )
}

export default ScrollArrow
