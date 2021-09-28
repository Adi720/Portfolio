import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import SecTitle from './SecTitle'
import Title from './Title'
import { BusinessCenter } from '@material-ui/icons'
import { School } from '@material-ui/icons'
import ResumeItem from './ResumeItem'

const Resume = () => {
    const briefcase = <BusinessCenter />;
    const education = <School />;
    return (
        <ResumeStyled>
            <Title title={'Resume'} />
            <InnerLayout>
                <div className="sec-title">
                    <SecTitle icon={briefcase} title={"Professional Experience"} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={"July'2021 - Present"}
                        title={'ACM IOIT Webmaster'}
                        subtitle={'ACM'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae autem, nam quaerat asperiores quasi nulla pariatur vero omnis, exercitationem cumque! Amet voluptatem nisi repudiandae, sint natus assumenda voluptas nemo.'}
                    />
                    <ResumeItem
                        year={"Aug'2021 - Present"}
                        title={'Training & Placement Co-ordinator'}
                        subtitle={'AISSMS IOIT'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae autem, nam quaerat asperiores quasi nulla pariatur vero omnis, exercitationem cumque! Amet voluptatem nisi repudiandae, sint natus assumenda voluptas nemo.'}
                    />
                    <ResumeItem
                        year={"July'2020 - July'2021"}
                        title={'ACM Web Team Member'}
                        subtitle={'ACM'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae autem, nam quaerat asperiores quasi nulla pariatur vero omnis, exercitationem cumque! Amet voluptatem nisi repudiandae, sint natus assumenda voluptas nemo.'}
                    />
                </div>
                <div className="sec-title u-sec-title-margin">
                    <SecTitle icon={education} title={"Education"} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2019 - 2023'}
                        title={'AISSMS Institue Of Information Technology'}
                        subtitle={'Pune University'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae autem, nam quaerat asperiores quasi nulla pariatur vero omnis, exercitationem cumque! Amet voluptatem nisi repudiandae, sint natus assumenda voluptas nemo.'}

                    />
                    {/* <ResumeItem
                        year={'2015 - 2020'}
                        title={'Computer Science'}
                        subtitle={'Pune University'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae autem, nam quaerat asperiores quasi nulla pariatur vero omnis, exercitationem cumque! Amet voluptatem nisi repudiandae, sint natus assumenda voluptas nemo.'}
                    />
                    <div className="u-margin-bottom">
                        <ResumeItem
                            year={'2015 - 2020'}
                            title={'Computer Science'}
                            subtitle={'Pune University'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae autem, nam quaerat asperiores quasi nulla pariatur vero omnis, exercitationem cumque! Amet voluptatem nisi repudiandae, sint natus assumenda voluptas nemo.'}
                        />
                    </div> */}
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .sec-title{
        padding-bottom: 3rem;
    }

    .u-sec-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume
