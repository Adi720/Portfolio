import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from './Title'
import ProgressBar from './ProgressBar'
const Skills = () => {
    return (
        <SkillsStyled>
            <MainLayout>
                <Title title={"My Skills"} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'CSS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar
                            title={'JAVASCRIPT'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar
                            title={'C++'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'REACT JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar
                            title={'NODE JS'}
                            width={'65%'}
                            text={'65%'}
                        />

                    </div>
                </InnerLayout>
            </MainLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default Skills
