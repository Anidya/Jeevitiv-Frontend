import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider.js'
import Footer from './Footer'


function Home() {
    return (
        <Container>
            <ImgSlider />
            <Footer />
        </Container>


    )
}

export default Home


const Container = styled.main`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
// background:blue;
`