import React,{Component} from 'react'
import Tab from './Tab.js'
import TopicPills from './TopicPills'
export default class LessonTabs extends Component{
    constructor(props){
        super(props)

        //to select lesson
        if (this.props.lessons.length>0)
          this.state={lesson: this.props.lessons[0], index: 0}
        else
          this.state={index: 0}
    }
    // https://stackoverflow.com/questions/48226268/calling-setstate-in-react-from-render-method
    selectLesson= (lesson, index)=>this.setState({lesson: lesson, index: index})

    componentWillReceiveProps(nextProps) { //seems hard to avoid this? to "re-inherit" module
        if (nextProps.lessons.length>0)
          this.setState({lesson: nextProps.lessons[0], index: 0})
        else
          this.setState({index: 0})
        }
// React doesn’t call UNSAFE_componentWillReceiveProps() with initial props during mounting. 
// It only calls this method if some of component’s props may update. Calling this.setState() ge
// nerally doesn’t trigger UNSAFE_componentWillReceiveProps().
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

