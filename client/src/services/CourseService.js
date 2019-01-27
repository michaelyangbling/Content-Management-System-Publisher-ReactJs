const url= "http://localhost:3001/api/user"
import axios from "axios";

export default class CourseService {
    constructor(){
    }

    findAllCourses(){
        return fetch(url).then(res => res.json())
    }

    createCourse(id, course){
        return axios.post(url, {id: id, message: course})
    }
}


