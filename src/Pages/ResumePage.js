import React from 'react'
import Skills from '../Components/Skills'
import Resume from '../Components/Resume'
import { MainLayout } from '../Styles/Layout'
const ResumePage = () => {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
