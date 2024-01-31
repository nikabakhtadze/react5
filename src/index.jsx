import React from 'react';
import ReactDOM from 'react-dom/client';
class Nika extends React.Component{
  constructor() {
    super ()
    this.state={
      name:""
    }
  }
  setName(){
    this.setState( { name: "nika" }, function(){
      window.alert(this.state.name)
    });
  }
  render() {
    
     return (
       <React.Fragment>
        {
          < button typr="button" onClick={ () => this.setName()}>დააკლიკეთ</button>
        }
       </React.Fragment>
    );
  }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Nika></Nika>);