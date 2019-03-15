import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import WidgetReducer from '../reducers/WidgetReducer.js'

import WidgetService from "../services/WidgetService"
const widgetService = new WidgetService();

const someStore =
    createStore(WidgetReducer)

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})

const dispatchToPropertyMapper = dispatch => ({
    save: (tid, widgets)=>{
        widgetService.save(tid, widgets , ()=>{
            dispatch({
                type:'SAVE_WIDGET'
            });
            alert("this topic's widgets saved");
        })
    },

    loadWidget: widgets => {
        //console.log("lodaing widgets")
        dispatch({
            type: 'LOAD_WIDGET',
            widgets: widgets
        })
    },
    deleteWidget: (widgetIndex, widgets)=>
        dispatch({
            type: 'DELETE_WIDGET',
            widgetIndex: widgetIndex,
            widgets: widgets
        }),
    addWidget: (widgets) =>
        dispatch({
            type: 'ADD_WIDGET',
            widgets: widgets
        }),
    // updateHead: widget =>
    //     dispatch({
    //         type: 'UPDATE_HEAD',
    //         widget: widget
    //     }),
    updateWidget: (widget, widgets) =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget,
            widgets: widgets
        }),
    togglePreview: () =>
        dispatch({
            type: 'togglePreview'
        })
})

//https://react-redux.js.org/using-react-redux/connect-mapdispatch
const WidgetListContainer = connect(
    stateToPropertyMapper,dispatchToPropertyMapper
)(WidgetList)
// reducer-state-store-provider-container-component

const App = ({widgets, tid}) => (
    <Provider store={someStore}>
        <WidgetListContainer curWidgets={widgets} tid={tid}/>
    </Provider>)

export default App



