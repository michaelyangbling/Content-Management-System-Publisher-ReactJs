import React,{Component} from 'react'
import WidgetList from './WidgetList'
import Pill from './Pill'
import CourseService from '../services/CourseService.js'
export default class TopicPills extends Component{
    constructor(props){
        super(props)
        if (this.props.topics.length>0)
            this.state={topic: this.props.topics[0], index: 0}
        else
            this.state={index: 0}
        this.courseService=new CourseService()
    }
    componentWillReceiveProps(nextProps) { //seems hard to avoid this? to "re-inherit" module
        if (nextProps.topics.length>0)
            this.setState({topic: nextProps.topics[0], index: 0})
        else
            this.setState({index: 0})
    }

    inputChanged=(event)=>{
        this.input=event.target.value
    }
//need a selectTopic later

    selectTopic= (topic, index)=>this.setState({topic: topic, index: index})
    createTopic=()=> {
        this.courseService.addTopic(this.input, this.props.courseId, this.props.moduleIndex, this.props.lessonIndex);
        this.setState({topic: this.props.topics[this.props.topics.length-1],
            index: this.props.topics.length-1})
    }

    deleteTopic=(topicIndex)=>{
        this.courseService.deleteTopic(this.props.courseId, this.props.moduleIndex, this.props.lessonIndex, topicIndex)
        if (this.props.topics.length>0)
            this.setState({topic: this.props.topics[0], index: 0})
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
                        (topic, index)=><Pill topic={topic} index={index} deleteTopic={this.deleteTopic}
                        selectTopic={this.selectTopic} selectedIndex={this.state.index}/>
                    )}

                    <div style={{margin:"3px"}}>

                        <input style={{margin:"1px"}} placeholder="new topic title" className="form-control" onChange={this.inputChanged}/>
                        <button className="btn-secondary btn form-control"  onClick={this.createTopic}>
                            {/*Add Module/Week &nbsp;*/}
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                    </div>
                </ul>

                {/*//WidgetList static for now*/}
                {(this.props.topics.length>0)?<WidgetList widgets={this.state.topic.widgets}/> : null}
            </div>
        )
    }

}