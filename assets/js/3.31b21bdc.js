(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(t,e,a){"use strict";var s=a(52);a.n(s).a},193:function(t,e,a){"use strict";var s=a(75);a.n(s).a},203:function(t,e,a){"use strict";var s=a(76);a.n(s).a},204:function(t,e,a){"use strict";var s=a(77);a.n(s).a},210:function(t,e,a){"use strict";a(69),a(97),a(96),a(95),a(41),a(190),a(70),a(191),a(54);var s=/#.*$/,i=/\.(md|html)$/,n=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(i,"")}function c(t){return r.test(t)}function l(t){if(c(t))return t;var e=t.match(s),a=e?e[0]:"",i=o(t);return n.test(i)?t:i+".html"+a}function d(t,e,a){if(c(e))return{type:"external",path:e};a&&(e=function(t,e,a){var s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;var i=e.split("/");a&&i[i.length-1]||i.pop();for(var n=t.replace(/^\//,"").split("/"),r=0;r<n.length;r++){var o=n[r];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,a));for(var s=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===s)return Object.assign({},t[i],{type:"page",path:l(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}var u={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,a=t.editLinks,s=t.docsDir,i=void 0===s?"":s,n=t.docsBranch,r=void 0===n?"master":n,o=t.docsRepo,c=void 0===o?e:o;return c&&a&&this.$page.relativePath?this.createEditLink(e,c,i,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,a,s,i){return/bitbucket.org/.test(t)?(r.test(e)?e:t).replace(n,"")+"/src"+"/".concat(s,"/")+(a?a.replace(n,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(r.test(e)?e:"https://github.com/".concat(e)).replace(n,"")+"/edit"+"/".concat(s,"/")+(a?a.replace(n,"")+"/":"")+i}}},v=(a(193),a(0)),p=Object(v.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,h=a(194),f=a.n(h),m=a(202),_=a.n(m),g={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return x(C.PREV,this)},next:function(){return x(C.NEXT,this)}}};var C={NEXT:{resolveLink:function(t,e){return k(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return k(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function x(t,e){var a=e.$themeConfig,s=e.$page,i=e.$route,n=e.$site,r=e.sidebarItems,o=t.resolveLink,c=t.getThemeLinkConfig,l=t.getPageLinkConfig,u=c(a),v=l(s),p=_()(v)?u:v;return!1===p?void 0:f()(p)?d(n.pages,p,i.path):o(s,r)}function k(t,e,a){var s=[];!function t(e,a){for(var s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],a):a.push(e[s])}(e,s);for(var i=0;i<s.length;i++){var n=s[i];if("page"===n.type&&n.path===decodeURIComponent(t.path))return s[i+a]}}var L=g,b=(a(203),{components:{PageEdit:p,PageNav:Object(v.a)(L,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),$=(a(204),Object(v.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=$.exports},211:function(t,e,a){"use strict";var s=a(82),i=a(93),n=a(130),r=a(129);i.c.add(n.g),i.c.add(n.f),i.c.add(n.b),i.c.add(n.h),i.c.add(n.e),i.c.add(n.d),i.c.add(n.c),i.c.add(n.a);var o={components:{NavLink:s.a,FontAwesomeIcon:r.a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},c=(a(131),a(0)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description))]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t._m(0),t._v(" "),a("section",{staticClass:"section is-medium section--inverted"},[a("div",{staticClass:"title is-1 has-text-centered"},[t._v("Important ⚠️ This is an archive website")]),t._v(" "),a("div",{staticClass:"subtitle is-3 is-spaced has-text-centered"},[t._v("\n        Open Hardware Leaders is splitting in 2 new programs, learn more\n        "),a("router-link",{attrs:{to:"./nextsteps.html"}},[t._v("here")])],1),t._v(" "),a("div",{staticClass:"container"},[t.data.features&&t.data.features.length?a("div",{staticClass:"features columns container"},t._l(t.data.features,(function(e,s){return a("div",{key:s,staticClass:"column has-text-centered"},[a("span",{staticClass:"icon"},[a("font-awesome-icon",{staticClass:"fas fa-3x has-text-centered",attrs:{icon:e.icon}})],1),t._v(" "),a("div",{staticClass:"title is-4"},[t._v(t._s(e.title))]),t._v(" "),a("p",{domProps:{innerHTML:t._s(e.details)}})])})),0):t._e()])]),t._v(" "),a("section",{staticClass:"section is-medium"},[a("div",{staticClass:"title is-2 has-text-centered"},[t._v("We help you during 14 weeks")]),t._v(" "),a("div",{staticClass:"subtitle is-3 is-spaced has-text-centered"},[t._v("Here is how we plan to do it")]),t._v(" "),a("div",{staticClass:"container"},[t.data.program&&t.data.program.length?a("div",{staticClass:"features columns container container--top-padding"},t._l(t.data.program,(function(e,s){return a("div",{key:s,staticClass:"column has-text-centered"},[a("span",{staticClass:"icon"},[a("font-awesome-icon",{staticClass:"fas fa-3x has-text-centered",attrs:{icon:e.icon}})],1),t._v(" "),a("div",{staticClass:"title is-4",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),a("p",{domProps:{innerHTML:t._s(e.details)}})])})),0):t._e()])]),t._v(" "),a("section",{staticClass:"section is-normal section--grey",attrs:{id:"team"}},[a("div",{staticClass:"container is-spaced"},[t._m(1),t._v(" "),a("div",{},[t.data.team&&t.data.team.length?a("div",{staticClass:"grid"},t._l(t.data.team,(function(e,s){return a("div",{staticClass:"center"},[a("div",{},[a("figure",{},[a("img",{staticClass:"is--rounded",attrs:{src:e.image}})]),t._v(" "),a("div",{staticClass:"subtitle is-6 has-text-centered"},[t._v(t._s(e.title))])])])})),0):t._e()])])]),t._v(" "),t._m(2),t._v(" "),a("Content",{staticClass:"theme-default-content custom"})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://foundation.mozilla.org/en/blog/open-hardware-leaders-open-leaders-x-program/",target:"blank"}},[e("div",{staticClass:"mozilla"},[e("h3",[this._v("\n          A\n          "),e("img",{attrs:{src:"mozilla.png",alt:"text"}}),this._v(" OLx Program\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("div",{staticClass:"title is-2 is-spaced"},[this._v("Program organizers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"footer-2"},[e("div",{staticClass:"container container--padding-top"},[e("div",[e("p",{staticClass:"has-text-centered"},[this._v("\n            Questions, ideas, collaborations? Contact us at\n            "),e("a",{attrs:{href:"mailto:openhardware4me@gmail.com"}},[this._v("openhardware4me@gmail.com")])])]),this._v(" "),e("div",[e("p",{staticClass:"has-text-centered"},[this._v("\n            The content of Open Hardware Leaders program is licensed under Creative Commons attribution license\n            "),e("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/"}},[this._v("CC-BY4.0")])])])])])}],!1,null,null,null);e.a=l.exports},52:function(t,e,a){},75:function(t,e,a){},76:function(t,e,a){},77:function(t,e,a){}}]);