import React,{Component} from 'react'
import Tab from './Tab.js'
import TopicPills from './TopicPills'
export default class LessonTabs extends Component{
    constructor(props){
        super(props)
        if (this.props.lessons.length>0)
          this.state={lesson: this.props.lessons[0], index: 0}
        else
          this.state={index: 0}
    }
    selectLesson= (lesson, index)=>this.setState({lesson: lesson, index: index})
    render(){
        return (
          <div>
          <ul className="nav nav-tabs">
            {this.props.lessons.map(
                lesson=><Tab lesson={lesson} selectLesson={this.selectLesson} index={this.state.index}/> 
                )}
          </ul>

            
            {(this.props.lessons.length>0)?<TopicPills topics={this.state.lesson.topics}/> : null}
            </div>


        )
    }

}

