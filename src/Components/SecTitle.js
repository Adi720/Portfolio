import React from 'react'
import styled from 'styled-components'

const SecTitle = ({ icon, title }) => {
    return (
        <SecTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SecTitleStyled>
    )
}

const SecTitleStyled = styled.section`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 1.8rem;
    }
`;

export default SecTitle
