import React,{Component} from 'react'
import WidgetList from './WidgetList'
import Pill from './Pill'
import CourseService from '../services/CourseService.js'
import App from '../containers/WidgeListContainer'
export default class TopicPills extends Component{
    constructor(props){
        super(props)
        if (this.props.topics.length>0)
            this.state={topic: this.props.topics[0], index: 0}
        else
            this.state={index: 0}
        this.courseService=new CourseService()
        this.input="new topic of lesson"//default input
    }
    componentWillReceiveProps(nextProps) { //seems hard to avoid this? to "re-inherit" module
        if (nextProps.topics.length>0)
            this.setState({topic: nextProps.topics[0], index: 0})
        else
            this.setState({index: 0})
    }

    inputChanged=(event)=>{
        this.input=event.target.value
        this.setState({})
    }
//need a selectTopic later

    selectTopic= (topic, index)=>this.setState({topic: topic, index: index})
    createTopic=()=> {
        const callback=()=>this.setState({topic: this.props.topics[this.props.topics.length-1],
            index: this.props.topics.length-1})
        this.courseService.addTopic(this.input, this.props.courseId, this.props.moduleIndex, this.props.lessonIndex,
            callback);

    }

    deleteTopic=(topicIndex)=>{
        const callback=()=> {
            if (this.props.topics.length > 0)
                this.setState({topic: this.props.topics[0], index: 0})
            else
                this.setState({index: 0})
        }
        this.courseService.deleteTopic(this.props.courseId, this.props.moduleIndex, this.props.lessonIndex, topicIndex, callback)

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

                        <input style={{margin:"1px"}} placeholder="new topic title" className="form-control" onChange={this.inputChanged}
                        value={this.input}/>
                        <button className="btn-secondary btn form-control"  onClick={this.createTopic}>
                            {/*Add Module/Week &nbsp;*/}
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                    </div>
                </ul>

                {/*//WidgetList static for now*/}
                {(this.props.topics.length>0)?<App widgets={this.state.topic.widgets} tid={this.state
                    .topic.id} tname={this.state.topic.title} /> : null}
            </div>
        )
    }

}