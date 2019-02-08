import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import WidgetReducer from '../reducers/WidgetReducer.js'
import HeadingWidget from '../components/HeadingWidget'
const someStore =
    createStore(WidgetReducer)

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatchToPropertyMapper = dispatch => ({
    loadWidget: widgets => {
        //console.log("lodaing widgets")
        dispatch({
            type: 'LOAD_WIDGET',
            widgets: widgets
        })
    },
    deleteWidget: widgetIndex =>
        dispatch({
            type: 'DELETE_WIDGET',
            widgetIndex: widgetIndex
        }),
    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),
    updateHead: widget =>
        dispatch({
            type: 'UPDATE_HEAD',
            widget: widget
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
// reducer-state-store-provider-container-component

const App = ({widgets}) => (
    <Provider store={someStore}>
        <WidgetListContainer curWidgets={widgets}/>
    </Provider>)

export default App



