import React from 'react'
import Skills from '../Components/Skills'
import { InnerLayout } from '../Styles/Layout'
import Title from '../Components/Title'
const ResumePage = () => {
    return (
        <div>
            <Skills />
            <Title title={'Resume'} />
            <InnerLayout>

            </InnerLayout>
        </div>
    )
}

export default ResumePage
