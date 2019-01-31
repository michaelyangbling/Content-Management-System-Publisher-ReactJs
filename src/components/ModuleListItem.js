import React, {Component} from 'react'
// should render itself after statechange
export default class ModuleItemList extends Component{
    constructor(props){
        // console.log("constructed")
        super(props)

        //only constructed once
        // this.btn="btn-success"
        // if (this.props.index===this.props.selectedIndex)
        //     this.btn="btn-warning"
    }
    selectModule=()=>{
        this.props.selectModule(this.props.module, this.props.index)

    }
    deleteModule=()=>{
        this.props.deleteModule(this.props.index)

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
                <i onClick={this.deleteModule}
                   className="float-left btn fa fa-times fa-1x" style={{color:"red"}}>del</i>
            </li>
        )
    }
}

// {this.props.index===this.props.selectedIndex? "btn-warning" : "btn-success"}
