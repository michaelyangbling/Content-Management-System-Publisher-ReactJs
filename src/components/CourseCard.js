import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import './CourseCard.css'
class CourseCard extends Component {
    constructor(props){super(props)
    }
  deleteCourse  = () => {this.props.deleteCourse(this.props.course); return null}
  render() {
    return(
      <div className="card" style={{margin: "4px"}}>
        <img className="card-img-top"
             src="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1085%2Cy_0%2Cw_2578%2Ch_3437%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_757946224.jpg"/>
        <div className="card-body">
          <div className="card-title">
          <Link className="card-title" to={`/editCourse/${this.props.course.id}`}>
                        {this.props.course.title}
          </Link>
          </div>
          <div className="card-text">
          <p>
              Last Modified Time:
          </p>
          </div>
          <i className="fa fa-times fa-3x btn card-text" onClick={this.deleteCourse}></i>
        </div>
      </div>
    )
  }
}

export default CourseCard;