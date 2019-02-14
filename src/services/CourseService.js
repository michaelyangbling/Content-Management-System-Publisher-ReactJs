//import courses from './test.json'
//var courses=[] //only one courses object, so never use = assignment later
export default class CourseService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.courses=[]
        this.findAllCourses=this.findAllCourses.bind(this)
        this.deleteCourse=this.deleteCourse.bind(this)
        this.url="https://still-basin-44392.herokuapp.com/api"
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

    createCourse=(title, callback)=>{
        return fetch(this.url+"/user/course", {method: 'POST',
            body: JSON.stringify({title: title}),
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(callback)
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            ;console.log(error)})
    }
    findAllCourses(callback){ //arrow function bind this to original scope
        fetch(this.url+"/user/courses", {credentials: 'include'}).then(function(res){
            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(function(response){
            return response.json()
        }).then(callback).catch(function(error){alert("error check connection/ try refresh")})

    }
    findCourseById = courseId => //can only in client?
    this.course = this.courses.find(
      course => course.id === courseId
    )

    deleteCourse(numId, callback){
        return fetch(this.url+"/user/course"+"/" +String(numId), {method: 'DELETE',
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(callback)
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            ;console.log(error)})

        return this.courses
    }
}