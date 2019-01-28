import courses from './test.json'
export default class CourseService{ 
    constructor(){
        this.courses=courses
        this.findAllCourses=this.findAllCourses.bind(this)
        this.deleteCourse=this.deleteCourse.bind(this)
    }
    findAllCourses(){ //arrow function bind this to original scope
        return this.courses
    }
    findCourseById = courseId =>
    this.course = this.courses.find(
      course => course.id === courseId
    )

    deleteCourse(course){
        this.courses=this.courses.filter( x => x.id!==course.id)
        return this.courses
    }
}