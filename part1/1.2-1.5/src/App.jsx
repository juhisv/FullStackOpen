const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course.title}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.course.parts[0].part} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].part} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].part} exercises={props.course.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    title: 'Half Stack application development',
    parts: [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]}
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App