import React,{Component} from 'react';
import Pokegame from './Pokegame';
import './App.css';
import './Pokedex.css';
import './Pokecard.css';

class App extends Component {
  render(){
    return (
      <div className="App">
           <Pokegame/>
      </div>
    );
  }
}

export default App;
