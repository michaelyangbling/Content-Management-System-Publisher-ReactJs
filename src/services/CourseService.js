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