import React,{Component} from 'react'
export default class Tab extends Component{
    render(){
        return (
        <div>
        <a className="nav-link btn-info btn" 
        style={{margin:"0px", padding:"10px"}}>
        {this.props.lesson.title} &nbsp;
        <i className="fa fa-times fa-2x"></i>
        </a>
        <br/>
        </div>
        )
    }
}