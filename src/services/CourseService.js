
//import courses from './test.json'
//var courses=[] //only one courses object, so never use = assignment later

//only one res object? singleton?
//change object in place to avoid unneccessary stacked mounting and props;
//point to new res object only when on the "top" component
//so maybe only courses "update" and "delete" can achieve server state
//use id to do server update, ony delete can be influenced by slow fetch and ops on same age, which can be avoided by handling
import port from "./port.js"
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
        this.url=port
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
            .catch(function(error){
                alert("you must delete child lessons, topics, and widgets first/ or session expired")
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

//api/lesson/{lid}
    changeLessonTitle=(lid, name, callback)=>{
        return fetch(this.url+"/lesson/" + String(lid), {method: 'PUT',
            headers: new Headers({'Content-type': 'application/json'}),
            body: JSON.stringify({title: name}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(()=>{
            callback();}
        )
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            })

        //server update using courseId...moduleIndex

    }


// /api/module/{mid}/lesson
    addLesson=(input, courseId, moduleIndex, callback2)=>{
        const module=this.findCourseById(courseId).modules[moduleIndex]
        //server update, use id for server for good, use module to update local to avoid local change during fetch
        const callback=(res)=>{module.lessons.push({id: res.id, title: input, topics: []})}
        fetch(this.url+"/module/" + String(module.id)+"/lesson", {method: 'POST',
            body: JSON.stringify({title: input}),
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then((res)=>{
            callback(res); callback2();}
        )
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            })


    }
// /api/lesson/{lid}
    deleteLesson=(courseId, moduleIndex, index, callback2)=>{
        //server update
        const lessons=this.findCourseById(courseId).modules[moduleIndex].lessons
        const callback=()=>lessons.splice(index,1)
        fetch(this.url+"/lesson/" + String(lessons[index].id), {method: 'DELETE',
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(()=>{
            callback();//better use res's id to delete module
            callback2();}
        )
            .catch(function(error){
                alert("you must delete child topics and widgets first/ or session expired")
            })
    }

// /api/lesson/{lid}/topic
    addTopic=(input, courseId, moduleIndex, lessonIndex, callback2)=>{
        //console.log(this.findCourseById(courseId).modules[moduleIndex], lessonIndex)
        //server update
        const lesson=this.findCourseById(courseId).modules[moduleIndex].lessons[lessonIndex]
        const callback=(res)=>lesson.topics.push({id:res.id, title: input, widgets: []})
        fetch(this.url+"/lesson/" + String(lesson.id)+"/topic", {method: 'POST',
            body: JSON.stringify({title: input}),
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then((res)=>{
            callback(res); callback2();}
        )
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            })

    }

    deleteTopic=(courseId, moduleIndex, lessonIndex, topicIndex, callback2)=>{
        //server update
        const topics=this.findCourseById(courseId).modules[moduleIndex].lessons[lessonIndex].topics
        const callback=()=>topics.splice(topicIndex, 1)

        fetch(this.url+"/topic/" + String(topics[topicIndex].id), {method: 'DELETE',
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(()=>{
            callback();//better use res's id to delete module
            callback2();}
        )
            .catch(function(error){
                alert("you must delete child widgets first/ or session expired"); console.log(error)
            })
    }

    changeTopicTitle=(tid, name, callback)=>{
        return fetch(this.url+"/topic/" + String(tid), {method: 'PUT',
            headers: new Headers({'Content-type': 'application/json'}),
            body: JSON.stringify({title: name}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(()=>{
            callback();}
        )
            .catch(function(error){alert("error, session may have expired, try refresh/ check connection/")
            })

        //server update using courseId...moduleIndex

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
            .catch(function(error){
                alert("you must delete child modules, lessons, topics, and widgets first/ or session expired")
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