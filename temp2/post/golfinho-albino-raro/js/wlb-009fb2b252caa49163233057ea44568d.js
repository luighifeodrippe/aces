﻿/**
 * getEmPixels
 * Author: Tyson Matanich (http://matanich.com), 2013
 * License: MIT
 **/
(function(n,t){"use strict";var i="!important;",r="position:absolute"+i+"visibility:hidden"+i+"width:1em"+i+"font-size:1em"+i+"padding:0"+i;window.getEmPixels=function(u){var f,e,o;return u||(u=f=n.createElement("body"),f.style.cssText="font-size:1em"+i,t.insertBefore(f,n.body)),e=n.createElement("i"),e.style.cssText=r,u.appendChild(e),o=e.clientWidth,f?t.removeChild(f):u.removeChild(e),o}})(document,document.documentElement);

/**
 * elementQuery
 * Author: Tyson Matanich (http://matanich.com), 2013
 * License: MIT
 **/
(function(n,t,i){"use strict";var e=n.Sizzle||jQuery.find,r={},o=function(n,t,u,o,s){if(n=f(n),n!=""){var h;o||s||(h=/^([0-9]*.?[0-9]+)(px|em)$/.exec(u),h!=null&&(o=Number(h[1]),o+""!="NaN"&&(s=h[2]))),s&&(e.compile&&e.compile(n),r[n]===i&&(r[n]={}),r[n][t]===i&&(r[n][t]={}),r[n][t][u]=[o,s])}},h=function(n,t){var i,r,f;for(i in n)for(r in n[i])if(typeof n[i][r]=="string")o(i,r,n[i][r]);else if(typeof n[i][r]=="object")for(f=0;f<n[i][r].length;f++)o(i,r,n[i][r][f]);t==!0&&u()},f=function(n){if(n==null)return"";var t="".trim;return t&&!t.call("﻿ ")?t.call(n):(n+"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},s=function(n,t){var i=n.getAttribute(t);return i?(" "+i+" ").replace(/[\t\r\n]/g," "):" "},c=function(n,t,i){var r,u;n.nodeType===1&&(r=f(i),r!=""&&(u=s(n,t),u.indexOf(" "+r+" ")<0&&n.setAttribute(t,f(u+r))))},l=function(n,t,i){var u,r,e;if(n.nodeType===1&&(u=f(i),u!="")){for(r=s(n,t),e=!1;r.indexOf(" "+u+" ")>=0;)r=r.replace(" "+u+" "," "),e=!0;e&&n.setAttribute(t,f(r))}},u=function(){var o,h,i,s,a,u,f,v;for(o in r)if(a=e(o),a.length>0)for(h=0;h<a.length;h++){u=a[h];for(i in r[o])for(s in r[o][i])f=r[o][i][s][0],r[o][i][s][1]=="em"&&(f=f*(n.getEmPixels?getEmPixels(u):16)),i=="min-width"&&u.offsetWidth>=f||i=="max-width"&&u.offsetWidth<=f||i=="min-height"&&u.offsetHeight>=f||i=="max-height"&&u.offsetHeight<=f?c(u,i,s):l(u,i,s)}!n.addEventListener&&n.attachEvent&&(v=t.documentElement.className,t.documentElement.className=" "+v,t.documentElement.className=v)};n.elementQuery=function(n,t){!n||typeof n!="object"||n.cssRules||n.rules?n||t||u():h(n,t)},n.elementQuery.selectors=function(){},n.addEventListener?(n.addEventListener("resize",u,!1),n.addEventListener("DOMContentLoaded",u,!1),n.addEventListener("load",u,!1)):n.attachEvent&&(n.attachEvent("onresize",u),n.attachEvent("onload",u))})(this,document,undefined);

var Better_Social_Counter=function(){"use strict";return{init:function(){this.fix_element_query()},fix_element_query:function(){"function"==typeof elementQuery&&elementQuery({".better-social-counter":{"max-width":["358px","199px","230px","900px","530px","750px"]},".better-social-banner":{"max-width":["250px"]}})}}}(jQuery);jQuery(function(e){Better_Social_Counter.init()});


/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */