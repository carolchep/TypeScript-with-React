import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';

function App() {
  const personName ={
    first : "Bruce",
    last:"Wayne"
  }
  const personList=[
    {
      first :"caro",
      last:"sam"
    },
    {
      first :"memo",
      last:"chep"
    },
    {
      first :"chela",
      last:"kaku"
    }
   
  ]
  return (
    <div className="App">
      <Greet name="carol" messageCount={10} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={personList}/>
    </div>
  );
}

export default App;
