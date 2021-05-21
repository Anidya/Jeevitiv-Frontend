import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ImgSlider() {

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="./banner/banner.png" />
            </Wrap>
            <Wrap>
                <img src="./banner/banner2.png" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
margin-top:20px;`

const Wrap = styled.div`
img {
    width:100%;
    height:100%;
}`