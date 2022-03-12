function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
import { transformSync } from '@swc/core';
import { Visitor } from '@swc/core/Visitor.js';
var PotionParser = /*#__PURE__*/ function(Visitor1) {
    "use strict";
    _inherits(PotionParser, Visitor1);
    var _super = _createSuper(PotionParser);
    function PotionParser() {
        _classCallCheck(this, PotionParser);
        return _super.apply(this, arguments);
    }
    var _proto = PotionParser.prototype;
    _proto.visitCallExpression = function visitCallExpression(expression) {
        console.log('===============================');
        console.log('∆', expression);
        console.log('===============================');
        return expression;
    };
    return PotionParser;
}(Visitor);
// temp testing string code first before setting up importing file
var out = transformSync("\nconst Modal = `\n    id: string;\n    title: string;\n    desc: string;\n`\n", {
    plugin: function(module) {
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<');
        console.log('M', module);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
        return new PotionParser().visitProgram(module);
    }
});
// what it does look like now
console.log(out);
// what it should output
out.code === "";
