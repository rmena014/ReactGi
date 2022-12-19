import React from "react";
import BasicInfo from "./components/BasicInfo";

class App extends React.Component {
  //EASY: CREATE CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Richard Mena",
          number: "646-923-6211",
          dob: "01/14/2001",
        },
        {
          name: "Jennifer Viruega Arteaga",
          number: "980-293-1033",
          dob: "04/12/2001",
        },
        {
          name: "Luis Estevez",
          number: "980-234-1232",
          dob: "10/25/1992",
        },
      ],
    };
  }

  //HARD CHALLENGE: Iterates over array using map
  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
