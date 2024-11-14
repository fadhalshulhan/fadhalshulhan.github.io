import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ({
    images = [],
    title
}) => {
    return (
        <>
            <Carousel variant="dark">
                {
                    images.map((dt, i) => {
                        return (
                            <Carousel.Item interval={2000} key={'carousel-' + i} onClick={() => {
                                window.open(dt?.publicURL);
                            }}>
                                <img
                                    className="d-block w-100"
                                    src={dt?.publicURL}
                                    alt={'project-' + title + i}
                                    style={{
                                        maxHeight: 400,
                                        objectFit: 'contain'
                                    }}
                                />
                                <Carousel.Caption>
                                    <h3>{dt?.title}</h3>
                                    <p>{dt?.desc}</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                    })
                }
            </Carousel>
            <style jsx>{`
                .carousel-indicators {
                    bottom: -75px; 
                    
                }
                .carousel-indicators button {
                    width: 10px !important;
                    height: 10px !important;
                    border-radius: 50% !important;
                    background-color: #ccc !important;
                    border: none !important;
                    margin: 0 8px;
                    display: flex;         
                    justify-content: center;  
                }

                .carousel-indicators .active {
                    background-color: #28a745 !important;
                    width: 16px !important;
                    height: 16px !important;
                    border-radius: 50% !important;
                    margin: -3px 6px;
                }
            `}</style>
        </>
    );
}

export default MyCarousel;
