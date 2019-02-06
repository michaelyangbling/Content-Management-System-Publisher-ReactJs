import React, {Component} from 'react'
// should render itself after statechange
import CourserService from '../services/CourseService'
export default class ModuleItemList extends Component{
    constructor(props){
        //console.log("constructed")// why state to true after deleing?
        super(props)
        this.state={edit: false}
        this.courseService=new CourserService()
        //only constructed once
        // this.btn="btn-success"
        // if (this.props.index===this.props.selectedIndex)
        //     this.btn="btn-warning"
    }
    selectModule=()=>{
        this.props.selectModule(this.props.module, this.props.index)

    }
    //
    // componentWillReceiveProps(nextProps) { //seems hard to avoid this? to "re-inherit" module
    //     this.setState({edit:false})
    // }
    deleteModule=()=>{
        this.props.deleteModule(this.props.index)

    }

    editModule=()=>{
        this.setState({edit: true})
    }

    undoEdit=()=>{
        this.setState({edit: false})
    }

    setName=(event)=>{
        //console.log("changed")
        this.name=event.target.value

    }

    changeName=()=>{
        this.courseService.changeModuleTitle(this.props.courseId, this.props.index,this.name)
        this.setState({edit: false})
    }

    render(){
        // console.log(this.props.index,this.btn)
        return(
            <li className="nav-item">
                <a onClick={this.selectModule}
                className={this.props.index===this.props.selectedIndex ? "nav-link "+ "btn "+"btn-primary ": "nav-link "+ "btn "+"btn-primary "}
                   style={{margin:"1px",padding:"8px"}}>
                    {this.props.module.title}
                    {this.props.index===this.props.selectedIndex? <div>(selected)</div> : null}
                </a>

                {this.state.edit===true?
                    <form>
                        <input placeholder="change name" onChange={this.setName} className="form-control"/>
                        <i onClick={this.changeName} className="btn fa fa-check"> </i>
                        <i onClick={this.undoEdit} className="btn float-right fa fa-times"> </i>
                    </form>
                    :
                    <div>
                        <i onClick={this.deleteModule}
                           className="float-left btn fa fa-times fa-1x" style={{color:"red"}}></i>
                        <i onClick={this.editModule} style={{margin:"1px"}}
                       className="float-right btn fa fa-pencil fa-1x"></i>
                    </div>}
            </li>
        )
    }
}

// {this.props.index===this.props.selectedIndex? "btn-warning" : "btn-success"}
