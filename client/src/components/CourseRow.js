import React,{Component} from 'react'
import {Link}  from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.css';
export default class CourseRow extends Component{
    constructor(props){super(props)
        this.removeRow=this.removeRow.bind(this)
    }

    removeRow(){
        this.props.removeMe(this.props.id)
    }
    render(){
        let course=this.props.course
        return  (
                <tr style={{cursor:"pointer"}}>
                <td>
                    <Link to={`/course/edit/${course.id}`}>
                        {course.title}
                    </Link>
                </td>
                <td>me</td>
                <td></td>
                <td><i className="fa fa-times fa-2x" onClick={this.removeRow}></i></td>
                
                </tr>
        )
    }

}