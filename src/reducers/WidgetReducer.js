const defaultWidgets =
    {
        widgets: [
        ],
        preview: false
    }
const WidgetReducer = (state=defaultWidgets, action) => {//state initial is undefined
    switch(action.type) {
        // case 'DELETE_WIDGET':
        //     return {
        //         widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
        //     }
        case 'ADD_WIDGET':
            const id=String((new Date()).getTime())
            //no course service and server update
            //console.log("adding")
            action.widgets.push({
                id:id,
            type: 'HEAD',
                text: 'New Widget',
            size: 1})
            return {
                widgets:action.widgets.map(widget=>widget)
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
            console.log("me",action.widgets)
            //no courseServiceJs and server update
            action.widgets.splice(action.widgetIndex, 1)
            //console.log(action.widgetIndex)
            return {
                widgets:action.widgets.map(widget=>widget)
            }
        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: action.widgets.map(widget=>widget)
                // widgets: state.widgets.map(widget =>
                //     widget.id === action.widget.id ? action.widget : widget
                // )
            }
        case 'LOAD_WIDGET':
            //console.log(state.preview)
            return {
                preview: false,
                widgets: action.widgets
            }
        case 'togglePreview':
            return {
                preview: !state.preview
            }
        default:
            return state;
    }
}

export default WidgetReducer;