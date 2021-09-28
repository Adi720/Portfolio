import React, { useState } from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
import projects from '../Data/projects'
import Menu from '../Components/Menu'
import Button from '../Components/Button'

// Using Sets to avoid repeating categories
const allButtons = ['All', ...new Set(projects.map(item => item.category))]

const ProjectsPage = () => {
    const [menuItems, setMenuItems] = useState(projects);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItems(projects);
            return
        }
        const filteredData = projects.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <ProjectsPageStyled>
            <MainLayout>
                <Title title="Projects" />
                <InnerLayout>
                    <Button filter={filter} button={button} />
                    <Menu menuItems={menuItems} />

                </InnerLayout>
            </MainLayout>
        </ProjectsPageStyled>
    )
}

const ProjectsPageStyled = styled.div`


`;

export default ProjectsPage
