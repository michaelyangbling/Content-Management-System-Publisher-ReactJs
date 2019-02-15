//import courses from './test.json'
//var courses=[] //only one courses object, so never use = assignment later

//change object in place to avoid unneccessary stacked mounting and props;
//point to new res object only when on the "top" component
//so maybe only courses "update" and "delete" can achieve server state
export default class CourseService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.course=null
        this.courses=[]
        this.findAllCourses=this.findAllCourses.bind(this)
        this.deleteCourse=this.deleteCourse.bind(this)
        this.url="http://localhost:8080/api"
        //this.url="https://still-basin-44392.herokuapp.com/api"
    }

    addModule=(input, courseId, callback)=>{
        //server update
        return fetch(this.url+"/course/" + String(courseId)+"/module", {method: 'POST',
            body: JSON.stringify({title: input}),
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then((res)=>{
            this.findCourseById(courseId).modules.push({id: res.id, title: input, lessons: []});
            callback()}
        )
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            })
    }


    deleteModule=(courseId, modules, moduleIndex, callback)=>{
        //server update using courseId
        return fetch(this.url+"/module/" + String(modules[moduleIndex].id), {method: 'DELETE',
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(()=>{
            modules.splice(moduleIndex, 1);//better use res's id to delete module
            callback()}
        )
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            })


    }
//api/modules/{mid}
    changeModuleTitle=(courseId, moduleIndex, name, callback)=>{
        const module=this.findCourseById(courseId).modules[moduleIndex]
        return fetch(this.url+"/module/" + String(module.id), {method: 'PUT',
            headers: new Headers({'Content-type': 'application/json'}),
            body: JSON.stringify({title: name}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(()=>{
            module.title=name;
            callback();}
        )
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            })

        //server update using courseId...moduleIndex

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
        console.log(2,numId)
         fetch(this.url+"/user/course"+"/" +String(numId), {method: 'DELETE',
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(callback)
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            console.log(1,error)})

}

    changeCourseTitle(numId, title, callback){
         fetch(this.url+"/user/course"+"/" +String(numId), {method: 'PUT',
            headers: new Headers({'Content-type': 'application/json'}),
            body: JSON.stringify({title: title}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(callback)
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            ;console.log(error)})
    }
}