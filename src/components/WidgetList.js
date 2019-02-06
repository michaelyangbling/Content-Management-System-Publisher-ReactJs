import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({curWidgets, loadWidget,widgets, addWidget, deleteWidget, updateWidget}) => {
    // Cannot update during an existing state transition (such as within `render`), rendered 2 times?
    console.log("rendered")
    loadWidget(curWidgets)
    return(
    <div>
        <div className="row" style={{margin:"5px"}}>
            <div className="col-10">
                <button type="button" name="saveBtn" className="float-right btn btn-success">save</button>
            </div>
            <div className="col-2">
                <b>Preview</b>
                <input type="checkbox" style={{zoom:"2"}} name="previewCheckbox"/>
            </div>
        </div>
        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        key={widget.id}
                        // updateWidget={updateWidget}
                        // deleteWidget={deleteWidget}
                        widget={widget}/>
                )
            }
            {/*<button*/}
            {/*onClick={addWidget}*/}
            {/*className="btn btn-success">*/}
            {/*Add*/}
            {/*</button>*/}
        </div>
    </div>
    )
}

export default WidgetList