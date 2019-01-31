import React,{Component} from 'react'
import WidgetList from './WidgetList'
import Pill from './Pill'
export default class TopicPills extends Component{
    constructor(props){
        super(props)
        if (this.props.topics.length>0)
            this.state={topic: this.props.topics[0], index: 0}
        else
            this.state={index: 0}
    }
    componentWillReceiveProps(nextProps) { //seems hard to avoid this? to "re-inherit" module
        if (nextProps.topics.length>0)
            this.setState({topic: nextProps.topics[0], index: 0})
        else
            this.setState({index: 0})
    }
    render(){
        //console.log(this.props.topics)
        //console.log(this.state)
        return(
            <div>
                <ul className="nav nav-pills">
                    {this.props.topics.map(
                    topic=><Pill topic={topic}/>
                    )}
                </ul>
                {/*//WidgetList static for now*/}
                {(this.props.topics.length>0)?<WidgetList widgets={this.state.topic.widgets}/> : null}
            </div>
        )
    }

}