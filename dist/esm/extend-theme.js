import defaultTheme from "@chakra-ui/theme";
import { isFunction, mergeWith } from "@chakra-ui/utils";

/**
 * Function to override or customize the Chakra UI theme conveniently
 * @param overrides - Your custom theme object overrides
 */
export function extendTheme(overrides) {
  function customizer(source, override, key, object) {
    if (isFunction(source) && Object.prototype.hasOwnProperty.call(object, key)) {
      return function () {
        var sourceValue = source(...arguments);
        var overrideValue = isFunction(override) ? override(...arguments) : override;
        return mergeWith({}, sourceValue, overrideValue, customizer);
      };
    } // fallback to default behaviour


    return undefined;
  }

  return mergeWith({}, defaultTheme, overrides, customizer);
}
//# sourceMappingURL=extend-theme.js.map