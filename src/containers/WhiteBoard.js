//WhiteBoard Container
import React from 'react';
import {BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import CourseTable from './CourseTable'
//install router: npm i react-router-dom --save  fails but work, npm install --save react-router-dom fails
class WhiteBoard extends React.Component{
    constructor(){
        super()
        this.courses=require('./test.json')}
    render(){ return(<Router>
                    <div>
                        <Link to="/course/table">Table</Link>
                        |<Link to="/course/grid">Grid</Link>
                        <Route path="/course/table"
                                render={() => <CourseTable courses={this.courses}/>}/>
                        <Route path="/course/grid"
                                render={() => <CourseTable courses={this.courses}/>}/>
                    </div>
                    </Router>)
    }
}

export default WhiteBoard