import React from 'react'

const ParaWidget = ({updateWidget, widgets, widget, preview}) =>{
    return (
        <div>
            {!preview &&
            <div>
                <label htmlFor={"textBox"+widget.id}>Enter text below and use bottom-right corner of the box to resize vertically</label>
                <textarea className="form-control" placeholder="paragraph text" value={widget.para}
                          onChange={event => {
                              widget.para = event.target.value
                              updateWidget(widget, widgets)
                          }} id={"textBox"+widget.id}></textarea>
                <br/>
                <h3>Preview</h3>
            </div>

            }
            <p>{widget.para}</p>

        </div>


    )
    }

export default ParaWidget
