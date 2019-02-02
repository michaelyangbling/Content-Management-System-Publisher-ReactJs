import courses from './test.json'
export default class CourseService{ 
    constructor(){
        this.courses=courses
        this.findAllCourses=this.findAllCourses.bind(this)
        this.deleteCourse=this.deleteCourse.bind(this)
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