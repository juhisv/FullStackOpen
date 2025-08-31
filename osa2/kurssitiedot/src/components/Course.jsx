const Course = (props) => {
  const Header = () => {
    return (
      <h1>{props.course.name}</h1>
    )
  }

  const Content = () => {
    return (
      <ul>
        {props.course.parts.map(part => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
    )
  }

  const Total = () => {
    const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>Total of {total} exercises</div>
    )
  }

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default Course