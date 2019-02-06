const defaultWidgets =
    {
        widgets: [
            {
                id: 123,
                title: 'default 1',
                type: 'HEADING',
                text: 'This is a default heading',
                size: 6
            },
            {
                id: 234,
                title: 'default 2',
                type: 'IMAGE'
            }
        ]
    }
const WidgetReducer = (state=defaultWidgets, action) => {//state initial is undefined
    switch(action.type) {
        // case 'DELETE_WIDGET':
        //     return {
        //         widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
        //     }
        // case 'ADD_WIDGET':
        //     return {
        //         widgets: [
        //             ...state.widgets,
        //             {
        //                 type: 'HEADING',
        //                 text: 'New Widget',
        //                 size: 1
        //             }
        //         ]
        //     }
        // case 'UPDATE_WIDGET':
        //     // replace the old widget with the new widget
        //     return {
        //         widgets: state.widgets.map(widget =>
        //             widget.id === action.widget.id ? action.widget : widget
        //         )
        //     }

        case 'LOAD_WIDGET':
            console.log("reducer widgets")
            return {
                widgets: action.widgets
            }
        default:
            return state;
    }
}

export default WidgetReducer;