const Header = (props) => {
  return (
    <h1>{props.title}</h1>
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
      <Part part={props.list[0].part} exercises={props.list[0].exercises}/>
      <Part part={props.list[1].part} exercises={props.list[1].exercises}/>
      <Part part={props.list[2].part} exercises={props.list[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}</p>
  )
}

const App = () => {
  const course_title = 'Half Stack application development'
  const courses = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]
  return (
    <div>
      <Header title={course_title}/>
      <Content list={courses}/>
      <Total sum={courses}/>
    </div>
  )
}

export default App