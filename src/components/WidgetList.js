import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({togglePreview, curWidgets, tid, tname, addWidget, deleteWidget, updateWidget,preview, save}) => {
    // Cannot update during an existing state transition (such as within `render`), rendered 2 times?
    //console.log("rendered")
    //loadWidget(curWidgets)//state not set for 1st time? then set for second time?
    //console.log(widgets)
    console.log("renderedXX")
    return(
    <div>
        <div className="row" style={{margin:"5px"}}>
            <div className="col-8">
                <div className = "float-right">
                <button type="button" onClick={ ()=>{save(tid, curWidgets)} } name="saveBtn" className="float-right btn btn-success">
                <small style={{fontSize:"1em"}}>save widgets of topic: {tname}</small></button>
                </div>
            </div>
            <div className="col-4">
    
            {/* <small style={{fontSize:"0.65em"}}>Edit widgets </small> */}
                <div class = "float-right">
                <input type="checkbox" className="form-check-input" style={{zoom:"2"}} id="previewCheckbox" checked={!preview}
                       onChange={ ()=>{togglePreview()} } />
                <label style={{fontSize:"0.8em"}} className="form-check-label" htmlFor="previewCheckbox">&nbsp;edit/ preview &nbsp;widgets</label>
                </div>
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