import React,{Component} from 'react'
import CourseService from '../services/CourseService'
import {Link}  from 'react-router-dom'
export default class LogIn extends Component{
    constructor(props){

        super(props)
        this.courseService=new CourseService()
        this.username=""
        this.password=""
        this.state={}
    }
    signin=()=>{
        this.courseService.signin(this.username, this.password, (res)=>{
            console.log(res)
            if (res.username===null)
                alert("username or password incorrect")
            else
                this.props.update()
        })
    }
    render(){
        return (
            <div>
                <h1 className="color">Sign In</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10" >
                            <input className="form-control"
                                   id="username"
                                   placeholder="Alice"
                                   value={this.username}
                                    onChange={(event)=>{this.username=event.target.value;
                                            this.setState({})}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password" placeholder="123qwe#$%"
                                   value={this.password}
                                   onChange={(event)=>{this.password=event.target.value;
                                            this.setState({})} }/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={this.signin}>Sign in</button>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <div className="col-6">
                                    <Link to="/signup" className="float-right">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

