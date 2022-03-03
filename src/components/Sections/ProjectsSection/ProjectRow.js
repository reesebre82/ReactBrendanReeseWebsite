import { render } from "@testing-library/react";
import React, { Component } from "react";
import FirstBox from "./FirstBox";
import ProjectBox from "./ProjectBox";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";

class ProjectRow extends Component {

    constructor(props){
        super(props);

        this.state = {
            row: props.row,
            leftColor: props.leftColor,
            rightColor: props.rightColor,
            leftTitle: props.leftTitle,
            rightTitle: props.rightTitle,
            leftDescription: props.leftDescription,
            rightDescription: props.rightDescription,
            leftFlex: props.flexLeft ? 1 : 3,
            rightFlex: props.flexLeft ? 3 : 1,
            defaultFlex: props.flexLeft,
        };
    }
    
    styles = {
        height: '50%',
        width: '100%',
        display: 'flex',
    }

    flipFlex = (value) => {
        if(this.state.defaultFlex)
        {
            if(value === '0'){
                this.setState({
                    leftFlex: 3,
                    rightFlex: 1,
                });
            } else {
                this.setState({
                    leftFlex: 1,
                    rightFlex: 3,
                });
            } 
        }
        else{
            if(value === '1'){
                this.setState({
                    leftFlex: 1,
                    rightFlex: 3,
                });
            } else {
                this.setState({
                    leftFlex: 3,
                    rightFlex: 1,
                });
            } 
        }
    }

    render() {

        switch(this.state.row){
            case '0':
                return (
                    <div style={this.styles}>
                        <FirstBox 
                            bgColor={this.state.leftColor}
                            defaultFlex={this.state.leftFlex}
                            sendData={this.flipFlex}
                            value='0'
                            title={this.state.leftTitle}
                            description={this.state.leftDescription}></FirstBox>
                        <SecondBox 
                            bgColor={this.state.rightColor}
                            defaultFlex={this.state.rightFlex}
                            sendData={this.flipFlex}
                            value='1'
                            title={this.state.rightTitle}
                            description={this.state.rightDescription}></SecondBox>
                    </div>
                );
            case '1':
                return (
                    <div style={this.styles}>
                        <ThirdBox 
                            bgColor={this.state.leftColor}
                            defaultFlex={this.state.leftFlex}
                            sendData={this.flipFlex}
                            value='0' 
                            title={this.state.leftTitle}
                            description={this.state.leftDescription}></ThirdBox>
                        <ProjectBox 
                            bgColor={this.state.rightColor}
                            defaultFlex={this.state.rightFlex}
                            sendData={this.flipFlex}
                            value='1'
                            title={this.state.rightTitle}
                            description={this.state.rightDescription}></ProjectBox>
                    </div>
                );
            default:
                return (
                    <div style={this.styles}>
                        <ProjectBox 
                            bgColor={this.state.leftColor}
                            defaultFlex={this.state.leftFlex}
                            sendData={this.flipFlex}
                            value='0'></ProjectBox>
                        <ProjectBox 
                            bgColor={this.state.rightColor}
                            defaultFlex={this.state.rightFlex}
                            sendData={this.flipFlex}
                            value='1'
                            title={this.state.rightTitle}
                            description={this.state.rightDescription}></ProjectBox>
                    </div>
                );
                break;
        }
    }
  }
  
export default ProjectRow