import React,{Component} from 'react'
import ModuleList from './ModuleList.js'
import CourseService from "../services/CourseService"
import LessonTabs from './LessonTabs'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../node_modules/jquery/dist/jquery.min.js'
import '../../node_modules/font-awesome/css/font-awesome.css';
export default class CourseEditor extends Component{ 
    // to generate index
    
    constructor(props){
        super(props)
        this.courseService=new CourseService()
        this.course=this.courseService.findCourseById(this.props.courseId)
        if (this.course.modules.length>0)
          this.state={course: this.course, module: this.course.modules[0], index: 0}
        else
          this.state={course: this.course, index: 0}
          
    }

    selectModule= (module, index)=>this.setState({module: module, index: index}) 
    // index for changecolor of selected module
    // module for showing cur module's content
    //how would deleting etc. affect these...
    render(){
        return (
            <div>
            <h1>{this.state.course.title}</h1>
            <div className="row">
                <div className="col-sm-2">
                <ModuleList modules={this.state.course.modules} index={this.state.index} selectModule={this.selectModule}/>
                </div>
            <div className="col-sm-10">
                {(this.course.modules.length>0)?<LessonTabs lessons={this.state.module.lessons}/> : null}
            </div>
            </div> 
            </div>
        )   
    }//should topicpills be the child of lessontabs?
}
