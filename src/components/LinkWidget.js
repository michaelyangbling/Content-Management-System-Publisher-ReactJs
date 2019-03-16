import React from 'react'

const LinkWidget = ({updateWidget, widgets, widget, preview}) =>{
    console.log("lk",widgets)
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
                <input className="form-control" placeholder="link url" value={widget.url}
                       onChange={event => {
                           widget.url = event.target.value
                           updateWidget(widget, widgets)
                       }}/>
                <h3>Preview</h3>
            </div>

            }
            <a href={widget.url}>{widget.title}</a>

        </div>


    )
    }

export default LinkWidget