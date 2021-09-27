import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import ServiceCard from './ServiceCard'
import Title from './Title'
import design from '../assets/images/design.svg';
import intelligence from '../assets/images/intelligence.svg';
import gamedev from '../assets/images/game-dev.svg';
const ServiceSection = () => {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={'Services'} />
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'Web Design'}
                        paragraph={'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante orci purus ut lorem.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={intelligence}
                            title={'Lorem Ipsum'}
                            paragraph={'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante orci purus ut lorem.'}
                        />
                    </div>
                    <ServiceCard
                        image={gamedev}
                        title={'Lorem Ipsum'}
                        paragraph={'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante orci purus ut lorem.'}
                    />
                </div>
            </ServiceSectionStyled>
        </InnerLayout>
    )
}

const ServiceSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        .mid-card{
            margin: 0 1rem;
        }
    }
`

export default ServiceSection
