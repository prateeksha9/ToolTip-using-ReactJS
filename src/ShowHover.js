import React from "react";

class ShowHover extends React.Component{ 

    render (){
        const {position} = this.props;
        // const {searchText} = this.props;
        console.log(position)
        return (
            <div style={this.props.position} >
                <p>
                " You need to integrate various components to add a beautiful feature to your project. " 
                - says <strike> ReactJs</strike> oops! <strong>Life</strong> 
                </p>
            </div>
            
            
          );
    }  
}

// {height: 40,
//     width: 150,
//     borderRadius: 4,
//     background :'black',
//     color: 'white',
//     position:`${position}`
// }

export default ShowHover;