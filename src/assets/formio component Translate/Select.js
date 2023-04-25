"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.reflect.set.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.number.is-nan.js");

require("core-js/modules/es.number.is-finite.js");

require("core-js/modules/es.array.find-index.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _lodash = _interopRequireDefault(require("lodash"));

var _Formio = _interopRequireDefault(require("../../Formio"));

var _Field2 = _interopRequireDefault(require("../_classes/field/Field"));

var _Form = _interopRequireDefault(require("../../Form"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Choices;

if (typeof window !== 'undefined') {
  Choices = require('../../utils/ChoicesWrapper').default;
}

var SelectComponent = /*#__PURE__*/function (_Field) {
  _inherits(SelectComponent, _Field);

  var _super = _createSuper(SelectComponent);

  function SelectComponent() {
    _classCallCheck(this, SelectComponent);

    return _super.apply(this, arguments);
  }

  _createClass(SelectComponent, [{
    key: "init",
    value: function init() {
      var _this = this;

      _get(_getPrototypeOf(SelectComponent.prototype), "init", this).call(this);

      this.validators = this.validators.concat(['select', 'onlyAvailableItems']); // Trigger an update.

      var updateArgs = [];

      var triggerUpdate = _lodash.default.debounce(function () {
        updateArgs = [];

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _this.updateItems.apply(_this, args);
      }, 100);

      this.triggerUpdate = function () {
        _this.itemsLoaded = new _nativePromiseOnly.default(function (resolve) {
          _this.itemsLoadedResolve = resolve;
        });

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (args.length) {
          updateArgs = args;
        }

        return triggerUpdate.apply(void 0, _toConsumableArray(updateArgs));
      }; // Keep track of the select options.


      this.selectOptions = [];

      if (this.isInfiniteScrollProvided) {
        this.isFromSearch = false;
        this.searchServerCount = null;
        this.defaultServerCount = null;
        this.isScrollLoading = false;
        this.searchDownloadedResources = [];
        this.defaultDownloadedResources = [];
      } // If this component has been activated.


      this.activated = false;
      this.itemsLoaded = new _nativePromiseOnly.default(function (resolve) {
        _this.itemsLoadedResolve = resolve;
      });
    }
  }, {
    key: "dataReady",
    get: function get() {
      // If the root submission has been set, and we are still not attached, then assume
      // that our data is ready.
      if (this.root && this.root.submissionSet && !this.attached) {
        return _nativePromiseOnly.default.resolve();
      }

      return this.itemsLoaded;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return SelectComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      if (this.component.multiple) {
        return [];
      } // if select has JSON data source type, we are defining if empty value would be an object or a string by checking JSON's first item


      if (this.component.dataSrc === 'json' && this.component.data.json) {
        var firstItem = this.component.data.json[0];
        var firstValue;

        if (this.valueProperty) {
          firstValue = _lodash.default.get(firstItem, this.valueProperty);
        } else {
          firstValue = firstItem;
        }

        if (firstValue && typeof firstValue === 'string') {
          return '';
        } else {
          return {};
        }
      }

      if (this.valueProperty) {
        return '';
      }

      return {};
    }
  }, {
    key: "valueProperty",
    get: function get() {
      if (this.component.valueProperty) {
        return this.component.valueProperty;
      } // Force values datasource to use values without actually setting it on the component settings.


      if (this.component.dataSrc === 'values') {
        return 'value';
      }

      return '';
    }
  }, {
    key: "inputInfo",
    get: function get() {
      var info = _get(_getPrototypeOf(SelectComponent.prototype), "elementInfo", this).call(this);

      info.type = 'select';
      info.changeEvent = 'change';
      return info;
    }
  }, {
    key: "isSelectResource",
    get: function get() {
      return this.component.dataSrc === 'resource';
    }
  }, {
    key: "isSelectURL",
    get: function get() {
      return this.component.dataSrc === 'url';
    }
  }, {
    key: "isInfiniteScrollProvided",
    get: function get() {
      return this.isSelectResource || this.isSelectURL;
    }
  }, {
    key: "shouldDisabled",
    get: function get() {
      return _get(_getPrototypeOf(SelectComponent.prototype), "shouldDisabled", this) || this.parentDisabled;
    }
  }, {
    key: "isEntireObjectDisplay",
    value: function isEntireObjectDisplay() {
      return this.component.dataSrc === 'resource' && this.valueProperty === 'data';
    }
  }, {
    key: "itemTemplate",
    value: function itemTemplate(data) {
      if (_lodash.default.isEmpty(data)) {
        return '';
      } // If they wish to show the value in read only mode, then just return the itemValue here.


      if (this.options.readOnly && this.component.readOnlyValue) {
        return this.itemValue(data);
      } // Perform a fast interpretation if we should not use the template.


      if (data && !this.component.template) {
        var itemLabel = data.label || data;
        return typeof itemLabel === 'string' ? this.t(itemLabel, {
          _userInput: true
        }) : itemLabel;
      }

      if (typeof data === 'string') {
        return this.t(data, {
          _userInput: true
        });
      }

      if (data.data) {
        // checking additional fields in the template for the selected Entire Object option
        var hasNestedFields = /item\.data\.\w*/g.test(this.component.template);
        data.data = this.isEntireObjectDisplay() && _lodash.default.isObject(data.data) && !hasNestedFields ? JSON.stringify(data.data) : data.data;
      }

      var template = this.sanitize(this.component.template ? this.interpolate(this.component.template, {
        item: data
      }) : data.label);

      if (template) {
        var _this$i18next;

        var label = template.replace(/<\/?[^>]+(>|$)/g, '');
        var hasTranslator = (_this$i18next = this.i18next) === null || _this$i18next === void 0 ? void 0 : _this$i18next.translator;
        if (!label || hasTranslator && !this.t(label, {
          _userInput: true
        })) return;
        return hasTranslator ? template.replace(label, this.t(label, {
          _userInput: true
        })) : label;
      } else {
        return JSON.stringify(data);
      }
    }
    /**
     * Adds an option to the select dropdown.
     *
     * @param value
     * @param label
     */

  }, {
    key: "addOption",
    value: function addOption(value, label) {
      var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _utils.getRandomComponentId)();
      if (_lodash.default.isNil(label)) return;
      var idPath = this.component.idPath ? this.component.idPath.split('.').reduceRight(function (obj, key) {
        return _defineProperty({}, key, obj);
      }, id) : {};

      var option = _objectSpread({
        value: this.getOptionValue(value),
        label: label
      }, idPath);

      var skipOption = this.component.uniqueOptions ? !!this.selectOptions.find(function (selectOption) {
        return _lodash.default.isEqual(selectOption.value, option.value);
      }) : false;

      if (skipOption) {
        return;
      }

      if (value) {
        this.selectOptions.push(option);
      }

      if (this.refs.selectContainer && this.component.widget === 'html5') {
        // Replace an empty Object value to an empty String.
        if (option.value && _lodash.default.isObject(option.value) && _lodash.default.isEmpty(option.value)) {
          option.value = '';
        } // Add element to option so we can reference it later.


        var div = document.createElement('div');
        div.innerHTML = this.sanitize(this.renderTemplate('selectOption', {
          selected: _lodash.default.isEqual(this.dataValue, option.value),
          option: option,
          attrs: attrs,
          id: id,
          useId: this.valueProperty === '' && _lodash.default.isObject(value) && id
        })).trim();
        option.element = div.firstChild;
        this.refs.selectContainer.appendChild(option.element);
      }
    }
  }, {
    key: "addValueOptions",
    value: function addValueOptions(items) {
      items = items || [];
      var added = false;

      if (!this.selectOptions.length) {
        // Add the currently selected choices if they don't already exist.
        var currentChoices = Array.isArray(this.dataValue) ? this.dataValue : [this.dataValue];
        added = this.addCurrentChoices(currentChoices, items);

        if (!added && !this.component.multiple) {
          this.addPlaceholder();
        }
      }

      return added;
    }
  }, {
    key: "disableInfiniteScroll",
    value: function disableInfiniteScroll() {
      if (!this.downloadedResources) {
        return;
      }

      this.downloadedResources.serverCount = this.downloadedResources.length;
      this.serverCount = this.downloadedResources.length;
    }
    /* eslint-disable max-statements */

  }, {
    key: "setItems",
    value: function setItems(items, fromSearch) {
      var _this2 = this,
          _this$choices,
          _this$choices$input;

      // If the items is a string, then parse as JSON.
      if (typeof items == 'string') {
        try {
          items = JSON.parse(items);
        } catch (err) {
          console.warn(err.message);
          items = [];
        }
      } // Allow js processing (needed for form builder)


      if (this.component.onSetItems && typeof this.component.onSetItems === 'function') {
        var newItems = this.component.onSetItems(this, items);

        if (newItems) {
          items = newItems;
        }
      }

      if (!this.choices && this.refs.selectContainer) {
        this.empty(this.refs.selectContainer);
      } // If they provided select values, then we need to get them instead.


      if (this.component.selectValues) {
        items = _lodash.default.get(items, this.component.selectValues, items) || [];
      }

      var areItemsEqual;

      if (this.isInfiniteScrollProvided) {
        areItemsEqual = this.isSelectURL ? _lodash.default.isEqual(items, this.downloadedResources) : false;
        var areItemsEnded = this.component.limit > items.length;
        var areItemsDownloaded = areItemsEqual && this.downloadedResources && this.downloadedResources.length === items.length;

        if (areItemsEnded) {
          this.disableInfiniteScroll();
        } else if (areItemsDownloaded) {
          this.selectOptions = [];
        } else {
          this.serverCount = items.serverCount;
        }
      }

      if (this.isScrollLoading && items) {
        if (!areItemsEqual) {
          this.downloadedResources = this.downloadedResources ? this.downloadedResources.concat(items) : items;
        }

        this.downloadedResources.serverCount = items.serverCount || this.downloadedResources.serverCount;
      } else {
        this.downloadedResources = items || [];
        this.selectOptions = []; // If there is new select option with same id as already selected, set the new one

        if (!_lodash.default.isEmpty(this.dataValue) && this.component.idPath) {
          var selectedOptionId = _lodash.default.get(this.dataValue, this.component.idPath, null);

          var newOptionWithSameId = !_lodash.default.isNil(selectedOptionId) && items.find(function (item) {
            var itemId = _lodash.default.get(item, _this2.component.idPath);

            return itemId === selectedOptionId;
          });

          if (newOptionWithSameId) {
            this.setValue(newOptionWithSameId);
          }
        }
      } // Add the value options.


      if (!fromSearch) {
        this.addValueOptions(items);
      }

      if (this.component.widget === 'html5' && !this.component.placeholder) {
        this.addOption(null, '');
      } // Iterate through each of the items.


      _lodash.default.each(items, function (item, index) {
        // preventing references of the components inside the form to the parent form when building forms
        if (_this2.root && _this2.root.options.editForm && _this2.root.options.editForm._id && _this2.root.options.editForm._id === item._id) return;

        _this2.addOption(_this2.itemValue(item), _this2.itemTemplate(item), {}, _lodash.default.get(item, _this2.component.idPath, String(index)));
      });

      if (this.choices) {
        this.choices.setChoices(this.selectOptions, 'value', 'label', true);
      } else if (this.loading) {// Re-attach select input.
        // this.appendTo(this.refs.input[0], this.selectContainer);
      } // We are no longer loading.


      this.isScrollLoading = false;
      this.loading = false;
      var searching = fromSearch && ((_this$choices = this.choices) === null || _this$choices === void 0 ? void 0 : (_this$choices$input = _this$choices.input) === null || _this$choices$input === void 0 ? void 0 : _this$choices$input.isFocussed);

      if (!searching) {
        // If a value is provided, then select it.
        if (!this.isEmpty()) {
          this.setValue(this.dataValue, {
            noUpdateEvent: true
          });
        } else {
          // If a default value is provided then select it.
          var defaultValue = this.defaultValue;

          if (!this.isEmpty(defaultValue)) {
            this.setValue(defaultValue);
          }
        }
      } // Say we are done loading the items.


      this.itemsLoadedResolve();
    }
    /* eslint-enable max-statements */

  }, {
    key: "defaultValue",
    get: function get() {
      var defaultValue = _get(_getPrototypeOf(SelectComponent.prototype), "defaultValue", this);

      if (!defaultValue && (this.component.defaultValue === false || this.component.defaultValue === 0)) {
        defaultValue = this.component.defaultValue;
      }

      return defaultValue;
    }
  }, {
    key: "loadItems",
    value: function loadItems(url, search, headers, options, method, body) {
      var _this3 = this;

      options = options || {}; // See if they have not met the minimum search requirements.

      var minSearch = parseInt(this.component.minSearch, 10);

      if (this.component.searchField && minSearch > 0 && (!search || search.length < minSearch)) {
        // Set empty items.
        return this.setItems([]);
      } // Ensure we have a method and remove any body if method is get


      method = method || 'GET';

      if (method.toUpperCase() === 'GET') {
        body = null;
      }

      var limit = this.component.limit || 100;
      var skip = this.isScrollLoading ? this.selectOptions.length : 0;
      var query = this.component.dataSrc === 'url' ? {} : {
        limit: limit,
        skip: skip
      }; // Allow for url interpolation.

      url = this.interpolate(url, {
        formioBase: _Formio.default.getBaseUrl(),
        search: search,
        limit: limit,
        skip: skip,
        page: Math.abs(Math.floor(skip / limit))
      }); // Add search capability.

      if (this.component.searchField && search) {
        if (Array.isArray(search)) {
          query["".concat(this.component.searchField)] = search.join(',');
        } else {
          query["".concat(this.component.searchField)] = search;
        }
      } // If they wish to return only some fields.


      if (this.component.selectFields) {
        query.select = this.component.selectFields;
      } // Add sort capability


      if (this.component.sort) {
        query.sort = this.component.sort;
      }

      if (!_lodash.default.isEmpty(query)) {
        // Add the query string.
        url += (!url.includes('?') ? '?' : '&') + _Formio.default.serialize(query, function (item) {
          return _this3.interpolate(item);
        });
      } // Add filter capability


      if (this.component.filter) {
        url += (!url.includes('?') ? '?' : '&') + this.interpolate(this.component.filter);
      } // Set ignoreCache if it is


      options.ignoreCache = this.component.ignoreCache; // Make the request.

      options.header = headers;
      this.loading = true;

      _Formio.default.makeRequest(this.options.formio, 'select', url, method, body, options).then(function (response) {
        _this3.loading = false;

        _this3.setItems(response, !!search);
      }).catch(function (err) {
        if (_this3.isInfiniteScrollProvided) {
          _this3.setItems([]);

          _this3.disableInfiniteScroll();
        }

        _this3.isScrollLoading = false;

        _this3.handleLoadingError(err);
      });
    }
  }, {
    key: "handleLoadingError",
    value: function handleLoadingError(err) {
      this.loading = false;
      this.itemsLoadedResolve();
      this.emit('componentError', {
        component: this.component,
        message: err.toString()
      });
      console.warn("Unable to load resources for ".concat(this.key));
    }
    /**
     * Get the request headers for this select dropdown.
     */

  }, {
    key: "requestHeaders",
    get: function get() {
      var _this4 = this;

      // Create the headers object.
      var headers = new _Formio.default.Headers(); // Add custom headers to the url.

      if (this.component.data && this.component.data.headers) {
        try {
          _lodash.default.each(this.component.data.headers, function (header) {
            if (header.key) {
              headers.set(header.key, _this4.interpolate(header.value));
            }
          });
        } catch (err) {
          console.warn(err.message);
        }
      }

      return headers;
    }
  }, {
    key: "getCustomItems",
    value: function getCustomItems() {
      var customItems = this.evaluate(this.component.data.custom, {
        values: []
      }, 'values');
      this.asyncValues = (0, _utils.isPromise)(customItems);
      return customItems;
    }
  }, {
    key: "asyncCustomValues",
    value: function asyncCustomValues() {
      if (!_lodash.default.isBoolean(this.asyncValues)) {
        this.getCustomItems();
      }

      return this.asyncValues;
    }
  }, {
    key: "updateCustomItems",
    value: function updateCustomItems(forceUpdate) {
      var _this5 = this;

      if (this.asyncCustomValues()) {
        if (!forceUpdate && !this.active) {
          this.itemsLoadedResolve();
          return;
        }

        this.loading = true;
        this.getCustomItems().then(function (items) {
          _this5.loading = false;

          _this5.setItems(items || []);
        }).catch(function (err) {
          _this5.handleLoadingError(err);
        });
      } else {
        this.setItems(this.getCustomItems() || []);
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.dataValue;
      return _get(_getPrototypeOf(SelectComponent.prototype), "isEmpty", this).call(this, value) || value === undefined;
    }
  }, {
    key: "refresh",
    value: function refresh(value, _ref2) {
      var instance = _ref2.instance;

      if (this.component.clearOnRefresh && instance && !instance.pristine) {
        this.setValue(this.emptyValue);
      }

      this.updateItems(null, true);
    }
  }, {
    key: "additionalResourcesAvailable",
    get: function get() {
      return _lodash.default.isNil(this.serverCount) || this.serverCount > this.downloadedResources.length;
    }
  }, {
    key: "serverCount",
    get: function get() {
      if (this.isFromSearch) {
        return this.searchServerCount;
      }

      return this.defaultServerCount;
    },
    set: function set(value) {
      if (this.isFromSearch) {
        this.searchServerCount = value;
      } else {
        this.defaultServerCount = value;
      }
    }
  }, {
    key: "downloadedResources",
    get: function get() {
      if (this.isFromSearch) {
        return this.searchDownloadedResources;
      }

      return this.defaultDownloadedResources;
    },
    set: function set(value) {
      if (this.isFromSearch) {
        this.searchDownloadedResources = value;
      } else {
        this.defaultDownloadedResources = value;
      }
    }
    /* eslint-disable max-statements */

  }, {
    key: "updateItems",
    value: function updateItems(searchInput, forceUpdate) {
      var _this6 = this;

      if (!this.component.data) {
        console.warn("Select component ".concat(this.key, " does not have data configuration."));
        this.itemsLoadedResolve();
        return;
      } // Only load the data if it is visible.


      if (!this.visible) {
        this.itemsLoadedResolve();
        return;
      }

      switch (this.component.dataSrc) {
        case 'values':
          this.setItems(this.component.data.values);
          break;

        case 'json':
          this.setItems(this.component.data.json);
          break;

        case 'custom':
          this.updateCustomItems(forceUpdate);
          break;

        case 'resource':
          {
            // If there is no resource, or we are lazyLoading, wait until active.
            if (!this.component.data.resource || !forceUpdate && !this.active) {
              this.itemsLoadedResolve();
              return;
            }

            var resourceUrl = this.options.formio ? this.options.formio.formsUrl : "".concat(_Formio.default.getProjectUrl(), "/form");
            resourceUrl += "/".concat(this.component.data.resource, "/submission");

            if (forceUpdate || this.additionalResourcesAvailable || !this.serverCount) {
              try {
                this.loadItems(resourceUrl, searchInput, this.requestHeaders);
              } catch (err) {
                console.warn("Unable to load resources for ".concat(this.key));
              }
            } else {
              this.setItems(this.downloadedResources);
            }

            break;
          }

        case 'url':
          {
            if (!forceUpdate && !this.active && !this.calculatedValue) {
              // If we are lazyLoading, wait until activated.
              this.itemsLoadedResolve();
              return;
            }

            var url = this.component.data.url;
            var method;
            var body;

            if (url.startsWith('/')) {
              // if URL starts with '/project', we should use base URL to avoid issues with URL formed like <base_url>/<project_name>/project/<project_id>/...
              var baseUrl = url.startsWith('/project') ? _Formio.default.getBaseUrl() : _Formio.default.getProjectUrl() || _Formio.default.getBaseUrl();
              url = baseUrl + url;
            }

            if (!this.component.data.method) {
              method = 'GET';
            } else {
              method = this.component.data.method;

              if (method.toUpperCase() === 'POST') {
                body = this.component.data.body;
              } else {
                body = null;
              }
            }

            var options = this.component.authenticate ? {} : {
              noToken: true
            };
            this.loadItems(url, searchInput, this.requestHeaders, options, method, body);
            break;
          }

        case 'indexeddb':
          {
            if (typeof window === 'undefined') {
              return;
            }

            if (!window.indexedDB) {
              window.alert("Your browser doesn't support current version of indexedDB");
            }

            if (this.component.indexeddb && this.component.indexeddb.database && this.component.indexeddb.table) {
              var request = window.indexedDB.open(this.component.indexeddb.database);

              request.onupgradeneeded = function (event) {
                if (_this6.component.customOptions) {
                  var db = event.target.result;
                  var objectStore = db.createObjectStore(_this6.component.indexeddb.table, {
                    keyPath: 'myKey',
                    autoIncrement: true
                  });

                  objectStore.transaction.oncomplete = function () {
                    var transaction = db.transaction(_this6.component.indexeddb.table, 'readwrite');

                    _this6.component.customOptions.forEach(function (item) {
                      transaction.objectStore(_this6.component.indexeddb.table).put(item);
                    });
                  };
                }
              };

              request.onerror = function () {
                window.alert(request.errorCode);
              };

              request.onsuccess = function (event) {
                var db = event.target.result;
                var transaction = db.transaction(_this6.component.indexeddb.table, 'readwrite');
                var objectStore = transaction.objectStore(_this6.component.indexeddb.table);
                new _nativePromiseOnly.default(function (resolve) {
                  var responseItems = [];

                  objectStore.getAll().onsuccess = function (event) {
                    event.target.result.forEach(function (item) {
                      responseItems.push(item);
                    });
                    resolve(responseItems);
                  };
                }).then(function (items) {
                  if (!_lodash.default.isEmpty(_this6.component.indexeddb.filter)) {
                    items = _lodash.default.filter(items, _this6.component.indexeddb.filter);
                  }

                  _this6.setItems(items);
                });
              };
            }
          }
      }
    }
    /* eslint-enable max-statements */

  }, {
    key: "addPlaceholder",
    value: function addPlaceholder() {
      if (!this.component.placeholder) {
        return;
      }

      this.addOption('', this.component.placeholder, {
        placeholder: true
      });
    }
    /**
     * Activate this select control.
     */

  }, {
    key: "activate",
    value: function activate() {
      if (this.loading || !this.active) {
        this.setLoadingItem();
      }

      if (this.active) {
        return;
      }

      this.activated = true;
      this.triggerUpdate();
    }
  }, {
    key: "setLoadingItem",
    value: function setLoadingItem() {
      var addToCurrentList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.choices) {
        if (addToCurrentList) {
          this.choices.setChoices([{
            value: "".concat(this.id, "-loading"),
            label: 'Loading...',
            disabled: true
          }], 'value', 'label');
        } else {
          this.choices.setChoices([{
            value: '',
            label: "<i class=\"".concat(this.iconClass('refresh'), "\" style=\"font-size:1.3em;\"></i>"),
            disabled: true
          }], 'value', 'label', true);
        }
      } else if (this.component.dataSrc === 'url' || this.component.dataSrc === 'resource') {
        this.addOption('', this.t('loading...'));
      }
    }
  }, {
    key: "active",
    get: function get() {
      return !this.component.lazyLoad || this.activated || this.options.readOnly;
    }
  }, {
    key: "render",
    value: function render() {
      var info = this.inputInfo;
      info.attr = info.attr || {};
      info.multiple = this.component.multiple;
      return _get(_getPrototypeOf(SelectComponent.prototype), "render", this).call(this, this.wrapElement(this.renderTemplate('select', {
        input: info,
        selectOptions: '',
        index: null
      })));
    }
  }, {
    key: "wrapElement",
    value: function wrapElement(element) {
      return this.component.addResource && !this.options.readOnly ? this.renderTemplate('resourceAdd', {
        element: element
      }) : element;
    }
  }, {
    key: "choicesOptions",
    value: function choicesOptions() {
      var useSearch = this.component.hasOwnProperty('searchEnabled') ? this.component.searchEnabled : true;
      var placeholderValue = this.t(this.component.placeholder, {
        _userInput: true
      });
      var customOptions = this.component.customOptions || {};

      if (typeof customOptions == 'string') {
        try {
          customOptions = JSON.parse(customOptions);
        } catch (err) {
          console.warn(err.message);
          customOptions = {};
        }
      }

      var commonFuseOptions = {
        maxPatternLength: 1000,
        distance: 1000
      };
      return _objectSpread({
        removeItemButton: this.component.disabled ? false : _lodash.default.get(this.component, 'removeItemButton', true),
        itemSelectText: '',
        classNames: {
          containerOuter: 'choices form-group formio-choices',
          containerInner: this.transform('class', 'form-control ui fluid selection dropdown')
        },
        addItemText: false,
        placeholder: !!this.component.placeholder,
        placeholderValue: placeholderValue,
        noResultsText: this.t('Ничего не найдено'),
        noChoicesText: this.t('Нет вариантов для выбора'),
        searchPlaceholderValue: this.t('Введите для поиска'),
        shouldSort: false,
        position: this.component.dropdown || 'auto',
        searchEnabled: useSearch,
        searchChoices: !this.component.searchField,
        searchFields: _lodash.default.get(this, 'component.searchFields', ['label']),
        shadowRoot: this.root ? this.root.shadowRoot : null,
        fuseOptions: this.component.useExactSearch ? _objectSpread({
          tokenize: true,
          matchAllTokens: true
        }, commonFuseOptions) : Object.assign({}, _lodash.default.get(this, 'component.fuseOptions', {}), _objectSpread({
          include: 'score',
          threshold: _lodash.default.get(this, 'component.selectThreshold', 0.3)
        }, commonFuseOptions)),
        valueComparer: _lodash.default.isEqual,
        resetScrollPosition: false
      }, customOptions);
    }
    /* eslint-disable max-statements */

  }, {
    key: "attach",
    value: function attach(element) {
      var _this7 = this,
          _this$choices2,
          _this$choices2$contai,
          _this$choices2$contai2;

      var superAttach = _get(_getPrototypeOf(SelectComponent.prototype), "attach", this).call(this, element);

      this.loadRefs(element, {
        selectContainer: 'single',
        addResource: 'single',
        autocompleteInput: 'single'
      }); //enable autocomplete for select

      var autocompleteInput = this.refs.autocompleteInput;

      if (autocompleteInput) {
        this.addEventListener(autocompleteInput, 'change', function (event) {
          _this7.setValue(event.target.value);
        });
      }

      var input = this.refs.selectContainer;

      if (!input) {
        return;
      }

      this.addEventListener(input, this.inputInfo.changeEvent, function () {
        return _this7.updateValue(null, {
          modified: true
        });
      });
      this.attachRefreshOnBlur();

      if (this.component.widget === 'html5') {
        this.triggerUpdate(null, true);

        if (this.visible) {
          this.setItems(this.selectOptions || []);
        }

        this.focusableElement = input;
        this.addEventListener(input, 'focus', function () {
          return _this7.update();
        });
        this.addEventListener(input, 'keydown', function (event) {
          var key = event.key;

          if (['Backspace', 'Delete'].includes(key)) {
            _this7.setValue(_this7.emptyValue);
          }
        });
        return;
      }

      var tabIndex = input.tabIndex;
      this.addPlaceholder();
      input.setAttribute('dir', this.i18next.dir());

      if ((_this$choices2 = this.choices) !== null && _this$choices2 !== void 0 && (_this$choices2$contai = _this$choices2.containerOuter) !== null && _this$choices2$contai !== void 0 && (_this$choices2$contai2 = _this$choices2$contai.element) !== null && _this$choices2$contai2 !== void 0 && _this$choices2$contai2.parentNode) {
        this.choices.destroy();
      }

      var choicesOptions = this.choicesOptions();

      if (Choices) {
        this.choices = new Choices(input, choicesOptions);

        if (this.selectOptions && this.selectOptions.length) {
          this.choices.setChoices(this.selectOptions, 'value', 'label', true);
        }

        if (this.component.multiple) {
          this.focusableElement = this.choices.input.element;
        } else {
          this.focusableElement = this.choices.containerInner.element;
          this.choices.containerOuter.element.setAttribute('tabIndex', '-1');

          if (choicesOptions.searchEnabled) {
            this.addEventListener(this.choices.containerOuter.element, 'focus', function () {
              return _this7.focusableElement.focus();
            });
          }
        }

        if (this.isInfiniteScrollProvided) {
          this.scrollList = this.choices.choiceList.element;
          this.addEventListener(this.scrollList, 'scroll', function () {
            return _this7.onScroll();
          });
        }
      }

      this.focusableElement.setAttribute('tabIndex', tabIndex); // If a search field is provided, then add an event listener to update items on search.

      if (this.component.searchField) {
        // Make sure to clear the search when no value is provided.
        if (this.choices && this.choices.input && this.choices.input.element) {
          this.addEventListener(this.choices.input.element, 'input', function (event) {
            _this7.isFromSearch = !!event.target.value;

            if (!event.target.value) {
              _this7.triggerUpdate();
            } else {
              _this7.serverCount = null;
              _this7.downloadedResources = [];
            }
          });
        }

        this.addEventListener(input, 'choice', function () {
          if (_this7.component.multiple && _this7.component.dataSrc === 'resource' && _this7.isFromSearch) {
            _this7.triggerUpdate();
          }

          _this7.isFromSearch = false;
        });
        this.addEventListener(input, 'search', function (event) {
          return _this7.triggerUpdate(event.detail.value);
        });
        this.addEventListener(input, 'stopSearch', function () {
          return _this7.triggerUpdate();
        });
        this.addEventListener(input, 'hideDropdown', function () {
          if (_this7.choices && _this7.choices.input && _this7.choices.input.element) {
            _this7.choices.input.element.value = '';
          }

          _this7.updateItems(null, true);
        });
      }

      this.addEventListener(input, 'showDropdown', function () {
        return _this7.update();
      });

      if (this.choices && choicesOptions.placeholderValue && this.choices._isSelectOneElement) {
        this.addPlaceholderItem(choicesOptions.placeholderValue);
        this.addEventListener(input, 'removeItem', function () {
          _this7.addPlaceholderItem(choicesOptions.placeholderValue);
        });
      } // Add value options.


      this.addValueOptions();
      this.setChoicesValue(this.dataValue);

      if (this.isSelectResource && this.refs.addResource) {
        this.addEventListener(this.refs.addResource, 'click', function (event) {
          event.preventDefault();

          var formioForm = _this7.ce('div');

          var dialog = _this7.createModal(formioForm);

          var projectUrl = _lodash.default.get(_this7.root, 'formio.projectUrl', _Formio.default.getBaseUrl());

          var formUrl = "".concat(projectUrl, "/form/").concat(_this7.component.data.resource);
          new _Form.default(formioForm, formUrl, {}).ready.then(function (form) {
            form.on('submit', function (submission) {
              // If valueProperty is set, replace the submission with the corresponding value
              var value = _this7.valueProperty ? _lodash.default.get(submission, _this7.valueProperty) : submission;

              if (_this7.component.multiple) {
                value = [].concat(_toConsumableArray(_this7.dataValue), [value]);
              }

              _this7.setValue(value);

              _this7.triggerUpdate();

              dialog.close();
            });
          });
        });
      } // Force the disabled state with getters and setters.


      this.disabled = this.shouldDisabled;
      this.triggerUpdate();
      return superAttach;
    }
  }, {
    key: "isLoadingAvailable",
    get: function get() {
      return !this.isScrollLoading && this.additionalResourcesAvailable;
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      if (this.isLoadingAvailable) {
        this.isScrollLoading = true;
        this.setLoadingItem(true);
        this.triggerUpdate(this.choices.input.element.value);
      }
    }
  }, {
    key: "attachRefreshOnBlur",
    value: function attachRefreshOnBlur() {
      var _this8 = this;

      if (this.component.refreshOnBlur) {
        this.on('blur', function (instance) {
          _this8.checkRefreshOn([{
            instance: instance,
            value: instance.dataValue
          }], {
            fromBlur: true
          });
        });
      }
    }
  }, {
    key: "addPlaceholderItem",
    value: function addPlaceholderItem(placeholderValue) {
      var items = this.choices._store.activeItems;

      if (!items.length) {
        this.choices._addItem({
          value: placeholderValue,
          label: placeholderValue,
          choiceId: 0,
          groupId: -1,
          customProperties: null,
          placeholder: true,
          keyCode: null
        });
      }
    }
    /* eslint-enable max-statements */

  }, {
    key: "update",
    value: function update() {
      if (this.component.dataSrc === 'custom') {
        this.updateCustomItems();
      } // Activate the control.


      this.activate();
    }
  }, {
    key: "disabled",
    get: function get() {
      return _get(_getPrototypeOf(SelectComponent.prototype), "disabled", this);
    },
    set: function set(disabled) {
      _set(_getPrototypeOf(SelectComponent.prototype), "disabled", disabled, this, true);

      if (!this.choices) {
        return;
      }

      if (disabled) {
        this.setDisabled(this.choices.containerInner.element, true);
        this.focusableElement.removeAttribute('tabIndex');
        this.choices.disable();
      } else {
        this.setDisabled(this.choices.containerInner.element, false);
        this.focusableElement.setAttribute('tabIndex', this.component.tabindex || 0);
        this.choices.enable();
      }
    }
  }, {
    key: "visible",
    get: function get() {
      return _get(_getPrototypeOf(SelectComponent.prototype), "visible", this);
    }
    /**
     * @param {*} value
     * @param {Array} items
     */
    ,
    set: function set(value) {
      // If we go from hidden to visible, trigger a refresh.
      if (value && !this._visible !== !value) {
        this.triggerUpdate();
      }

      _set(_getPrototypeOf(SelectComponent.prototype), "visible", value, this, true);
    }
  }, {
    key: "addCurrentChoices",
    value: function addCurrentChoices(values, items, keyValue) {
      var _this9 = this;

      if (!values) {
        return false;
      }

      var notFoundValuesToAdd = [];
      var added = values.reduce(function (defaultAdded, value) {
        if (!value || _lodash.default.isEmpty(value)) {
          return defaultAdded;
        }

        var found = false; // Make sure that `items` and `this.selectOptions` points
        // to the same reference. Because `this.selectOptions` is
        // internal property and all items are populated by
        // `this.addOption` method, we assume that items has
        // 'label' and 'value' properties. This assumption allows
        // us to read correct value from the item.

        var isSelectOptions = items === _this9.selectOptions;

        if (items && items.length) {
          _lodash.default.each(items, function (choice) {
            if (choice._id && value._id && choice._id === value._id) {
              found = true;
              return false;
            }

            var itemValue = keyValue ? choice.value : _this9.itemValue(choice, isSelectOptions);
            found |= _lodash.default.isEqual(itemValue, value);
            return found ? false : true;
          });
        } // Add the default option if no item is found.


        if (!found) {
          notFoundValuesToAdd.push({
            value: _this9.itemValue(value),
            label: _this9.itemTemplate(value)
          });
          return true;
        }

        return found || defaultAdded;
      }, false);

      if (notFoundValuesToAdd.length) {
        if (this.choices) {
          this.choices.setChoices(notFoundValuesToAdd, 'value', 'label');
        }

        notFoundValuesToAdd.map(function (notFoundValue) {
          _this9.addOption(notFoundValue.value, notFoundValue.label);
        });
      }

      return added;
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString(data) {
      return this.component.multiple && Array.isArray(data) ? data.map(this.asString.bind(this)).join(', ') : this.asString(data);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      // If the widget isn't active.
      if (this.viewOnly || this.loading || !this.component.lazyLoad && !this.selectOptions.length || !this.element) {
        return this.dataValue;
      }

      var value = this.emptyValue;

      if (this.choices) {
        value = this.choices.getValue(true); // Make sure we don't get the placeholder

        if (!this.component.multiple && this.component.placeholder && value === this.t(this.component.placeholder, {
          _userInput: true
        })) {
          value = this.emptyValue;
        }
      } else if (this.refs.selectContainer) {
        value = this.refs.selectContainer.value;

        if (this.valueProperty === '') {
          if (value === '') {
            return {};
          }

          var option = this.selectOptions[value];

          if (option && _lodash.default.isObject(option.value)) {
            value = option.value;
          }
        }
      } else {
        value = this.dataValue;
      } // Choices will return undefined if nothing is selected. We really want '' to be empty.


      if (value === undefined || value === null) {
        value = '';
      }

      return value;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      var done = _get(_getPrototypeOf(SelectComponent.prototype), "redraw", this).call(this);

      this.triggerUpdate();
      return done;
    }
  }, {
    key: "normalizeSingleValue",
    value: function normalizeSingleValue(value) {
      if (_lodash.default.isNil(value)) {
        return;
      } //check if value equals to default emptyValue


      if (_lodash.default.isObject(value) && Object.keys(value).length === 0) {
        return value;
      }

      var displayEntireObject = this.isEntireObjectDisplay();
      var dataType = this.component.dataType || 'auto';
      var normalize = {
        value: value,
        number: function number() {
          var numberValue = Number(this.value);
          var isEquivalent = value.toString() === numberValue.toString();

          if (!Number.isNaN(numberValue) && Number.isFinite(numberValue) && value !== '' && isEquivalent) {
            this.value = numberValue;
          }

          return this;
        },
        boolean: function boolean() {
          if (_lodash.default.isString(this.value) && (this.value.toLowerCase() === 'true' || this.value.toLowerCase() === 'false')) {
            this.value = this.value.toLowerCase() === 'true';
          }

          return this;
        },
        string: function string() {
          this.value = String(this.value);
          return this;
        },
        object: function object() {
          if (_lodash.default.isObject(this.value) && displayEntireObject) {
            this.value = JSON.stringify(this.value);
          }

          return this;
        },
        auto: function auto() {
          if (_lodash.default.isObject(this.value)) {
            this.value = this.object().value;
          } else {
            this.value = this.string().number().boolean().value;
          }

          return this;
        }
      };

      try {
        return normalize[dataType]().value;
      } catch (err) {
        console.warn('Failed to normalize value', err);
        return value;
      }
    }
    /**
     * Normalize values coming into updateValue.
     *
     * @param value
     * @return {*}
     */

  }, {
    key: "normalizeValue",
    value: function normalizeValue(value) {
      var _this10 = this;

      if (this.component.multiple && Array.isArray(value)) {
        return value.map(function (singleValue) {
          return _this10.normalizeSingleValue(singleValue);
        });
      }

      return _get(_getPrototypeOf(SelectComponent.prototype), "normalizeValue", this).call(this, this.normalizeSingleValue(value));
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this11 = this;

      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var previousValue = this.dataValue;
      var changed = this.updateValue(value, flags);
      value = this.dataValue;
      var hasPreviousValue = !this.isEmpty(previousValue);
      var hasValue = !this.isEmpty(value); // Undo typing when searching to set the value.

      if (this.component.multiple && Array.isArray(value)) {
        value = value.map(function (value) {
          if (typeof value === 'boolean' || typeof value === 'number') {
            return value.toString();
          }

          return value;
        });
      } else {
        if (typeof value === 'boolean' || typeof value === 'number') {
          value = value.toString();
        }
      } // Do not set the value if we are loading... that will happen after it is done.


      if (this.loading) {
        return changed;
      } // Determine if we need to perform an initial lazyLoad api call if searchField is provided.


      if (this.isInitApiCallNeeded(hasValue)) {
        this.loading = true;
        this.lazyLoadInit = true;
        var searchProperty = this.component.searchField || this.component.valueProperty;
        this.triggerUpdate(_lodash.default.get(value.data || value, searchProperty, value), true);
        return changed;
      } // Add the value options.


      this.itemsLoaded.then(function () {
        _this11.addValueOptions();

        _this11.setChoicesValue(value, hasPreviousValue, flags);
      });
      return changed;
    }
  }, {
    key: "isInitApiCallNeeded",
    value: function isInitApiCallNeeded(hasValue) {
      return this.component.lazyLoad && !this.lazyLoadInit && !this.active && !this.selectOptions.length && hasValue && this.visible && (this.component.searchField || this.component.valueProperty);
    }
  }, {
    key: "setChoicesValue",
    value: function setChoicesValue(value, hasPreviousValue) {
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var hasValue = !this.isEmpty(value);
      hasPreviousValue = hasPreviousValue === undefined ? true : hasPreviousValue;

      if (this.choices) {
        // Now set the value.
        if (hasValue) {
          this.choices.removeActiveItems(); // Add the currently selected choices if they don't already exist.

          var currentChoices = Array.isArray(value) ? value : [value];

          if (!this.addCurrentChoices(currentChoices, this.selectOptions, true)) {
            this.choices.setChoices(this.selectOptions, 'value', 'label', true);
          }

          this.choices.setChoiceByValue(value);
        } else if (hasPreviousValue || flags.resetValue) {
          this.choices.removeActiveItems();
        }
      } else {
        if (hasValue) {
          var values = Array.isArray(value) ? value : [value];

          _lodash.default.each(this.selectOptions, function (selectOption) {
            _lodash.default.each(values, function (val) {
              if (_lodash.default.isEqual(val, selectOption.value) && selectOption.element) {
                selectOption.element.selected = true;
                selectOption.element.setAttribute('selected', 'selected');
                return false;
              }
            });
          });
        } else {
          _lodash.default.each(this.selectOptions, function (selectOption) {
            if (selectOption.element) {
              selectOption.element.selected = false;
              selectOption.element.removeAttribute('selected');
            }
          });
        }
      }
    }
  }, {
    key: "itemsLoaded",
    get: function get() {
      return this._itemsLoaded || _nativePromiseOnly.default.resolve();
    },
    set: function set(promise) {
      // Make sure we always resolve the previous promise before reassign it
      if (typeof this.itemsLoadedResolve === 'function' && this.isHtmlRenderMode()) {
        this.itemsLoadedResolve();
      }

      this._itemsLoaded = promise;
    }
  }, {
    key: "validateValueAvailability",
    value: function validateValueAvailability(setting, value) {
      var _this12 = this;

      if (!(0, _utils.boolValue)(setting) || !value) {
        return true;
      }

      var values = this.getOptionsValues();

      if (values) {
        if (_lodash.default.isObject(value)) {
          var compareComplexValues = function compareComplexValues(optionValue) {
            var normalizedOptionValue = _this12.normalizeSingleValue(optionValue);

            if (!_lodash.default.isObject(normalizedOptionValue)) {
              return false;
            }

            try {
              return JSON.stringify(normalizedOptionValue) === JSON.stringify(value);
            } catch (err) {
              console.warn.error('Error while comparing items', err);
              return false;
            }
          };

          return values.findIndex(function (optionValue) {
            return compareComplexValues(optionValue);
          }) !== -1;
        }

        return values.findIndex(function (optionValue) {
          return _this12.normalizeSingleValue(optionValue) === value;
        }) !== -1;
      }

      return false;
    }
    /**
     * Performs required transformations on the initial value to use in selectOptions
     * @param {*} value
     */

  }, {
    key: "getOptionValue",
    value: function getOptionValue(value) {
      return _lodash.default.isObject(value) && this.isEntireObjectDisplay() ? this.normalizeSingleValue(value) : _lodash.default.isObject(value) ? value : _lodash.default.isNull(value) ? this.emptyValue : String(this.normalizeSingleValue(value));
    }
    /**
     * If component has static values (values, json) or custom values, returns an array of them
     * @returns {Array<*>|undefined}
     */

  }, {
    key: "getOptionsValues",
    value: function getOptionsValues() {
      var _this13 = this;

      var rawItems = [];

      switch (this.component.dataSrc) {
        case 'values':
          rawItems = this.component.data.values;
          break;

        case 'json':
          rawItems = this.component.data.json;
          break;

        case 'custom':
          rawItems = this.getCustomItems();
          break;
      }

      if (typeof rawItems === 'string') {
        try {
          rawItems = JSON.parse(rawItems);
        } catch (err) {
          console.warn(err.message);
          rawItems = [];
        }
      }

      if (!Array.isArray(rawItems)) {
        return;
      }

      return rawItems.map(function (item) {
        return _this13.getOptionValue(_this13.itemValue(item));
      });
    }
    /**
     * Deletes the value of the component.
     */

  }, {
    key: "deleteValue",
    value: function deleteValue() {
      this.setValue('', {
        noUpdateEvent: true
      });
      this.unset();
    }
    /**
     * Check if a component is eligible for multiple validation
     *
     * @return {boolean}
     */

  }, {
    key: "validateMultiple",
    value: function validateMultiple() {
      // Select component will contain one input when flagged as multiple.
      return false;
    }
    /**
     * Output this select dropdown as a string value.
     * @return {*}
     */

  }, {
    key: "isBooleanOrNumber",
    value: function isBooleanOrNumber(value) {
      return typeof value === 'number' || typeof value === 'boolean';
    }
  }, {
    key: "getNormalizedValues",
    value: function getNormalizedValues() {
      var _this14 = this;

      if (!this.component || !this.component.data || !this.component.data.values) {
        return;
      }

      return this.component.data.values.map(function (value) {
        return {
          label: value.label,
          value: String(_this14.normalizeSingleValue(value.value))
        };
      });
    }
  }, {
    key: "asString",
    value: function asString(value) {
      var _value,
          _this15 = this;

      value = (_value = value) !== null && _value !== void 0 ? _value : this.getValue(); //need to convert values to strings to be able to compare values with available options that are strings

      var convertToString = function convertToString(data, valueProperty) {
        if (valueProperty) {
          if (Array.isArray(data)) {
            data.forEach(function (item) {
              return item[valueProperty] = item[valueProperty].toString();
            });
          } else {
            data[valueProperty] = data[valueProperty].toString();
          }

          return data;
        }

        if (_this15.isBooleanOrNumber(data)) {
          data = data.toString();
        }

        if (Array.isArray(data) && data.some(function (item) {
          return _this15.isBooleanOrNumber(item);
        })) {
          data = data.map(function (item) {
            if (_this15.isBooleanOrNumber(item)) {
              item = item.toString();
            }
          });
        }

        return data;
      };

      value = convertToString(value);

      if (['values', 'custom'].includes(this.component.dataSrc) && !this.asyncCustomValues()) {
        var _getFromValues;

        var _ref3 = this.component.dataSrc === 'values' ? {
          items: convertToString(this.getNormalizedValues(), 'value'),
          valueProperty: 'value'
        } : {
          items: convertToString(this.getCustomItems(), this.valueProperty),
          valueProperty: this.valueProperty
        },
            items = _ref3.items,
            valueProperty = _ref3.valueProperty;

        var getFromValues = function getFromValues() {
          var initialValue = _lodash.default.find(items, [valueProperty, value]);

          var values = _this15.defaultSchema.data.values || [];
          return _lodash.default.isEqual(initialValue, values[0]) ? '-' : initialValue;
        };

        value = this.component.multiple && Array.isArray(value) ? _lodash.default.filter(items, function (item) {
          return value.includes(item.value);
        }) : valueProperty ? (_getFromValues = getFromValues()) !== null && _getFromValues !== void 0 ? _getFromValues : {
          value: value,
          label: value
        } : value;
      }

      if (_lodash.default.isString(value)) {
        return value;
      }

      if (Array.isArray(value)) {
        var _items = [];
        value.forEach(function (item) {
          return _items.push(_this15.itemTemplate(item));
        });
        return _items.length > 0 ? _items.join('<br />') : '-';
      }

      return !_lodash.default.isNil(value) ? this.itemTemplate(value) : '-';
    }
  }, {
    key: "detach",
    value: function detach() {
      _get(_getPrototypeOf(SelectComponent.prototype), "detach", this).call(this);

      if (this.choices) {
        var _this$choices$contain, _this$choices$contain2;

        if ((_this$choices$contain = this.choices.containerOuter) !== null && _this$choices$contain !== void 0 && (_this$choices$contain2 = _this$choices$contain.element) !== null && _this$choices$contain2 !== void 0 && _this$choices$contain2.parentNode) {
          this.choices.destroy();
        }

        this.choices = null;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.focusableElement) {
        _get(_getPrototypeOf(SelectComponent.prototype), "focus", this).call(this);

        this.focusableElement.focus();
      }
    }
  }, {
    key: "setErrorClasses",
    value: function setErrorClasses(elements, dirty, hasError, hasMessages) {
      var element = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.element;

      _get(_getPrototypeOf(SelectComponent.prototype), "setErrorClasses", this).call(this, elements, dirty, hasError, hasMessages, element);

      if (this.choices) {
        _get(_getPrototypeOf(SelectComponent.prototype), "setErrorClasses", this).call(this, [this.choices.containerInner.element], dirty, hasError, hasMessages, element);
      } else {
        _get(_getPrototypeOf(SelectComponent.prototype), "setErrorClasses", this).call(this, [this.refs.selectContainer], dirty, hasError, hasMessages, element);
      }
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len3 = arguments.length, extend = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        extend[_key3] = arguments[_key3];
      }

      return _Field2.default.schema.apply(_Field2.default, [{
        type: 'select',
        label: 'Select',
        key: 'select',
        idPath: 'id',
        data: {
          values: [{
            label: '',
            value: ''
          }],
          json: '',
          url: '',
          resource: '',
          custom: ''
        },
        clearOnRefresh: false,
        limit: 100,
        dataSrc: 'values',
        valueProperty: '',
        lazyLoad: true,
        filter: '',
        searchEnabled: true,
        searchField: '',
        minSearch: 0,
        readOnlyValue: false,
        authenticate: false,
        ignoreCache: false,
        template: '<span>{{ item.label }}</span>',
        selectFields: '',
        selectThreshold: 0.3,
        uniqueOptions: false,
        tableView: true,
        fuseOptions: {
          include: 'score',
          threshold: 0.3
        },
        validate: {
          onlyAvailableItems: false
        },
        indexeddb: {
          filter: {}
        },
        customOptions: {},
        useExactSearch: false
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Select',
        group: 'basic',
        icon: 'th-list',
        weight: 70,
        documentation: '/userguide/#select',
        schema: SelectComponent.schema()
      };
    }
  }]);

  return SelectComponent;
}(_Field2.default);

exports.default = SelectComponent;