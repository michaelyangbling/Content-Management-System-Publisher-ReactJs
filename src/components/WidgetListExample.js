//widget list is static for example
import React,{Component} from 'react'
export default class WidgeList extends Component{
    render(){
        return (
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


                <div className="border border-primary" style={{padding:"20px","margin": "3px"}}>
                    <div className="row">
                        <h3 className="col-4"> Heading Widget </h3>
                        <i className="col-2 btn fas fa-2x fa-arrow-alt-circle-down"  name="down"></i>
                        <i className="col-2 btn fas fa-2x fa-arrow-alt-circle-up"  name="up"></i>
                        <select className="col-2" name="selectWidget">
                            <option value="heading">heading</option>
                            <option value="paragraph">paragraph</option>
                            <option value="list">list</option>
                            <option value="image">image</option>
                            <option value="link">link</option>
                        </select>
                        <i className="btn col-2 fas fa-2x fa-trash-alt"  name="delete"></i>
                    </div>
                    <br/>
                    <input className="form-control" placeholder="Heading text"/>
                    <br/>
                    <select className="form-control" name="selectHeadingSize">
                        <option value="heading 1">heading 1</option>
                        <option value="heading 2">heading 2</option>
                        <option value="heading 3">heading 3</option>
                    </select>
                    <br/>
                    <input className="form-control" placeholder="Widget Name"/>
                    <br/>
                    <h3>Preview</h3>
                    <h1>Heading text</h1>
                </div>

                <div className="border border-primary" style={{padding:"20px","margin": "3px"}}>
                    <div className="row">
                        <h3 className="col-4"> Text Widget </h3>
                        <i className="col-2 btn fas fa-2x fa-arrow-alt-circle-down"  name="down"></i>
                        <i className="col-2 btn fas fa-2x fa-arrow-alt-circle-up"  name="up"></i>
                        {/* do not use select" warn "" */}
                        <select className="col-2" name="selectWidget">
                            <option value="heading">heading</option>
                            <option value="paragraph" selected>paragraph</option>
                            <option value="list">list</option>
                            <option value="image">image</option>
                            <option value="link">link</option>
                        </select>
                        <i className="btn col-2 fas fa-2x fa-trash-alt" name="delete"></i>
                    </div>
                    <br/>
                    <label htmlFor="textBox">Enter text below and use bottom-right corner of the box to resize vertically</label>
                    <textarea className="form-control" placeholder="paragraph text" id="textBox"></textarea>
                    <br/>
                    <input className="form-control" placeholder="Widget Name" name="paragraphWidgetName"/>
                    <br/>
                    <h3>Preview</h3>
                    <p>paragraph text</p>
                </div>

                {/* <div class="border border-primary" style="padding:20px; margin:3px">
<div class="row">
  <h3 class="col-4"> List Widget </h3>
  <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-down" onclick="location.href='#'" name="down"></i>
  <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-up" onclick="location.href='#'" name="up"></i>
  <select class="col-2" name="selectWidget">
    <option value="heading">heading</option>
    <option value="paragraph">paragraph</option>
    <option value="list" selected>list</option>
    <option value="image">image</option>
    <option value="link">link</option>
  </select>
  <i class="btn col-2 fas fa-2x fa-trash-alt" onclick="location.href='#'" name="delete"></i>
</div>
<br/>
<label for="listBox">Enter one list item each row and use bottom-right corner of the box to resize vertically</label>
<textarea class="form-control" placeholder="put
each item
in a seperate row" id="listBox">
put
each item
in a row
</textarea>
<br/>
<select class="form-control" name="selectHeadingSize">
    <option value="ordered list">ordered list</option>
    <option value="unordered list" active>unordered list"</option>
</select>
<br/>
<input class="form-control" placeholder="Widget Name" name="listWidgetName"/>
<br/>
<h3>Preview</h3>
<ul>
  <li>put</li>
  <li>each item</li>
  <li>in a seperate row</li>
</ul>
</div>

<div class="border border-primary" style="padding:20px; margin:3px">
<div class="row">
  <h3 class="col-4">

  Image Widget </h3>
  <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-down" onclick="location.href='#'" name="down"></i>
  <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-up" onclick="location.href='#'" name="up"></i>
  <select class="col-2" name="selectWidget">
    <option value="heading">heading</option>
    <option value="paragraph">paragraph</option>
    <option value="list">list</option>
    <option value="image" selected>image</option>
    <option value="link">link</option>
  </select>
  <i class="btn col-2 fas fa-2x fa-trash-alt" onclick="location.href='#'" name="delete"></i>
</div>
<br/>
<input class="form-control" placeholder="iamge url" value="https://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-9.jpg" name="imgUrl"/>
<br/>
<input class="form-control" name="imageWidgetName" placeholder="widget name"/>
<br/>
<h3>Preview</h3>
<img height="200" width="300" src="https://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-9.jpg" alt="cannot load img from internet"/>
</div>

<div class="border border-primary" style="padding:20px; margin:3px">
<div class="row">
  <h3 class="col-4">

  Link Widget </h3>
  <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-down" onclick="location.href='#'" name="down"></i>
  <i class="col-2 btn fas fa-2x fa-arrow-alt-circle-up" onclick="location.href='#'" name="up"></i>
  <select class="col-2" name="selectWidget">
    <option value="heading">heading</option>
    <option value="paragraph">paragraph</option>
    <option value="list">list</option>
    <option value="image">image</option>
    <option value="link" selected>link</option>
  </select>
  <i class="btn col-2 fas fa-2x fa-trash-alt" onclick="location.href='#'" name="delete"></i>
</div>
<br/>
<input class="form-control" placeholder="link url" value="https://www.youtube.com/" name="linkUrl"/>
<br/>
<input class="form-control" placeholder="link text" value="youtube" name="linkText"/>
<br/>
<input class="form-control" placeholder="widget name" name="linkWidgetName"/>
<br/>
<h3>Preview</h3>
<a href="https://www.youtube.com/">youtube</a>
</div> */}

            </div>
        )
    }
}