!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/app/themes/alloeYarn/dist/",t(t.s=12)}([function(e,t){e.exports=jQuery},,function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=(n.n(i),n(10)),o=(n.n(r),n(9)),a=(n.n(o),n(7)),u=n(5),s=n(6),c=n(4),l=new a.a({common:u.a,home:s.a,aboutUs:c.a});e(document).ready(function(){return l.loadEvents()})}).call(t,n(0))},function(e,t){},function(e,t,n){"use strict";t.a={init:function(){}}},function(e,t,n){"use strict";(function(e){t.a={init:function(){e(document).ready(function(){e("body").addClass("initial-display")}),e(document).ready(function(){var t=function(t){var n=t.attr("rel");e.ajax({url:n,type:"GET"})},n=function(){e(".subscribe").show().addClass("animated fadeInDown"),setTimeout(function(){e(".subscribe").removeClass("animated fadeInDown")},2e3),e("html").addClass("freezeBody")};e("#show-subscribe").click(function(){n(),t(e(this))}),e("#welcome-show-subscribe").click(function(){n(),t(e(this))}),e("#simpleAs-show-subscribe").click(function(){n(),t(e(this))}),e("#change-plan").click(function(){n(),t(e(this))}),e("#hide-subscribe").click(function(){e(".subscribe").addClass("animated fadeOutUp"),setTimeout(function(){e(".subscribe").removeClass("animated fadeOutUp freezeBody").hide()},1e3),e("html").removeClass("freezeBody")});var i=function(){setTimeout(function(){window.location.href="/checkout/"},2e3)};e("#addToCartYearly").click(function(t){i(),t.preventDefault();var n=e(this).attr("rel");e.ajax({url:n,type:"GET"}),e(this).addClass("loading"),e(".legendYearly").hide(),e(".loaderYearly").css({display:"initial"})}),e("#addToCartCustomized").click(function(t){i(),t.preventDefault();var n=e(this).attr("rel");e.ajax({url:n,type:"GET"}),e(this).addClass("loading"),e(".legendCustomized").hide(),e(".loaderCustomized").css({display:"initial"})}),e("#addToCartMonthly").click(function(t){i(),t.preventDefault();var n=e(this).attr("rel");e.ajax({url:n,type:"GET"}),e(this).addClass("loading"),e(".legendMonthly").hide(),e(".loaderMonthly").css({display:"initial"})}),e("button").click(function(){e(this).hide()}),e(document).ready(function(){e("#hide-menu").click(function(){e(".nav-mobile").hide(400)}),e("#show-menu").click(function(){e(".nav-mobile").show()})}),e("#animated-steps").prop("number",5).animateNumber({number:10},5e3);var r=Math.pow(10,1);e("#animated-calories").prop("number",1).animateNumber({number:2.5*r,numberStep:function(t,n){var i=Math.floor(t)/r,o=e(n.elem);i=i.toFixed(1),i=i.toString().replace(".","."),o.text(""+i)}},5e3),e("#animated-minutes").prop("number",50).animateNumber({number:100},5e3),e("#animated-miles").prop("number",2.5).animateNumber({number:3.5*r,numberStep:function(t,n){var i=Math.floor(t)/r,o=e(n.elem);i=i.toFixed(1),i=i.toString().replace(".","."),o.text(""+i)}},5e3)})},finalize:function(){}}}).call(t,n(0))},function(e,t,n){"use strict";t.a={init:function(){},finalize:function(){}}},function(e,t,n){"use strict";var i=n(8),r=function(e){this.routes=e};r.prototype.fire=function(e,t,n){void 0===t&&(t="init"),""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t]&&this.routes[e][t](n)},r.prototype.loadEvents=function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(i.a).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")},t.a=r},function(e,t,n){"use strict";t.a=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)}},function(e,t,n){(function(e){/** @preserve jQuery animateNumber plugin v0.0.14
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */
!function(e){var t=function(e){return e.split("").reverse().join("")},n={numberStep:function(t,n){var i=Math.floor(t);e(n.elem).text(i)}},i=function(e){var t=e.elem;if(t.nodeType&&t.parentNode){var i=t._animateNumberSetter;i||(i=n.numberStep),i(e.now,e)}};e.Tween&&e.Tween.propHooks?e.Tween.propHooks.number={set:i}:e.fx.step.number=i;var r=function(e,t){for(var n,i,r,o=e.split("").reverse(),a=[],u=0,s=Math.ceil(e.length/t);u<s;u++){for(n="",r=0;r<t&&(i=u*t+r)!==e.length;r++)n+=o[i];a.push(n)}return a},o=function(e){var n=e.length-1,i=t(e[n]);return e[n]=t(parseInt(i,10).toString()),e};e.animateNumber={numberStepFactories:{append:function(t){return function(n,i){var r=Math.floor(n);e(i.elem).prop("number",n).text(r+t)}},separator:function(n,i,a){return n=n||" ",i=i||3,a=a||"",function(u,s){var c=u<0,l=Math.floor((c?-1:1)*u),f=l.toString(),m=e(s.elem);if(f.length>i){var d=r(f,i);f=o(d).join(n),f=t(f)}m.prop("number",u).text((c?"-":"")+f+a)}}}},e.fn.animateNumber=function(){for(var t=arguments[0],i=e.extend({},n,t),r=e(this),o=[i],a=1,u=arguments.length;a<u;a++)o.push(arguments[a]);if(t.numberStep){var s=this.each(function(){this._animateNumberSetter=t.numberStep}),c=i.complete;i.complete=function(){s.each(function(){delete this._animateNumberSetter}),c&&c.apply(this,arguments)}}return r.animate.apply(r,o)}}(e)}).call(t,n(0))},function(e,t){!function(e,t){"use strict";function n(){a||(o=t.pageYOffset,u&&o>s?(a=!0,u=!1,t.requestAnimationFrame(r)):!u&&o<=s&&(a=!0,u=!0,t.requestAnimationFrame(i)))}function i(){for(var e=0;c[e];++e)c[e].classList.add("sps--abv"),c[e].classList.remove("sps--blw");a=!1}function r(){for(var e=0;c[e];++e)c[e].classList.add("sps--blw"),c[e].classList.remove("sps--abv");a=!1}var o=0,a=!1,u=!0,s=1,c=e.getElementsByClassName("sps"),l={init:function(){a=!0,o=t.pageYOffset,o>s?(u=!1,t.requestAnimationFrame(r)):(u=!0,t.requestAnimationFrame(i))}};e.addEventListener("DOMContentLoaded",function(){t.setTimeout(l.init,1)}),t.addEventListener("scroll",n)}(document,window)},,function(e,t,n){n(2),e.exports=n(3)}]);