//WhiteBoard Container
import React from 'react';
import {BrowserRouter as Router, Route, Link}  from 'react-router-dom'
//import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../../node_modules/jquery/dist/jquery.min.js'
// import '../../node_modules/font-awesome/css/font-awesome.css';
import './courseList.style.client.css';
import CourseTable from './CourseTable'
import CourseGrid from './CourseGrid'
import CourseService from '../services/CourseService'
//install router: npm i react-router-dom --save  fails but work, npm install --save react-router-dom fails
//onClick
class WhiteBoard extends React.Component{
    constructor(){
        super()
        this.courseService = new CourseService()
        this.state={courses: this.courseService.findAllCourses()}
        this.deleteCourse=this.deleteCourse.bind(this)
    }

    deleteCourse(course){
      this.setState({courses: this.courseService.deleteCourse(course)})
    }
    render(){ 
      return(
      //Router  contain at most one node, Link/Route should be in Router, so make Router the root
        <Router>
        <div style={{paddingTop: 80 + "px"}}>
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-info"> 
        <a className="navbar-brand" href="#">
         Course Manager</a>
         <Link to="/course/table" style={{color:"white"}}><b>Table-View&nbsp;&nbsp;</b></Link>
          <i></i>
          <Link to="/course/grid" style={{color:"white"}}><b>Grid-View    </b></Link>
        {/* <Router>
          <div>
          <Link to="/course/table"><b>Table</b></Link>
          <i> Or </i>
          <Link to="/course/grid"><b>Grid</b></Link>
          </div>
        </Router> */}
        <button className="navbar-toggler"
                 type="button"
                 data-toggle="collapse"
                 data-target="#MyNavbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="MyNavbarNavDropdown"> 
           <ul className="navbar-nav">
             <li className="nav-item active">
               <a className="nav-link" href="#">Home</a>
             </li>
      
             <li className="nav-item active">
               <a className="nav-link" href="#">Log in</a>
             </li>
      
             <li className="nav-item active">
               <a className="nav-link" href="#">Profile</a>
             </li>
             <li className="nav-item active" >
               <input placeholder="New Course Title" className="form-control" id="createNewCourse"/>
             </li>
             <li className="nav-item active" >
               <span className="fa-stack btn red"> 
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
               </span>
             </li>
           </ul>
        </div>
      
        </nav>
      
      <Route path="/course/table"
                  render={() => <CourseTable courses={this.state.courses} deleteCourse={this.deleteCourse}/>}/>
      <Route path="/course/grid"
                  render={() => <CourseGrid courses={this.state.courses} deleteCourse={this.deleteCourse}/>}/>
      {/* <Router>
      <div>
          <Route path="/course/table"
                  render={() => <CourseTable courses={this.courses}/>}/>
          <Route path="/course/grid"
                  render={() => <CourseTable courses={this.courses}/>}/>
      </div>
      </Router> */}
      <span className="fa-stack wd-bottom-right btn">
      <i className="fa fa-circle fa-stack-2x" ></i>
      <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
      </span>
      </div>
      </Router>
        )
    }
}
export default WhiteBoard
