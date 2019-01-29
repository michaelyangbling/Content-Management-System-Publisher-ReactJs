import React,{Component} from 'react'
import Pill from './Pill'
export default class TopicPills extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="nav nav-pills">
                {this.props.topics.map(
                topic=><Pill topic={topic}/> 
                )}
            </ul>
        )
    }

}