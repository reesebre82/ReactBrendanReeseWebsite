import React from 'react'
import HeaderTitle from './HeaderTitle'

function SkillsHeader() {

    const SkillsHeaderStyle = {
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }


    return (
        <div style={SkillsHeaderStyle}>
            <HeaderTitle titleText='My Skills' selected='true'></HeaderTitle>
            <HeaderTitle titleText='Education' ></HeaderTitle>
            <HeaderTitle titleText='Experience'></HeaderTitle>
        </div>
    )
}

export default SkillsHeader