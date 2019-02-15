import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import './CourseCard.css'
class CourseCard extends Component {
    constructor(props){super(props)
        this.name=""
        this.state={edit:false}
    }
    editCourse=()=>{
        this.setState({edit: true})
    }

    undoEdit=()=>{
        this.setState({edit: false})
    }

    setName=(event)=>{
        //console.log("changed")
        this.name=event.target.value
        this.setState({})

    }
    changeName=()=>{
        this.props.changeName2(this.props.course.id, this.props.course, this.name)
        this.setState({edit: false})
    }
  deleteCourse  = () => {this.props.deleteCourse(this.props.course); return null}
  render() {
    return(
      <div className="card" style={{margin: "4px"}}>
        <img className="card-img-top"
             src="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1085%2Cy_0%2Cw_2578%2Ch_3437%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_757946224.jpg"/>
        <div className="card-body">
          <div className="card-title">
              <form>
                  <Link  to={`/editCourse/${this.props.course.id}`}>
                      <button className="form-control btn btn-primary" style={{overflow:"hidden", whiteSpace: "nowrap"}}>
                          {this.props.course.title}
                      </button>
                  </Link>
              </form>

          </div>
          <div className="card-text">
          <p>
              Last Modified Time:
          </p>
          </div>
            {this.state.edit===true?
                <form>
                    <input placeholder="change name" onChange={this.setName}
                           value={this.name} className="form-control"/>
                    <i onClick={this.changeName} className="btn fa fa-check"> </i>
                    <i onClick={this.undoEdit} className="btn float-right fa fa-times"> </i>
                </form>
                :
                <div>
                    <i onClick={this.deleteCourse}
                       className="float-left btn fa fa-times fa-1x" style={{color:"red"}}></i>
                    <i onClick={this.editCourse} style={{margin:"1px"}}
                       className="float-right btn fa fa-pencil fa-1x"></i>
                </div>}
          {/*<i className="fa fa-times fa-3x btn card-text" onClick={this.deleteCourse}></i>*/}
        </div>
      </div>
    )
  }
}

export default CourseCard;