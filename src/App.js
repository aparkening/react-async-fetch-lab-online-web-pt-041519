import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  // Fetch people in space after render; add to peopleInSpace
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  // Return each person in <li>
  peopleList = () => {
    return this.state.peopleInSpace.map(person => <li>{person.name}</li>)
  }

  render() {
    return (
      <div>
        <h1>People In Space</h1>
        <ul>
          {this.peopleList()}
        </ul>
      </div>
    );
  }
}
export default App;