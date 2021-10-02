import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <TypewriterStyled>
            <Typewriter
                options={{
                    strings: [
                        "Developer",
                        "Machine Learning Enthusiast",
                        "MERN Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,

                }}
            />
        </TypewriterStyled>
    );
}

const TypewriterStyled = styled.div`
    font-size: 1rem;
    color: orange;
`;

export default Type;