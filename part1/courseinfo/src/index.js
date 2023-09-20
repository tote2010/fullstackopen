import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div><h1>{props.course}</h1></div>)
}

const Content = (props) => {
  return (
    <p>{props.part} {props.number}</p>
  )
}

const Total = (props) => {
  return (<p><strong>Total of parts: </strong> {props.parts + props.total} </p>);  // total number of
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      {/* <Part part={part1} number={exercises1} />
      <Part part={part2} number={exercises2} />
      <Part part={part3} number={exercises3} /> */}
      {/* <Content part={parts[0].name} number={parts[0].exercises}/> */}
      {parts.map((element) => <Content key={element.name} part={element.name} number={element.exercises}/>)}
      <Total parts={""} total={parts[0].exercises+parts[1].exercises+parts[2].exercises}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))