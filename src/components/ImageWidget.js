import React from 'react'

const ImageWidget = ({updateWidget, widgets, widget, preview}) =>{
    //console.log('image',widget)
    return (
        <div>
        {!preview &&
        <div> <br/>       < input
            value={widget.src}
            onChange={event => {
                widget.src = event.target.value
                updateWidget(widget, widgets)
            }}
            className="form-control" placeholder="Image src/url"/>
    <h3>Preview</h3>
        </div>

        }
    <img height="200" width="300" src={widget.src}/>
        </div>
    )
    }

export default ImageWidget