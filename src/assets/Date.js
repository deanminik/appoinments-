import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export const Date = () => {

    const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./date.json')
      })
    }, [])

    return (
        
   
        <div className="container" ref={container}></div>
     
    );
}
