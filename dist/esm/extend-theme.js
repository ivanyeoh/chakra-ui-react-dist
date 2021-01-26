import defaultTheme from "@chakra-ui/theme";
import { isFunction, mergeWith } from "@chakra-ui/utils";

/**
 * Function to override or customize the Chakra UI theme conveniently
 * @param overrides - Your custom theme object overrides
 * @param baseTheme - theme to customize
 */
export function extendTheme(overrides, baseTheme) {
  if (baseTheme === void 0) {
    baseTheme = defaultTheme;
  }

  function customizer(source, override, key, object) {
    if (isFunction(source) && object.hasOwnProperty(key)) {
      return function () {
        var sourceValue = source(...arguments);
        var overrideValue = isFunction(override) ? override(...arguments) : override;
        return mergeWith({}, sourceValue, overrideValue, customizer);
      };
    } // fallback to default behaviour


    return undefined;
  }

  return mergeWith({}, baseTheme, overrides, customizer);
}
//# sourceMappingURL=extend-theme.js.map