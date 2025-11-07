const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => 
        <p key = {part.id}>
          {part.name} {part.exercises}
        </p>
      )}
    </div>
  )
}  

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Sum = ({course}) => {
  return(
    <div>
      <p>
        total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
      </p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Sum course={course} />
    </div>
  )
}

export default Course