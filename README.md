Course Management System Web Application

•	Developed a mobile-friendly web application by React.js and Redux etc. for frontend, Spring and MySQL for backend, where users can register, login, create, read, update, delete their hierarchical courses, modules, topics and widgets etc. 		( Note: use chrome, refresh to wake up heroku server in case of no response )

•	Login with username “a” and password “a” to see how it works


heroku website may be unavailable since heroku free trial expires


https://michael-yang-react.herokuapp.com/course

React web application, now support getting and deleting courses in frontEnd, js service not yet connected to back end

Users can view modules->lessons->topics structure by selecting modules->lessons->topics sequentially

Users can click course name, then create, delete,edit  modules->lessons->topics,

Selected modules or lessonsor topics tabs will be bigger.

Creating modules or lessons or topics will auto-select new module or lesson or topic

Deleting modules or lessons or topics will auto-select first module or lesson or topic

Editing Modules or lessons or topics is independent of whether it is  selected or not

Using indexes as id except for lesson id and module id("time")

courses->modules->lessons->topics, latter part need previous one to exist

list in list widget is unordered by default
update would occur if there is change in widget

JUMP TO FIRST MODULE AFTER DELETING




MERN Stack in branch development, 
widgets would update before saving( to server)
but other courses->modules->lessons->topics would only update successfully if server responds( not influencing other updates
)



React ReadME:


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
