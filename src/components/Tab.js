import React,{Component} from 'react'
export default class Tab extends Component{
    selectLesson=()=>{
        this.props.selectLesson(this.props.lesson, this.props.index)
    }
    render(){
    
        return (
        <li className="nav-item">
        <a className="nav-link btn-info btn" onClick={this.selectLesson}
        style={{margin:"10px", padding:"10px"}}>
        {this.props.lesson.title} &nbsp;
        <i className="fa fa-times fa-2x"></i>
        </a>
        </li>
        )
    }
}