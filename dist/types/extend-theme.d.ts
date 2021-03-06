import { Theme } from "@chakra-ui/theme";
import { ColorHues } from "@chakra-ui/theme/dist/types/foundations/colors";
declare type ThemeExtensionTypeHints = {
    colors: Record<string, Partial<ColorHues> | string>;
};
/**
 * Represents a loose but specific type for the theme override.
 * It provides autocomplete hints for extending the theme, but leaves room
 * for adding properties.
 */
declare type DeepThemeExtension<ThemeObject, TypeHints> = {
    [Key in keyof ThemeObject]?: Omit<DeepThemeExtension<ThemeObject[Key], TypeHints>, keyof TypeHints> | (ThemeObject[Key] extends (...args: any[]) => any ? Partial<ReturnType<ThemeObject[Key]>> : Partial<ThemeObject[Key]>);
} & Partial<TypeHints> & Record<string, any>;
export declare type ThemeOverride = DeepThemeExtension<Theme, ThemeExtensionTypeHints>;
/**
 * Function to override or customize the Chakra UI theme conveniently
 * @param overrides - Your custom theme object overrides
 */
export declare function extendTheme<T extends ThemeOverride>(overrides: T): {
    components: {
        Accordion: {
            parts: string[];
            baseStyle: {
                container: {
                    borderTopWidth: string;
                    borderColor: string;
                    _last: {
                        borderBottomWidth: string;
                    };
                };
                button: {
                    fontSize: string;
                    _focus: {
                        boxShadow: string;
                    };
                    _hover: {
                        bg: string;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                    px: number;
                    py: number;
                };
                panel: {
                    pt: number;
                    px: number;
                    pb: number;
                };
            };
        };
        Alert: {
            parts: string[];
            baseStyle: {
                container: {
                    px: number;
                    py: number;
                };
                title: {
                    fontWeight: string;
                    lineHeight: number;
                    mr: number;
                };
                description: {
                    lineHeight: number;
                };
                icon: {
                    flexShrink: number;
                    mr: number;
                    w: number;
                    h: number;
                };
            };
            variants: {
                subtle: (props: Record<string, any>) => {
                    container: {
                        bg: any;
                    };
                    icon: {
                        color: any;
                    };
                };
                "left-accent": (props: Record<string, any>) => {
                    container: {
                        pl: number;
                        borderLeft: string;
                        borderColor: any;
                        bg: any;
                    };
                    icon: {
                        color: any;
                    };
                };
                "top-accent": (props: Record<string, any>) => {
                    container: {
                        pt: number;
                        borderTop: string;
                        borderColor: any;
                        bg: any;
                    };
                    icon: {
                        color: any;
                    };
                };
                solid: (props: Record<string, any>) => {
                    container: {
                        bg: any;
                        color: any;
                    };
                };
            };
            defaultProps: {
                variant: string;
            };
        };
        Avatar: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                badge: {
                    transform: string;
                    borderRadius: string;
                    border: string;
                    borderColor: any;
                };
                excessLabel: {
                    bg: any;
                };
                container: {
                    bg: string;
                    color: string;
                    borderColor: any;
                    verticalAlign: string;
                };
            };
            sizes: {
                "2xs": {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
                xs: {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
                sm: {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
                md: {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
                lg: {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
                xl: {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
                "2xl": {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
                full: {
                    container: {
                        width: string;
                        height: string;
                        fontSize: string;
                    };
                    excessLabel: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontSize: string;
                        lineHeight: any;
                    };
                };
            };
            defaultProps: {
                size: string;
            };
        };
        Badge: {
            baseStyle: {
                px: number;
                textTransform: string;
                fontSize: string;
                borderRadius: string;
                fontWeight: string;
            };
            variants: {
                solid: (props: Record<string, any>) => {
                    bg: any;
                    color: any;
                };
                subtle: (props: Record<string, any>) => {
                    bg: any;
                    color: any;
                };
                outline: (props: Record<string, any>) => {
                    color: any;
                    boxShadow: string;
                };
            };
            defaultProps: {
                variant: string;
                colorScheme: string;
            };
        };
        Breadcrumb: {
            parts: string[];
            baseStyle: {
                link: {
                    transition: string;
                    cursor: string;
                    textDecoration: string;
                    outline: string;
                    color: string;
                    _hover: {
                        textDecoration: string;
                    };
                    _focus: {
                        boxShadow: string;
                    };
                };
            };
        };
        Button: {
            baseStyle: {
                lineHeight: string;
                borderRadius: string;
                fontWeight: string;
                _focus: {
                    boxShadow: string;
                };
                _disabled: {
                    opacity: number;
                    cursor: string;
                    boxShadow: string;
                };
                _hover: {
                    _disabled: {
                        bg: string;
                    };
                };
            };
            variants: {
                ghost: (props: Record<string, any>) => {
                    color: any;
                    _hover: {
                        bg: any;
                    };
                    _active: {
                        bg: any;
                    };
                    bg?: undefined;
                } | {
                    color: any;
                    bg: string;
                    _hover: {
                        bg: any;
                    };
                    _active: {
                        bg: any;
                    };
                };
                outline: (props: Record<string, any>) => {
                    color: any;
                    _hover: {
                        bg: any;
                    };
                    _active: {
                        bg: any;
                    };
                    bg?: undefined;
                    border: string;
                    borderColor: any;
                } | {
                    color: any;
                    bg: string;
                    _hover: {
                        bg: any;
                    };
                    _active: {
                        bg: any;
                    };
                    border: string;
                    borderColor: any;
                };
                solid: (props: Record<string, any>) => {
                    bg: any;
                    _hover: {
                        bg: any;
                        _disabled: {
                            bg: any;
                        };
                    };
                    _active: {
                        bg: any;
                    };
                    color?: undefined;
                } | {
                    bg: any;
                    color: any;
                    _hover: {
                        bg: any;
                        _disabled: {
                            bg: any;
                        };
                    };
                    _active: {
                        bg: any;
                    };
                };
                link: (props: Record<string, any>) => {
                    padding: number;
                    height: string;
                    lineHeight: string;
                    color: any;
                    _hover: {
                        textDecoration: string;
                        _disabled: {
                            textDecoration: string;
                        };
                    };
                    _active: {
                        color: any;
                    };
                };
                unstyled: {
                    bg: string;
                    color: string;
                    display: string;
                    lineHeight: string;
                    m: number;
                    p: number;
                };
            };
            sizes: {
                lg: {
                    h: number;
                    minW: number;
                    fontSize: string;
                    px: number;
                };
                md: {
                    h: number;
                    minW: number;
                    fontSize: string;
                    px: number;
                };
                sm: {
                    h: number;
                    minW: number;
                    fontSize: string;
                    px: number;
                };
                xs: {
                    h: number;
                    minW: number;
                    fontSize: string;
                    px: number;
                };
            };
            defaultProps: {
                variant: string;
                size: string;
                colorScheme: string;
            };
        };
        Checkbox: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                control: {
                    w: string;
                    transition: string;
                    border: string;
                    borderRadius: string;
                    borderColor: string;
                    color: string;
                    _checked: {
                        bg: any;
                        borderColor: any;
                        color: any;
                        _hover: {
                            bg: any;
                            borderColor: any;
                        };
                        _disabled: {
                            borderColor: any;
                            bg: any;
                            color: any;
                        };
                    };
                    _indeterminate: {
                        bg: any;
                        borderColor: any;
                        color: any;
                    };
                    _disabled: {
                        bg: any;
                        borderColor: any;
                    };
                    _focus: {
                        boxShadow: string;
                    };
                    _invalid: {
                        borderColor: any;
                    };
                };
                label: {
                    userSelect: string;
                    _disabled: {
                        opacity: number;
                    };
                };
            };
            sizes: {
                sm: {
                    control: {
                        h: number;
                        w: number;
                    };
                    label: {
                        fontSize: string;
                    };
                    icon: {
                        fontSize: string;
                    };
                };
                md: {
                    control: {
                        w: number;
                        h: number;
                    };
                    label: {
                        fontSize: string;
                    };
                    icon: {
                        fontSize: string;
                    };
                };
                lg: {
                    control: {
                        w: number;
                        h: number;
                    };
                    label: {
                        fontSize: string;
                    };
                    icon: {
                        fontSize: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        CloseButton: {
            baseStyle: (props: Record<string, any>) => {
                borderRadius: string;
                transition: string;
                _disabled: {
                    opacity: number;
                    cursor: string;
                    boxShadow: string;
                };
                _hover: {
                    bg: any;
                };
                _active: {
                    bg: any;
                };
                _focus: {
                    boxShadow: string;
                };
            };
            sizes: {
                lg: {
                    w: string;
                    h: string;
                    fontSize: string;
                };
                md: {
                    w: string;
                    h: string;
                    fontSize: string;
                };
                sm: {
                    w: string;
                    h: string;
                    fontSize: string;
                };
            };
            defaultProps: {
                size: string;
            };
        };
        Code: {
            baseStyle: {
                fontFamily: string;
                fontSize: string;
                px: string;
                borderRadius: string;
            };
            variants: {
                solid: (props: Record<string, any>) => {
                    bg: any;
                    color: any;
                };
                subtle: (props: Record<string, any>) => {
                    bg: any;
                    color: any;
                };
                outline: (props: Record<string, any>) => {
                    color: any;
                    boxShadow: string;
                };
            };
            defaultProps: {
                variant: string;
                colorScheme: string;
            };
        };
        Container: {
            baseStyle: {
                w: string;
                mx: string;
                maxW: string;
                px: string;
            };
        };
        Divider: {
            baseStyle: {
                opacity: number;
                borderColor: string;
            };
            variants: {
                solid: {
                    borderStyle: string;
                };
                dashed: {
                    borderStyle: string;
                };
            };
            defaultProps: {
                variant: string;
            };
        };
        Drawer: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                overlay: {
                    bg: string;
                    zIndex: string;
                };
                dialogContainer: {
                    display: string;
                    zIndex: string;
                    justifyContent: string;
                };
                dialog: any;
                header: {
                    px: number;
                    py: number;
                    fontSize: string;
                    fontWeight: string;
                };
                closeButton: {
                    position: string;
                    top: number;
                    insetEnd: number;
                };
                body: {
                    px: number;
                    py: number;
                    flex: number;
                    overflow: string;
                };
                footer: {
                    px: number;
                    py: number;
                };
            };
            sizes: {
                xs: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                sm: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                md: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                lg: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                xl: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                full: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
            };
            defaultProps: {
                size: string;
            };
        };
        Editable: {
            parts: string[];
            baseStyle: {
                preview: {
                    borderRadius: string;
                    py: string;
                    transition: string;
                };
                input: {
                    borderRadius: string;
                    py: string;
                    transition: string;
                    width: string;
                    _focus: {
                        boxShadow: string;
                    };
                    _placeholder: {
                        opacity: number;
                    };
                };
            };
        };
        Form: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                requiredIndicator: {
                    ml: number;
                    color: any;
                };
                helperText: {
                    mt: number;
                    color: any;
                    lineHeight: string;
                    fontSize: string;
                };
            };
        };
        FormLabel: {
            baseStyle: {
                fontSize: string;
                marginEnd: number;
                mb: number;
                fontWeight: string;
                transition: string;
                opacity: number;
                _disabled: {
                    opacity: number;
                };
            };
        };
        Heading: {
            baseStyle: {
                fontFamily: string;
                fontWeight: string;
            };
            sizes: {
                "4xl": {
                    fontSize: (string | null)[];
                    lineHeight: number;
                };
                "3xl": {
                    fontSize: (string | null)[];
                    lineHeight: number;
                };
                "2xl": {
                    fontSize: (string | null)[];
                    lineHeight: (number | null)[];
                };
                xl: {
                    fontSize: (string | null)[];
                    lineHeight: (number | null)[];
                };
                lg: {
                    fontSize: (string | null)[];
                    lineHeight: (number | null)[];
                };
                md: {
                    fontSize: string;
                    lineHeight: number;
                };
                sm: {
                    fontSize: string;
                    lineHeight: number;
                };
                xs: {
                    fontSize: string;
                    lineHeight: number;
                };
            };
            defaultProps: {
                size: string;
            };
        };
        Input: {
            parts: string[];
            baseStyle: {
                field: {
                    width: string;
                    outline: number;
                    position: string;
                    appearance: string;
                    transition: string;
                };
            };
            sizes: {
                lg: {
                    field: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    addon: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                };
                md: {
                    field: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    addon: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                };
                sm: {
                    field: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    addon: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                };
                xs: {
                    field: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    addon: {
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                };
            };
            variants: {
                outline: (props: Record<string, any>) => {
                    field: {
                        border: string;
                        borderColor: string;
                        bg: string;
                        _hover: {
                            borderColor: any;
                        };
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _disabled: {
                            opacity: number;
                            cursor: string;
                        };
                        _invalid: {
                            borderColor: any;
                            boxShadow: string;
                        };
                        _focus: {
                            zIndex: number;
                            borderColor: any;
                            boxShadow: string;
                        };
                    };
                    addon: {
                        border: string;
                        borderColor: any;
                        bg: any;
                    };
                };
                filled: (props: Record<string, any>) => {
                    field: {
                        border: string;
                        borderColor: string;
                        bg: any;
                        _hover: {
                            bg: any;
                        };
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _disabled: {
                            opacity: number;
                            cursor: string;
                        };
                        _invalid: {
                            borderColor: any;
                        };
                        _focus: {
                            bg: string;
                            borderColor: any;
                        };
                    };
                    addon: {
                        border: string;
                        borderColor: string;
                        bg: any;
                    };
                };
                flushed: (props: Record<string, any>) => {
                    field: {
                        borderBottom: string;
                        borderColor: string;
                        borderRadius: number;
                        pl: number;
                        pr: number;
                        bg: string;
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _invalid: {
                            borderColor: any;
                            boxShadow: string;
                        };
                        _focus: {
                            borderColor: any;
                            boxShadow: string;
                        };
                    };
                    addon: {
                        borderBottom: string;
                        borderColor: string;
                        borderRadius: number;
                        paddingX: number;
                        bg: string;
                    };
                };
                unstyled: {
                    field: {
                        bg: string;
                        pl: number;
                        pr: number;
                        height: string;
                    };
                    addon: {
                        bg: string;
                        pl: number;
                        pr: number;
                        height: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Kbd: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                borderRadius: string;
                borderWidth: string;
                borderBottomWidth: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                px: string;
                whiteSpace: string;
            };
        };
        Link: {
            baseStyle: {
                transition: string;
                cursor: string;
                textDecoration: string;
                outline: string;
                color: string;
                _hover: {
                    textDecoration: string;
                };
                _focus: {
                    boxShadow: string;
                };
            };
        };
        List: {
            parts: string[];
            baseStyle: {
                container: {};
                item: {};
                icon: {
                    marginEnd: string;
                    display: string;
                    verticalAlign: string;
                };
            };
        };
        Menu: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                list: {
                    bg: any;
                    boxShadow: any;
                    color: string;
                    minW: string;
                    py: string;
                    zIndex: number;
                    borderRadius: string;
                    borderWidth: string;
                };
                item: {
                    py: string;
                    px: string;
                    transition: string;
                    _focus: {
                        bg: any;
                    };
                    _active: {
                        bg: any;
                    };
                    _expanded: {
                        bg: any;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                };
                groupTitle: {
                    mx: number;
                    my: number;
                    fontWeight: string;
                    fontSize: string;
                };
                command: {
                    opacity: number;
                };
                divider: {
                    border: number;
                    borderBottom: string;
                    borderColor: string;
                    my: string;
                    opacity: number;
                };
            };
        };
        Modal: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                overlay: {
                    bg: string;
                    zIndex: string;
                };
                dialogContainer: {
                    display: string;
                    zIndex: string;
                    justifyContent: string;
                    alignItems: string;
                    overflow: string;
                };
                dialog: {
                    borderRadius: string;
                    bg: any;
                    color: string;
                    my: string;
                    zIndex: string;
                    maxH: string | undefined;
                    boxShadow: any;
                };
                header: {
                    px: number;
                    py: number;
                    fontSize: string;
                    fontWeight: string;
                };
                closeButton: {
                    position: string;
                    top: number;
                    insetEnd: number;
                };
                body: {
                    px: number;
                    py: number;
                    flex: number;
                    overflow: string | undefined;
                };
                footer: {
                    px: number;
                    py: number;
                };
            };
            sizes: {
                xs: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                sm: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                md: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                lg: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                xl: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                "2xl": {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                "3xl": {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                "4xl": {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                "5xl": {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                "6xl": {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
                full: {
                    dialog: {
                        maxW: string;
                        h: string;
                    };
                } | {
                    dialog: {
                        maxW: string;
                        h?: undefined;
                    };
                };
            };
            defaultProps: {
                size: string;
            };
        };
        NumberInput: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                field: {
                    width: string;
                    outline: number;
                    position: string;
                    appearance: string;
                    transition: string;
                };
                stepperGroup: {
                    width: string;
                };
                stepper: {
                    borderLeft: string;
                    borderColor: any;
                    color: any;
                    _active: {
                        bg: any;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                };
            };
            sizes: {
                xs: {
                    field: {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    stepper: {
                        fontSize: string;
                        _first: {
                            borderTopRightRadius: string;
                        };
                        _last: {
                            borderBottomRightRadius: string;
                            mt: string;
                            borderTopWidth: number;
                        };
                    };
                };
                sm: {
                    field: {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    stepper: {
                        fontSize: string;
                        _first: {
                            borderTopRightRadius: string;
                        };
                        _last: {
                            borderBottomRightRadius: string;
                            mt: string;
                            borderTopWidth: number;
                        };
                    };
                };
                md: {
                    field: {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    stepper: {
                        fontSize: string;
                        _first: {
                            borderTopRightRadius: string;
                        };
                        _last: {
                            borderBottomRightRadius: string;
                            mt: string;
                            borderTopWidth: number;
                        };
                    };
                };
                lg: {
                    field: {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    } | {
                        verticalAlign: string;
                        fontSize: string;
                        px: number;
                        h: number;
                        borderRadius: string;
                    };
                    stepper: {
                        fontSize: string;
                        _first: {
                            borderTopRightRadius: string;
                        };
                        _last: {
                            borderBottomRightRadius: string;
                            mt: string;
                            borderTopWidth: number;
                        };
                    };
                };
            };
            variants: {
                outline: (props: Record<string, any>) => {
                    field: {
                        border: string;
                        borderColor: string;
                        bg: string;
                        _hover: {
                            borderColor: any;
                        };
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _disabled: {
                            opacity: number;
                            cursor: string;
                        };
                        _invalid: {
                            borderColor: any;
                            boxShadow: string;
                        };
                        _focus: {
                            zIndex: number;
                            borderColor: any;
                            boxShadow: string;
                        };
                    };
                    addon: {
                        border: string;
                        borderColor: any;
                        bg: any;
                    };
                };
                filled: (props: Record<string, any>) => {
                    field: {
                        border: string;
                        borderColor: string;
                        bg: any;
                        _hover: {
                            bg: any;
                        };
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _disabled: {
                            opacity: number;
                            cursor: string;
                        };
                        _invalid: {
                            borderColor: any;
                        };
                        _focus: {
                            bg: string;
                            borderColor: any;
                        };
                    };
                    addon: {
                        border: string;
                        borderColor: string;
                        bg: any;
                    };
                };
                flushed: (props: Record<string, any>) => {
                    field: {
                        borderBottom: string;
                        borderColor: string;
                        borderRadius: number;
                        pl: number;
                        pr: number;
                        bg: string;
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _invalid: {
                            borderColor: any;
                            boxShadow: string;
                        };
                        _focus: {
                            borderColor: any;
                            boxShadow: string;
                        };
                    };
                    addon: {
                        borderBottom: string;
                        borderColor: string;
                        borderRadius: number;
                        paddingX: number;
                        bg: string;
                    };
                };
                unstyled: {
                    field: {
                        bg: string;
                        pl: number;
                        pr: number;
                        height: string;
                    };
                    addon: {
                        bg: string;
                        pl: number;
                        pr: number;
                        height: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        PinInput: {
            baseStyle: {
                textAlign: string;
                width: string;
                outline: number;
                position: string;
                appearance: string;
                transition: string;
            };
            sizes: {
                lg: {
                    fontSize: string;
                    w: number;
                    h: number;
                    borderRadius: string;
                };
                md: {
                    fontSize: string;
                    w: number;
                    h: number;
                    borderRadius: string;
                };
                sm: {
                    fontSize: string;
                    w: number;
                    h: number;
                    borderRadius: string;
                };
                xs: {
                    fontSize: string;
                    w: number;
                    h: number;
                    borderRadius: string;
                };
            };
            variants: {
                outline: (props: Record<string, any>) => {
                    border: string;
                    borderColor: string;
                    bg: string;
                    _hover: {
                        borderColor: any;
                    };
                    _readOnly: {
                        boxShadow: string;
                        userSelect: string;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                    _invalid: {
                        borderColor: any;
                        boxShadow: string;
                    };
                    _focus: {
                        zIndex: number;
                        borderColor: any;
                        boxShadow: string;
                    };
                };
                flushed: (props: Record<string, any>) => {
                    borderBottom: string;
                    borderColor: string;
                    borderRadius: number;
                    pl: number;
                    pr: number;
                    bg: string;
                    _readOnly: {
                        boxShadow: string;
                        userSelect: string;
                    };
                    _invalid: {
                        borderColor: any;
                        boxShadow: string;
                    };
                    _focus: {
                        borderColor: any;
                        boxShadow: string;
                    };
                };
                filled: (props: Record<string, any>) => {
                    border: string;
                    borderColor: string;
                    bg: any;
                    _hover: {
                        bg: any;
                    };
                    _readOnly: {
                        boxShadow: string;
                        userSelect: string;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                    _invalid: {
                        borderColor: any;
                    };
                    _focus: {
                        bg: string;
                        borderColor: any;
                    };
                };
                unstyled: {
                    bg: string;
                    pl: number;
                    pr: number;
                    height: string;
                };
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Popover: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                popper: {
                    w: string;
                    maxW: string;
                    zIndex: number;
                };
                content: {
                    bg: any;
                    border: string;
                    borderColor: string;
                    borderRadius: string;
                    boxShadow: string;
                    zIndex: string;
                    _focus: {
                        outline: number;
                        boxShadow: string;
                    };
                };
                header: {
                    px: number;
                    py: number;
                    borderBottomWidth: string;
                };
                body: {
                    px: number;
                    py: number;
                };
                footer: {
                    px: number;
                    py: number;
                    borderTopWidth: string;
                };
                arrow: {
                    bg: any;
                };
            };
        };
        Progress: {
            parts: string[];
            sizes: {
                xs: {
                    track: {
                        h: string;
                    };
                };
                sm: {
                    track: {
                        h: string;
                    };
                };
                md: {
                    track: {
                        h: string;
                    };
                };
                lg: {
                    track: {
                        h: string;
                    };
                };
            };
            baseStyle: (props: Record<string, any>) => {
                label: {
                    lineHeight: string;
                    fontSize: string;
                    fontWeight: string;
                    color: string;
                };
                filledTrack: any;
                track: {
                    bg: any;
                };
            };
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Radio: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                label: {
                    userSelect: string;
                    _disabled: {
                        opacity: number;
                    };
                };
                control: {
                    borderRadius: string;
                    _checked: {
                        _before: {
                            content: string;
                            display: string;
                            pos: string;
                            w: string;
                            h: string;
                            borderRadius: string;
                            bg: string;
                        };
                        bg: any;
                        borderColor: any;
                        color: any;
                        _hover: {
                            bg: any;
                            borderColor: any;
                        };
                        _disabled: {
                            borderColor: any;
                            bg: any;
                            color: any;
                        };
                    };
                    w: string;
                    transition: string;
                    border: string;
                    borderColor: string;
                    color: string;
                    _indeterminate: {
                        bg: any;
                        borderColor: any;
                        color: any;
                    };
                    _disabled: {
                        bg: any;
                        borderColor: any;
                    };
                    _focus: {
                        boxShadow: string;
                    };
                    _invalid: {
                        borderColor: any;
                    };
                };
            };
            sizes: {
                md: {
                    control: {
                        w: number;
                        h: number;
                    };
                    label: {
                        fontSize: string;
                    };
                };
                lg: {
                    control: {
                        w: number;
                        h: number;
                    };
                    label: {
                        fontSize: string;
                    };
                };
                sm: {
                    control: {
                        width: number;
                        height: number;
                    };
                    label: {
                        fontSize: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Select: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                field: {
                    appearance: string;
                    paddingBottom: string;
                    lineHeight: string;
                    "> option": {
                        bg: any;
                    };
                    width: string;
                    outline: number;
                    position: string;
                    transition: string;
                };
                icon: {
                    width: string;
                    height: string;
                    right: string;
                    position: string;
                    color: string;
                    fontSize: string;
                    _disabled: {
                        opacity: number;
                    };
                };
            };
            sizes: any;
            variants: {
                outline: (props: Record<string, any>) => {
                    field: {
                        border: string;
                        borderColor: string;
                        bg: string;
                        _hover: {
                            borderColor: any;
                        };
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _disabled: {
                            opacity: number;
                            cursor: string;
                        };
                        _invalid: {
                            borderColor: any;
                            boxShadow: string;
                        };
                        _focus: {
                            zIndex: number;
                            borderColor: any;
                            boxShadow: string;
                        };
                    };
                    addon: {
                        border: string;
                        borderColor: any;
                        bg: any;
                    };
                };
                filled: (props: Record<string, any>) => {
                    field: {
                        border: string;
                        borderColor: string;
                        bg: any;
                        _hover: {
                            bg: any;
                        };
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _disabled: {
                            opacity: number;
                            cursor: string;
                        };
                        _invalid: {
                            borderColor: any;
                        };
                        _focus: {
                            bg: string;
                            borderColor: any;
                        };
                    };
                    addon: {
                        border: string;
                        borderColor: string;
                        bg: any;
                    };
                };
                flushed: (props: Record<string, any>) => {
                    field: {
                        borderBottom: string;
                        borderColor: string;
                        borderRadius: number;
                        pl: number;
                        pr: number;
                        bg: string;
                        _readOnly: {
                            boxShadow: string;
                            userSelect: string;
                        };
                        _invalid: {
                            borderColor: any;
                            boxShadow: string;
                        };
                        _focus: {
                            borderColor: any;
                            boxShadow: string;
                        };
                    };
                    addon: {
                        borderBottom: string;
                        borderColor: string;
                        borderRadius: number;
                        paddingX: number;
                        bg: string;
                    };
                };
                unstyled: {
                    field: {
                        bg: string;
                        pl: number;
                        pr: number;
                        height: string;
                    };
                    addon: {
                        bg: string;
                        pl: number;
                        pr: number;
                        height: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Skeleton: {
            baseStyle: (props: Record<string, any>) => {
                opacity: number;
                borderRadius: string;
                borderColor: any;
                background: any;
                animation: string;
            };
        };
        SkipLink: {
            baseStyle: (props: Record<string, any>) => {
                borderRadius: string;
                fontWeight: string;
                _focus: {
                    boxShadow: string;
                    padding: string;
                    position: string;
                    top: string;
                    left: string;
                    bg: any;
                };
            };
        };
        Slider: {
            parts: string[];
            sizes: {
                lg: (props: Record<string, any>) => {
                    thumb: {
                        w: string;
                        h: string;
                    };
                    track: any;
                };
                md: (props: Record<string, any>) => {
                    thumb: {
                        w: string;
                        h: string;
                    };
                    track: any;
                };
                sm: (props: Record<string, any>) => {
                    thumb: {
                        w: string;
                        h: string;
                    };
                    track: any;
                };
            };
            baseStyle: (props: Record<string, any>) => {
                container: any;
                track: {
                    borderRadius: string;
                    bg: any;
                    _disabled: {
                        bg: any;
                    };
                };
                thumb: any;
                filledTrack: {
                    bg: any;
                };
            };
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Spinner: {
            sizes: {
                xs: {
                    w: string;
                    h: string;
                };
                sm: {
                    w: string;
                    h: string;
                };
                md: {
                    w: string;
                    h: string;
                };
                lg: {
                    w: string;
                    h: string;
                };
                xl: {
                    w: string;
                    h: string;
                };
            };
            defaultProps: {
                size: string;
            };
        };
        Stat: {
            parts: string[];
            baseStyle: {
                label: {
                    fontWeight: string;
                };
                helpText: {
                    opacity: number;
                    marginBottom: number;
                };
                number: {
                    verticalAlign: string;
                    fontWeight: string;
                };
                icon: {
                    mr: number;
                    w: string;
                    h: string;
                    verticalAlign: string;
                };
            };
            sizes: {
                md: {
                    label: {
                        fontSize: string;
                    };
                    helpText: {
                        fontSize: string;
                    };
                    number: {
                        fontSize: string;
                    };
                };
            };
            defaultProps: {
                size: string;
            };
        };
        Switch: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                track: {
                    borderRadius: string;
                    p: string;
                    transition: string;
                    bg: any;
                    _focus: {
                        boxShadow: string;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                    _checked: {
                        bg: any;
                    };
                };
                thumb: {
                    bg: string;
                    transition: string;
                    borderRadius: string;
                    transform: string;
                };
            };
            sizes: {
                sm: {
                    track: {
                        w: string;
                        h: string;
                    };
                    thumb: {
                        w: string;
                        h: string;
                        _checked: {
                            transform: string;
                        };
                    };
                };
                md: {
                    track: {
                        w: string;
                        h: string;
                    };
                    thumb: {
                        w: string;
                        h: string;
                        _checked: {
                            transform: string;
                        };
                    };
                };
                lg: {
                    track: {
                        w: string;
                        h: string;
                    };
                    thumb: {
                        w: string;
                        h: string;
                        _checked: {
                            transform: string;
                        };
                    };
                };
            };
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Table: {
            parts: string[];
            baseStyle: {
                table: {
                    fontVariantNumeric: string;
                    borderCollapse: string;
                    width: string;
                };
                th: {
                    fontFamily: string;
                    fontWeight: string;
                    textTransform: string;
                    letterSpacing: string;
                    textAlign: string;
                };
                td: {
                    textAlign: string;
                };
                caption: {
                    mt: number;
                    fontFamily: string;
                    textAlign: string;
                    fontWeight: string;
                };
            };
            variants: {
                simple: (props: Record<string, any>) => {
                    th: {
                        "&[data-is-numeric=true]": {
                            textAlign: string;
                        };
                        color: any;
                        borderBottom: string;
                        borderColor: any;
                    };
                    td: {
                        "&[data-is-numeric=true]": {
                            textAlign: string;
                        };
                        borderBottom: string;
                        borderColor: any;
                    };
                    caption: {
                        color: any;
                    };
                    tfoot: {
                        tr: {
                            "&:last-of-type": {
                                th: {
                                    borderBottomWidth: number;
                                };
                            };
                        };
                    };
                };
                striped: (props: Record<string, any>) => {
                    th: {
                        "&[data-is-numeric=true]": {
                            textAlign: string;
                        };
                        color: any;
                        borderBottom: string;
                        borderColor: any;
                    };
                    td: {
                        "&[data-is-numeric=true]": {
                            textAlign: string;
                        };
                        borderBottom: string;
                        borderColor: any;
                    };
                    caption: {
                        color: any;
                    };
                    tbody: {
                        tr: {
                            "&:nth-of-type(odd)": {
                                "th, td": {
                                    borderBottomWidth: string;
                                    borderColor: any;
                                };
                                td: {
                                    background: any;
                                };
                            };
                        };
                    };
                    tfoot: {
                        tr: {
                            "&:last-of-type": {
                                th: {
                                    borderBottomWidth: number;
                                };
                            };
                        };
                    };
                };
                unstyled: {};
            };
            sizes: {
                sm: {
                    th: {
                        px: string;
                        py: string;
                        lineHeight: string;
                        fontSize: string;
                    };
                    td: {
                        px: string;
                        py: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    caption: {
                        px: string;
                        py: string;
                        fontSize: string;
                    };
                };
                md: {
                    th: {
                        px: string;
                        py: string;
                        lineHeight: string;
                        fontSize: string;
                    };
                    td: {
                        px: string;
                        py: string;
                        lineHeight: string;
                    };
                    caption: {
                        px: string;
                        py: string;
                        fontSize: string;
                    };
                };
                lg: {
                    th: {
                        px: string;
                        py: string;
                        lineHeight: string;
                        fontSize: string;
                    };
                    td: {
                        px: string;
                        py: string;
                        lineHeight: string;
                    };
                    caption: {
                        px: string;
                        py: string;
                        fontSize: string;
                    };
                };
            };
            defaultProps: {
                variant: string;
                size: string;
                colorScheme: string;
            };
        };
        Tabs: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                root: {
                    display: string;
                };
                tab: {
                    flex: number | undefined;
                    transition: string;
                    _focus: {
                        zIndex: number;
                        boxShadow: string;
                    };
                };
                tablist: {
                    justifyContent: any;
                    flexDirection: string;
                };
                tabpanel: {
                    p: number;
                };
            };
            sizes: {
                sm: {
                    tab: {
                        py: string;
                        px: string;
                        fontSize: string;
                    };
                };
                md: {
                    tab: {
                        fontSize: string;
                        py: string;
                        px: string;
                    };
                };
                lg: {
                    tab: {
                        fontSize: string;
                        py: string;
                        px: string;
                    };
                };
            };
            variants: {
                line: (props: Record<string, any>) => {
                    tablist: {
                        [x: string]: string;
                        borderColor: string;
                    };
                    tab: {
                        [x: string]: string | {
                            color: any;
                            borderColor: string;
                            bg?: undefined;
                            opacity?: undefined;
                            cursor?: undefined;
                        } | {
                            bg: any;
                            color?: undefined;
                            borderColor?: undefined;
                            opacity?: undefined;
                            cursor?: undefined;
                        } | {
                            opacity: number;
                            cursor: string;
                            color?: undefined;
                            borderColor?: undefined;
                            bg?: undefined;
                        };
                        borderColor: string;
                        _selected: {
                            color: any;
                            borderColor: string;
                        };
                        _active: {
                            bg: any;
                        };
                        _disabled: {
                            opacity: number;
                            cursor: string;
                        };
                    };
                };
                enclosed: (props: Record<string, any>) => {
                    tab: {
                        borderTopRadius: string;
                        border: string;
                        borderColor: string;
                        mb: string;
                        _selected: {
                            color: any;
                            borderColor: string;
                            borderBottomColor: any;
                        };
                    };
                    tablist: {
                        mb: string;
                        borderBottom: string;
                        borderColor: string;
                    };
                };
                "enclosed-colored": (props: Record<string, any>) => {
                    tab: {
                        border: string;
                        borderColor: string;
                        bg: any;
                        mb: string;
                        _notLast: {
                            mr: string;
                        };
                        _selected: {
                            bg: any;
                            color: any;
                            borderColor: string;
                            borderTopColor: string;
                            borderBottomColor: string;
                        };
                    };
                    tablist: {
                        mb: string;
                        borderBottom: string;
                        borderColor: string;
                    };
                };
                "soft-rounded": (props: Record<string, any>) => {
                    tab: {
                        borderRadius: string;
                        fontWeight: string;
                        color: string;
                        _selected: {
                            color: any;
                            bg: any;
                        };
                    };
                };
                "solid-rounded": (props: Record<string, any>) => {
                    tab: {
                        borderRadius: string;
                        fontWeight: string;
                        color: any;
                        _selected: {
                            color: any;
                            bg: any;
                        };
                    };
                };
                unstyled: {};
            };
            defaultProps: {
                size: string;
                variant: string;
                colorScheme: string;
            };
        };
        Tag: {
            parts: string[];
            variants: {
                subtle: (props: Record<string, any>) => {
                    container: {
                        bg: any;
                        color: any;
                    };
                };
                solid: (props: Record<string, any>) => {
                    container: {
                        bg: any;
                        color: any;
                    };
                };
                outline: (props: Record<string, any>) => {
                    container: {
                        color: any;
                        boxShadow: string;
                    };
                };
            };
            baseStyle: {
                container: {
                    fontWeight: string;
                    lineHeight: number;
                    outline: number;
                    _focus: {
                        boxShadow: string;
                    };
                };
                label: {
                    lineHeight: number;
                };
                closeButton: {
                    fontSize: string;
                    w: string;
                    h: string;
                    borderRadius: string;
                    ms: string;
                    me: string;
                    opacity: number;
                    _disabled: {
                        opacity: number;
                    };
                    _focus: {
                        boxShadow: string;
                        bg: string;
                    };
                    _hover: {
                        opacity: number;
                    };
                    _active: {
                        opacity: number;
                    };
                };
            };
            sizes: {
                sm: {
                    container: {
                        minH: string;
                        minW: string;
                        fontSize: string;
                        px: number;
                        borderRadius: string;
                    };
                    closeButton: {
                        me: string;
                        ms: string;
                    };
                };
                md: {
                    container: {
                        minH: string;
                        minW: string;
                        fontSize: string;
                        borderRadius: string;
                        px: number;
                    };
                };
                lg: {
                    container: {
                        minH: number;
                        minW: number;
                        fontSize: string;
                        borderRadius: string;
                        px: number;
                    };
                };
            };
            defaultProps: {
                size: string;
                variant: string;
                colorScheme: string;
            };
        };
        Textarea: {
            baseStyle: {
                paddingY: string;
                minHeight: string;
                lineHeight: string;
                width: string;
                outline: number;
                position: string;
                appearance: string;
                transition: string;
            };
            sizes: {
                xs: {
                    fontSize: string;
                    px: number;
                    h: number;
                    borderRadius: string;
                };
                sm: {
                    fontSize: string;
                    px: number;
                    h: number;
                    borderRadius: string;
                };
                md: {
                    fontSize: string;
                    px: number;
                    h: number;
                    borderRadius: string;
                };
                lg: {
                    fontSize: string;
                    px: number;
                    h: number;
                    borderRadius: string;
                };
            };
            variants: {
                outline: (props: Record<string, any>) => {
                    border: string;
                    borderColor: string;
                    bg: string;
                    _hover: {
                        borderColor: any;
                    };
                    _readOnly: {
                        boxShadow: string;
                        userSelect: string;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                    _invalid: {
                        borderColor: any;
                        boxShadow: string;
                    };
                    _focus: {
                        zIndex: number;
                        borderColor: any;
                        boxShadow: string;
                    };
                };
                flushed: (props: Record<string, any>) => {
                    borderBottom: string;
                    borderColor: string;
                    borderRadius: number;
                    pl: number;
                    pr: number;
                    bg: string;
                    _readOnly: {
                        boxShadow: string;
                        userSelect: string;
                    };
                    _invalid: {
                        borderColor: any;
                        boxShadow: string;
                    };
                    _focus: {
                        borderColor: any;
                        boxShadow: string;
                    };
                };
                filled: (props: Record<string, any>) => {
                    border: string;
                    borderColor: string;
                    bg: any;
                    _hover: {
                        bg: any;
                    };
                    _readOnly: {
                        boxShadow: string;
                        userSelect: string;
                    };
                    _disabled: {
                        opacity: number;
                        cursor: string;
                    };
                    _invalid: {
                        borderColor: any;
                    };
                    _focus: {
                        bg: string;
                        borderColor: any;
                    };
                };
                unstyled: {
                    bg: string;
                    pl: number;
                    pr: number;
                    height: string;
                };
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Tooltip: {
            baseStyle: (props: Record<string, any>) => {
                px: string;
                py: string;
                bg: any;
                color: any;
                borderRadius: string;
                fontWeight: string;
                pointerEvents: string;
                fontSize: string;
                boxShadow: string;
                maxW: string;
                zIndex: string;
            };
        };
        FormError: {
            parts: string[];
            baseStyle: (props: Record<string, any>) => {
                text: {
                    color: any;
                    mt: number;
                    fontSize: string;
                };
                icon: {
                    marginEnd: string;
                    color: any;
                };
            };
        };
    };
    styles: import("@chakra-ui/theme-tools").Styles;
    config: import("@chakra-ui/theme").ThemeConfig;
    sizes: {
        container: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        full: string;
        "3xs": string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        px: string;
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    shadows: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        outline: string;
        inner: string;
        none: string;
        "dark-lg": string;
    };
    space: {
        px: string;
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    borders: {
        none: number;
        "1px": string;
        "2px": string;
        "4px": string;
        "8px": string;
    };
    transition: {
        property: {
            common: string;
            colors: string;
            dimensions: string;
            position: string;
            background: string;
        };
        easing: {
            "ease-in": string;
            "ease-out": string;
            "ease-in-out": string;
        };
        duration: {
            "ultra-fast": string;
            faster: string;
            fast: string;
            normal: string;
            slow: string;
            slower: string;
            "ultra-slow": string;
        };
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        normal: string;
        none: number;
        shorter: number;
        short: number;
        base: number;
        tall: number;
        taller: string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
    };
    fontWeights: {
        hairline: number;
        thin: number;
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
    };
    fonts: {
        heading: string;
        body: string;
        mono: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        "9xl": string;
    };
    breakpoints: import("@chakra-ui/theme-tools").Breakpoints<{
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    }>;
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    radii: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    colors: {
        transparent: string;
        current: string;
        black: string;
        white: string;
        whiteAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blackAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        red: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        orange: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        yellow: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        green: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        teal: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        cyan: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        purple: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        pink: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        linkedin: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        facebook: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        messenger: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        whatsapp: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        twitter: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        telegram: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };
    direction: "ltr";
} & T;
export {};
