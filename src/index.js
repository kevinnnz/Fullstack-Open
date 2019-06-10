import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    let { course } = props
    let value = 0
    return(
        <div>
            { course.parts.map(content => <p key={ value += 1 }>{content.name} {content.exercises}</p> ) }
        </div> 
    )
}

const Total = (props) => {
    const { course } = props
    var total = 0
    course.forEach(element => {
        total += element.exercises
    });
    return (
        <div>
            <p>Number of exercises { total } </p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

  return (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
        
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))