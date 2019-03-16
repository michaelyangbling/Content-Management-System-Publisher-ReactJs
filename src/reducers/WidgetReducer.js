//defaultWidgets not used...,just to let redux know state has been changed.. except preview
//not specify any returned key:???bug, so specify it
const defaultWidgets =
    {
        widgets: [

        ],
        preview: true
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
                text: 'Heading Widget Example',
                list: 'ul',
                items: 'each\nbullet\na\nline',
                src: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=980:*',
                para: 'paragraph widget example',
                url: 'https://github.com/michaelyangbling',
                title: 'github',
                size: 1})
            return {
                widgets:action.widgets.map(widget=>widget),
                preview:state.preview
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
                preview:state.preview
            }
        case 'DELETE_WIDGET':
            console.log("me",action.widgets)
            //no courseServiceJs and server update
            action.widgets.splice(action.widgetIndex, 1)
            //console.log(action.widgetIndex)
            return {
                widgets:action.widgets.map(widget=>widget),
                preview:state.preview
            }
        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: action.widgets.map(widget=>widget)
                // widgets: state.widgets.map(widget =>
                //     widget.id === action.widget.id ? action.widget : widget
                // )
                ,
                preview:state.preview
            }
        case 'LOAD_WIDGET'://deprecated and no more used
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