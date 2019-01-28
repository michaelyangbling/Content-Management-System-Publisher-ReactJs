import CourseCard from '../components/CourseCard'
import '../components/CourseCard.css'
import React from 'react'
// const CourseGrid = () =>
class CourseGrid extends React.Component{
    constructor(props){
      super(props)
    }
    render(){  return <div className="card-deck">

    { this.props.courses.map((course) =>

      <CourseCard course={course} key={course.id} deleteCourse={this.props.deleteCourse}/>)
    }
      </div>
    }

}

export default CourseGrid

