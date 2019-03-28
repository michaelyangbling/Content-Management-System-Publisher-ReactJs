//WhiteBoard Container
import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect}  from 'react-router-dom'
//import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../../node_modules/jquery/dist/jquery.min.js'
// import '../../node_modules/font-awesome/css/font-awesome.css';
//a link can go to multiple routes
import './courseList.style.client.css';
import CourseTable from './CourseTable'
import CourseGrid from './CourseGrid'
import CourseService from '../services/CourseService'
import  UserService, {isAuth} from '../services/UserService'
import CourseEditor from '../components/CourseEditor'
import LogIn from '../components/LogIn.js'
import SignUp from '../components/SignUp.js'
import Profile from '../components/Profile.js'
//install router: npm i react-router-dom --save  fails but work, npm install --2save react-router-dom fails
//onClick
class WhiteBoard extends React.Component{
    constructor(){
        super()
        this.courseService = new CourseService()
        this.userService = new UserService()
        this.state={checkedAuth:false}
        this.title="new course name"
        this.deleteCourse=this.deleteCourse.bind(this)
    }

    componentDidMount() {
        this.update()
        // this.userService.checkAuth((res) => {
        //     //console.log("mem",res)
        //     if (res === 1)
        //         this.setState({checkedAuth: true, isAuth: true})
        //     else
        //         this.setState({checkedAuth: true, isAuth: false})
        //
        // })
    }


    logout=()=>{
        this.userService.logout(()=>this.setState({checkedAuth: true, isAuth: false}))
    }

    update=()=>( //probable duplicate request if called
        this.userService.checkAuth((res) => {
            //console.log("memx",res)
            if (res === 1)
                this.courseService.findAllCourses(
                    (res)=> {//better to check null response due to session expire here, but very little probability

                          this.courseService.courses=res
                        this.setState({checkedAuth: true, isAuth: true, courses:this.courseService.courses})
                    } )
            else
                this.setState({checkedAuth: true, isAuth: false})

        })

    )

    deleteCourse(course){
        console.log(3,course)
        this.courseService.deleteCourse(course.id, (res)=>{
            console.log('wtf')
            this.courseService.courses=res
            this.setState({courses: this.courseService.courses})
        })
    }

    createCourse=()=>{
            this.courseService.createCourse(
                this.title, (res)=>{
                    //console.log(res)
                    this.courseService.courses=res
                    this.setState({courses: this.courseService.courses})} //id are numbers
            )
    }




    render(){
        console.log('update')
        //console.log('c',this.state.checkedAuth, isAuth )
      return(
      //Router  contain at most one node, Link/Route should be in Router, so make Router the root
        <Router>
          <div className="container-fluid">
              {this.state.checkedAuth && <Route path="/editCourse/:id"
                                                render={({match})=>{
                                                    return(
                                                        !this.state.isAuth ? <Redirect to="/login"/> :
                                                    <CourseEditor courseId={parseInt(match.params.id)}/>)}} //would re-construct an instance?
            />}


            {/*//redirect if logged in unexpected mount?*/}
              {this.state.checkedAuth && <Route exact path="/login"
                                                render={()=>
                                                    this.state.isAuth ? <Redirect to="/course/table"/> :<LogIn update={this.update}/>}/>}

              {this.state.checkedAuth && <Route exact path="/signup"
                                                render={()=>
                                                    this.state.isAuth ? <Redirect to="/course/table"/> :<SignUp update={this.update}/>}/>}

            {/* nav bar and add icon on bottom right */}

              {this.state.checkedAuth && <Route exact path="/profile"
                                                render={()=>
                                                    (!this.state.isAuth ? <Redirect to="/login"/> :<Profile update={this.update}/>)}/>}



              {this.state.checkedAuth && <Route path="/course"  render={()=> {
                //console.log('is',isAuth) rendered again?
                return (
                    !this.state.isAuth ? <Redirect to="/login"/> :

                        <div style={{paddingTop: 80 + "px"}}>
                            <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-info">
                                <a className="navbar-brand" href="#">
                                    Content publisher</a>
                                <Link to="/course/table" style={{color: "white"}}><b>Table-View&nbsp;&nbsp;</b></Link>
                                <i></i>
                                <Link to="/course/grid" style={{color: "white"}}><b>Grid-View </b></Link>
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
                                            <a className="nav-link" href="https://client-view-angular.herokuapp.com/course">client view</a>
                                        </li>

                                        <li className="nav-item active">
                                            <a className="nav-link" href="#" onClick={this.logout}>Log out</a>
                                        </li>

                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/profile">Profile</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <input placeholder="New Course Title" className="form-control"
                                                   id="createNewCourse" value={this.title}
                                                   onChange={(event)=>{this.title=event.target.value;
                                                   this.setState({}) }}/>
                                        </li>
                                        <li className="nav-item active">
                    <span className="fa-stack btn red" onClick={this.createCourse}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                                        </li>
                                    </ul>
                                </div>

                            </nav>

                            <Route path="/course/table" //path "/" is always OK for path understanding
                                   render={() => <CourseTable courses={this.state.courses}
                                                              deleteCourse={this.deleteCourse}/>}/>
                            <Route path="/course/grid"
                                   render={() => <CourseGrid courses={this.state.courses}
                                                             deleteCourse={this.deleteCourse}/>}/>
                            {/* <Router>
            <div>
                <Route path="/course/table"
                        render={() => <CourseTable courses={this.courses}/>}/>
                <Route path="/course/grid"
                        render={() => <CourseTable courses={this.courses}/>}/>
            </div>
            </Router> */}
                            <span className="fa-stack wd-bottom-right btn" onClick={this.createCourse}>
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
              </span>
                        </div>
                )
            }

              }//render ends here



            />}
            {/* end of course route */}


          </div>
        </Router>
        )
    }
}
export default WhiteBoard
