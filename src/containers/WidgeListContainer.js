import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import WidgetReducer from '../reducers/WidgetReducer.js'

const someStore =
    createStore(WidgetReducer)

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatchToPropertyMapper = dispatch => ({
    loadWidget: widgets => {
        console.log("lodaing widgets")
        dispatch({
            type: 'LOAD_WIDGET',
            widgets: widgets
        })
    },
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
})

//https://react-redux.js.org/using-react-redux/connect-mapdispatch
const WidgetListContainer = connect(
    stateToPropertyMapper,dispatchToPropertyMapper
)(WidgetList)

const App = ({widgets}) => (
    <Provider store={someStore}>
        <WidgetListContainer curWidgets={widgets}/>
    </Provider>)

export default App



