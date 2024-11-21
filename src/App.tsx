import React from 'react';
import Home from './Home';
import PersonDetails from './PersonDetails';
import Teams from './Teams';
import LogLevel from './LogLevel';
import Parent from './Parent';
import Child from './Child';
import SignIn from './SignIn';
import Counter from './Counter';

function App() {
  //Object
  const PlayerDetails = {
    Fname : "Virat",
    Lname :"Kholi",
    age : 35,
    isVegan :true
  }

  //Array
  const IPL= ["CSK","MI", "RCB"]

  //Array Object
  const IPLDetails = [{
    team  : "CSK",
    Clr   : "Yellow"    
  },
  {
    team  : "MI",
    Clr   : "Blue" 
  },
  {
    team  : "RCB",
    Clr   : "Red" 
  }
]

  return (
    <div className="App">
      {/* <Home name="Nivedya" age={20} isEligible={true}/> */}
      {/* <PersonDetails Details = {PlayerDetails} IPLProps ={IPLDetails}/>
      <Teams IPL={IPL} />
      <LogLevel status ="Info"/> */}
      {/* <Parent children = {<Child></Child>}/> */}
      {/* <SignIn/> */}
      <Counter/>
    </div>
  );
}

export default App;
