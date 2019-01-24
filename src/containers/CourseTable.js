import React from 'react';
import CourseRow from './CourseRow';

export default class CourseTable extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return (
            <table className="table">
            <tbody>
            { this.props.courses.map((course) =>
                <CourseRow course={course}/>
            )}
            </tbody>
            </table>
        )

    }
}
