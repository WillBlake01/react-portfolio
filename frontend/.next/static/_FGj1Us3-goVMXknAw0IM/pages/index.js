(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/HSY":function(t,n,e){var r=e("r1Yi");r(r.P+r.R,"Map",{toJSON:e("LduJ")("Map")})},"4J1H":function(t,n,e){"use strict";var r=e("8sLR"),o=e("vHzR"),i=e("w5sO"),a=e("hdgZ"),s=e("kU8p"),c=e("Q9e7"),u=e("LCJg"),f=e("2jBW");n.__esModule=!0,n.default=void 0;var l,p=e("mXdV"),h=f(e("a0XK")),v=u(e("MlfD")),d=e("ZVUz");function m(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new c,g=window.IntersectionObserver,w={};function _(){return l||(g?l=new g((function(t){t.forEach((function(t){if(y.has(t.target)){var n=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),y.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var b=function(t){function n(t){var e;return r(this,n),(e=i(this,a(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var a=t(o,i);return n=o,e=i,r=a,a}}((function(t,n){return{href:m(t),as:n?m(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,s=i.as;if(function(t){var n=(0,p.parse)(t,!1,!0),e=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(a)){var c=window.location.pathname;a=(0,p.resolve)(c,a),s=s?(0,p.resolve)(c,s):a,t.preventDefault();var u=e.props.scroll;null==u&&(u=s.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](a,s,{shallow:e.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return s(n,t),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,n)}},{key:"handleRef",value:function(t){var n=this,e=w[this.getHref()];this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=_();return e?(e.observe(t),y.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}y.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),w[t]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),a={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),h.default.cloneElement(i,a)}}]),n}(h.Component);n.default=b},"5YcG":function(t,n,e){"use strict";var r=e("wwMi"),o=e("Ht+z");t.exports=e("h1LM")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},A8pD:function(t,n,e){"use strict";var r=e("mcp8"),o=e.n(r),i=e("K8YL"),a=e.n(i);function s(t){return(s="function"===typeof a.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"===typeof a.a&&"symbol"===s(o.a)?function(t){return s(t)}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":s(t)})(t)}function u(t,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,"a",(function(){return u}))},G0T6:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},LJrI:function(t,n,e){e("hnMk"),e("EdQN"),e("M/UA"),e("5YcG"),e("/HSY"),e("pKx+"),e("epmC"),t.exports=e("yWO0").Map},LduJ:function(t,n,e){var r=e("77Le"),o=e("h+/A");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},Q9e7:function(t,n,e){t.exports=e("LJrI")},RNiq:function(t,n,e){"use strict";e.r(n);var r=e("a0XK"),o=e.n(r),i=e("G0T6"),a=e("ig0r"),s=e("A8pD"),c=e("yLGZ"),u=e("tiSj"),f=e("kqij"),l=e.n(f),p=o.a.createElement,h=function(t){return p("div",{className:"container"},p("div",{className:"mern-logos"},p("img",{src:"https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/mongodb.svg",className:"mern-icon",alt:"Mango DB"}),p("img",{src:"https://res.cloudinary.com/willblake01/image/upload/v1538510161/react-portfolio/express.svg",className:"mern-icon",alt:"Express"}),p("img",{src:"https://res.cloudinary.com/willblake01/image/upload/v1538510166/react-portfolio/react.svg",className:"mern-icon",alt:"React"}),p("img",{src:"https://res.cloudinary.com/willblake01/image/upload/v1538510165/react-portfolio/nodejs.svg",className:"mern-icon",alt:"Node"}),p("img",{src:"https://res.cloudinary.com/willblake01/image/upload/v1538510166/react-portfolio/redux.svg",className:"mern-icon",alt:"Redux"}),p("img",{src:"https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/webpack.svg",className:"mern-icon",alt:"Webpack"}),p("img",{src:"https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/sass.svg",className:"mern-icon",alt:"Sass"})))},v=o.a.createElement,d=function(t){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return v("div",{className:"masthead"},v("div",{className:"wrapper-landing"},v("div",{className:"content-landing"},v("div",{className:"copy",id:"about-landing"},"Hi, I'm Will, a Full-Stack developer from Austin, TX. I focus on MERN stack applications but my knowledge base spans way beyond that, just ask!"),v(l.a,{href:"/about"},v("div",{className:"copy",id:"learn-more"},"Learn more about what I do")),v("div",{className:"copy",id:"down-arrow"},v("a",{href:"/about"},"\u2228")),v(h,null))))}}]),n}(o.a.Component),m=o.a.createElement;n.default=function(t){return m("div",null,m(d,null))}},epmC:function(t,n,e){e("w4Cn")("Map")},"h+/A":function(t,n,e){var r=e("499W");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},hDpF:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])},ig0r:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("prPH"),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function a(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}},kqij:function(t,n,e){t.exports=e("4J1H")},"pKx+":function(t,n,e){e("ij8h")("Map")},tiSj:function(t,n,e){"use strict";var r=e("xV7J"),o=e.n(r),i=e("k+WL"),a=e.n(i);function s(t,n){return(s=a.a||function(t,n){return t.__proto__=n,t})(t,n)}function c(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}e.d(n,"a",(function(){return c}))},wwMi:function(t,n,e){"use strict";var r=e("8z1E").f,o=e("pGbH"),i=e("L0im"),a=e("wtXC"),s=e("BV8V"),c=e("499W"),u=e("p2+r"),f=e("nQ13"),l=e("zcmi"),p=e("IrBa"),h=e("qYLT").fastKey,v=e("Ht+z"),d=p?"_s":"size",m=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,u){var f=t((function(t,r){s(t,f,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&c(r,e,t[u],t)}));return i(f.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=m(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!m(v(this,n),t)}}),p&&r(f.prototype,"size",{get:function(){return v(this,n)[d]}}),f},def:function(t,n,e){var r,o,i=m(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,n,e){u(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),e?"entries":"values",!e,!0),l(n)}}},yLGZ:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("imtn"),o=e.n(r),i=e("k+WL"),a=e.n(i);function s(t){return(s=a.a?o.a:function(t){return t.__proto__||o()(t)})(t)}}},[["hDpF",0,1,2]]]);