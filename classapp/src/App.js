// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Hello from './components/Hello';
// // import Hello from './components/hello';

// function App() {
//   return (
//     <div className='App'>
//       <Header></Header>
//       <Hello></Hello>
//      Hello World!
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg'
import './App.css';
import Header from './components/Header'
import { useState } from 'react';

 function App() {
  // let name ="Hero"
  // let obj = {
  //   name: "hello",
  //   age:19,
  //   copyright: "@hello"
  // }

  const [name,setName]=useState('Herovired');
  const [num, setNum]= useState(0);
  // const [num, setNumm]= useState(1000);

  console.log('this is name', name);
  console.log('this is the statefunction', setName);

  function Handleclick(){
    console.log('im clicking on the bt');
    setName('Hero')
  }

  function increment(){
    console.log('this is number', num);
    setNum(num+1)
  }
  function decrement(){
    setNum(num-1)
  }

  return (
  //  <Header myname={name} mynumber={name}/>
  <div>
    <div>
      this is my counter {num}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      
    </div>

    My organision name is {name}
    <button onClick={Handleclick}>click on it</button>
  </div>
  )
}

export default App;

