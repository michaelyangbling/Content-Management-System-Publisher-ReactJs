import React,{Component} from 'react'
export default class Pill extends Component{
    constructor(props){
        //console.log("remap pill")
        super(props)
        this.state={edit:false}
    }

    selectTopic=()=>{this.props.selectTopic(this.props.topic, this.props.index)}
    deleteTopic= ()=>{
        this.props.deleteTopic(this.props.index)
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

    }

    changeName=()=> {
        //service change
        //this.courseService.changeModuleTitle(this.props.courseId, this.props.index,this.name)
        this.props.topic.title = this.name
        this.setState({edit: false})
    }

    render(){
        return (
            <li className="nav-item">
                <a className="btn btn-secondary nav-link" style={{margin:"1px", padding:"8px"}}
                   onClick={this.selectTopic}>
                    {this.props.topic.title}
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
                        <i onClick={this.deleteTopic}
                           className="float-left btn fa fa-times fa-1x" style={{color:"red"}}></i>
                        <i onClick={this.edit} style={{margin:"1px"}}
                           className="float-right btn fa fa-pencil fa-1x"></i>
                    </div>}
            </li>
        )
    }
}