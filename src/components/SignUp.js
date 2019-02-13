import React,{Component} from 'react'
import CourseService from '../services/CourseService'
import {Link}  from 'react-router-dom'

export default class SignUp extends Component{
    constructor(props){
        //console.log("constrcuted")
        super(props)
        this.courseService=new CourseService()
        this.username=""
        this.password=""
        this.password2=""
        this.state={}
    }
    signup=()=>{
        console.log(this.password, this.password2)
        if (this.password!==this.password2){
            alert("2 passwords not match!")
            return null}
        console.log('sbm')
        this.courseService.signup(this.username, this.password, (res)=>{
            //console.log(res)
            if (res.username===null)
                alert("username exist")
            else
                this.props.update()
        })
    }
    render(){
        return (
            <div>
                <h1 className="color">Register</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="usernameFld"
                               className="col-sm-2">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   placeholder="OxyB"
                                   id="usernameFld"
                                   value={this.username}
                                   onChange={(event)=>{this.username=event.target.value;
                                       this.setState({})}}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld"
                               className="col-sm-2">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   type="password"
                                   placeholder="!@#$QWERzxc"
                                   id="passwordFld"
                                   value={this.password}
                                   onChange={(event)=>{this.password=event.target.value;
                                       this.setState({})}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verifyPasswordFld"
                               className="col-sm-2">
                            verify password
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   type="password"
                                   placeholder="!@#$QWERzxc"
                                   id="verifyPasswordFld"
                                   value={this.password2}
                                   onChange={(event)=>{this.password2=event.target.value;
                                       this.setState({})}}
                            />
                        </div>
                    </div>
                    <div className="from-group row">
                        <label className="col-sm-2"></label>
                        <div className="col-sm-10">
                            <button type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={this.signup}>
                                Sign up
                            </button>
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/login">log in</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}







