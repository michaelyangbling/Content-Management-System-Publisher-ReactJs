import React,{Component} from 'react'
import ModuleListItem from './ModuleListItem'
import CourserService from '../services/CourseService'
export default class ModuleList extends Component{
    constructor(props){
        super(props)
        this.courseService=new CourserService()
        this.inputChanged=this.inputChanged.bind(this)
        this.state={}
        this.input=""
    }
    inputChanged(event){
        this.input=event.target.value
    }



    createModule=()=> {
        this.courseService.addModule(this.input, this.props.courseId,()=>
            this.props.selectModule(this.props.modules[this.props.modules.length-1], this.props.modules.length-1))
        //this.props.selectModule(this.props.modules[this.props.modules.length-1], this.props.modules.length-1) //just make it re-render
    }
    // We don’t recommend using indexes for keys if the order of items may change. 
    render(){
        //console.log(this.props.modules)
        //console.log(ModuleList.id.generate())
        return (
            <div style={{margin:"15px"}}>

                <ul className="nav nav-pills">

                    {this.props.modules.map((module, index) =>(
                    <ModuleListItem module={module} index={index} selectedIndex={this.props.index}
                    selectModule={this.props.selectModule} deleteModule={this.props.deleteModule}
                    courseId={this.props.courseId}/> )
                    )}


                </ul>
                <input placeholder="new module title" className="form-control" onChange={this.inputChanged}/>
                <div style={{margin:"3px"}}>
                <button className="btn-primary btn form-control"  onClick={this.createModule}>
                    {/*Add Module/Week &nbsp;*/}
                    <i className="fa fa-plus fa-2x"></i>
                </button>
                </div>
            </div>
            /* index to get rid of key warning */

            
        )
    }
}
