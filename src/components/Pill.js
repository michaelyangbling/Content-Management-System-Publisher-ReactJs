import React,{Component} from 'react'
export default class Pill extends Component{
    constructor(props){
        //console.log("remap pill")
        super(props)
    }

    selectTopic=()=>{this.props.selectTopic(this.props.topic, this.props.index)}
    deleteTopic= ()=>{
        this.props.deleteTopic(this.props.index)
    }
    render(){
        return (
            <li className="nav-item">
                <a className="btn btn-secondary nav-link" style={{margin:"1px", padding:"8px"}}
                   onClick={this.selectTopic}>
                    {this.props.topic.title}
                    {this.props.index===this.props.selectedIndex? <div>(selected)</div> : null}
                </a>
                <i onClick={this.deleteTopic}
                   className="float-left btn fa fa-times fa-1x" style={{color:"red"}}>del</i>
            </li>
        )
    }
}