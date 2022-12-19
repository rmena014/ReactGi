import React from "react";

class App extends React.Component {
  //EASY: CREATE CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Richard Mena",
          number: "646-973-6431",
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

class BasicInfo extends React.Component {
  render() {
    return (
      //MEDIUM REPLACE HARDCODED WITH this.state.person
      <div>
        <p>Name: {this.props.person.name}</p>
        <p>Number: {this.props.person.number}</p>
        <p>Date of Birth: {this.props.person.dob}</p>
      </div>
    );
  }
}

export default App;
