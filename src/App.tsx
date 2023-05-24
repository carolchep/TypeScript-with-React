import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Status status="error"/>
      <Button handleClick={(event,id)=>{
        console.log('Buttton clicked',event,id)
      }}/>
      <Container styles={{border:'1px solid black',padding :'1rem'}}/>
    </div>
  );
}

export default App;
