import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/font-awesome/css/font-awesome.css';
//node_modules files and coded css can be propogated to children modules...
import WhiteBoard from "./containers/WhiteBoard";
import * as serviceWorker from './serviceWorker';
//npm install bootstrap --save fails
//Do nothing if this module has already been evaluated. Otherwise, transitively evaluate all module dependences of this module and then evaluate this module
//https://stackoverflow.com/questions/37325667/does-es6-module-importing-execute-the-code-inside-the-imported-file

ReactDOM.render(
    <div className="container-fluid">
        <WhiteBoard/>
    </div>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



