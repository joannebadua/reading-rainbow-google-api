import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Books from "./pages/Books";
import DeleteBtn from "./components/DeleteBtn";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import List from "./components/List";
import Nav from "./components/Nav";
import './App.css';


// class App extends Component {
//   state = {
//     bookArray:[
//       {
//         id: 1,
//         title: title1,
//         author: authors1,
//         description: description1,
//         image: image1,
//         link: link1
//       },
//       {
//         id: 2,
//         title: title2,
//         author: authors2,
//         description: description2,
//         image: image2,
//         link: link2
//       }
//     ],
    
//   };

function App () {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;