/* Chameleon/build/plugin.js 0 */
(function(exports){

'use strict';

var VERSION = "0", DEBUG = false;
var global=void 0!==global?global:"undefined"!=typeof window?window:this;function _stackTrace(cons){const x={stack:""};if(Error.captureStackTrace){Error.captureStackTrace(x,cons);const p=x.stack.indexOf("\n");if(-1!=p)return x.stack.substr(p+1)}return x.stack}function _parseStackFrame(sf){let m=/^\s*at\s+([^\s]+)\s+\((?:.+\/(src\/[^\:]+)|([^\:]+))\:(\d+)\:(\d+)\)$/.exec(sf);return m?{func:m[1],file:m[2]||m[3],line:parseInt(m[4]),col:parseInt(m[5])}:null}function panic(msg){if(console.error.apply(console,["panic:",msg].concat(Array.prototype.slice.call(arguments,1))),"undefined"==typeof process){let e=new Error(msg);throw e.name="Panic",e}console.error(_stackTrace(panic)),process.exit(2)}function print(){console.log.apply(console,Array.prototype.slice.call(arguments))}const dlog=()=>{};function assert(){}function repr(obj){try{return JSON.stringify(obj,null,2)}catch(_){return String(obj)}}


const redPaint = { type: "SOLID", color: { r: 1, g: 0, b: 0 } };
function createRectangles(count) {
    const nodes = [];
    for (let i = 0; i < count; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [redPaint];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
}
figma.showUI(__html__);
figma.ui.onmessage = msg => {
    if (msg.type === 'create-rectangles' && typeof msg.count == 'number') {
        createRectangles(msg.count);
    }
    figma.closePlugin();
};
})(typeof exports != "undefined" ? exports : (typeof global != "undefined" ? global : typeof self != "undefined" ? self : this)["plugin"] = {});


//#sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLlVzZXJzLm1jLkRlc2t0b3AuQ2hhbWVsZW9uLkNoYW1lbGVvbi5idWlsZC5wbHVnaW4uanMubWFwIiwic291cmNlcyI6WyIuLi9wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxRQUFRLEdBQWUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQTtBQUUzRSxTQUFTLGdCQUFnQixDQUFDLEtBQWE7SUFDckMsTUFBTSxLQUFLLEdBQWdCLEVBQUUsQ0FBQTtJQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFFLFFBQVEsQ0FBRSxDQUFBO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakI7SUFDRCxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFDbkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUM3QyxDQUFDO0FBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUV0QixLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHO0lBQ3RCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxtQkFBbUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO1FBQ3BFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUM1QjtJQUNELEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUNyQixDQUFDOzs7OyIsInNvdXJjZVJvb3QiOiIuLiJ9
