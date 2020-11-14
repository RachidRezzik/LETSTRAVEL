import React, {useState} from 'react'
import Iceland from '../images/iceland.jpeg'
import africa from '../images/africa.png'
import asia from '../images/asia.png'
import  NA from '../images/NA.png'
import  SA from '../images/SA.png'
import europe from '../images/europe.png'
import ScrollArrow from './ScrollArrow'
import HomeModal from './HomeModal'


function Home() {
    const [modal, setModal] = useState(false)
    const [modal_continent, setModalContinent] = useState("")

    const handleModalOpen = (continent) => {
        setModal(true)
        setModalContinent(continent)
    }

    const handleModalClose2 = () => {
        setModal(false)
    }

    return (
        <div>
            <div className="imageContainerStyle">
                <img src={Iceland} className="topImageStyle" alt="" />
                <h1 className="pageTitleStyle">The World is Awaiting</h1>
                <ScrollArrow />
            </div>
            <span id="slider"></span>
            <h2 style={{textAlign: "center", margin:"20px auto"}}>Where Will You Travel Next?</h2>
            <p style={{textAlign: "center", margin:"20px auto"}}>Gain Some Inspiration Below!</p>
            <div className="continents_container" >
                <div className="continent">
                    <h2>Africa</h2>
                    <img src={africa} alt="" />
                    <button onClick={() => handleModalOpen("africa")}>Preview Africa!</button>
                </div>
                <div className="continent">
                    <h2>Asia</h2>
                    <img src={asia} alt="" />
                    <button onClick={() => handleModalOpen("asia")}>Preview Asia!</button>
                </div>
                <div className="continent">
                    <h2>North America</h2>
                    <img src={NA} alt="" />
                    <button onClick={() => handleModalOpen("NA")}>Preview North America!</button>
                </div>
                <div className="continent">
                    <h2>South America</h2>
                    <img src={SA} alt="" />
                    <button onClick={() => handleModalOpen("SA")}>Preview South America!</button>
                </div>
                <div className="continent">
                    <h2>Europe</h2>
                    <img src={europe} alt="" />
                    <button onClick={() => handleModalOpen("europe")}>Preview Europe!</button>
                </div>
            </div>
            {/* MODAL */}
            <HomeModal 
                modal={modal}
                modal_continent={modal_continent} 
                modal_close = {handleModalClose2}   
            />
        </div>
    )
}


export default Home
