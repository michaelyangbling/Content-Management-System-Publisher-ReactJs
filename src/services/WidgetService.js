//import courses from './test.json'
//var courses=[] //only one courses object, so never use = assignment later

//only one res object? singleton?
//change object in place to avoid unneccessary stacked mounting and props;
//point to new res object only when on the "top" component
//so maybe only courses "update" and "delete" can achieve server state
//use id to do server update, ony delete can be influenced by slow fetch and ops on same age, which can be avoided by handling
import port from "./port.js"
export default class WidgetService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.url = port
    }

    save=(tid, widgets, callback)=>{
        console.log("tidx", tid);
        console.log("widgetsX", widgets);
        fetch(this.url + "/topic/" + String(tid)+"/savewidgets", {method: 'PUT',
            body: JSON.stringify(widgets),
            headers: new Headers({'Content-type': 'application/json'}),
            credentials: 'include'}).then(function(res){

            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(res => res.json()).then(callback)
            .catch(function(error){alert("error, session may have expried, try refresh")
            ;console.log(error)})
    }
}