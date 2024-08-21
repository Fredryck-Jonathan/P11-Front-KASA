import React, { useState } from "react"

const Carousel = (props) => {
    const data = props.pictures
    const [currentIndex, setCurrentIndex] = useState(0)
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = data.length - 1;
        } else if (newIndex >= data.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex)
    }
    return (
        <div className="carousel-container">
            <img className="carousel-item" key={data[currentIndex]} alt='representation habitat' src={data[currentIndex]}></img>
            {data.length > 1 &&
                <>
                    <div className="indicators">
                        <span onClick={() => {
                            updateIndex(currentIndex - 1);
                        }} className="chevrons_carousel chevron_back">
                            <ion-icon name="chevron-back"></ion-icon>
                        </span>
                        <span onClick={() => {
                            updateIndex(currentIndex + 1);
                        }} className="chevrons_carousel chevron_forward">
                            <ion-icon name="chevron-forward"></ion-icon>
                    </span>
                    
                    <div className="number_carousel">
                        <span>{currentIndex + 1}/ {data.length}</span>
                    </div>
                    </div>
                
                </>
            }
        </div>
    )
}
export default Carousel;