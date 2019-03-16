import React,{Component} from 'react'
import Tab from './Tab.js'
import TopicPills from './TopicPills'
import CourserService from '../services/CourseService'
export default class LessonTabs extends Component{
    constructor(props){
        //console.log("remap lessontabs")
        super(props)
        //to select lesson
        if (this.props.lessons.length>0)
          this.state={lesson: this.props.lessons[0], index: 0}
        else
          this.state={index: 0}//better set lesson: null
        this.courseService=new CourserService()
        this.inputChanged=this.inputChanged.bind(this)
        this.input = "new lesson of module"
    }
    // https://stackoverflow.com/questions/48226268/calling-setstate-in-react-from-render-method
    selectLesson= (lesson, index)=>this.setState({lesson: lesson, index: index})

    deleteLesson=(index)=>{
        const callback=()=>{if (this.props.lessons.length>0)
            this.setState({lesson: this.props.lessons[0], index: 0})
        else
            this.setState({index: 0})}
        this.courseService.deleteLesson(this.props.courseId, this.props.moduleIndex, index, callback)

    }

    inputChanged(event){
        this.input=event.target.value;
        this.setState({})
    }



    createLesson=()=> {
        const callback=()=>this.selectLesson(this.props.lessons[this.props.lessons.length-1], this.props.lessons.length-1)
        this.courseService.addLesson(this.input, this.props.courseId, this.props.moduleIndex, callback);

        //this.setState({}) //just make it re-render
    }
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
                      (lesson,index)=><Tab lesson={lesson}
                                           selectLesson={this.selectLesson} index={index}
                                           deleteLesson={this.deleteLesson} selectedIndex={this.state.index}/>
                    ) }
                  <div style={{margin:"3px"}}>
                      {/*//onChange is triggered on render?*/}
                      <input style={{margin:"1px"}} placeholder="new lesson title" className="form-control" onChange={this.inputChanged}
                      value={this.input}/>
                      <button className="btn-info btn form-control"  onClick={this.createLesson}>
                          {/*Add Module/Week &nbsp;*/}
                          <i className="fa fa-plus fa-2x"></i>
                      </button>
                  </div>
              </ul>



              {(this.props.lessons.length>0)?<TopicPills topics={this.state.lesson.topics}
                                                         courseId={this.props.courseId}
                                                         moduleIndex={this.props.moduleIndex}
                                                         lessonIndex={this.state.index}
              /> : null}
            </div>


        )
    }

}

