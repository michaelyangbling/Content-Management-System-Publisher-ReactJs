import React,{Component} from 'react'
import CourserService from '../services/CourseService'

export default class Tab extends Component{
    constructor(props){
        super(props)
        this.state={edit:false}
        this.name=""
        this.courseService=new CourserService()

    }
    selectLesson=()=>{
        this.props.selectLesson(this.props.lesson, this.props.index)
    }

    deleteLesson=()=>{
        this.props.deleteLesson(this.props.index)
    }

    edit=()=>{
        this.setState({edit: true})
    }

    undoEdit=()=>{
        this.setState({edit: false})
    }

    setName=(event)=>{
        //console.log("changed")
        this.name=event.target.value
        this.setState({})

    }

    changeName=()=>{
        //service change
        const callback=()=>{this.props.lesson.title=this.name;
            this.setState({edit: false})} //should callback be set in courseService?
        this.courseService.changeLessonTitle(this.props.lesson.id, this.name,callback)

    }
    render(){
        //console.log('r')
    
        return (
        <li className="nav-item">
            <a className="nav-link btn-info btn" onClick={this.selectLesson}
            style={{margin:"1px", padding:"8px"}}>
                {this.props.lesson.title}
                {this.props.index===this.props.selectedIndex? <div>(selected)</div> : null}
            </a>
            {this.state.edit===true?
                <form>
                    <input placeholder="change name" onChange={this.setName} value={this.name} className="form-control"/>
                    <i onClick={this.changeName} className="btn fa fa-check"> </i>
                    <i onClick={this.undoEdit} className="btn float-right fa fa-times"> </i>
                </form>
                :
                <div>
                    <i onClick={this.deleteLesson}
                       className="float-left btn fa fa-times fa-1x" style={{color:"red"}}></i>
                    <i onClick={this.edit} style={{margin:"1px"}}
                       className="float-right btn fa fa-pencil fa-1x"></i>
                </div>}

        </li>
        )
    }
}