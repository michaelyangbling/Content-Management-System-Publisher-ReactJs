import React from 'react';
import CourseRow from '../components/CourseRow';
//import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourserService from '../services/CourseService'

export default class CourseTable extends React.Component{
    constructor(props){
        super(props)
        this.courseService=new CourserService()
        // var state={};var course
        // for(course in this.props.courses){
        // state[String(this.props.courses[course].id)]=true
        // }
        // this.state=state// initial state
        // this.handleRowsMount=this.handleRowsMount.bind(this)
    }
    

    // handleRowsMount(id){
    //     this.setState({[id]: false})
    // }
    changeName2=(courseId, course, name)=>{
        this.courseService.changeCourseTitle(courseId, name,
            ()=>{course.title=name;this.setState({})})

}
    render(){
        return (
            <div className="table-responsive">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th><div className="float-left">del</div><div className="float-right">edit</div></th>
                        <th>modified</th>
                    </tr>

                </thead>
                <tbody>
                {/* { this.props.courses.map((course) =>
                <CourseRow course={course} removeMe={this.handleRowsMount} key={course.id}/>)} */}
                { this.props.courses.map((course) =>

                     <CourseRow course={course} key={course.id} deleteCourse={this.props.deleteCourse}
                                changeName2={this.changeName2}/>)
                    //reatc require must have a key, even not used; use whiteboard state instead of courseTable state
                }
                </tbody>
            </table>
            </div>
        )

    }
}

// <div class="table-responsive">
//   <table class="table table-hover">
//     <thead class="thead-dark">
//         <tr>
//             <th>Title</th>
//             <th>Owner</th>
//             <th>Last modified Time</th>
//             <th>&nbsp</th>
//         </tr>

//     </thead>

//     <tbody>
//         <tr 
//         onclick="location.href='../courseEditor/courseEditor.template.client.html'" style="cursor:pointer">
//             <td>Title Exmaple: cs 5610 </td>
//             <td>Owner Example: me</td>
//             <td>Last modified Time Example: 6:45 PM</td>
//             <td>Example: Delete</td>
//         </tr>

//         <tr 
//         onclick="location.href='../courseEditor/courseEditor.template.client.html'" style="cursor:pointer">
//             <td>Title Exmaple2: cs 5610 </td>
//             <td>Owner Example2: me</td>
//             <td>Last modified Time Example2: 6:45 PM</td>
//             <td>Example2: Delete</td>
//         </tr>
//     </tbody>
//   </table>
// </div>
