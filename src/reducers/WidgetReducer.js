const defaultWidgets =
    {
        widgets: [
        ]
    }
const WidgetReducer = (state=defaultWidgets, action) => {//state initial is undefined
    switch(action.type) {
        // case 'DELETE_WIDGET':
        //     return {
        //         widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
        //     }
        case 'ADD_WIDGET':
            //course service and server update
            //console.log("adding")
            state.widgets.push({
            type: 'HEAD',
                text: 'New Widget',
            size: 1})
            return {
                widgets:state.widgets.map(widget=>widget)
            }
        // case 'UPDATE_WIDGET':
        //     // replace the old widget with the new widget
        //     return {
        //         widgets: state.widgets.map(widget =>
        //             widget.id === action.widget.id ? action.widget : widget
        //         )
        //     }
        case 'SAVE_WIDGET':
            // replace the old widget with the new widget
            //course service and server update
            return {
            }
        case 'DELETE_WIDGET':
            //courseServiceJs and server update
            state.widgets.splice(action.widgetIndex, 1)
            console.log(action.widgetIndex)
            return {
                widgets:state.widgets.map(widget=>widget)
            }
        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget=>widget)
                // widgets: state.widgets.map(widget =>
                //     widget.id === action.widget.id ? action.widget : widget
                // )
            }
        case 'LOAD_WIDGET':
            //console.log("reducer widgets")
            return {
                widgets: action.widgets
            }
        default:
            return state;
    }
}

export default WidgetReducer;