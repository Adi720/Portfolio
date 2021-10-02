import styled from 'styled-components';
import React from 'react'
import Email from '@material-ui/icons/Email';
import { LinkedIn } from '@material-ui/icons';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Type from "../Components/Type";
import Particle from "../Components/Particle"

const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="p-particle-js">
                <Particle />
            </div>
            <div className="typography">
                {/* <h1>Hi, There! <span>Aditya More</span></h1> */}
                <h1>Hey, there! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> <br /> <span>I'm ADITYA MORE</span></h1>
                <br />
                <p>
                    <Type />
                </p>
                <div className="icons">
                    <a href="mailto:adityamore360123@gmail.com" className="icon i-mail">
                        <Email />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-more-a76b251b0/" className="icon i-linkedin">
                        <LinkedIn />
                    </a>
                    <a href="https://github.com/Adi720" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.instagram.com/adityamore_722/" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .wave{
        animation-name: wave-animation;
        animation-duration: 2.1s; 
        animation-iteration-count: infinite; 
        transform-origin: 70% 70%; 
        display: inline-block;
    }

    @keyframes wave-animation {
    0% {
        transform: rotate(0deg);
    }
    10% {
        transform: rotate(14deg);
    } 
    20% {
        transform: rotate(-8deg);
    }
    30% {
        transform: rotate(14deg);
    }
    40% {
        transform: rotate(-4deg);
    }
    50% {
        transform: rotate(10deg);
    }
    60% {
        transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
        transform: rotate(0deg);
    }
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-mail{
                &:hover{
                    color: #04669A;
                }
            }
            .i-linkedin{
                &:hover{
                    color: #04669A;
                }
            }
            .i-instagram{
                &:hover{
                    ${'' /* border: 2px solid red; */}
                    color: #2C6A93;
                }
            }
            .i-github{
                &:hover{
                    color: #04669A;
                }
            }
        }
    }
    @media screen and (max-width:670px){
        .typography{
            h1{
            font-size: 2rem;
            }
            span{
            font-size: 1.8rem;
            }     
        }
    }

`;

export default HomePage
