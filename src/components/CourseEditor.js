import React,{Component} from 'react'
import ModuleList from './ModuleList.js'
import CourseService from "../services/CourseService"
export default class CourseEditor extends Component{
    static id=require('shortid')  
    // to generate index
    
    constructor(props){
        super(props)
        this.courseService=new CourseService()
        const course=this.courseService.findCourseById(this.props.courseId)
        this.state={course: course}
    }


    render(){
        return (
            <div>
            <h1>{course.title}</h1>
            <div className="row">
                <ModuleList modules={this.state.course.modules}/>
            </div> 
            </div>
        )     
    }
}
