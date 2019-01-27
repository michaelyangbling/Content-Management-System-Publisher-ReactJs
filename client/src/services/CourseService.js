const url= "http://localhost:3001/api/url"

export default class CourseService {
    constructor(){
    }

    findAllCourses(){
        return fetch(url).then(res => res.json())
    }
}


