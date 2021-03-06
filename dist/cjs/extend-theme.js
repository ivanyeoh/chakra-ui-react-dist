"use strict";

exports.__esModule = true;
exports.extendTheme = extendTheme;

var _theme = _interopRequireDefault(require("@chakra-ui/theme"));

var _utils = require("@chakra-ui/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Function to override or customize the Chakra UI theme conveniently
 * @param overrides - Your custom theme object overrides
 */
function extendTheme(overrides) {
  function customizer(source, override, key, object) {
    if ((0, _utils.isFunction)(source) && Object.prototype.hasOwnProperty.call(object, key)) {
      return function () {
        var sourceValue = source.apply(void 0, arguments);
        var overrideValue = (0, _utils.isFunction)(override) ? override.apply(void 0, arguments) : override;
        return (0, _utils.mergeWith)({}, sourceValue, overrideValue, customizer);
      };
    } // fallback to default behaviour


    return undefined;
  }

  return (0, _utils.mergeWith)({}, _theme["default"], overrides, customizer);
}
//# sourceMappingURL=extend-theme.js.map