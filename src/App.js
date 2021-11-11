import React from "react";
import HoverableDiv from "./HoverableDiv";


class App extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      searchText : '',
      isNull : false,
    };
  }

  handleSearch = () => {
    this.setState({
          searchText: this.menu.value,
          isNull : true,
    })
  };

  render() {
    
    console.log(this.state)
    return (
      
      <div className="App">
              <HoverableDiv/>
      </div>
      
    );
  }
}
  

export default App;


