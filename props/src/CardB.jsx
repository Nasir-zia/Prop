import React from "react";

class CardB extends React.Component {
  
  constructor(Name, Age,heading) {
    super(); 
    this.heading = "OOP Classes";
    this.Name = "Nasir";
    this.Age = 23;
  }



  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1 style={{color:"red"}}>{this.heading}</h1>
        <h1>Name: {this.Name}</h1>
        <h1>Age: {this.Age}</h1>
      </div>
    );
  }
}



export default CardB;
