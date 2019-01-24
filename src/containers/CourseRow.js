import React,{Component} from 'react'
import {Link}  from 'react-router-dom'
export default class CourseRow extends Component{
    constructor(props){super()}
    render(){
        let course=this.props.course
        return  (
                <tr>
                <td>
                    <Link to={`/course/edit/${course.id}`}>
                        {course.title}
                    </Link>
                </td>
                </tr>
        )
    }

}