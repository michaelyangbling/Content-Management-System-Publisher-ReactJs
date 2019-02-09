import React from 'react'

const LinkWidget = ({updateWidget, widgets, widget, preview}) =>{
    return (
        <div>
            {!preview &&
            <div>
                <input className="form-control" placeholder="link title" value={widget.title}
                          onChange={event => {
                              widget.title = event.target.value
                              updateWidget(widget, widgets)
                          }}/>
                <br/>
                <input className="form-control" placeholder="link url" value={widget.href}
                       onChange={event => {
                           widget.href = event.target.value
                           updateWidget(widget, widgets)
                       }}/>
                <h3>Preview</h3>
            </div>

            }
            <a href={widget.href}>{widget.title}</a>

        </div>


    )
    }

export default LinkWidget