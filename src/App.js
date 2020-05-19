import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe';
import Heading from './Components/Heading.js';
import AboutDave from './Components/AboutDave.js';
import NavBar from './Components/NavBar.js';
import Student from './Components/Student.js';
import Movies from './Components/Movies.js';


const Pet = (props) => {
  /*
  * create a function that allows the suer to show off their pets...
  * age, species, fave food, legs, walks etc...
  * pass props through inside the app component
  */
  return (
    <div>
      <ul>
      <li>My pet is called {props.name}</li>
      <li>Their favourite food is {props.food}</li>
      <li>They have {props.legs} legs</li>
      <li>They love {props.fav}</li>
      </ul>
    </div>
  )
}
class App extends Component { // Student extends CodeNation
  render() { // render method is used inside of Class Based components
  return (
  <div className="App">
  <NavBar />
  <h1>Hello, World.</h1>
  <Heading />
  <AboutMe />
  <AboutDave />
  <Student name = "Adam" age ={46}/>
  <Student name = "Kerry" age = {31}/>
  <Student name = "Connor" age = {22}/>
  <Movies film = "Revenge of the Sith" genre = "Action" />
  <Pet name = "Luna" food = "tuna" legs = {4} fav = "cheek scritches" />
  </div>
  )
  }
}

// class App extends React.Component {
//   render() {

//   }
// }
export default App;
