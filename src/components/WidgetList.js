import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({togglePreview, curWidgets, addWidget, deleteWidget, updateWidget,preview}) => {
    // Cannot update during an existing state transition (such as within `render`), rendered 2 times?
    //console.log("rendered")
    //loadWidget(curWidgets)//state not set for 1st time? then set for second time?
    //console.log(widgets)
    console.log(preview, curWidgets)
    return(
    <div>
        <div className="row" style={{margin:"5px"}}>
            <div className="col-10">
                <button type="button" name="saveBtn" className="float-right btn btn-success">save</button>
            </div>
            <div className="col-2">
                <b>Preview</b>
                <input type="checkbox" style={{zoom:"2"}} name="previewCheckbox" checked={preview}
                       onChange={ ()=>{togglePreview()} }/>
            </div>
        </div>
            {
                curWidgets.map((widget,index) =>
                    <WidgetComponent
                        preview={preview}
                        widgets={curWidgets}
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widgetIndex={index}
                        widget={widget}/>
                )
            }
            {/*<button*/}
            {/*onClick={addWidget}*/}
            {/*className="btn btn-success">*/}
            {/*Add*/}
            {/*</button>*/}
        <span className="fa-stack btn" style={{color: "blue",position: "fixed",bottom:"10px",right: "10px"}}
        onClick={()=>addWidget(curWidgets)}>
  <i className="fa fa-circle fa-stack-2x" ></i>
  <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
</span>
    </div>
    )
}

export default WidgetList