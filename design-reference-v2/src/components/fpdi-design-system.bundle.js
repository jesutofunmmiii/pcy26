/* @ds-bundle: {"format":4,"namespace":"FPDIDesignSystem_ca687e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Toast","sourcePath":"components/overlays/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a5060f44f672","components/core/Button.jsx":"5edf29e88d05","components/core/Card.jsx":"109d85d48b02","components/core/Icon.jsx":"d8c9a72b7159","components/core/IconButton.jsx":"67778ee7ae39","components/core/Tag.jsx":"81e9b04c6f80","components/forms/Checkbox.jsx":"05ad43a6151d","components/forms/Input.jsx":"123913291459","components/forms/Radio.jsx":"cad2ebc01d03","components/forms/Select.jsx":"7609e2077d91","components/forms/Switch.jsx":"008e1517219b","components/navigation/Tabs.jsx":"40e2c81aa567","components/overlays/Dialog.jsx":"64871527cfe3","components/overlays/Toast.jsx":"50ae9974b15e","components/overlays/Tooltip.jsx":"81bc8aa8ee95","ui_kits/website/Apply.jsx":"29dce87880ef","ui_kits/website/Footer.jsx":"853f8d5c46e6","ui_kits/website/Home.jsx":"193b31412a9e","ui_kits/website/Impact.jsx":"606dbd7c1bab","ui_kits/website/Nav.jsx":"b0ede8742a82","ui_kits/website/Programs.jsx":"b018f737df21"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FPDIDesignSystem_ca687e = window.FPDIDesignSystem_ca687e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const VARIANTS = {
  success: {
    bg: 'var(--status-success-bg)',
    color: 'var(--green-700)'
  },
  error: {
    bg: 'var(--status-error-bg)',
    color: 'var(--status-error)'
  },
  gold: {
    bg: 'var(--surface-gold-tint)',
    color: 'var(--text-gold-safe)'
  },
  neutral: {
    bg: 'var(--neutral-100)',
    color: 'var(--text-body)'
  }
};
function Badge({
  children,
  variant = 'neutral',
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: v.bg,
      color: v.color,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// White card, 16px radius, 1px neutral border, soft green-tinted shadow.
// featureCorner echoes the logo's folded gold panel: one oversized 24px corner.
function Card({
  children,
  featureCorner = false,
  corner = 'top-left',
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const radii = {
    borderRadius: 'var(--radius-lg)'
  };
  if (featureCorner) {
    const map = {
      'top-left': {
        borderTopLeftRadius: 'var(--radius-feature-corner)'
      },
      'top-right': {
        borderTopRightRadius: 'var(--radius-feature-corner)'
      },
      'bottom-left': {
        borderBottomLeftRadius: 'var(--radius-feature-corner)'
      },
      'bottom-right': {
        borderBottomRightRadius: 'var(--radius-feature-corner)'
      }
    };
    Object.assign(radii, map[corner] || map['top-left']);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      padding,
      ...radii,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Renders a Lucide icon by name. Requires the host page to load the Lucide
// CDN script in <head>: <script src="https://unpkg.com/lucide@latest"></script>
// FPDI has no codebase of its own to source icons from, so Lucide (CDN-available,
// clean 2px stroke, geometric — pairs with Bricolage/Figtree) was substituted.
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const node = lib && lib.icons ? lib.icons[toPascal(name)] : null;
  const svg = node ? buildSvg(node, size, color, strokeWidth) : '';
  if (!svg) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: 2,
        background: 'var(--neutral-border)',
        ...style
      },
      "aria-hidden": "true"
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }, rest));
}

// A Lucide icon is an array of [tagName, attrs] child nodes drawn on a 24x24 grid.
function buildSvg(children, size, color, strokeWidth) {
  const inner = children.map(([tag, attrs]) => {
    const a = Object.entries(attrs || {}).map(([k, v]) => `${k}="${v}"`).join(' ');
    return `<${tag} ${a} />`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}
function toPascal(name) {
  return String(name).split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 36,
    paddingInline: 14,
    fontSize: 'var(--text-sm)',
    gap: 6,
    iconSize: 16
  },
  md: {
    height: 48,
    paddingInline: 20,
    fontSize: 'var(--text-md)',
    gap: 8,
    iconSize: 18
  },
  lg: {
    height: 56,
    paddingInline: 28,
    fontSize: 'var(--text-lg)',
    gap: 8,
    iconSize: 20
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-text)',
    border: '1px solid transparent',
    hoverBg: 'var(--action-primary-bg-hover)'
  },
  accent: {
    background: 'var(--action-accent-bg)',
    color: 'var(--action-accent-text)',
    border: '1px solid transparent',
    hoverBg: 'var(--action-accent-bg-hover)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--action-secondary-text)',
    border: '1.5px solid var(--action-secondary-border)',
    hoverBg: 'var(--surface-green-tint)'
  }
};

// Primary/accent/secondary button per FPDI brand: green fill + white text,
// gold fill + dark text (use once per view), or green outline. 48px tall (md).
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'start',
  disabled = false,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.paddingInline}px`,
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--neutral-100)' : hover ? v.hoverBg : v.background,
      color: disabled ? 'var(--text-muted)' : v.color,
      border: v.border,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-body-semibold)',
      fontSize: s.fontSize,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: `background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)`,
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      ...style
    }
  }, rest), icon && iconPosition === 'start' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.iconSize
  }) : null, children, icon && iconPosition === 'end' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.iconSize
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary-bg)',
    hoverBg: 'var(--action-primary-bg-hover)',
    color: '#fff',
    border: 'none'
  },
  secondary: {
    bg: 'transparent',
    hoverBg: 'var(--surface-green-tint)',
    color: 'var(--action-secondary-text)',
    border: '1.5px solid var(--action-secondary-border)'
  },
  ghost: {
    bg: 'transparent',
    hoverBg: 'var(--neutral-50)',
    color: 'var(--text-body)',
    border: 'none'
  }
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--neutral-100)' : hover ? v.hoverBg : v.bg,
      color: disabled ? 'var(--text-muted)' : v.color,
      border: v.border,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(dim * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
// Filter/category chip — optionally removable.
function Tag({
  children,
  selected = false,
  removable = false,
  onRemove,
  onClick,
  style
}) {
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: '0 12px',
      borderRadius: 'var(--radius-sm)',
      background: selected ? 'var(--surface-green-tint)' : 'var(--surface-sunken)',
      color: selected ? 'var(--green-700)' : 'var(--text-body)',
      border: selected ? '1px solid var(--green-500)' : '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, children, removable ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 5,
      border: checked ? 'none' : '1.5px solid var(--border-default)',
      background: checked ? 'var(--green-500)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "#fff",
    strokeWidth: 3
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Text input with label, helper text and error state.
function Input({
  label,
  helperText,
  error,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  style,
  id,
  ...rest
}) {
  const inputId = id || React.useId();
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      height: 'var(--control-height-md)',
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${error ? 'var(--status-error)' : focused ? 'var(--green-500)' : 'var(--border-default)'}`,
      background: disabled ? 'var(--neutral-50)' : '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      outline: 'none',
      boxShadow: focused ? '0 0 0 3px var(--surface-green-tint)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest)), error || helperText ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--status-error)' : 'var(--text-muted)'
    }
  }, error || helperText) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--green-500)' : 'var(--border-default)'}`,
      background: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--green-500)'
    }
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  style,
  id
}) {
  const selectId = id || React.useId();
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: selectId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      appearance: 'none',
      height: 'var(--control-height-md)',
      padding: '0 40px 0 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${focused ? 'var(--green-500)' : 'var(--border-default)'}`,
      background: disabled ? 'var(--neutral-50)' : '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: value ? 'var(--text-body)' : 'var(--text-muted)',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      right: 14,
      top: 12,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--green-500)' : 'var(--neutral-border)',
      position: 'relative',
      transition: 'background var(--duration-fast) var(--ease-out)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-fast) var(--ease-out)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
// Underlined tab bar — active tab gets a green underline + heading color.
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1.5px solid var(--border-default)',
      ...style
    }
  }, tabs.map(tab => {
    const active = tab.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      onClick: () => onChange && onChange(tab.value),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 12px 0',
        marginBottom: -1.5,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-md)',
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--text-heading)' : 'var(--text-muted)',
        borderBottom: active ? '2.5px solid var(--green-500)' : '2.5px solid transparent',
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
// Modal dialog: dark scrim + white card, header with close button, body, footer actions.
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(6, 46, 16, 0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '90vw',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-raised)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: 'var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-5) var(--space-6)',
      borderTop: 'var(--border-card)',
      background: 'var(--surface-sunken)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Toast.jsx
try { (() => {
const VARIANTS = {
  success: {
    icon: 'check-circle',
    color: 'var(--green-500)'
  },
  error: {
    icon: 'alert-circle',
    color: 'var(--status-error)'
  },
  info: {
    icon: 'info',
    color: 'var(--text-muted)'
  }
};

// Bottom-corner notification card.
function Toast({
  variant = 'info',
  title,
  description,
  onClose,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      width: 340,
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      padding: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: v.icon,
    size: 20,
    color: v.color,
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      color: 'var(--text-heading)',
      fontSize: 'var(--text-sm)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Toast.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
// Small dark tooltip bubble, shown on hover/focus of its child.
function Tooltip({
  label,
  children,
  side = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const posStyle = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    }
  }[side] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...posStyle,
      background: 'var(--green-900)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-xs)',
      whiteSpace: 'nowrap',
      zIndex: 10,
      boxShadow: 'var(--shadow-raised)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Apply.jsx
try { (() => {
function Apply({
  showToast
}) {
  const {
    Input,
    Select,
    Checkbox,
    Radio,
    Button,
    Card,
    Icon
  } = window.FPDIDesignSystem_ca687e;
  const [freq, setFreq] = React.useState('monthly');
  const [agreed, setAgreed] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    showToast();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--layout-margin)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Apply for a program grant"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-3) 0 var(--space-7)',
      maxWidth: '22ch'
    }
  }, "Tell us about your community."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Mwangi"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@example.org"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Region",
    placeholder: "Select a region\u2026",
    options: [{
      value: 'ea',
      label: 'East Africa'
    }, {
      value: 'wa',
      label: 'West Africa'
    }, {
      value: 'sea',
      label: 'Southeast Asia'
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Community or organization name",
    placeholder: "Kericho Youth Cooperative"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-heading)',
      margin: '0 0 8px'
    }
  }, "Program area"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "area",
    label: "Water",
    checked: freq === 'monthly',
    onChange: () => setFreq('monthly')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "area",
    label: "Education",
    checked: freq === 'once',
    onChange: () => setFreq('once')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "area",
    label: "Health",
    checked: freq === 'health',
    onChange: () => setFreq('health')
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I confirm this application represents my community's needs accurately.",
    checked: agreed,
    onChange: e => setAgreed(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    size: "lg",
    style: {
      alignSelf: 'flex-start'
    },
    disabled: !agreed
  }, "Submit application")), /*#__PURE__*/React.createElement(Card, {
    featureCorner: true,
    corner: "top-right",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 24,
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, "What happens next"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Our regional team reviews applications monthly. You'll hear back within 5 business days, whether or not it's a fit."))));
}
window.Apply = Apply;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-900)',
      color: 'rgba(255,255,255,0.7)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--layout-margin)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fpdi-logo-white.svg",
    alt: "Future Pathways Development Initiative",
    style: {
      height: 92,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, "\xA9 2026 FPDI. Paths that rise.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge,
    Icon
  } = window.FPDIDesignSystem_ca687e;
  const programs = [{
    icon: 'droplets',
    title: 'Water access',
    desc: 'Wells, filtration and sanitation infrastructure built with local crews.',
    badge: 'Water'
  }, {
    icon: 'graduation-cap',
    title: 'Education',
    desc: 'Scholarships and teacher training that keep classrooms open.',
    badge: 'Education',
    feature: true
  }, {
    icon: 'heart-pulse',
    title: 'Health',
    desc: 'Community clinics and maternal health outreach.',
    badge: 'Health'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--green-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/rising-arc.svg",
    alt: "",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '55%',
      objectFit: 'cover',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--layout-margin) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      color: 'var(--gold-500)'
    }
  }, "Community development, done with people not for them"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-5xl)',
      maxWidth: '18ch',
      margin: 'var(--space-4) 0'
    }
  }, "Paths that rise, one community at a time."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 'var(--text-lg)',
      maxWidth: '52ch'
    }
  }, "We work alongside communities to build the water, health and education systems that let a rising generation stay and thrive at home."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "arrow-right",
    iconPosition: "end",
    onClick: () => onNavigate('apply')
  }, "Apply now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.6)'
    },
    onClick: () => onNavigate('impact')
  }, "See our impact")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--layout-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, [['2,400', 'FAMILIES SERVED'], ['38', 'ACTIVE PROGRAMS'], ['94%', 'FUNDS TO THE FIELD']].map(([n, u]) => /*#__PURE__*/React.createElement("div", {
    key: u
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      color: 'var(--text-heading)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "stat-unit",
    style: {
      marginTop: 4
    }
  }, u))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: '0 var(--layout-margin) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, "Where we work"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-7)'
    }
  }, "Three program areas, built with local leadership."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, programs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    featureCorner: p.feature,
    corner: "top-left",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 28,
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 4px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, p.desc)), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, p.badge))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-green-tint)',
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: '0 var(--layout-margin)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 8
    }
  }, "Your gift builds paths that rise."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)'
    }
  }, "Monthly giving keeps our programs running between grant cycles.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate('apply')
  }, "Donate monthly"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Impact.jsx
try { (() => {
function Impact() {
  const {
    Card
  } = window.FPDIDesignSystem_ca687e;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--layout-margin) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "2024 impact report"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-3) 0 var(--space-7)',
      maxWidth: '20ch'
    }
  }, "The paths our work has opened."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-6)'
    }
  }, [['2,400', 'FAMILIES SERVED'], ['38', 'ACTIVE PROGRAMS'], ['12', 'REGIONS'], ['94%', 'FUNDS TO THE FIELD']].map(([n, u]) => /*#__PURE__*/React.createElement("div", {
    key: u
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-heading)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "stat-unit",
    style: {
      marginTop: 4
    }
  }, u))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 140,
      overflow: 'hidden',
      background: 'var(--green-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/rising-arc-line.svg",
    alt: "",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--layout-margin) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)',
      margin: '0 0 12px'
    }
  }, "\"The well FPDI helped us build changed how our whole village spends its mornings.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u2014 Community leader, Rift Valley water program"))));
}
window.Impact = Impact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Impact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
function Nav({
  page,
  onNavigate
}) {
  const {
    Button
  } = window.FPDIDesignSystem_ca687e;
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'programs',
    label: 'Programs'
  }, {
    id: 'impact',
    label: 'Impact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: '0 var(--layout-margin)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fpdi-emblem.svg",
    alt: "FPDI",
    style: {
      height: 38,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-heading)'
    }
  }, "FPDI")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      cursor: 'pointer',
      color: page === l.id ? 'var(--green-700)' : 'var(--text-body)'
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNavigate('apply')
  }, "Apply now"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
function Programs({
  onNavigate
}) {
  const {
    Tabs,
    Tag,
    Card,
    Badge,
    Button,
    Icon
  } = window.FPDIDesignSystem_ca687e;
  const [category, setCategory] = React.useState('all');
  const all = [{
    icon: 'droplets',
    title: 'Clean water, Rift Valley',
    region: 'East Africa',
    cat: 'water',
    status: 'Active',
    desc: 'Well drilling and filtration for 12 villages.'
  }, {
    icon: 'graduation-cap',
    title: 'Girls\u2019 scholarship fund',
    region: 'West Africa',
    cat: 'education',
    status: 'Funding',
    desc: 'Full tuition + supplies for secondary school.'
  }, {
    icon: 'heart-pulse',
    title: 'Maternal health outreach',
    region: 'East Africa',
    cat: 'health',
    status: 'Active',
    desc: 'Mobile clinics reaching rural mothers.'
  }, {
    icon: 'graduation-cap',
    title: 'Teacher training corps',
    region: 'Southeast Asia',
    cat: 'education',
    status: 'Active',
    desc: 'Certifying 60 local teachers this year.'
  }, {
    icon: 'droplets',
    title: 'Sanitation systems',
    region: 'West Africa',
    cat: 'water',
    status: 'Funding',
    desc: 'Household latrines and hygiene education.'
  }, {
    icon: 'heart-pulse',
    title: 'Nutrition program',
    region: 'Southeast Asia',
    cat: 'health',
    status: 'Active',
    desc: 'Supplemental feeding for children under 5.'
  }];
  const filtered = category === 'all' ? all : all.filter(p => p.cat === category);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--layout-margin)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Our programs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-3) 0 var(--space-7)',
      maxWidth: '20ch'
    }
  }, "Work you can follow, region by region."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'all',
      label: 'All programs'
    }, {
      value: 'water',
      label: 'Water'
    }, {
      value: 'education',
      label: 'Education'
    }, {
      value: 'health',
      label: 'Health'
    }],
    value: category,
    onChange: setCategory,
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 'var(--space-7)'
    }
  }, ['East Africa', 'West Africa', 'Southeast Asia'].map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement(Badge, {
    variant: p.status === 'Active' ? 'success' : 'gold'
  }, p.status)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 4px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, p.region)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-body)',
      flex: 1
    }
  }, p.desc), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNavigate('apply')
  }, "Support this")))));
}
window.Programs = Programs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
