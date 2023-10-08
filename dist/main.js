/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
}

.project {
    border: solid thin;
    display: inline-block;
    padding: 10px;
}

.project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50px 1fr;
    border: solid;
    display: none;
}

.project-header {
    grid-column: 1 / 3;
    justify-self: center;
    align-self: center;
}

fieldset {
    border: none;
}

.check-list-container {
    border: solid thin;
}

.details > li {
    margin-left: 20px;
}

.strike {
    text-decoration: line-through;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,4BAA4B;IAC5B,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;AACjC","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\n.project {\n    border: solid thin;\n    display: inline-block;\n    padding: 10px;\n}\n\n.project-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 50px 1fr;\n    border: solid;\n    display: none;\n}\n\n.project-header {\n    grid-column: 1 / 3;\n    justify-self: center;\n    align-self: center;\n}\n\nfieldset {\n    border: none;\n}\n\n.check-list-container {\n    border: solid thin;\n}\n\n.details > li {\n    margin-left: 20px;\n}\n\n.strike {\n    text-decoration: line-through;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/allProjects.js":
/*!****************************!*\
  !*** ./src/allProjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   getLandingContent: () => (/* binding */ getLandingContent),
/* harmony export */   getProjectByID: () => (/* binding */ getProjectByID),
/* harmony export */   getProjectNodes: () => (/* binding */ getProjectNodes),
/* harmony export */   moveTodoDown: () => (/* binding */ moveTodoDown),
/* harmony export */   moveTodoUp: () => (/* binding */ moveTodoUp),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   removeTodo: () => (/* binding */ removeTodo)
/* harmony export */ });


const projects = [];
let currentID = 0;
//const sortOrder = 0;


function Project(title, dueDate, description, priority, notes) {
    const id = currentID;
    currentID++;
    return {
        id,
        title,
        dueDate,
        description,
        priority,
        notes,
        todos: [{'Todo 1': false}, {'Todo 2': false}, {'Todo 3': false}]
    }
}

function addProject(info) {
    const project = new Project(info.title, info.dueDate, info.description, info.priority, info.notes);
    projects.push(project);
    return project;
}

function addTodo(id, todo) {
    getProjectByID(id).todos.push({[todo]:false});
}

function removeTodo(id, todoToRemove) {
    const project = getProjectByID(id);
    project.todos = project.todos.filter(todo => {
        return Object.keys(todo)[0] != todoToRemove;
    })
}

function moveTodoUp(id, index) {
    const project = getProjectByID(id);
    const todo = project.todos[index];
    if (index != 0) {
        project.todos.splice(index, 1);
        project.todos.splice(index - 1, 0, todo);
    }
}

function moveTodoDown(id, index) {
    const project = getProjectByID(id);
    const todo = project.todos[index];
    if (index != project.todos.length - 1) {
        project.todos.splice(index, 1);
        project.todos.splice(index + 1, 0, todo);
    }
}

function getLandingContent() {
    const emptyProject = new Project('Blank project', "12/31/2023", 'Blank description', 0, '');
    projects.push(emptyProject);
    return getDiv(emptyProject);
}

function getProjectNodes() {
    const nodes = [];
    projects.forEach(project => {
        nodes.push(getDiv(project));
    });
    return nodes;
}

function removeProject(id) {
    const index = projects.indexOf(getProjectByID(id));
    projects.splice(index, 1);
}

function getProjectByID(id) {
    return projects.filter(project => project.id == id)[0];
}

function getDiv(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-id', project.id);
    
    const titleP = document.createElement('p');
    titleP.textContent = project.title;

    const dueDateP = document.createElement('p');
    dueDateP.textContent = project.dueDate;

    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View Project';
    viewBtn.classList.add('viewBtn')
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove Project';
    removeBtn.classList.add('removeBtn')

    projectDiv.appendChild(titleP);
    projectDiv.appendChild(dueDateP);
    projectDiv.appendChild(viewBtn);
    projectDiv.appendChild(removeBtn);

    return projectDiv
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSingleProjectDivs: () => (/* binding */ getSingleProjectDivs)
/* harmony export */ });


function getSingleProjectDivs(project) {
    
    const checkListContainer = getCheckListContainerDiv(project);
    const detailsContainer = getDetailsContainerDiv(project);
    const buttonsContainer = getButtonsContainer();

    return [checkListContainer, detailsContainer, buttonsContainer]
}

function getCheckListContainerDiv(project) {
    const checkListContainer = document.createElement('form');
    checkListContainer.classList.add('check-list-container');
    const checkList = document.createElement('fieldset');
    checkList.legend = 'Check list';
    checkList.classList.add('check-list');
    checkListContainer.appendChild(checkList);
    project.todos.forEach((todo, index) => {
        const inputContainer = document.createElement('div');

        const label = document.createElement('label');
        label.textContent = Object.keys(todo)[0];
        label.addEventListener('click', () => {
            if (([...label.classList].includes('strike'))) {
                label.classList.remove('strike');
                project.todos[index][label.textContent] = false;
            } else {
                label.classList.add('strike');
                project.todos[index][label.textContent] = true;
            }
        })
        const input = document.createElement('input');
        input.type = 'radio';
        input.value = Object.keys(todo)[0];;
        input.name = 'todos';

        inputContainer.appendChild(input);
        inputContainer.appendChild(label);

        checkList.appendChild(inputContainer);
    });

    return checkListContainer;
}

function getDetailsContainerDiv(project) {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    
    const details = document.createElement('ul');
    details.textContent = 'Details';
    details.classList.add('details');
    detailsContainer.appendChild(details);
    
    const liList = getDetails(project);
    liList.forEach(li => {
        details.append(li);
    })
    
    return detailsContainer
}

function getDetails(project) {
    const liList = [];
    const lineItems = {
        description: 'Description',
        dueDate: 'Due date',
        priority: 'Priority',
        notes: 'Notes'
    };

    for (let key in lineItems) {
        const item = document.createElement('li');
        item.textContent = lineItems[key] + ": " + project[key];
        liList.push(item);
    }
    return liList;
}


function getButtonsContainer() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const returnButton = document.createElement('button');
    returnButton.id = 'return-button';
    returnButton.textContent = 'Return to projects page'

    const addTodoButton = document.createElement('button');
    addTodoButton.id = 'add-todo-button';
    addTodoButton.textContent = 'Add todo';

    const removeTodoButton = document.createElement('button');
    removeTodoButton.id = 'remove-todo-button';
    removeTodoButton.textContent = 'Remove todo'

    const moveTodoUpButton = document.createElement('button');
    moveTodoUpButton.id = 'move-todo-up-button';
    moveTodoUpButton.textContent = 'Move up';
    
    const moveTodoDownButton = document.createElement('button');
    moveTodoDownButton.id = 'move-todo-down-button';
    moveTodoDownButton.textContent = 'Move down';
    
    buttonsContainer.appendChild(returnButton);
    buttonsContainer.appendChild(addTodoButton);
    buttonsContainer.appendChild(removeTodoButton);
    buttonsContainer.appendChild(moveTodoUpButton);
    buttonsContainer.appendChild(moveTodoDownButton);

    return buttonsContainer;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _allProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allProjects.js */ "./src/allProjects.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




window.onload = () => {
    document.querySelector('#content').appendChild(getAddProjectButton());
    
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    document.querySelector('#content').appendChild(projectsContainer);
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    document.querySelector('#content').appendChild(projectContainer);

    const landingContent = (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.getLandingContent)()
    displayProjects();
}

function displayProjects() {
    clearContent();
    const projectNodes = (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectNodes)();
    projectNodes.forEach(node => {
        document.querySelector('.projects-container').appendChild(node);
        node.querySelector('.removeBtn').addEventListener('click', () => {
            (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.removeProject)(node.getAttribute('data-id'));
            displayProjects();
        });
        node.querySelector('.viewBtn').addEventListener('click', () => {
            displaySingleProject(node.getAttribute('data-id'));
        });
    });
}

function displaySingleProject(id) {
    document.querySelector('#add-project-button').style.display = 'none';
    document.querySelector('.project-container').style.display = 'grid';
    clearContent();
    const header = document.createElement('h2');
    header.classList.add('project-header');
    header.textContent = (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByID)(id).title;
    document.querySelector('.project-container').appendChild(header);
    
    const projectDivs = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSingleProjectDivs)((0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByID)(id));
    projectDivs.forEach(div => {
        document.querySelector('.project-container').appendChild(div);
    });
    const returnButton = document.querySelector('#return-button');
    returnButton.addEventListener('click', () => {
        document.querySelector('#add-project-button').style.display = 'block';
        document.querySelector('.project-container').style.display = 'none';
        displayProjects();
    });
    const addTodoButton = document.querySelector('#add-todo-button');
    addTodoButton.addEventListener('click', () => {
        
        const todo = window.prompt("Enter new todo");
        (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.addTodo)(id, todo);
        displaySingleProject(id);
    })
    const removeTodoButton = document.querySelector('#remove-todo-button');
    removeTodoButton.addEventListener('click', () => {
        const checkList = document.querySelector('.check-list');
        for (const inputDiv of checkList.children) {
            if (inputDiv.querySelector('input').checked) {
                const value = inputDiv.querySelector('input').value;
                inputDiv.remove();
                (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.removeTodo)(id, value);
            }
        }
    })

    const moveTodoUpButton = document.querySelector('#move-todo-up-button');
    moveTodoUpButton.addEventListener('click', () => {
        const checkList = document.querySelector('.check-list');
        let checkedItemIndex;
        [...checkList.children].forEach((inputDiv, index) => {
            if (inputDiv.querySelector('input').checked) {
                checkedItemIndex = index;
                (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.moveTodoUp)(id, index);
                displaySingleProject(id);
            }
        });
        document.querySelector(`.check-list>div:nth-child(${Math.max(checkedItemIndex, 1)})>input`).checked = true;
    })
    
    const moveTodoDownButton = document.querySelector('#move-todo-down-button');
    moveTodoDownButton.addEventListener('click', () => {
        const checkList = document.querySelector('.check-list');
        let checkedItemIndex;
        [...checkList.children].forEach((inputDiv, index) => {
            if (inputDiv.querySelector('input').checked) {
                checkedItemIndex = index;
                (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.moveTodoDown)(id, index);
                displaySingleProject(id);
            }
        });
        document.querySelector(`.check-list>div:nth-child(${Math.min(checkedItemIndex + 2, [...checkList.children].length)})>input`).checked = true;
    })
    restrikeItems(id);
}

function restrikeItems(id) {
    let divs = document.querySelectorAll('.check-list>div');
    const project = (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectByID)(id);
    [...divs].forEach((div, index) => {
        if (Object.values(project.todos[index])[0]) {
            divs[index].querySelector('label').classList.add('strike');
        }
    });
}

function displayTodos() {
    const todoDivs = [...document.querySelector('.check-list').children];
}

function clearContent() {
    document.querySelector('.projects-container').innerHTML = '';
    document.querySelector('.project-container').innerHTML = '';
}

function getAddProjectButton() {
    const button = document.createElement('button');
    button.id = 'add-project-button';
    button.textContent = 'Add new project';
    button.addEventListener('click', () => {
        const info = {};
        info.title = window.prompt("Title?");
        info.description = window.prompt("Description?");
        info.dueDate = window.prompt("Due date?");
        info.priority = window.prompt("Priority?");
        info.notes = window.prompt("Notes?");
        const project = (0,_allProjects_js__WEBPACK_IMPORTED_MODULE_1__.addProject)(info);
        displayProjects();
    })
    return button;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksNkJBQTZCLGlCQUFpQixnQkFBZ0IsR0FBRyxjQUFjLHlCQUF5Qiw0QkFBNEIsb0JBQW9CLEdBQUcsd0JBQXdCLG9CQUFvQiw0Q0FBNEMsbUNBQW1DLG9CQUFvQixvQkFBb0IsR0FBRyxxQkFBcUIseUJBQXlCLDJCQUEyQix5QkFBeUIsR0FBRyxjQUFjLG1CQUFtQixHQUFHLDJCQUEyQix5QkFBeUIsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsYUFBYSxvQ0FBb0MsR0FBRyxtQkFBbUI7QUFDcitCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDOUMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzSTs7QUFFdEk7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0I7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLGFBQWE7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2RzhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUNoSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lJO0FBQzVHOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGtFQUFpQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0VBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBYTtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQWM7QUFDdkM7QUFDQTtBQUNBLHdCQUF3QixpRUFBb0IsQ0FBQywrREFBYztBQUMzRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFPO0FBQ2Y7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQVU7QUFDMUI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQVU7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCw0REFBNEQsOEJBQThCO0FBQzFGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZEQUFZO0FBQzVCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNERBQTRELCtEQUErRDtBQUMzSCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLCtEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFVO0FBQ2xDO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FsbFByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0IHtcbiAgICBib3JkZXI6IHNvbGlkIHRoaW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jaGVjay1saXN0LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZCB0aGluO1xufVxuXG4uZGV0YWlscyA+IGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnN0cmlrZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiBzb2xpZCB0aGluO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jaGVjay1saXN0LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogc29saWQgdGhpbjtcXG59XFxuXFxuLmRldGFpbHMgPiBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge2dldExhbmRpbmdDb250ZW50LCBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0Tm9kZXMsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3RCeUlELCBhZGRUb2RvLCByZW1vdmVUb2RvLCBtb3ZlVG9kb1VwLCBtb3ZlVG9kb0Rvd259O1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xubGV0IGN1cnJlbnRJRCA9IDA7XG4vL2NvbnN0IHNvcnRPcmRlciA9IDA7XG5cblxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBub3Rlcykge1xuICAgIGNvbnN0IGlkID0gY3VycmVudElEO1xuICAgIGN1cnJlbnRJRCsrO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBub3RlcyxcbiAgICAgICAgdG9kb3M6IFt7J1RvZG8gMSc6IGZhbHNlfSwgeydUb2RvIDInOiBmYWxzZX0sIHsnVG9kbyAzJzogZmFsc2V9XVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChpbmZvKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGluZm8udGl0bGUsIGluZm8uZHVlRGF0ZSwgaW5mby5kZXNjcmlwdGlvbiwgaW5mby5wcmlvcml0eSwgaW5mby5ub3Rlcyk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyhpZCwgdG9kbykge1xuICAgIGdldFByb2plY3RCeUlEKGlkKS50b2Rvcy5wdXNoKHtbdG9kb106ZmFsc2V9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhpZCwgdG9kb1RvUmVtb3ZlKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlEKGlkKTtcbiAgICBwcm9qZWN0LnRvZG9zID0gcHJvamVjdC50b2Rvcy5maWx0ZXIodG9kbyA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0b2RvKVswXSAhPSB0b2RvVG9SZW1vdmU7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbW92ZVRvZG9VcChpZCwgaW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SUQoaWQpO1xuICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zW2luZGV4XTtcbiAgICBpZiAoaW5kZXggIT0gMCkge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHByb2plY3QudG9kb3Muc3BsaWNlKGluZGV4IC0gMSwgMCwgdG9kbyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlVG9kb0Rvd24oaWQsIGluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlEKGlkKTtcbiAgICBjb25zdCB0b2RvID0gcHJvamVjdC50b2Rvc1tpbmRleF07XG4gICAgaWYgKGluZGV4ICE9IHByb2plY3QudG9kb3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHByb2plY3QudG9kb3Muc3BsaWNlKGluZGV4ICsgMSwgMCwgdG9kbyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRMYW5kaW5nQ29udGVudCgpIHtcbiAgICBjb25zdCBlbXB0eVByb2plY3QgPSBuZXcgUHJvamVjdCgnQmxhbmsgcHJvamVjdCcsIFwiMTIvMzEvMjAyM1wiLCAnQmxhbmsgZGVzY3JpcHRpb24nLCAwLCAnJyk7XG4gICAgcHJvamVjdHMucHVzaChlbXB0eVByb2plY3QpO1xuICAgIHJldHVybiBnZXREaXYoZW1wdHlQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdE5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbm9kZXMucHVzaChnZXREaXYocHJvamVjdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpZCkge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihnZXRQcm9qZWN0QnlJRChpZCkpO1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RCeUlEKGlkKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gaWQpWzBdO1xufVxuXG5mdW5jdGlvbiBnZXREaXYocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaWQpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZVAudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgY29uc3QgZHVlRGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZVAudGV4dENvbnRlbnQgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICBjb25zdCB2aWV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdmlld0J0bi50ZXh0Q29udGVudCA9ICdWaWV3IFByb2plY3QnO1xuICAgIHZpZXdCdG4uY2xhc3NMaXN0LmFkZCgndmlld0J0bicpXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJ1JlbW92ZSBQcm9qZWN0JztcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlQnRuJylcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGl0bGVQKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHZpZXdCdG4pO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblxuICAgIHJldHVybiBwcm9qZWN0RGl2XG59IiwiZXhwb3J0IHtnZXRTaW5nbGVQcm9qZWN0RGl2c307XG5cbmZ1bmN0aW9uIGdldFNpbmdsZVByb2plY3REaXZzKHByb2plY3QpIHtcbiAgICBcbiAgICBjb25zdCBjaGVja0xpc3RDb250YWluZXIgPSBnZXRDaGVja0xpc3RDb250YWluZXJEaXYocHJvamVjdCk7XG4gICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGdldERldGFpbHNDb250YWluZXJEaXYocHJvamVjdCk7XG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGdldEJ1dHRvbnNDb250YWluZXIoKTtcblxuICAgIHJldHVybiBbY2hlY2tMaXN0Q29udGFpbmVyLCBkZXRhaWxzQ29udGFpbmVyLCBidXR0b25zQ29udGFpbmVyXVxufVxuXG5mdW5jdGlvbiBnZXRDaGVja0xpc3RDb250YWluZXJEaXYocHJvamVjdCkge1xuICAgIGNvbnN0IGNoZWNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjaGVja0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2stbGlzdC1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgIGNoZWNrTGlzdC5sZWdlbmQgPSAnQ2hlY2sgbGlzdCc7XG4gICAgY2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWxpc3QnKTtcbiAgICBjaGVja0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KTtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IE9iamVjdC5rZXlzKHRvZG8pWzBdO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICgoWy4uLmxhYmVsLmNsYXNzTGlzdF0uaW5jbHVkZXMoJ3N0cmlrZScpKSkge1xuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZScpO1xuICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3NbaW5kZXhdW2xhYmVsLnRleHRDb250ZW50XSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zW2luZGV4XVtsYWJlbC50ZXh0Q29udGVudF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IE9iamVjdC5rZXlzKHRvZG8pWzBdOztcbiAgICAgICAgaW5wdXQubmFtZSA9ICd0b2Rvcyc7XG5cbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgY2hlY2tMaXN0LmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjaGVja0xpc3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdldERldGFpbHNDb250YWluZXJEaXYocHJvamVjdCkge1xuICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgZGV0YWlscy50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgIFxuICAgIGNvbnN0IGxpTGlzdCA9IGdldERldGFpbHMocHJvamVjdCk7XG4gICAgbGlMaXN0LmZvckVhY2gobGkgPT4ge1xuICAgICAgICBkZXRhaWxzLmFwcGVuZChsaSk7XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gZGV0YWlsc0NvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBnZXREZXRhaWxzKHByb2plY3QpIHtcbiAgICBjb25zdCBsaUxpc3QgPSBbXTtcbiAgICBjb25zdCBsaW5lSXRlbXMgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICBkdWVEYXRlOiAnRHVlIGRhdGUnLFxuICAgICAgICBwcmlvcml0eTogJ1ByaW9yaXR5JyxcbiAgICAgICAgbm90ZXM6ICdOb3RlcydcbiAgICB9O1xuXG4gICAgZm9yIChsZXQga2V5IGluIGxpbmVJdGVtcykge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGxpbmVJdGVtc1trZXldICsgXCI6IFwiICsgcHJvamVjdFtrZXldO1xuICAgICAgICBsaUxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpTGlzdDtcbn1cblxuXG5mdW5jdGlvbiBnZXRCdXR0b25zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCByZXR1cm5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXR1cm5CdXR0b24uaWQgPSAncmV0dXJuLWJ1dHRvbic7XG4gICAgcmV0dXJuQnV0dG9uLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBwcm9qZWN0cyBwYWdlJ1xuXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRvZG9CdXR0b24uaWQgPSAnYWRkLXRvZG8tYnV0dG9uJztcbiAgICBhZGRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCB0b2RvJztcblxuICAgIGNvbnN0IHJlbW92ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVUb2RvQnV0dG9uLmlkID0gJ3JlbW92ZS10b2RvLWJ1dHRvbic7XG4gICAgcmVtb3ZlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdSZW1vdmUgdG9kbydcblxuICAgIGNvbnN0IG1vdmVUb2RvVXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtb3ZlVG9kb1VwQnV0dG9uLmlkID0gJ21vdmUtdG9kby11cC1idXR0b24nO1xuICAgIG1vdmVUb2RvVXBCdXR0b24udGV4dENvbnRlbnQgPSAnTW92ZSB1cCc7XG4gICAgXG4gICAgY29uc3QgbW92ZVRvZG9Eb3duQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbW92ZVRvZG9Eb3duQnV0dG9uLmlkID0gJ21vdmUtdG9kby1kb3duLWJ1dHRvbic7XG4gICAgbW92ZVRvZG9Eb3duQnV0dG9uLnRleHRDb250ZW50ID0gJ01vdmUgZG93bic7XG4gICAgXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXR1cm5CdXR0b24pO1xuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbik7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVUb2RvQnV0dG9uKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVUb2RvVXBCdXR0b24pO1xuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVRvZG9Eb3duQnV0dG9uKTtcblxuICAgIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtnZXRMYW5kaW5nQ29udGVudCwgYWRkUHJvamVjdCwgZ2V0UHJvamVjdE5vZGVzLCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0QnlJRCwgYWRkVG9kbywgcmVtb3ZlVG9kbywgbW92ZVRvZG9VcCwgbW92ZVRvZG9Eb3dufSBmcm9tICcuL2FsbFByb2plY3RzLmpzJztcbmltcG9ydCB7Z2V0U2luZ2xlUHJvamVjdERpdnN9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnZXRBZGRQcm9qZWN0QnV0dG9uKCkpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgbGFuZGluZ0NvbnRlbnQgPSBnZXRMYW5kaW5nQ29udGVudCgpXG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjb25zdCBwcm9qZWN0Tm9kZXMgPSBnZXRQcm9qZWN0Tm9kZXMoKTtcbiAgICBwcm9qZWN0Tm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3Qobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignLnZpZXdCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlTaW5nbGVQcm9qZWN0KG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNpbmdsZVByb2plY3QoaWQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gZ2V0UHJvamVjdEJ5SUQoaWQpLnRpdGxlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdERpdnMgPSBnZXRTaW5nbGVQcm9qZWN0RGl2cyhnZXRQcm9qZWN0QnlJRChpZCkpO1xuICAgIHByb2plY3REaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgICBjb25zdCByZXR1cm5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV0dXJuLWJ1dHRvbicpO1xuICAgIHJldHVybkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10b2RvLWJ1dHRvbicpO1xuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2RvID0gd2luZG93LnByb21wdChcIkVudGVyIG5ldyB0b2RvXCIpO1xuICAgICAgICBhZGRUb2RvKGlkLCB0b2RvKTtcbiAgICAgICAgZGlzcGxheVNpbmdsZVByb2plY3QoaWQpO1xuICAgIH0pXG4gICAgY29uc3QgcmVtb3ZlVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtdG9kby1idXR0b24nKTtcbiAgICByZW1vdmVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stbGlzdCcpO1xuICAgICAgICBmb3IgKGNvbnN0IGlucHV0RGl2IG9mIGNoZWNrTGlzdC5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGlucHV0RGl2LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXREaXYucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dERpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKGlkLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbW92ZVRvZG9VcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLXRvZG8tdXAtYnV0dG9uJyk7XG4gICAgbW92ZVRvZG9VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLWxpc3QnKTtcbiAgICAgICAgbGV0IGNoZWNrZWRJdGVtSW5kZXg7XG4gICAgICAgIFsuLi5jaGVja0xpc3QuY2hpbGRyZW5dLmZvckVhY2goKGlucHV0RGl2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0RGl2LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBtb3ZlVG9kb1VwKGlkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNpbmdsZVByb2plY3QoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNoZWNrLWxpc3Q+ZGl2Om50aC1jaGlsZCgke01hdGgubWF4KGNoZWNrZWRJdGVtSW5kZXgsIDEpfSk+aW5wdXRgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1vdmVUb2RvRG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLXRvZG8tZG93bi1idXR0b24nKTtcbiAgICBtb3ZlVG9kb0Rvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1saXN0Jyk7XG4gICAgICAgIGxldCBjaGVja2VkSXRlbUluZGV4O1xuICAgICAgICBbLi4uY2hlY2tMaXN0LmNoaWxkcmVuXS5mb3JFYWNoKChpbnB1dERpdiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dERpdi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgbW92ZVRvZG9Eb3duKGlkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNpbmdsZVByb2plY3QoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNoZWNrLWxpc3Q+ZGl2Om50aC1jaGlsZCgke01hdGgubWluKGNoZWNrZWRJdGVtSW5kZXggKyAyLCBbLi4uY2hlY2tMaXN0LmNoaWxkcmVuXS5sZW5ndGgpfSk+aW5wdXRgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KVxuICAgIHJlc3RyaWtlSXRlbXMoaWQpO1xufVxuXG5mdW5jdGlvbiByZXN0cmlrZUl0ZW1zKGlkKSB7XG4gICAgbGV0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stbGlzdD5kaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SUQoaWQpO1xuICAgIFsuLi5kaXZzXS5mb3JFYWNoKChkaXYsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKHByb2plY3QudG9kb3NbaW5kZXhdKVswXSkge1xuICAgICAgICAgICAgZGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcignbGFiZWwnKS5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3MoKSB7XG4gICAgY29uc3QgdG9kb0RpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLWxpc3QnKS5jaGlsZHJlbl07XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGdldEFkZFByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlkID0gJ2FkZC1wcm9qZWN0LWJ1dHRvbic7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCc7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0ge307XG4gICAgICAgIGluZm8udGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiVGl0bGU/XCIpO1xuICAgICAgICBpbmZvLmRlc2NyaXB0aW9uID0gd2luZG93LnByb21wdChcIkRlc2NyaXB0aW9uP1wiKTtcbiAgICAgICAgaW5mby5kdWVEYXRlID0gd2luZG93LnByb21wdChcIkR1ZSBkYXRlP1wiKTtcbiAgICAgICAgaW5mby5wcmlvcml0eSA9IHdpbmRvdy5wcm9tcHQoXCJQcmlvcml0eT9cIik7XG4gICAgICAgIGluZm8ubm90ZXMgPSB3aW5kb3cucHJvbXB0KFwiTm90ZXM/XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gYWRkUHJvamVjdChpbmZvKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSlcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=