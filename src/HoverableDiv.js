import React from "react";
import ShowHover from "./ShowHover";
// import { render } from "react-dom";
const HoverText = () => {
    return (
      <ShowHover position={top} />
    );
  };
class HoverableDiv extends React.Component{ 
    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.state = {
          isHovering: false,
          position:''
        };
      }
    handleMouseOver() {
        console.log("this.handleMouseOver");
        this.setState(() => ({
          isHovering: true
        }));
        // console.log(isHovering);
      }
    
      handleMouseOut() {
          console.log("this.handleMouseOut");
        this.setState(() => ({
          isHovering: false
        }));
        // console.log(isHovering);
      }

     
    render (){
        const {searchText} = this.props;
      
        
        console.log(`hover on ${searchText}`)
        return (
            <div id="hoverableDiv" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <button id="hoverableDivButton">Life Tip Waiting!!</button>
                {this.state.isHovering && <HoverText  />}
            </div>
            
            
          );
    }  
}


export default HoverableDiv;


const top = {
  width: 320,
  // height: 25,
  // textAlign: "center",
  fontSize: 15,
  marginLeft: 20,
  backgroundColor: '#472A24',
  color: 'white',
  marginTop: 60,
  borderRadius: 10,
  textAlign: "left",
  padding: 20
};
