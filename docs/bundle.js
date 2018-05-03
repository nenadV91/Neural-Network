/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Activation.js":
/*!***************************!*\
  !*** ./src/Activation.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Activation = function () {\n\tfunction Activation(type) {\n\t\t_classCallCheck(this, Activation);\n\n\t\tif (!this[type]) throw new Error('Undefined activation function type.');else this.setActivation(type);\n\t}\n\n\t_createClass(Activation, [{\n\t\tkey: 'setActivation',\n\t\tvalue: function setActivation(type) {\n\t\t\tObject.assign(this, this[type]());\n\t\t}\n\t}, {\n\t\tkey: 'sigmoid',\n\t\tvalue: function sigmoid() {\n\t\t\treturn {\n\t\t\t\tforward: function forward(x) {\n\t\t\t\t\treturn 1 / (1 + Math.exp(-x));\n\t\t\t\t},\n\t\t\t\tbackward: function backward(y) {\n\t\t\t\t\treturn y * (1 - y);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}, {\n\t\tkey: 'tanh',\n\t\tvalue: function tanh() {\n\t\t\treturn {\n\t\t\t\tforward: function forward(x) {\n\t\t\t\t\tvar exp = Math.exp(2 * x);\n\t\t\t\t\treturn (exp - 1) / (exp + 1) || 1e-18;\n\t\t\t\t},\n\t\t\t\tbackward: function backward(y) {\n\t\t\t\t\treturn 4 / Math.pow(Math.exp(y) + Math.exp(-y), 2) || 1e-18;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}]);\n\n\treturn Activation;\n}();\n\nexports.default = Activation;\n\n//# sourceURL=webpack:///./src/Activation.js?");

/***/ }),

/***/ "./src/Layer.js":
/*!**********************!*\
  !*** ./src/Layer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Matrix = __webpack_require__(/*! ./Matrix */ \"./src/Matrix.js\");\n\nvar _Matrix2 = _interopRequireDefault(_Matrix);\n\nvar _Activation = __webpack_require__(/*! ./Activation */ \"./src/Activation.js\");\n\nvar _Activation2 = _interopRequireDefault(_Activation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Layer = function () {\n\tfunction Layer(_ref) {\n\t\tvar size = _ref.size,\n\t\t    prev = _ref.prev,\n\t\t    activation = _ref.activation,\n\t\t    learning_rate = _ref.learning_rate,\n\t\t    isInput = _ref.isInput,\n\t\t    isOutput = _ref.isOutput;\n\n\t\t_classCallCheck(this, Layer);\n\n\t\tthis.signal = null;\n\t\tthis.output = null;\n\t\tthis.error = null;\n\t\tthis.gradient = null;\n\t\tthis.deltas = null;\n\n\t\tthis.size = size;\n\t\tthis.prev = prev;\n\t\tthis.isInput = isInput;\n\t\tthis.isOutput = isOutput;\n\t\tthis.activation = activation;\n\t\tthis.learning_rate = learning_rate;\n\n\t\tthis.init();\n\t}\n\n\t_createClass(Layer, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tif (!this.isInput) {\n\t\t\t\tthis.initWeights();\n\t\t\t\tthis.initBias();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'initBias',\n\t\tvalue: function initBias() {\n\t\t\tthis.bias = new _Matrix2.default(this.size, 1);\n\t\t\tthis.bias.randomize();\n\t\t}\n\t}, {\n\t\tkey: 'initWeights',\n\t\tvalue: function initWeights() {\n\t\t\tthis.weights = new _Matrix2.default(this.size, this.prev);\n\t\t\tthis.weights.randomize();\n\t\t}\n\t}, {\n\t\tkey: 'activate',\n\t\tvalue: function activate(inputs) {\n\t\t\tif (this.isInput) {\n\t\t\t\tthis.signal = _Matrix2.default.fromArray(inputs);\n\t\t\t\tthis.output = this.signal;\n\t\t\t} else {\n\t\t\t\tthis.signal = _Matrix2.default.dot(this.weights, inputs);\n\t\t\t\tthis.signal.add(this.bias);\n\t\t\t\tthis.output = _Matrix2.default.mapMatrix(this.signal, this.activation.forward);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'getError',\n\t\tvalue: function getError(targets, error) {\n\t\t\tif (this.isOutput) this.error = _Matrix2.default.subtract(targets, this.output);else this.error = _Matrix2.default.dot(_Matrix2.default.transpose(targets), error);\n\t\t}\n\t}, {\n\t\tkey: 'backPropagate',\n\t\tvalue: function backPropagate(prev_layer) {\n\t\t\tthis.gradient = _Matrix2.default.mapMatrix(this.output, this.activation.backward);\n\t\t\tthis.gradient.multiply(this.error);\n\n\t\t\tthis.deltas = _Matrix2.default.dot(this.gradient, _Matrix2.default.transpose(prev_layer));\n\t\t\tthis.deltas.multiply(this.learning_rate);\n\t\t}\n\t}, {\n\t\tkey: 'applyChanges',\n\t\tvalue: function applyChanges() {\n\t\t\tthis.weights.add(this.deltas);\n\t\t\tthis.bias.add(this.gradient);\n\t\t}\n\t}, {\n\t\tkey: 'connect',\n\t\tvalue: function connect(layer) {\n\t\t\tthis.prev = layer.size;\n\t\t\tthis.initWeights();\n\t\t}\n\t}]);\n\n\treturn Layer;\n}();\n\nexports.default = Layer;\n\n//# sourceURL=webpack:///./src/Layer.js?");

/***/ }),

/***/ "./src/Matrix.js":
/*!***********************!*\
  !*** ./src/Matrix.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Matrix = function () {\n\tfunction Matrix() {\n\t\tvar rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;\n\t\tvar columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n\n\t\t_classCallCheck(this, Matrix);\n\n\t\tthis.rows = rows;\n\t\tthis.columns = columns;\n\t\tthis.data = Array.from(Array(rows), function () {\n\t\t\treturn Array(columns).fill(0);\n\t\t});\n\t}\n\n\t_createClass(Matrix, [{\n\t\tkey: \"clone\",\n\t\tvalue: function clone() {\n\t\t\tvar result = new Matrix(this.rows, this.columns);\n\t\t\tthis.data.forEach(function (row, i) {\n\t\t\t\treturn result.data[i] = row.slice();\n\t\t\t});\n\t\t\treturn result;\n\t\t}\n\t}, {\n\t\tkey: \"mapMatrix\",\n\t\tvalue: function mapMatrix(callback) {\n\t\t\tthis.data.forEach(function (row, i) {\n\t\t\t\trow.forEach(function (element, j) {\n\t\t\t\t\treturn row[j] = callback(element, i, j);\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"toArray\",\n\t\tvalue: function toArray() {\n\t\t\tvar _ref;\n\n\t\t\treturn (_ref = []).concat.apply(_ref, _toConsumableArray(this.data));\n\t\t}\n\t}, {\n\t\tkey: \"rand\",\n\t\tvalue: function rand() {\n\t\t\tvar min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;\n\t\t\tvar max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n\t\t\treturn Math.random() * (max - min) + min;\n\t\t}\n\t}, {\n\t\tkey: \"randomize\",\n\t\tvalue: function randomize(min, max) {\n\t\t\tvar _this = this;\n\n\t\t\tthis.mapMatrix(function () {\n\t\t\t\tvar number = _this.rand(min, max);\n\t\t\t\treturn Math.round(number * 1000) / 1000;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"checkSize\",\n\t\tvalue: function checkSize(matrix_1, matrix_2) {\n\t\t\tif (matrix_1.rows != matrix_2.rows || matrix_1.columns != matrix_2.columns) {\n\t\t\t\tthrow new Error(\"Matrix sizes do not match!\");\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"add\",\n\t\tvalue: function add(value) {\n\t\t\tif (value instanceof Matrix) {\n\t\t\t\tthis.checkSize(this, value);\n\t\t\t\tthis.mapMatrix(function (e, i, j) {\n\t\t\t\t\treturn e + value.data[i][j];\n\t\t\t\t});\n\t\t\t} else this.mapMatrix(function (e) {\n\t\t\t\treturn e + value;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"subtract\",\n\t\tvalue: function subtract(value) {\n\t\t\tif (value instanceof Matrix) {\n\t\t\t\tthis.checkSize(this, value);\n\t\t\t\tthis.mapMatrix(function (e, i, j) {\n\t\t\t\t\treturn e - value.data[i][j];\n\t\t\t\t});\n\t\t\t} else this.mapMatrix(function (e) {\n\t\t\t\treturn e + value;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"multiply\",\n\t\tvalue: function multiply(value) {\n\t\t\tif (value instanceof Matrix) {\n\t\t\t\tthis.checkSize(this, value);\n\t\t\t\tthis.mapMatrix(function (e, i, j) {\n\t\t\t\t\treturn e * value.data[i][j];\n\t\t\t\t});\n\t\t\t} else this.mapMatrix(function (e) {\n\t\t\t\treturn e * value;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"print\",\n\t\tvalue: function print() {\n\t\t\tconsole.table(this.data);\n\t\t}\n\t}], [{\n\t\tkey: \"fromArray\",\n\t\tvalue: function fromArray(array, multiDim) {\n\t\t\tif (!multiDim) {\n\t\t\t\tvar matrix = new Matrix(array.length, 1);\n\t\t\t\tarray.forEach(function (e, i) {\n\t\t\t\t\treturn matrix.data[i][0] = e;\n\t\t\t\t});\n\t\t\t\treturn matrix;\n\t\t\t} else {\n\t\t\t\tMatrix.checkArrayDimension(array);\n\t\t\t\tvar _matrix = new Matrix(array.length, array[0].length);\n\t\t\t\tarray.forEach(function (row, i) {\n\t\t\t\t\treturn _matrix.data[i] = row.slice();\n\t\t\t\t});\n\t\t\t\treturn _matrix;\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"checkArrayDimension\",\n\t\tvalue: function checkArrayDimension(matrix) {\n\t\t\tvar lengthCheck = matrix.every(function (row) {\n\t\t\t\treturn row.length == matrix[0].length;\n\t\t\t});\n\t\t\tif (!lengthCheck) throw new Error(\"All rows must be same length.\");\n\t\t}\n\t}, {\n\t\tkey: \"mapMatrix\",\n\t\tvalue: function mapMatrix(matrix, callback) {\n\t\t\tvar result = matrix.clone();\n\t\t\tresult.mapMatrix(callback);\n\t\t\treturn result;\n\t\t}\n\t}, {\n\t\tkey: \"clone\",\n\t\tvalue: function clone(matrix) {\n\t\t\treturn matrix.clone();\n\t\t}\n\t}, {\n\t\tkey: \"transpose\",\n\t\tvalue: function transpose(matrix) {\n\t\t\tvar result = new Matrix(matrix.columns, matrix.rows);\n\t\t\tmatrix.data.forEach(function (row, i) {\n\t\t\t\treturn row.forEach(function (e, j) {\n\t\t\t\t\treturn result.data[j][i] = e;\n\t\t\t\t});\n\t\t\t});\n\t\t\treturn result;\n\t\t}\n\t}, {\n\t\tkey: \"checkSize\",\n\t\tvalue: function checkSize(matrix_1, matrix_2) {\n\t\t\tif (matrix_1.rows != matrix_2.rows || matrix_1.columns != matrix_2.columns) {\n\t\t\t\tthrow new Error(\"Matrix sizes do not match!\");\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"subtract\",\n\t\tvalue: function subtract(param_1, param_2) {\n\t\t\tvar result = Matrix.clone(param_1);\n\t\t\tif (param_2 instanceof Matrix) {\n\t\t\t\tMatrix.checkSize(param_1, param_2);\n\t\t\t\tresult.subtract(param_2);\n\t\t\t\treturn result;\n\t\t\t} else {\n\t\t\t\tMatrix.mapMatrix(result, function (e) {\n\t\t\t\t\treturn e - param_2;\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"dot\",\n\t\tvalue: function dot(matrix_1, matrix_2) {\n\t\t\tif (!(matrix_1 instanceof Matrix) || !(matrix_2 instanceof Matrix)) {\n\t\t\t\tthrow new Error('Both parameters must be instance of Matrix.');\n\t\t\t}\n\n\t\t\tif (matrix_1.columns !== matrix_2.rows) {\n\t\t\t\tthrow new Error('Matrix sizes do not match.');\n\t\t\t}\n\n\t\t\tvar result = new Matrix(matrix_1.rows, matrix_2.columns);\n\n\t\t\tmatrix_1.data.forEach(function (row, i) {\n\t\t\t\trow.forEach(function (e, j) {\n\t\t\t\t\tfor (var k = 0; k < result.columns; k++) {\n\t\t\t\t\t\tresult.data[i][k] += e * matrix_2.data[j][k];\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t});\n\n\t\t\treturn result;\n\t\t}\n\t}]);\n\n\treturn Matrix;\n}();\n\nexports.default = Matrix;\n\n//# sourceURL=webpack:///./src/Matrix.js?");

/***/ }),

/***/ "./src/NeuralNetwork.js":
/*!******************************!*\
  !*** ./src/NeuralNetwork.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Matrix = __webpack_require__(/*! ./Matrix */ \"./src/Matrix.js\");\n\nvar _Matrix2 = _interopRequireDefault(_Matrix);\n\nvar _Activation = __webpack_require__(/*! ./Activation */ \"./src/Activation.js\");\n\nvar _Activation2 = _interopRequireDefault(_Activation);\n\nvar _Layer = __webpack_require__(/*! ./Layer */ \"./src/Layer.js\");\n\nvar _Layer2 = _interopRequireDefault(_Layer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar NeuralNetwork = function () {\n\tfunction NeuralNetwork(options) {\n\t\t_classCallCheck(this, NeuralNetwork);\n\n\t\tthis.layers = {};\n\t\tthis.hidden = [];\n\t\tthis.init(options);\n\t}\n\n\t_createClass(NeuralNetwork, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\t\t\tthis.learning_rate = options.learning_rate || 0.1;\n\t\t\tthis.activation = new _Activation2.default(options.activation || 'sigmoid');\n\t\t\tthis.initLayers(options.layers || {});\n\t\t}\n\t}, {\n\t\tkey: 'query',\n\t\tvalue: function query(inputs_array) {\n\t\t\tthis.checkLayers();\n\t\t\tthis.activateLayer(this.layers.input, inputs_array);\n\t\t\tthis.activateHidden(this.layers.input.output);\n\t\t\tthis.activateLayer(this.layers.output, this.lastHidden.output);\n\n\t\t\treturn this.layers.output.output;\n\t\t}\n\t}, {\n\t\tkey: 'train',\n\t\tvalue: function train(inputs_array, targets_array) {\n\t\t\tthis.inputs = _Matrix2.default.fromArray(inputs_array);\n\t\t\tthis.targets = _Matrix2.default.fromArray(targets_array);\n\n\t\t\tthis.query(inputs_array);\n\n\t\t\tthis.layers.output.getError(this.targets);\n\t\t\tthis.layers.output.backPropagate(this.lastHidden.output);\n\t\t\tthis.layers.output.applyChanges();\n\n\t\t\tthis.trainHidden(this.layers.output);\n\t\t}\n\t}, {\n\t\tkey: 'trainHidden',\n\t\tvalue: function trainHidden(output) {\n\t\t\tvar hidden = this.layers.hidden,\n\t\t\t    index = hidden.length,\n\t\t\t    prev = output;\n\n\t\t\twhile (index--) {\n\t\t\t\tvar layer = hidden[index];\n\t\t\t\tvar next = hidden[index - 1] || this.layers.input;\n\t\t\t\tlayer.getError(prev.weights, prev.error);\n\t\t\t\tlayer.backPropagate(next.output);\n\t\t\t\tlayer.applyChanges();\n\t\t\t\tprev = layer;\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'checkLayers',\n\t\tvalue: function checkLayers() {\n\t\t\tif (!this.input) throw new Error('Missing input layer.');\n\t\t\tif (!this.hidden.length) throw new Error('Network must have minimum one hidden layer.');\n\t\t\tif (!this.output) throw new Error('Missing output layer.');\n\t\t}\n\t}, {\n\t\tkey: 'initLayers',\n\t\tvalue: function initLayers(_ref) {\n\t\t\tvar _this = this;\n\n\t\t\tvar iNodes = _ref.iNodes,\n\t\t\t    hNodes = _ref.hNodes,\n\t\t\t    oNodes = _ref.oNodes;\n\n\t\t\tif (iNodes) this.setInput(new _Layer2.default({ size: iNodes }));\n\t\t\tif (hNodes) hNodes.forEach(function (size) {\n\t\t\t\treturn _this.setHidden(new _Layer2.default({ size: size }));\n\t\t\t});\n\t\t\tif (oNodes) this.setOutput(new _Layer2.default({ size: oNodes }));\n\t\t}\n\t}, {\n\t\tkey: 'addLayer',\n\t\tvalue: function addLayer(object) {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar input = object.input,\n\t\t\t    hidden = object.hidden,\n\t\t\t    output = object.output;\n\n\t\t\tvar layers = [];\n\n\t\t\tif (input) layers.push(input);\n\t\t\tif (output) layers.push(output);\n\t\t\tif (hidden) layers.push.apply(layers, _toConsumableArray(hidden));\n\n\t\t\tlayers.forEach(function (layer) {\n\t\t\t\treturn _this2.setProps(layer);\n\t\t\t});\n\t\t\tObject.assign(this.layers, object);\n\t\t}\n\t}, {\n\t\tkey: 'setInput',\n\t\tvalue: function setInput(input) {\n\t\t\tinput.isInput = true;\n\t\t\tthis.input = input;\n\t\t\tthis.addLayer({ input: input });\n\t\t}\n\t}, {\n\t\tkey: 'setOutput',\n\t\tvalue: function setOutput(output) {\n\t\t\toutput.isOutput = true;\n\t\t\tthis.output = output;\n\t\t\tif (this.lastHidden) output.connect(this.lastHidden);\n\t\t\tthis.addLayer({ output: output });\n\t\t}\n\t}, {\n\t\tkey: 'setHidden',\n\t\tvalue: function setHidden(hidden) {\n\t\t\tthis.connectHidden(hidden);\n\t\t\tthis.hidden.push(hidden);\n\t\t\tthis.addLayer({ hidden: this.hidden });\n\t\t}\n\t}, {\n\t\tkey: 'connectHidden',\n\t\tvalue: function connectHidden(layer) {\n\t\t\tif (this.output) this.output.connect(layer);\n\t\t\tif (!this.lastHidden) layer.connect(this.input);else layer.connect(this.lastHidden);\n\t\t}\n\t}, {\n\t\tkey: 'activateLayer',\n\t\tvalue: function activateLayer(layer, input) {\n\t\t\tlayer.activate(input);\n\t\t}\n\t}, {\n\t\tkey: 'activateHidden',\n\t\tvalue: function activateHidden(input) {\n\t\t\tthis.hidden.forEach(function (layer, index, arr) {\n\t\t\t\tif (index == 0) layer.activate(input);else layer.activate(arr[index - 1].output);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setProps',\n\t\tvalue: function setProps(layer) {\n\t\t\tvar otherProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\t\t\tObject.assign(layer, otherProps, {\n\t\t\t\tactivation: this.activation,\n\t\t\t\tlearning_rate: this.learning_rate\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'lastHidden',\n\t\tget: function get() {\n\t\t\treturn this.hidden[this.hidden.length - 1];\n\t\t}\n\t}]);\n\n\treturn NeuralNetwork;\n}();\n\nexports.default = NeuralNetwork;\n\n//# sourceURL=webpack:///./src/NeuralNetwork.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Matrix = __webpack_require__(/*! ./Matrix */ \"./src/Matrix.js\");\n\nvar _Matrix2 = _interopRequireDefault(_Matrix);\n\nvar _NeuralNetwork = __webpack_require__(/*! ./NeuralNetwork */ \"./src/NeuralNetwork.js\");\n\nvar _NeuralNetwork2 = _interopRequireDefault(_NeuralNetwork);\n\nvar _Layer = __webpack_require__(/*! ./Layer */ \"./src/Layer.js\");\n\nvar _Layer2 = _interopRequireDefault(_Layer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar data = [{ input: [1, 1], target: [0] }, { input: [1, 0], target: [1] }, { input: [0, 1], target: [1] }, { input: [0, 0], target: [0] }];\n\nvar options = { layers: { iNodes: 2, hNodes: [6, 9], oNodes: 1 } };\nvar brain = new _NeuralNetwork2.default(options);\n\n// brain.setInput(new Layer({size: 2}));\n// brain.setHidden(new Layer({size: 6}));\n// brain.setHidden(new Layer({size: 9}));\n// brain.setOutput(new Layer({size: 1}));\n\nfor (var i = 0; i < 30000; i++) {\n\tvar number = Math.floor(Math.random() * data.length);\n\tvar _data$number = data[number],\n\t    input = _data$number.input,\n\t    target = _data$number.target;\n\n\tbrain.train(input, target);\n}\n\nconsole.log('Training finished');\nconsole.log('-----------------------------------------------------------');\n\nvar test = [[1, 1], [0, 1], [1, 0], [0, 0]];\ntest.forEach(function (input) {\n\treturn console.log(brain.query(input).toArray());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });