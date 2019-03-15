import React from 'react'

const ListWidget = ({updateWidget, widgets, widget, preview}) =>{
    console.log("lstcool", widget)
    return (
        <div>
            {!preview &&
            <div>
                <label htmlFor={"listBox"+widget.id}>Enter text below and use bottom-right corner of the box to resize vertically</label>
                <textarea className="form-control" placeholder={"list\ntext\nby\nline"} value={widget.items}
                          onChange={event => {
                              widget.items = event.target.value
                              updateWidget(widget, widgets)
                          }} id={"listBox"+widget.id}></textarea>
                <br/>
                <select className="form-control"  onChange={event => { //default is unordered
                                                widget.list = event.target.value
                                                updateWidget(widget, widgets)
                     }} value={ !( widget.list===null || (typeof widget.list === 'undefined') ) ? widget.list : 'ul'}>
                    <option value="ol">ordered list</option>
                    <option value="ul">unordered list</option>
                </select>
                <h3>Preview</h3>
            </div>

            }

            {
                !( widget.item===null || (typeof widget.item === 'undefined') ) 
                &&  
                        ( widget.list===null || (typeof widget.list === 'undefined') ) && //default type is unordered, default item is undefined or null
                        <ul>
                            {'items' in widget ? widget.items.split('\n').map(item=><li>{item}</li>) : null}
                        </ul>}
                        {widget.list==="ul" &&
                            <ul>
                                {'items' in widget ? widget.items.split('\n').map(item=><li>{item}</li>) : null}
                            </ul>}
                        {widget.list==="ol" &&
                        <ol>
                            {'items' in widget ? widget.items.split('\n').map(item=><li>{item}</li>) : null}
                        </ol>}

        </div>


    )
    }

export default ListWidget

//
// <div class="border border-primary" style="padding:20px; margin:3px">
//     <div class="row">
//     <h3 class="col-4"> List Widget </h3>
// <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-down" onclick="location.href='#'" name="down"></i>
// <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-up" onclick="location.href='#'" name="up"></i>
// <select class="col-2" name="selectWidget">
//     <option value="heading">heading</option>
//     <option value="paragraph">paragraph</option>
//     <option value="list" selected>list</option>
//     <option value="image">image</option>
//     <option value="link">link</option>
// </select>
// <i class="btn col-2 fas fa-2x fa-trash-alt" onclick="location.href='#'" name="delete"></i>
// </div>
// <br>
//     <label for="listBox">Enter one list item each row and use bottom-right corner of the box to resize vertically</label>
//     <textarea class="form-control" placeholder="put
//     each item
//     in a seperate row" id="listBox">
//     put
//     each item
//     in a row
//     </textarea>
//     <br>
//         <select class="form-control" name="selectHeadingSize">
//             <option value="ordered list">ordered list</option>
//             <option value="unordered list" active>unordered list"</option>
//         </select>
//         <br>
//             <input class="form-control" placeholder="Widget Name" name="listWidgetName">
//                 <br>
//                     <h3>Preview</h3>
//                     <ul>
//                         <li>put</li>
//                         <li>each item</li>
//                         <li>in a seperate row</li>
//                     </ul>
//                 </div>