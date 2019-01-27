//WhiteBoard Container
import React from 'react';
import {BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../node_modules/jquery/dist/jquery.min.js'
import '../../node_modules/font-awesome/css/font-awesome.css';
import './courseList.style.client.css';
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
//install router: npm i react-router-dom --save  fails but work, npm install --save react-router-dom fails
//onClick
class WhiteBoard extends React.Component{
  componentDidMount() {
    this.findAllCourses().then(res=>this.setState({[courses]:res}));
  }
    constructor(){
        super(props)
        this.courseService=new CourseService()
        //this.state={courses: []}
        this.courses=require('./test.json')}
    render(){ 
      return(
      //Router  contain at most one node, Link/Route should be in Router, so make Router the root
        <Router>
        <div style={{paddingTop: 60 + "px"}}>
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-info"> 
        <a className="navbar-brand" href="#">
         Course Manager</a>
         <Link to="/course/table"><b>Table</b></Link>
          <i> Or </i>
          <Link to="/course/grid"><b>Grid</b></Link>
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
      <span className="fa-stack wd-bottom-right btn">
      <i className="fa fa-circle fa-stack-2x" ></i>
      <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
      </span>
      <Route path="/course/table"
                  render={() => <CourseTable courses={this.courses}/>}/>
      <Route path="/course/grid"
                  render={() => <CourseTable courses={this.courses}/>}/>
      {/* <Router>
      <div>
          <Route path="/course/table"
                  render={() => <CourseTable courses={this.courses}/>}/>
          <Route path="/course/grid"
                  render={() => <CourseTable courses={this.courses}/>}/>
      </div>
      </Router> */}
      </div>
      </Router>
        )
    }
}
export default WhiteBoard
