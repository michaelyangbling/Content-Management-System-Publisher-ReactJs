import courses from './test.json'
export var isAuth=null
export default class CourseService{ 
    constructor(){
        this.courses=courses
        this.findAllCourses=this.findAllCourses.bind(this)
        this.deleteCourse=this.deleteCourse.bind(this)
        this.url="http://localhost:8080/api"
        this.login=null
    }

    // checkLogIn = () =>{
    //     //console.log(3)
    //     const sync=async ()=> {
    //         const wait1 = await fetch(this.url + "/checkLogIn")
    //         //console.log(wait1)
    //         const wait2=await wait1.json()
    //         const contentType =wait1.headers.get("content-type")
    //         console.log('type',contentType)
    //         if(contentType && contentType.indexOf("application/json") !== -1){
    //         //   var wait2=await wait1.json()
    //             console.log(wait1)
    //             console.log("true")
    //             this.login=true}
    //         else{
    //             console.log(wait1)
    //             console.log("false")
    //             this.login=false}
    //           //console.log('t')
    //         //console.log(wait2)
    //         //console.log(json)
    //         // console.log(res())
    //         return wait2
    //     }
    //     //console.log(sync())
    //     //console.log(typeof sync()!=='undefined')
    //     // sync().then(data=>{this.wait=data;console.log(data)})
    //     // console.log(this.wait)
    //     sync().then((res)=>console.log('out',res))
    //     return this.login

    checkAuth = (callback) =>{
         fetch(this.url+"/checkLogIn", {credentials: 'include'}).then(function(res){
            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(function(response){
             return response.json()
        }).then(callback).catch(function(error){alert("error check connection")})







    }

    signin=(username, password, callback) =>{
        return fetch(this.url+"/login", {method: 'POST',
            body: JSON.stringify({username:username, password: password}),
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(callback)
            .catch(function(error){alert("error check connection")
        ;console.log(error)})
    }

    signup=(username, password, callback) =>{
        //console.log("signup")
        return fetch(this.url+"/register", {method: 'POST',
            body: JSON.stringify({username:username, password: password}),
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(callback)
            .catch(function(error){alert("error check connection")
            })
    }

    logout=(callback)=>{
        return fetch(this.url+"/logout", {method: 'POST',
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(callback)
            .catch(function(error){alert("error check connection")
            })
    }

    addModule=(input, courseId)=>{
        //server update
        this.findCourseById(courseId).modules.push({title: input, lessons: []})
    }


    deleteModule=(courseId, module, moduleIndex)=>{
        //server update using courseId
        module.splice(moduleIndex, 1)
    }

    changeModuleTitle=(courseId, moduleIndex, name)=>{
        //server update using courseId...moduleIndex
        this.findCourseById(courseId).modules[moduleIndex].title=name
    }

    addLesson=(input, courseId, moduleIndex)=>{
        //server update
        this.findCourseById(courseId).modules[moduleIndex].lessons.push({title: input, topics: []})
    }

    deleteLesson=(courseId, moduleIndex, index)=>{
        //server update
        this.findCourseById(courseId).modules[moduleIndex].lessons.splice(index,1)
    }
    addTopic=(input, courseId, moduleIndex, lessonIndex)=>{
        //console.log(this.findCourseById(courseId).modules[moduleIndex], lessonIndex)
        //server update
        this.findCourseById(courseId).modules[moduleIndex].lessons[lessonIndex].topics.push({title: input, widgets: []})
    }

    deleteTopic=(courseId, moduleIndex, lessonIndex, topicIndex)=>{
        //server update
        this.findCourseById(courseId).modules[moduleIndex].lessons[lessonIndex].topics.splice(topicIndex, 1)
    }
    findAllCourses(){ //arrow function bind this to original scope
        return this.courses
    }
    findCourseById = courseId => //can only in client?
    this.course = this.courses.find(
      course => course.id === courseId
    )

    deleteCourse(course){
        this.courses=this.courses.filter( x => x.id!==course.id)
        return this.courses
    }
}