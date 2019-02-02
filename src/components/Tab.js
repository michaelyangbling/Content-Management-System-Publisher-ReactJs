import React,{Component} from 'react'
export default class Tab extends Component{
    selectLesson=()=>{
        this.props.selectLesson(this.props.lesson, this.props.index)
    }

    deleteLesson=()=>{
        this.props.deleteLesson(this.props.index)
    }
    render(){
    
        return (
        <li className="nav-item">
            <a className="nav-link btn-info btn" onClick={this.selectLesson}
            style={{margin:"3px", padding:"10px"}}>
            {this.props.lesson.title} &nbsp;
            </a>
           <i onClick={this.deleteLesson}
                   className="float-left btn fa fa-times fa-1x" style={{color:"red"}}>del</i>
        </li>
        )
    }
}