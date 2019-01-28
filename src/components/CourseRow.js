import React,{Component} from 'react'
import {Link}  from 'react-router-dom'
//import '../../node_modules/font-awesome/css/font-awesome.css';
export default class CourseRow extends Component{
    constructor(props){super(props)
        //this.deleteCourse=this.deleteCourse.bind(this)
    }

    // deleteCourse(){
    //     this.props.deleteCourse(this.props.course)
    // }

    deleteCourse  = () => {this.props.deleteCourse(this.props.course); return null} //no need to bind this using arrow
    render(){
        return  (
                <tr>
                <td>
                    <Link to={`/course/edit/${this.props.course.id}`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>me</td>
                <td></td>
                <td><i className="fa fa-times fa-3x btn" onClick={this.deleteCourse}></i></td>
                
                </tr>
        )
    }

}