import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp , faTrashAlt} from '@fortawesome/free-solid-svg-icons'//search for icon in ide...
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faArrowAltCircleUp,faArrowAltCircleDown,faTrashAlt)
const WidgetComponent = ({widget, deleteWidget, updateWidget,widgetIndex}) => {
    console.log("next")
    return(
    <div className="border border-primary" style={{padding: "20px", "margin": "3px"}}>
        <div className="row">
            <h3 className="col-4"> {widget.type + " WIDGET"} </h3>
            <div className="col-2 ">
                <FontAwesomeIcon icon="arrow-alt-circle-up" style={{cursor: "pointer"}}/>
            </div>
            <div className="col-2 ">
                <FontAwesomeIcon icon="arrow-alt-circle-down" style={{cursor: "pointer"}}/>
            </div>

            <select
                onChange={(event) => {
                    widget.type = event.target.value
                    // updateWidget(widget)
                }}
                className=" col-2" value={widget.type}>
                <option value="HEAD">Heading</option>
                <option value="PARA">paragraph</option>
                <option value="LIST">list</option>
                <option value="IMAGE">Image</option>
                <option value="LINK">link</option>
            </select>
            <div className="col-2 ">
                <FontAwesomeIcon icon="trash-alt" onClick={() => {
                    console.log(widgetIndex)
                    deleteWidget(widgetIndex)}}
                                 style={{cursor: "pointer"}}/>
            </div>
        </div>


        {/*<button onClick={() => deleteWidget(widget)}>Delete</button>*/}
        {
            widget.type == 'HEAD' &&
            <HeadingWidget
                updateWidget={updateWidget}
                widget={widget}/>}

        {widget.type == 'IMAGE' && <ImageWidget widget={widget}/>}

    </div>)
}
export default WidgetComponent