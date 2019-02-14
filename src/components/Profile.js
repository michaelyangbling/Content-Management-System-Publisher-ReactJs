import React,{Component} from 'react'
import UserService from '../services/UserService'

import {Link}  from 'react-router-dom'
export default class Profile extends Component{
    constructor(props){
        console.log("mount pro")

        super(props)
        this.userService=new UserService()
        this.state={username:"", firstname:"", lastname:""}
    }
    componentDidMount(){
        this.userService.profile((res)=>{
            console.log(res)
            if (res.username===null){
                alert("session expired")
                this.props.update()// will not come in again
            }
            else
                this.setState({username:res.username, firstname: res.firstname, lastname:res.lastname})
        })
    }
    componentWillReceiveProps(){ //not triggered when mount
        //console.log('up')
        this.userService.profile((res)=>{
            console.log(res)
            if (res.username===null){
                alert("session expired")
                this.props.update()// will not come in again
                 }
            else
                this.setState({username:res.username, firstname: res.firstname, lastname:res.lastname})
        })
    }

    updateProfile=()=>{
        this.userService.updateProfile(this.state.firstname, this.state.lastname, (res)=>{
            //console.log(res)
            if (res.username===null){
                alert("session expired")
                this.props.update()// will not come in again
                }
            else
                alert("update successful")
        })
    }
    render(){
        return (
            <div>
                <h1 className="color">Profile</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" value={this.state.username} readOnly id="username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="firstname"
                               className="col-sm-2">
                            firstname
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   placeholder="michael"
                                   id="firstname"
                                   value={this.state.firstname}
                                   onChange={(event)=>{
                                       this.setState({firstname: event.target.value})}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastname"
                               className="col-sm-2">
                            lastname
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   placeholder="yang"
                                   id="lastname"
                                   value={this.state.lastname}
                                   onChange={(event)=>{
                                       this.setState({lastname: event.target.value})}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2"></label>
                        <div className="col-sm-10">
                            <button type="button"
                                    className="btn btn-primary btn-block greenBackground"
                                onClick={this.updateProfile}>
                                Update
                            </button>

                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2"></label>
                        <div className="col-sm-10">
                            <Link
                                    to="/course/table"
                                    className="btn btn-secondary btn-block">
                                Home
                            </Link>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

