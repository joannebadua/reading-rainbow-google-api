import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    bookArray:[
      {
        id: 1,
        title: title1,
        author: authors1,
        description: description1,
        image: image1,
        link: link1
      },
      {
        id: 2,
        title: title2,
        author: authors2,
        description: description2,
        image: image2,
        link: link2
      }
    ],
    
  };

render() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
}

export default App;