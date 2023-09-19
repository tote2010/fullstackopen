import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return(
    <div>Hello {props.name}, you are {props.age} years old.</div>
  )
}

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <>
      <h1 className="text-center">Gretings</h1>
      <Hello name='Tote' age={40+3}/>
      <Hello name= {name} age={age}/> 
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

