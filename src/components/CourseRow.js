import React,{Component} from 'react'
import {Link}  from 'react-router-dom'
//import '../../node_modules/font-awesome/css/font-awesome.css';
export default class CourseRow extends Component{
    constructor(props){super(props)
        //this.deleteCourse=this.deleteCourse.bind(this)
        this.name=""
        this.state={edit:false}
    }

    // deleteCourse(){
    //     this.props.deleteCourse(this.props.course)
    // }
    editCourse=()=>{
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
        this.props.changeName2(this.props.course.id, this.props.course, this.name)
        this.setState({edit: false})
    }
    deleteCourse  = () => {this.props.deleteCourse(this.props.course); return null}
    render(){
        return  (
                <tr>
                <td >
                <form>
                    <Link  to={`/editCourse/${this.props.course.id}`}>
                        <button className="form-control btn btn-primary" style={{overflow:"hidden", whiteSpace: "nowrap"}}>
                            {this.props.course.title}
                        </button>
                    </Link>
                </form>
                </td>
                <td>me</td>

                <td>
                    {this.state.edit===true?
                    <form>
                        <input placeholder="change name" onChange={this.setName}
                               value={this.name} className="form-control"/>
                        <i onClick={this.changeName} className="btn fa fa-check"> </i>
                        <i onClick={this.undoEdit} className="btn float-right fa fa-times"> </i>
                    </form>
                    :
                    <div>
                        <i onClick={this.deleteCourse}
                           className="float-left btn fa fa-times fa-1x" style={{color:"red"}}></i>
                        <i onClick={this.editCourse} style={{margin:"1px"}}
                           className="float-right btn fa fa-pencil fa-1x"></i>
                    </div>}
                </td>
                    <td></td>
                    {/*<i className="fa fa-times fa-3x btn" onClick={this.deleteCourse}></i>*/}


                </tr>
        )
    }

}