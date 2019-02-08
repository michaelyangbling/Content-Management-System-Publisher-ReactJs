import React from 'react'

const HeadingWidget = ({widget, updateWidget}) =>
    <div>
        <br/>
        <select
            onChange={event => {
                widget.size = parseInt(event.target.value)
                updateWidget(widget)
            }}
            className="form-control" value={String(widget.size)}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
        </select>
        <br/>
        <input
            value={widget.text}
            onChange={event => {
                widget.text = event.target.value
                updateWidget(widget)
            }}
            className="form-control" placeholder="Heading Text"/>
        <h3>Preview</h3>
        {
            widget.size === 1 && <h1>{widget.text}</h1> ||
            widget.size === 2 && <h2>{widget.text}</h2> ||
            widget.size === 3 && <h3>{widget.text}</h3>
        }
    </div>

export default HeadingWidget
