!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/app/themes/alloe/dist/",t(t.s=12)}([function(e,t){e.exports=jQuery},,function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=(n.n(r),n(10)),o=(n.n(i),n(9)),a=(n.n(o),n(7)),u=n(5),c=n(6),s=n(4),f=new a.a({common:u.a,home:c.a,aboutUs:s.a});e(document).ready(function(){return f.loadEvents()})}).call(t,n(0))},function(e,t){},function(e,t,n){"use strict";t.a={init:function(){}}},function(e,t,n){"use strict";(function(e){t.a={init:function(){e(document).ready(function(){e("button").click(function(){e(this).hide()}),e(document).ready(function(){e("#hide-menu").click(function(){e(".nav-mobile").hide(400)}),e("#show-menu").click(function(){e(".nav-mobile").show()})}),e("#animated-steps").prop("number",5).animateNumber({number:10},5e3);var t=Math.pow(10,1);e("#animated-calories").prop("number",1).animateNumber({number:2.5*t,numberStep:function(n,r){var i=Math.floor(n)/t,o=e(r.elem);i=i.toFixed(1),i=i.toString().replace(".","."),o.text(""+i)}},5e3),e("#animated-minutes").prop("number",50).animateNumber({number:100},5e3),e("#animated-miles").prop("number",2.5).animateNumber({number:3.5*t,numberStep:function(n,r){var i=Math.floor(n)/t,o=e(r.elem);i=i.toFixed(1),i=i.toString().replace(".","."),o.text(""+i)}},5e3)})},finalize:function(){}}}).call(t,n(0))},function(e,t,n){"use strict";t.a={init:function(){},finalize:function(){}}},function(e,t,n){"use strict";var r=n(8),i=function(e){this.routes=e};i.prototype.fire=function(e,t,n){void 0===t&&(t="init"),""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t]&&this.routes[e][t](n)},i.prototype.loadEvents=function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(r.a).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")},t.a=i},function(e,t,n){"use strict";t.a=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)}},function(e,t,n){(function(e){/** @preserve jQuery animateNumber plugin v0.0.14
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */
!function(e){var t=function(e){return e.split("").reverse().join("")},n={numberStep:function(t,n){var r=Math.floor(t);e(n.elem).text(r)}},r=function(e){var t=e.elem;if(t.nodeType&&t.parentNode){var r=t._animateNumberSetter;r||(r=n.numberStep),r(e.now,e)}};e.Tween&&e.Tween.propHooks?e.Tween.propHooks.number={set:r}:e.fx.step.number=r;var i=function(e,t){for(var n,r,i,o=e.split("").reverse(),a=[],u=0,c=Math.ceil(e.length/t);u<c;u++){for(n="",i=0;i<t&&(r=u*t+i)!==e.length;i++)n+=o[r];a.push(n)}return a},o=function(e){var n=e.length-1,r=t(e[n]);return e[n]=t(parseInt(r,10).toString()),e};e.animateNumber={numberStepFactories:{append:function(t){return function(n,r){var i=Math.floor(n);e(r.elem).prop("number",n).text(i+t)}},separator:function(n,r,a){return n=n||" ",r=r||3,a=a||"",function(u,c){var s=u<0,f=Math.floor((s?-1:1)*u),m=f.toString(),p=e(c.elem);if(m.length>r){var l=i(m,r);m=o(l).join(n),m=t(m)}p.prop("number",u).text((s?"-":"")+m+a)}}}},e.fn.animateNumber=function(){for(var t=arguments[0],r=e.extend({},n,t),i=e(this),o=[r],a=1,u=arguments.length;a<u;a++)o.push(arguments[a]);if(t.numberStep){var c=this.each(function(){this._animateNumberSetter=t.numberStep}),s=r.complete;r.complete=function(){c.each(function(){delete this._animateNumberSetter}),s&&s.apply(this,arguments)}}return i.animate.apply(i,o)}}(e)}).call(t,n(0))},function(e,t){!function(e,t){"use strict";function n(){a||(o=t.pageYOffset,u&&o>c?(a=!0,u=!1,t.requestAnimationFrame(i)):!u&&o<=c&&(a=!0,u=!0,t.requestAnimationFrame(r)))}function r(){for(var e=0;s[e];++e)s[e].classList.add("sps--abv"),s[e].classList.remove("sps--blw");a=!1}function i(){for(var e=0;s[e];++e)s[e].classList.add("sps--blw"),s[e].classList.remove("sps--abv");a=!1}var o=0,a=!1,u=!0,c=1,s=e.getElementsByClassName("sps"),f={init:function(){a=!0,o=t.pageYOffset,o>c?(u=!1,t.requestAnimationFrame(i)):(u=!0,t.requestAnimationFrame(r))}};e.addEventListener("DOMContentLoaded",function(){t.setTimeout(f.init,1)}),t.addEventListener("scroll",n)}(document,window)},,function(e,t,n){n(2),e.exports=n(3)}]);