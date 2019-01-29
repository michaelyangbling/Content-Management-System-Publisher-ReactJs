import React,{Component} from 'react'
import ModuleListItem from './ModuleListItem'
export default class ModuleList extends Component{    constructor(props){
        super(props)
    }
    // We don’t recommend using indexes for keys if the order of items may change. 
    render(){
        //console.log(ModuleList.id.generate())
        return (
            
            <ul className="nav nav-pills">

                <li className="nav-item">
                {this.props.modules.map((module, index) =>(<div>
                <ModuleListItem module={module} index={index} selectedIndex={this.props.index}
                selectModule={this.props.selectModule} /> <br/></div>)
                )}

                </li>
            
            </ul>
            /* index to get rid of key warning */

            
        )
    }
}
