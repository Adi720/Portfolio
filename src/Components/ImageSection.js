import React from 'react'
import styled from 'styled-components';
import resume from '../../src/assets/images/Adi.jpg'
import PrimaryButton from './PrimaryButton';

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Aditya More</span></h4>
                </div>
                <p className="paragraphy">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt consectetur iste dolorum
                    optio aspernatur, harum ipsum officiis minima odio earum accusamus laudantium quia ipsa, rem, atque dolores iusto in.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Aditya More</p>
                        <p>: 18</p>
                        <p>: Indian</p>
                        <p>: English, Hindi, Marathi</p>
                        <p>: India, Maharashtra</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;

        img{
            width: 95%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection
