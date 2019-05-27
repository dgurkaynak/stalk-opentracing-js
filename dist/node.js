module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";var r,o,i,c=n(3),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function a(){i=!1}function s(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,a()}}else r!==u&&(r=u,a())}function p(){return i||(i=function(){r||s(u);for(var t,e=r.split(""),n=[],o=c.nextValue();e.length>0;)o=c.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return s(t),r},seed:function(t){c.seed(t),o!==t&&(a(),o=t)},lookup:function(t){return p()[t]},shuffled:p}},function(t,e,n){"use strict";t.exports=n(2)},function(t,e,n){"use strict";var r=n(0),o=n(4),i=n(10),c=n(11)||0;function u(){return o(c)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},function(t,e,n){"use strict";var r,o,i=n(5),c=(n(0),1459707606518),u=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-c));return n===o?r++:(r=0,o=n),e+=i(u),e+=i(t),r>0&&(e+=i(r)),e+=i(n)}},function(t,e,n){"use strict";var r=n(0),o=n(6),i=n(9);t.exports=function(t){for(var e,n=0,c="";!e;)c+=i(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(8);if(r.randomFillSync){var o={};t.exports=function(t){var e=o[t];return e||(e=Buffer.allocUnsafe(t),t<=255&&(o[t]=e)),r.randomFillSync(e)}}else t.exports=r.randomBytes},function(t,e){t.exports=require("crypto")},function(t,e){t.exports=function(t,e,n){var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=Math.ceil(1.6*r*n/e.length);n=+n;for(var i="";;)for(var c=t(o),u=0;u<o;u++){var a=c[u]&r;if(e[a]&&(i+=e[a]).length===n)return i}}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";var r=n(12),o=0;!r.isMaster&&r.worker&&(o=r.worker.id),t.exports=parseInt(process.env.NODE_UNIQUE_ID||o,10)},function(t,e){t.exports=require("cluster")},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"SPAN_KIND",function(){return a}),n.d(r,"SPAN_KIND_RPC_CLIENT",function(){return s}),n.d(r,"SPAN_KIND_RPC_SERVER",function(){return p}),n.d(r,"SPAN_KIND_MESSAGING_PRODUCER",function(){return f}),n.d(r,"SPAN_KIND_MESSAGING_CONSUMER",function(){return l}),n.d(r,"ERROR",function(){return h}),n.d(r,"COMPONENT",function(){return _}),n.d(r,"SAMPLING_PRIORITY",function(){return y}),n.d(r,"PEER_SERVICE",function(){return d}),n.d(r,"PEER_HOSTNAME",function(){return g}),n.d(r,"PEER_ADDRESS",function(){return v}),n.d(r,"PEER_HOST_IPV4",function(){return O}),n.d(r,"PEER_HOST_IPV6",function(){return m}),n.d(r,"PEER_PORT",function(){return S}),n.d(r,"HTTP_URL",function(){return E}),n.d(r,"HTTP_METHOD",function(){return b}),n.d(r,"HTTP_STATUS_CODE",function(){return x}),n.d(r,"MESSAGE_BUS_DESTINATION",function(){return w}),n.d(r,"DB_INSTANCE",function(){return R}),n.d(r,"DB_STATEMENT",function(){return N}),n.d(r,"DB_TYPE",function(){return T}),n.d(r,"DB_USER",function(){return P});var o={};n.r(o),n.d(o,"ComponentNamePropertyKey",function(){return Tt}),n.d(o,"ComponentName",function(){return Pt}),n.d(o,"default",function(){return It}),n.d(o,"getComponentName",function(){return Ct});var i={};n.r(i),n.d(i,"Trace",function(){return Lt}),n.d(i,"default",function(){return At}),n.d(i,"ChildOfRelation",function(){return Ft}),n.d(i,"FollowFromRelation",function(){return Mt}),n.d(i,"NewTraceRelation",function(){return Dt});var c,u=function(){return function(t){this.buffer=t}}(),a="span.kind",s="client",p="server",f="producer",l="consumer",h="error",_="component",y="sampling.priority",d="peer.service",g="peer.hostname",v="peer.address",O="peer.ipv4",m="peer.ipv6",S="peer.port",E="http.url",b="http.method",x="http.status_code",w="message_bus.destination",R="db.instance",N="db.statement",T="db.type",P="db.user";!function(t){t.ERROR="error",t.WARN="warn",t.INFO="info",t.VERBOSE="verbose",t.DEBUG="debug",t.SILLY="silly"}(c||(c={}));var I=function(){function t(t){this._span=t}return t.prototype.error=function(t,e){this._span.log({level:c.ERROR,message:t,payload:e,event:"error"})},t.prototype.warn=function(t,e){this._span.log({level:c.WARN,message:t,payload:e})},t.prototype.info=function(t,e){this._span.log({level:c.INFO,message:t,payload:e})},t.prototype.debug=function(t,e){this._span.log({level:c.DEBUG,message:t,payload:e})},t.prototype.silly=function(t,e){this._span.log({level:c.SILLY,message:t,payload:e})},t}(),C=function(){function t(){this.logger=new I(this)}return t.prototype.context=function(){return this._context()},t.prototype.tracer=function(){return this._tracer()},t.prototype.setOperationName=function(t){return this._setOperationName(t),this},t.prototype.setBaggageItem=function(t,e){return this._setBaggageItem(t,e),this},t.prototype.getBaggageItem=function(t){return this._getBaggageItem(t)},t.prototype.setTag=function(t,e){var n;return this._addTags(((n={})[t]=e,n)),this},t.prototype.addTags=function(t){return this._addTags(t),this},t.prototype.log=function(t,e){return this._log(t,e),this},t.prototype.logEvent=function(t,e){return this._log({event:t,payload:e})},t.prototype.finish=function(t){this._finish(t)},t.prototype._context=function(){return G},t.prototype._tracer=function(){return k},t.prototype._setOperationName=function(t){},t.prototype._setBaggageItem=function(t,e){},t.prototype._getBaggageItem=function(t){},t.prototype._addTags=function(t){},t.prototype._log=function(t,e){},t.prototype._finish=function(t){},t}(),j=function(){function t(){}return t.prototype.toTraceId=function(){return""},t.prototype.toSpanId=function(){return""},t}(),L="child_of",A="follows_from",F=function(){function t(t,e){this._type=t,this._referencedContext=e instanceof C?e.context():e}return t.prototype.type=function(){return this._type},t.prototype.referencedContext=function(){return this._referencedContext},t}();function M(t){return t instanceof C&&(t=t.context()),new F(L,t)}function D(t){return t instanceof C&&(t=t.context()),new F(A,t)}var B=function(){function t(){}return t.prototype.startSpan=function(t,e){if(void 0===e&&(e={}),e.childOf){var n=M(e.childOf);e.references?e.references.push(n):e.references=[n],delete e.childOf}return this._startSpan(t,e)},t.prototype.inject=function(t,e,n){return t instanceof C&&(t=t.context()),this._inject(t,e,n)},t.prototype.extract=function(t,e){return this._extract(t,e)},t.prototype._startSpan=function(t,e){return V},t.prototype._inject=function(t,e,n){},t.prototype._extract=function(t,e){return G},t}(),U=B,k=null,G=null,V=null;var H,Q=(H=function(t,e){return(H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}H(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),Y=new U,K=null,q=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Q(e,t),e.prototype.startSpan=function(){var t=K||Y;return t.startSpan.apply(t,arguments)},e.prototype.inject=function(){var t=K||Y;return t.inject.apply(t,arguments)},e.prototype.extract=function(){var t=K||Y;return t.extract.apply(t,arguments)},e}(U));function W(t){K=t}function $(){return q}k=new U,V=new C,G=new j;var X=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),z=function(){return(z=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},J=function(t){function e(e,n){var r=t.call(this)||this;return r._references=[],r._tags={},r._logs=[],r.__tracer=e,r.__context=n,r}return X(e,t),e.prototype.tracer=function(){return t.prototype.tracer.call(this)},e.prototype.start=function(t){this._startTime=t||Date.now()},e.prototype.addReference=function(t){this._references.push(t)},e.prototype.getTag=function(t){return this._tags[t]},e.prototype._context=function(){return this.__context},e.prototype._tracer=function(){return this.__tracer},e.prototype._setOperationName=function(t){this._operationName=t},e.prototype._addTags=function(t){this._tags=z({},this._tags,t)},e.prototype._log=function(t,e){var n=this,r={fields:t,timestamp:e||Date.now()};this._logs.push(r),this.__tracer.reporters.forEach(function(t){t.accepts.spanLog&&t.recieveSpanLog(n,r)})},e.prototype._finish=function(t){var e=this;this._finishTime=t||Date.now(),this.__tracer.reporters.forEach(function(t){t.accepts.spanFinish&&t.recieveSpanFinish(e)})},e}(C),Z=J,tt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),et=function(t){function e(e,n){var r=t.call(this)||this;return r._traceId=e,r._spanId=n,r}return tt(e,t),e.prototype.toTraceId=function(){return this._traceId},e.prototype.toSpanId=function(){return this._spanId},e}(j),nt=n(1),rt="__traceId__",ot="__spanId__";var it,ct=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ut=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._reporters=[],e}return ct(e,t),Object.defineProperty(e.prototype,"reporters",{get:function(){return this._reporters},enumerable:!0,configurable:!0}),e.prototype.addReporter=function(t){this._reporters.push(t)},e.prototype.removeReporter=function(t){var e=this._reporters.indexOf(t);if(e>-1){var n=this._reporters[e];return this._reporters.splice(e,1),n.close(),!0}return!1},e.prototype.startSpan=function(e,n){return void 0===n&&(n={}),t.prototype.startSpan.call(this,e,n)},e.prototype._startSpan=function(t,e){var n=e.references?e.references[0]:null,r=n?n.referencedContext().toTraceId():nt.generate(),o=nt.generate(),i=new et(r,o),c=new Z(this,i);if(c.setOperationName(t),e.tags&&c.addTags(e.tags),e.references)for(var u=0,a=e.references;u<a.length;u++){var s=a[u];c.addReference(s)}return c.start(e.startTime),this._reporters.forEach(function(t){t.accepts.spanCreate&&t.recieveSpanCreate(c)}),c},e.prototype._inject=function(t,e,n){switch(e){case"plainObject":return function(t,e){"object"!=typeof e?console.error("Could not inject context to plain object, carrier is not object.",e):(e[rt]=t.toTraceId(),e[ot]=t.toSpanId())}(t,n);default:console.error('Could not inject context into carrier, unknown format "'+e+'"',n)}},e.prototype._extract=function(t,e){var n,r;switch(t){case"plainObject":var o=function(t){var e,n;return"object"!=typeof t?console.error("Could not extract context from plain object, unexpected carrier",t):(e=t[rt],n=t[ot],delete t[rt],delete t[ot]),{traceId:e,spanId:n}}(e);n=o.traceId,r=o.spanId;break;default:console.error('Could not extract context from carrier, unknown carrier format "'+t+'"',e)}if(n&&r)return new et(n,r)},e}(B),at=function(){function t(){this.accepts={spanCreate:!1,spanLog:!1,spanFinish:!1}}return t.prototype.recieveSpanCreate=function(t){},t.prototype.recieveSpanLog=function(t,e){},t.prototype.recieveSpanFinish=function(t){},t.prototype.close=function(){},t}(),st=at,pt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ft=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.debugInstances={},n.debugFactory=e,n}return pt(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=this.debugInstances[n];o||(o=this.debugInstances[n]=this.debugFactory(n));var i=e.fields.level||"NO-LEVEL",c=e.fields.message||"NO-MESSAGE";e.fields.payload?o("["+i+"] "+c,e.fields.payload):o("["+i+"] "+c)},e.prototype.close=function(){for(var t in this.debugInstances){this.debugInstances[t].destroy()}this.debugInstances={}},e}(st),lt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ht=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.winstonLogger=e,n}return lt(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=e.fields.level||"NO-LEVEL",i=e.fields.message||"NO-MESSAGE";this.winstonLogger.log({component:n,level:o,message:i,payload:e.fields.payload})},e.prototype.close=function(){},e}(st),_t=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),yt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.accepts={spanCreate:!0,spanLog:!1,spanFinish:!1},e.spans=[],e}return _t(e,t),e.prototype.recieveSpanCreate=function(t){this.spans.push(t)},e.prototype.close=function(){this.spans=[]},e}(st),dt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),gt=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return dt(e,t),e.prototype.recieveSpanCreate=function(t){return!!this.testSpan(t)&&this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpan(t)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return!!this.testSpan(t)&&this._target.recieveSpanFinish(t)},e.prototype.testSpan=function(t){return this._predicate(t)},e.prototype.close=function(){this._target.close(),this._target=null},e}(st),vt=gt,Ot=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),mt=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return Ot(e,t),e.prototype.recieveSpanCreate=function(t){return this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpanLog(t,e)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return this._target.recieveSpanFinish(t)},e.prototype.testSpanLog=function(t,e){return this._predicate(t,e)},e.prototype.close=function(){this._target.close(),this._target=null},e}(st),St=mt,Et=function(){function t(t){this.updateQuery(t)}return t.prototype.updateQuery=function(t){this._matchQuery=t,this.setupRegexes()},t.prototype.setupRegexes=function(){var t;this._regexes={names:[],skips:[]};var e=("string"==typeof this._matchQuery?this._matchQuery:"").split(/[\s,]+/),n=e.length;for(t=0;t<n;t++)if(e[t]){var r=e[t].replace(/\*/g,".*?");"-"===r[0]?this._regexes.skips.push(new RegExp("^"+r.substr(1)+"$")):this._regexes.names.push(new RegExp("^"+r+"$"))}},t.prototype.test=function(t){if("*"===t[t.length-1])return!0;var e,n;for(e=0,n=this._regexes.skips.length;e<n;e++)if(this._regexes.skips[e].test(t))return!1;for(e=0,n=this._regexes.names.length;e<n;e++)if(this._regexes.names[e].test(t))return!0;return!1},t}(),bt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),xt=function(t){function e(e,n){var r=t.call(this,e)||this;return r.matcher=new Et(n),r}return bt(e,t),e.prototype.updateQuery=function(t){this.matcher.updateQuery(t)},e.prototype.testSpan=function(t){return this.matcher.test(t.getTag(r.COMPONENT))},e}(vt),wt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Rt=((it={})[c.ERROR]=0,it[c.WARN]=1,it[c.INFO]=2,it[c.DEBUG]=3,it[c.SILLY]=4,it),Nt=function(t){function e(e,n){var r=t.call(this,e)||this;return r._logLevel=n,r}return wt(e,t),e.prototype.updateLevel=function(t){this._logLevel=t},e.prototype.testSpanLog=function(t,e){return Rt[e.fields.level]<=Rt[this._logLevel]},e}(St),Tt="__COMPONENT_NAME__";function Pt(t){return function(e){e.prototype[Tt]=t}}var It=Pt;function Ct(t){return t[Tt]}var jt=function(){return(jt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function Lt(t){return function(e,n,o){var i=o.value;return t.operationName=t.operationName||n,o.value=function(){for(var e,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var c=n[0]instanceof C?n[0]:null,u=c?c.tracer():$(),a={};try{var s=t.relation.apply(this,n);a=jt({},a,s)}catch(e){throw console.error('Unexpected error in traces method "'+t.operationName+'"s relation handler'),e}var p=Ct(this);p&&(a.tags=jt(((e={})[r.COMPONENT]=p,e),a));var f=u.startSpan(t.operationName,a);n.splice(0,1,f);try{var l=i.apply(this,n);return t.autoFinish?"object"==typeof l&&l.then&&l.catch?l.then(function(t){return f.finish(),t}).catch(function(t){throw f.logger.error(t&&t.message||"Unknown error",t),f.setTag(r.ERROR,!0),f.finish(),t}):(f.finish(),l):l}catch(t){throw f.logger.error(t&&t.message||"Unknown error",t),f.setTag(r.ERROR,!0),f.finish(),t}},o}}var At=Lt;function Ft(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{childOf:t.context()}}function Mt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{references:[D(t.context())]}}function Dt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return{}}var Bt={Trace:i,ComponentName:o};n.d(e,"BasicSpan",function(){return J}),n.d(e,"BasicTracer",function(){return ut}),n.d(e,"BaseReporter",function(){return at}),n.d(e,"DebugReporter",function(){return ft}),n.d(e,"WinstonReporter",function(){return ht}),n.d(e,"InMemoryReporter",function(){return yt}),n.d(e,"SpanFilterProxyReporter",function(){return gt}),n.d(e,"LogFilterProxyReporter",function(){return mt}),n.d(e,"SpanComponentTagFilterProxyReporter",function(){return xt}),n.d(e,"LogLevelFilterProxyReporter",function(){return Nt}),n.d(e,"decorators",function(){return Bt}),n.d(e,"BinaryCarrier",function(){return u}),n.d(e,"Reference",function(){return F}),n.d(e,"SpanContext",function(){return j}),n.d(e,"Span",function(){return C}),n.d(e,"Tracer",function(){return B}),n.d(e,"Tags",function(){return r}),n.d(e,"initGlobalTracer",function(){return W}),n.d(e,"globalTracer",function(){return $}),n.d(e,"FORMAT_BINARY",function(){return"binary"}),n.d(e,"FORMAT_TEXT_MAP",function(){return"text_map"}),n.d(e,"FORMAT_HTTP_HEADERS",function(){return"http_headers"}),n.d(e,"REFERENCE_CHILD_OF",function(){return L}),n.d(e,"REFERENCE_FOLLOWS_FROM",function(){return A}),n.d(e,"childOf",function(){return M}),n.d(e,"followsFrom",function(){return D})}]);