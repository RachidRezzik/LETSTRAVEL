import React, {useState} from 'react'

function Slider(props) {
    let sliderArray = props.IMGlist
    const [X, setX] = useState(0)
    const goLeft = () =>{
        if (X === 0){
            setX(-(100 * (sliderArray.length - 1)))
        } else{
            setX(X+100)
        }
    }

    const goRight = () =>{
        if (X === -(100 * (sliderArray.length - 1))){
            setX(0)
        } else{
            setX(X-100)
        }
    }

    return (
        <div style={{ display:"flex", alignItems:"center"}} >
            <div className="slider">
                <div className="slide_container">
                    {
                        sliderArray.map((item, index) => {
                            return(
                                <div key={index}className="slide" style={{transform:`translateX(${X}%`}}>
                                    <img src={item} style={styleSliderImg} alt="slider_image" className="slider_img" />
                                </div>
                            ) 
                        })    
                    }
                </div>
                <button id="goLeft" onClick={goLeft}>➤</button>
                <button id="goRight" onClick={goRight}>➤</button>
            </div>
        </div>
    )
}

const styleSliderImg = {
    width: "100%",
    height: "100%"
}

export default Slider