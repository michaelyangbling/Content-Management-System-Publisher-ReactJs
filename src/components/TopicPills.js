import React,{Component} from 'react'
import Pill from './Pill'
import WidgeList from './WidgetList'
export default class TopicPills extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <ul className="nav nav-pills">
                {this.props.topics.map(
                topic=><Pill topic={topic}/> 
                )}
            </ul>
            <WidgeList/>
            </div>
        )
    }

}