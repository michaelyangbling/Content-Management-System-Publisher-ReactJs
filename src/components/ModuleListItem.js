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
    render(){
        // console.log(this.props.index,this.btn)
        return(
            <li className="nav-item">
            <a onClick={this.selectModule} 
            className={this.props.index===this.props.selectedIndex ? "nav-link "+ "btn "+"btn-warning" : "nav-link "+ "btn "+"btn-success"} 
            style={{margin:"10px",padding:"10px"}}>
            <div>{this.props.module.title} </div>&nbsp;
            {/* {this.props.index===this.props.selectedIndex? <div>selected</div> : null} */}
            <i className="fa fa-times fa-2x"></i>
            </a>
            </li>
        )
    }
}

// {this.props.index===this.props.selectedIndex? "btn-warning" : "btn-success"}
