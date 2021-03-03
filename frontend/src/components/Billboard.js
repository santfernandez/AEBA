import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import BillboardImage from '../images/header-aeba.png'
import { gsap } from 'gsap'

const Billboard = () => {
    const billboardText = React.createRef();
    const billboardImage = React.createRef();
    const billboardSpan = React.createRef();

    useEffect(() => {
        gsap.to(billboardImage.current, {opacity: '1', duration: 3})
        gsap.to(billboardSpan.current, {opacity: '1', duration: 6})
        gsap.to(billboardText.current, {color: '#000', duration: 6})
    }, [billboardImage,billboardText])

    return (
        <div>
            <div className="billboard-container">
                <div className="billboard-row-a">
                    <div ref={billboardImage} className="billboard-image">
                        <Image src={BillboardImage} className='billboard-img'/>
                    </div>
                </div>
                <div className="billboard-row-b">
                    <div className="billboard-empty-div"></div>

                    <div className="billboard-text">
                    <div ref={billboardSpan} className="billboard-span"> </div>
                        <h2 ref={billboardText} className="billboard-text-1">
                            DEFENDÉ TUS DERECHOS<br/>MEJOREMOS LA EDUCACIÓN<br/>PENSANDO EN LOS ESTUDIANTES
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard
