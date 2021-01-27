/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(response);\n        var name = response.name,\n            released = response.released,\n            description = response.description;\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <h1 class=\\\"title\\\"></h1>\\n          <p class=\\\"release-date\\\">Release date : <span></span></p>\\n          <p class=\\\"description\\\"></p>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUGFnZURldGFpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL21pc3Npb25fMDA0Mi8uL3NyYy9qcy9QYWdlRGV0YWlsLmpzP2JjMzAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFBhZ2VEZXRhaWwgPSBmdW5jdGlvbiBQYWdlRGV0YWlsKGFyZ3VtZW50KSB7XG4gIHZhciBwcmVwYXJlUGFnZSA9IGZ1bmN0aW9uIHByZXBhcmVQYWdlKCkge1xuICAgIHZhciBjbGVhbmVkQXJndW1lbnQgPSBhcmd1bWVudC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcblxuICAgIHZhciBmZXRjaEdhbWUgPSBmdW5jdGlvbiBmZXRjaEdhbWUodXJsLCBhcmd1bWVudCkge1xuICAgICAgdmFyIGZpbmFsVVJMID0gdXJsICsgYXJndW1lbnQ7XG4gICAgICBmZXRjaChcIlwiLmNvbmNhdChmaW5hbFVSTCkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHZhciBuYW1lID0gcmVzcG9uc2UubmFtZSxcbiAgICAgICAgICAgIHJlbGVhc2VkID0gcmVzcG9uc2UucmVsZWFzZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHJlc3BvbnNlLmRlc2NyaXB0aW9uO1xuICAgICAgICB2YXIgYXJ0aWNsZURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1kZXRhaWwgLmFydGljbGVcIik7XG4gICAgICAgIGFydGljbGVET00ucXVlcnlTZWxlY3RvcihcImgxLnRpdGxlXCIpLmlubmVySFRNTCA9IG5hbWU7XG4gICAgICAgIGFydGljbGVET00ucXVlcnlTZWxlY3RvcihcInAucmVsZWFzZS1kYXRlIHNwYW5cIikuaW5uZXJIVE1MID0gcmVsZWFzZWQ7XG4gICAgICAgIGFydGljbGVET00ucXVlcnlTZWxlY3RvcihcInAuZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmV0Y2hHYW1lKFwiaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXMvXCIsIGNsZWFuZWRBcmd1bWVudCk7XG4gIH07XG5cbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBwYWdlQ29udGVudC5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJwYWdlLWRldGFpbFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgICAgICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9oMT5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInJlbGVhc2UtZGF0ZVxcXCI+UmVsZWFzZSBkYXRlIDogPHNwYW4+PC9zcGFuPjwvcD5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L3NlY3Rpb24+XFxuICAgIFwiO1xuICAgIHByZXBhcmVQYWdlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCk7XG59O1xuXG5leHBvcnQgeyBQYWdlRGV0YWlsIH07Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/PageDetail.js\n");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (article) {\n          articles += \"\\n            <div class=\\\"card mb-3\\\" id=\\\"mouse-on\\\">\\n              <img class=\\\"card-img-top\\\" src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"Card image cap\\\">     \\n              <a href = \\\"#pagedetail/\").concat(article.id, \"\\\" class=\\\"card-title\\\">\").concat(article.name, \"</a>\\n              <div id=\\\"more-info\\\"></div>  \\n            </div>\");\n          document.querySelector(\".page-list .articles\").innerHTML = articles;\n          var mouseOn = document.getElementById(\"mouse-on\");\n          var showInfo = document.getElementById('more-info');\n          mouseOn.addEventListener('mouseover', function () {\n            showInfo.innerHTML = \"<div class=\\\"text-left\\\">\\n                <p>&#128197;  \".concat(article.released, \"</p>\\n                <p>&#11088;  \").concat(article.rating, \" / 5</p>\\n                <p>&#128100;  \").concat(article.tags[0].name, \"</p> \\n                <p>&#128126;  \").concat(article.genres[0].name, \" </p>\\n              </div>\\n              \");\n          });\n        });\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <h1 class=\\\"mb-2\\\">Welcome,</h1>\\n        <p class=\\\"mb-5\\\"> The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame,\\n          the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n          brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\\n          groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\\n          with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure\\n        </p>\\n        <div class=\\\"container text-center mt-4\\\">\\n          <div class=\\\"articles\\\">...loading</div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUGFnZUxpc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taXNzaW9uXzAwNDIvLi9zcmMvanMvUGFnZUxpc3QuanM/MDczOSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUGFnZUxpc3QgPSBmdW5jdGlvbiBQYWdlTGlzdCgpIHtcbiAgdmFyIGFyZ3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBcIlwiO1xuXG4gIHZhciBwcmVwYXJlUGFnZSA9IGZ1bmN0aW9uIHByZXBhcmVQYWdlKCkge1xuICAgIHZhciBjbGVhbmVkQXJndW1lbnQgPSBhcmd1bWVudC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbiAgICB2YXIgYXJ0aWNsZXMgPSBcIlwiO1xuXG4gICAgdmFyIGZldGNoTGlzdCA9IGZ1bmN0aW9uIGZldGNoTGlzdCh1cmwsIGFyZ3VtZW50KSB7XG4gICAgICB2YXIgZmluYWxVUkwgPSB1cmw7XG5cbiAgICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgICBmaW5hbFVSTCA9IHVybCArIFwiP3NlYXJjaD1cIiArIGFyZ3VtZW50O1xuICAgICAgfVxuXG4gICAgICBmZXRjaChcIlwiLmNvbmNhdChmaW5hbFVSTCkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXNwb25zZS5yZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKGFydGljbGUpIHtcbiAgICAgICAgICBhcnRpY2xlcyArPSBcIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgbWItM1xcXCIgaWQ9XFxcIm1vdXNlLW9uXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgc3JjPVxcXCJcIi5jb25jYXQoYXJ0aWNsZS5iYWNrZ3JvdW5kX2ltYWdlLCBcIlxcXCIgYWx0PVxcXCJDYXJkIGltYWdlIGNhcFxcXCI+ICAgICBcXG4gICAgICAgICAgICAgIDxhIGhyZWYgPSBcXFwiI3BhZ2VkZXRhaWwvXCIpLmNvbmNhdChhcnRpY2xlLmlkLCBcIlxcXCIgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlwiKS5jb25jYXQoYXJ0aWNsZS5uYW1lLCBcIjwvYT5cXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XFxcIm1vcmUtaW5mb1xcXCI+PC9kaXY+ICBcXG4gICAgICAgICAgICA8L2Rpdj5cIik7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWxpc3QgLmFydGljbGVzXCIpLmlubmVySFRNTCA9IGFydGljbGVzO1xuICAgICAgICAgIHZhciBtb3VzZU9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3VzZS1vblwiKTtcbiAgICAgICAgICB2YXIgc2hvd0luZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9yZS1pbmZvJyk7XG4gICAgICAgICAgbW91c2VPbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzaG93SW5mby5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxwPiYjMTI4MTk3OyAgXCIuY29uY2F0KGFydGljbGUucmVsZWFzZWQsIFwiPC9wPlxcbiAgICAgICAgICAgICAgICA8cD4mIzExMDg4OyAgXCIpLmNvbmNhdChhcnRpY2xlLnJhdGluZywgXCIgLyA1PC9wPlxcbiAgICAgICAgICAgICAgICA8cD4mIzEyODEwMDsgIFwiKS5jb25jYXQoYXJ0aWNsZS50YWdzWzBdLm5hbWUsIFwiPC9wPiBcXG4gICAgICAgICAgICAgICAgPHA+JiMxMjgxMjY7ICBcIikuY29uY2F0KGFydGljbGUuZ2VucmVzWzBdLm5hbWUsIFwiIDwvcD5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmZXRjaExpc3QoXCJodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lc1wiLCBjbGVhbmVkQXJndW1lbnQpO1xuICB9O1xuXG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwicGFnZS1saXN0XFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwibWItMlxcXCI+V2VsY29tZSw8L2gxPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcIm1iLTVcXFwiPiBUaGUgSHlwZXIgUHJvZ2FtZSBpcyB0aGUgd29ybGRcXHUyMDE5cyBwcmVtaWVyIGV2ZW50IGZvciBjb21wdXRlciBhbmQgdmlkZW8gZ2FtZXMgYW5kIHJlbGF0ZWQgcHJvZHVjdHMuIEF0IFRoZSBIeXBlciBQcm9nYW1lLFxcbiAgICAgICAgICB0aGUgdmlkZW8gZ2FtZSBpbmR1c3RyeVxcdTIwMTlzIHRvcCB0YWxlbnQgcGFjayB0aGUgTG9zIEFuZ2VsZXMgQ29udmVudGlvbiBDZW50ZXIsIGNvbm5lY3RpbmcgdGVucyBvZiB0aG91c2FuZHMgb2YgdGhlIGJlc3QsXFxuICAgICAgICAgIGJyaWdodGVzdCwgYW5kIG1vc3QgaW5ub3ZhdGl2ZSBpbiB0aGUgaW50ZXJhY3RpdmUgZW50ZXJ0YWlubWVudCBpbmR1c3RyeS4gRm9yIHRocmVlIGV4Y2l0aW5nIGRheXMsIGxlYWRpbmctZWRnZSBjb21wYW5pZXMsXFxuICAgICAgICAgIGdyb3VuZGJyZWFraW5nIG5ldyB0ZWNobm9sb2dpZXMsIGFuZCBuZXZlci1iZWZvcmUtc2VlbiBwcm9kdWN0cyB3aWxsIGJlIHNob3djYXNlZC4gVGhlIEh5cGVyIFByb2dhbWUgY29ubmVjdHMgeW91XFxuICAgICAgICAgIHdpdGggYm90aCBuZXcgYW5kIGV4aXN0aW5nIHBhcnRuZXJzLCBpbmR1c3RyeSBleGVjdXRpdmVzLCBnYW1lcnMsIGFuZCBzb2NpYWwgaW5mbHVlbmNlcnMgcHJvdmlkaW5nIHVucHJlY2VkZW50ZWQgZXhwb3N1cmVcXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciB0ZXh0LWNlbnRlciBtdC00XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZXNcXFwiPi4uLmxvYWRpbmc8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgXCI7XG4gICAgcHJlcGFyZVBhZ2UoKTtcbiAgfTtcblxuICByZW5kZXIoKTtcbn07XG5cbmV4cG9ydCB7IFBhZ2VMaXN0IH07Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/PageList.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  var pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taXNzaW9uXzAwNDIvLi9zcmMvanMvaW5kZXguanM/YWEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbnZhciBzZXRSb3V0ZSA9IGZ1bmN0aW9uIHNldFJvdXRlKCkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKS5zcGxpdChcIi9cIik7XG4gIHZhciBwYWdlQXJndW1lbnQgPSBwYXRoWzFdIHx8IFwiXCI7XG4gIHZhciBwYWdlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZUNvbnRlbnRcIik7XG4gIHJvdXRlc1twYXRoWzBdXShwYWdlQXJndW1lbnQpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBzZXRSb3V0ZSgpO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gc2V0Um91dGUoKTtcbn0pOyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\nvar routes = {\n  \"\": _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  \"pagelist\": _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcm91dGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlzc2lvbl8wMDQyLy4vc3JjL2pzL3JvdXRlcy5qcz81YjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VMaXN0IH0gZnJvbSAnLi9QYWdlTGlzdCc7XG5pbXBvcnQgeyBQYWdlRGV0YWlsIH0gZnJvbSAnLi9QYWdlRGV0YWlsJztcbnZhciByb3V0ZXMgPSB7XG4gIFwiXCI6IFBhZ2VMaXN0LFxuICBcInBhZ2VsaXN0XCI6IFBhZ2VMaXN0LFxuICBcInBhZ2VkZXRhaWxcIjogUGFnZURldGFpbFxufTtcbmV4cG9ydCB7IHJvdXRlcyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/routes.js\n");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlzc2lvbl8wMDQyLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz9mOWQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJtYXBwaW5ncyI6IjtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/style.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;