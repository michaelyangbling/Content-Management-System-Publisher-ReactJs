import CourseCard from '../components/CourseCard'
import '../components/CourseCard.css'
import React from 'react'
import CourserService from '../services/CourseService'
// const CourseGrid = () =>
class CourseGrid extends React.Component{
    constructor(props){
        //console.log(new Date().getTime())
      super(props)
        this.courseService=new CourserService()
    }
    changeName2=(courseId, course, name)=>{
        this.courseService.changeCourseTitle(courseId, name,
            ()=>{course.title=name;this.setState({})})

    }
    render(){
        //console.log('grid')
        return <div className="card-deck">

    { this.props.courses.map((course) =>

      <CourseCard course={course} key={course.id} deleteCourse={this.props.deleteCourse} changeName2={this.changeName2}/>)
    }
      </div>
    }

}

export default CourseGrid

