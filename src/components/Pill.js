import React,{Component} from 'react'
export default class Pill extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <li className="nav-item">
                <a className="btn btn-secondary nav-link" style={{margin:"10px", padding:"10px"}}>
                {this.props.topic.title}
                <i className="fa fa-times fa-2x"></i>
                </a>
            </li>
        )
    }
}