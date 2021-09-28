import React, { useState } from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import projects from '../Data/projects'
import Menu from '../Components/Menu'
const ProjectsPage = () => {
    const [menuItems, setMenuItems] = useState(projects);
    return (
        <ProjectsPageStyled>
            <MainLayout>
                <Title title="Projects" />
                <InnerLayout>
                    <Menu menuItems={menuItems} />

                </InnerLayout>
            </MainLayout>
        </ProjectsPageStyled>
    )
}

const ProjectsPageStyled = styled.div`


`;

export default ProjectsPage
