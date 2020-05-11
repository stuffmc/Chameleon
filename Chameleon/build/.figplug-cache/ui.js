/* Chameleon/build/.figplug-cache/ui.js 0 */
(function(exports){

'use strict';

var VERSION = "0", DEBUG = false;
var global=void 0!==global?global:"undefined"!=typeof window?window:this;function _stackTrace(cons){const x={stack:""};if(Error.captureStackTrace){Error.captureStackTrace(x,cons);const p=x.stack.indexOf("\n");if(-1!=p)return x.stack.substr(p+1)}return x.stack}function _parseStackFrame(sf){let m=/^\s*at\s+([^\s]+)\s+\((?:.+\/(src\/[^\:]+)|([^\:]+))\:(\d+)\:(\d+)\)$/.exec(sf);return m?{func:m[1],file:m[2]||m[3],line:parseInt(m[4]),col:parseInt(m[5])}:null}function panic(msg){if(console.error.apply(console,["panic:",msg].concat(Array.prototype.slice.call(arguments,1))),"undefined"==typeof process){let e=new Error(msg);throw e.name="Panic",e}console.error(_stackTrace(panic)),process.exit(2)}function print(){console.log.apply(console,Array.prototype.slice.call(arguments))}const dlog=()=>{};function assert(){}function repr(obj){try{return JSON.stringify(obj,null,2)}catch(_){return String(obj)}}


window.onmessage = async (event) => {
    let message = event.data.pluginMessage;
    switch (message.type) {
        case "save":
            let request = new XMLHttpRequest();
            request.onreadystatechange = () => {
                if (request.readyState == XMLHttpRequest.DONE) {
                    console.log("Done! Here's the output: " + request.responseText);
                    window.parent.postMessage({ pluginMessage: {
                            type: 'success'
                        } }, '*');
                }
            };
            request.open("POST", message.url, true);
            request.setRequestHeader("Authorization", "token " + message.secret);
            request.setRequestHeader("Accept", "application/vnd.github.everest-preview+json");
            request.send(JSON.stringify(message.payload));
            break;
    }
};
document.getElementById('save').onclick = () => {
    const urlInput = document.getElementById('apiURL');
    const apiKeyInput = document.getElementById('apiKey');
    parent.postMessage({ pluginMessage: {
            type: 'store',
            message: {
                url: urlInput.value,
                apiKey: apiKeyInput.value
            }
        } }, '*');
};
})(typeof exports != "undefined" ? exports : (typeof global != "undefined" ? global : typeof self != "undefined" ? self : this)["ui"] = {});


//#sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMubWFwIiwic291cmNlcyI6WyJ1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sS0FBSztJQUMzQixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUN0QyxRQUFRLE9BQU8sQ0FBQyxJQUFJO1FBQ2hCLEtBQUssTUFBTTtZQUVQLElBQUksT0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUE7WUFDbEMsT0FBTyxDQUFDLGtCQUFrQixHQUFHO2dCQUN6QixJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksY0FBYyxDQUFDLElBQUksRUFBRTtvQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7b0JBQy9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsYUFBYSxFQUFFOzRCQUN2QyxJQUFJLEVBQUUsU0FBUzt5QkFDbEIsRUFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2lCQUNYO2FBQ0osQ0FBQTtZQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDdkMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsNkNBQTZDLENBQUMsQ0FBQTtZQUNqRixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7WUFDN0MsTUFBSztLQUNaO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxPQUFPLEdBQUc7SUFDdkMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUE7SUFDdkUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUE7SUFFMUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLGFBQWEsRUFBRTtZQUNoQyxJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRTtnQkFDTCxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUs7Z0JBQ25CLE1BQU0sRUFBRSxXQUFXLENBQUMsS0FBSzthQUM1QjtTQUNKLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNiLENBQUM7Ozs7Iiwic291cmNlUm9vdCI6Ii4uLy4uIn0=
