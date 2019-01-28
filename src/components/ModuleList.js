import React,{Component} from 'react'
export default class ModuleList extends Component{
    constructor(props){super(props)}
    render(){
        return (
            <div>
            <li className="nav-item">
                <div className="nav-link btn btn-primary" style={{margin:"2px", minWidth: "180px",maxWidth: "180px"}}>
                {this.props.module.title} &nbsp;
                <i className="fa fa-times fa-2x float-right"></i>
                </div>
            <br/>

            </li>
            </div>
            
        )
    }
}

<div className="col-sm-2">
<ul className="nav nav-pills">
    {course.modules.map((module, index) =><ModuleList module={module} index={index} key={CourseEditor.id.generate()}/>)}
</ul>
{/* index to get rid of key warning */}
<br/>
</div> 