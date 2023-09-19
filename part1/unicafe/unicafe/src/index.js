import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div><h1>{props.course}</h1></div>)
}

const Part = (props) => {
  return (
    <p>{props.part} {props.number}</p>
  )
}

const Total = (props) => {
  return (<p><strong>Total of parts: </strong> {props.parts + props.total} </p>);  // total number of
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Part part={part1} number={exercises1} />
      <Part part={part2} number={exercises2} />
      <Part part={part3} number={exercises3} />
      <Total parts="3" total={part1+part2+part3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))