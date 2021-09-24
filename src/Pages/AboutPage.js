import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/Layout'


const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`

export default AboutPage
