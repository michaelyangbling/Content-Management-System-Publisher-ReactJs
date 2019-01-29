import React,{Component} from 'react'
import Tab from './Tab.js'
export default class LessonTabs extends Component{
    static id=require('shortid')
    render(){

        constructor(props){
            super(props)
            if (this.props.lessons.length>0)
              this.state={topic: this.props.lessons.topic[0], index: 0}
            else
              this.state={course: this.course, index: 0}
        }
        return (
          <ul className="nav nav-tabs">
            <li className="nav-item">
            {this.props.lessons.map(
                lesson=><Tab key={LessonTabs.id.generate()} lesson={lesson}/> 
                )}
            </li>
          </ul>

            <ul className="nav nav-tabs">
            <li className="nav-item">
            {this.props.lessons.map(
                lesson=><Tab key={LessonTabs.id.generate()} lesson={lesson}/> 
                )}
            </li>
            </ul>


        )
    }

}

