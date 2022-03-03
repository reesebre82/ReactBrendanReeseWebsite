import React from "react";
import SkillsHeader from "./SkillsHeader";

const SkillsContainer = (props) => {

    const SkillsContainerStyle = {
        width: '70vw',
        height: '75vh',
        position: 'relative',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'lightGray',
    }

    return (
      <div style={SkillsContainerStyle}>
          <SkillsHeader></SkillsHeader>
      </div>
    )
  }
  
export default SkillsContainer