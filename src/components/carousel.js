import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ({
    images = [],
    title
}) => {
    return (
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
    );
}

export default MyCarousel;