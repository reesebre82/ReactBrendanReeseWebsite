import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";

const ProjectBox = (props) => {

    const ProjectBoxStyle = {
        flexGrow: props.defaultFlex,
        backgroundColor: props.bgColor,
        borderRadius: '15px',
        flexBasis: '100px',
        margin: '10px',
        transition: 'all 0.25s'
    }

    const DescriptionStyle = {
        color: "white",
        position: 'relative',
        left: 'calc(5% + 1px)',
        top: '5%',
    }
    
    const TitleStyle = {
        color: 'white',
        position: 'relative',
        left: '5%',
        top: '0px',
    }
    
    const ProjectButtonStyle = {
        position: 'absolute',
        right: '30px',
        bottom: '30px',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        border: '3px solid white',
        cursor: 'pointer',
    }

    function MouseOver(event) {
        props.sendData(props.value);
    }

    function MouseOut(event) {
       props.sendData('-1');
    }

    return (
      <div style={ProjectBoxStyle}
            onMouseOver={MouseOver} 
            onMouseOut={MouseOut}>
            <p style={DescriptionStyle}>{props.description}</p>
            <h1 style={TitleStyle}>{props.title}</h1>
            <motion.div
                style={ProjectButtonStyle}
                whileHover={{ scale: 1.1, rotate: -45.0 }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowForwardIcon sx={{ color: "white" , fontSize: "50px"}}></ArrowForwardIcon>
            </motion.div>
      </div>
    )
  }
  
export default ProjectBox