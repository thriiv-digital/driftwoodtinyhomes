/* @ds-bundle: {"format":3,"namespace":"WollongongWebDesignCo_f9cb38","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"eb1161b0e584","components/core/Badge.jsx":"88c7ee54749b","components/core/Button.jsx":"48edf2dfd935","components/core/Card.jsx":"a4f3ead2a7d8","components/core/Divider.jsx":"772a5b0be41d","components/core/Tag.jsx":"c147de9e0e83","components/feedback/Alert.jsx":"19a95b30ac5f","components/feedback/Spinner.jsx":"496b4e10e3b6","components/feedback/Toast.jsx":"697a22509985","components/forms/Checkbox.jsx":"009e503c58be","components/forms/Input.jsx":"1d23adebb4a5","components/forms/Radio.jsx":"a0576e34ec0d","components/forms/Select.jsx":"0efe7c96a691","components/forms/Switch.jsx":"e062f8a66974","components/forms/Textarea.jsx":"05d45d4fd16c","components/navigation/Breadcrumb.jsx":"acc5236900ba","components/navigation/Navbar.jsx":"098f7d745460","components/navigation/Tabs.jsx":"9a9e76c64190"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WollongongWebDesignCo_f9cb38 = window.WollongongWebDesignCo_f9cb38 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name,
  fallback,
  size = 'md',
  shape = 'circle',
  status
}) {
  const [imgError, setImgError] = React.useState(false);
  const sizes = {
    xs: {
      dim: '24px',
      fontSize: '9px',
      statusSize: '7px',
      statusBorder: '1.5px'
    },
    sm: {
      dim: '32px',
      fontSize: '12px',
      statusSize: '9px',
      statusBorder: '2px'
    },
    md: {
      dim: '40px',
      fontSize: '15px',
      statusSize: '11px',
      statusBorder: '2px'
    },
    lg: {
      dim: '48px',
      fontSize: '18px',
      statusSize: '13px',
      statusBorder: '2px'
    },
    xl: {
      dim: '64px',
      fontSize: '24px',
      statusSize: '16px',
      statusBorder: '2.5px'
    },
    '2xl': {
      dim: '80px',
      fontSize: '30px',
      statusSize: '20px',
      statusBorder: '3px'
    }
  };
  const statusColors = {
    online: 'var(--color-success-500)',
    offline: 'var(--color-neutral-400)',
    busy: 'var(--color-error-500)',
    away: 'var(--color-warning-500)'
  };
  const bgPalette = ['var(--color-primary-700)', 'var(--color-teal-600)', 'var(--color-primary-500)', 'var(--color-teal-800)', 'var(--color-accent-600)', 'var(--color-primary-800)'];
  const s = sizes[size] || sizes.md;
  const initials = fallback || (name ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '?');
  const bgColor = bgPalette[(name ? name.charCodeAt(0) : 0) % bgPalette.length];
  const showImage = src && !imgError;
  const radius = shape === 'circle' ? '50%' : shape === 'rounded' ? 'var(--radius-lg)' : 'var(--radius-sm)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.dim,
      height: s.dim,
      borderRadius: radius,
      overflow: 'hidden',
      backgroundColor: showImage ? 'var(--color-neutral-200)' : bgColor,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: '700',
      color: '#fff',
      flexShrink: 0,
      userSelect: 'none'
    }
  }, showImage ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    onError: () => setImgError(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: s.statusSize,
      height: s.statusSize,
      borderRadius: '50%',
      backgroundColor: statusColors[status] || statusColors.offline,
      border: `${s.statusBorder} solid #fff`,
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false
}) {
  const variants = {
    default: {
      bg: 'var(--color-neutral-100)',
      color: 'var(--color-neutral-700)',
      border: 'var(--color-neutral-200)'
    },
    primary: {
      bg: 'var(--color-primary-100)',
      color: 'var(--color-primary-700)',
      border: 'var(--color-primary-200)'
    },
    teal: {
      bg: 'var(--color-teal-100)',
      color: 'var(--color-teal-700)',
      border: 'var(--color-teal-200)'
    },
    accent: {
      bg: 'var(--color-accent-100)',
      color: 'var(--color-accent-700)',
      border: 'var(--color-accent-200)'
    },
    success: {
      bg: 'var(--color-success-100)',
      color: 'var(--color-success-700)',
      border: 'var(--color-success-100)'
    },
    warning: {
      bg: 'var(--color-warning-100)',
      color: 'var(--color-warning-700)',
      border: 'var(--color-warning-100)'
    },
    error: {
      bg: 'var(--color-error-100)',
      color: 'var(--color-error-700)',
      border: 'var(--color-error-100)'
    },
    info: {
      bg: 'var(--color-info-100)',
      color: 'var(--color-info-700)',
      border: 'var(--color-info-100)'
    },
    brand: {
      bg: 'var(--color-primary-700)',
      color: '#fff',
      border: 'var(--color-primary-700)'
    },
    'brand-teal': {
      bg: 'var(--color-teal-600)',
      color: '#fff',
      border: 'var(--color-teal-600)'
    }
  };
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: '2px 6px',
      gap: '4px',
      dotSize: '5px'
    },
    md: {
      fontSize: '12px',
      padding: '3px 8px',
      gap: '4px',
      dotSize: '6px'
    },
    lg: {
      fontSize: '13px',
      padding: '4px 10px',
      gap: '5px',
      dotSize: '7px'
    }
  };
  const dotColors = {
    default: 'var(--color-neutral-500)',
    primary: 'var(--color-primary-500)',
    teal: 'var(--color-teal-500)',
    accent: 'var(--color-accent-500)',
    success: 'var(--color-success-500)',
    warning: 'var(--color-warning-500)',
    error: 'var(--color-error-500)',
    info: 'var(--color-info-500)',
    brand: '#fff',
    'brand-teal': '#fff'
  };
  const v = variants[variant] || variants.default;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: '600',
      lineHeight: '1',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-full)',
      border: `1px solid ${v.border}`,
      backgroundColor: v.bg,
      color: v.color,
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dotSize,
      height: s.dotSize,
      borderRadius: '50%',
      backgroundColor: dotColors[variant] || dotColors.default,
      flexShrink: 0,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  type = 'button',
  href
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const isDisabled = disabled || loading;
  const sizes = {
    xs: {
      padding: '5px 10px',
      fontSize: '11px',
      gap: '4px',
      spinnerSize: '10px'
    },
    sm: {
      padding: '7px 14px',
      fontSize: '13px',
      gap: '5px',
      spinnerSize: '12px'
    },
    md: {
      padding: '9px 18px',
      fontSize: '15px',
      gap: '6px',
      spinnerSize: '14px'
    },
    lg: {
      padding: '11px 24px',
      fontSize: '16px',
      gap: '7px',
      spinnerSize: '16px'
    },
    xl: {
      padding: '14px 30px',
      fontSize: '18px',
      gap: '8px',
      spinnerSize: '18px'
    }
  };
  const variants = {
    primary: {
      base: {
        background: 'var(--color-primary-700)',
        color: '#fff',
        borderColor: 'var(--color-primary-700)'
      },
      hover: {
        background: 'var(--color-primary-800)',
        borderColor: 'var(--color-primary-800)'
      },
      active: {
        background: 'var(--color-primary-900)',
        borderColor: 'var(--color-primary-900)'
      }
    },
    cta: {
      base: {
        background: 'var(--color-accent-500)',
        color: '#fff',
        borderColor: 'var(--color-accent-500)'
      },
      hover: {
        background: 'var(--color-accent-600)',
        borderColor: 'var(--color-accent-600)'
      },
      active: {
        background: 'var(--color-accent-700)',
        borderColor: 'var(--color-accent-700)'
      }
    },
    secondary: {
      base: {
        background: 'var(--color-neutral-100)',
        color: 'var(--color-neutral-800)',
        borderColor: 'var(--color-neutral-200)'
      },
      hover: {
        background: 'var(--color-neutral-200)',
        borderColor: 'var(--color-neutral-300)'
      },
      active: {
        background: 'var(--color-neutral-300)',
        borderColor: 'var(--color-neutral-400)'
      }
    },
    outline: {
      base: {
        background: 'transparent',
        color: 'var(--color-primary-700)',
        borderColor: 'var(--color-primary-700)'
      },
      hover: {
        background: 'var(--color-primary-50)',
        borderColor: 'var(--color-primary-800)',
        color: 'var(--color-primary-800)'
      },
      active: {
        background: 'var(--color-primary-100)',
        borderColor: 'var(--color-primary-900)',
        color: 'var(--color-primary-900)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--color-primary-700)',
        borderColor: 'transparent'
      },
      hover: {
        background: 'var(--color-primary-50)',
        borderColor: 'transparent'
      },
      active: {
        background: 'var(--color-primary-100)',
        borderColor: 'transparent'
      }
    },
    danger: {
      base: {
        background: 'var(--color-error-500)',
        color: '#fff',
        borderColor: 'var(--color-error-500)'
      },
      hover: {
        background: 'var(--color-error-600)',
        borderColor: 'var(--color-error-600)'
      },
      active: {
        background: 'var(--color-error-700)',
        borderColor: 'var(--color-error-700)'
      }
    }
  };
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.primary;
  const varStyle = {
    ...vr.base,
    ...(hover && !isDisabled ? vr.hover : {}),
    ...(active && !isDisabled ? vr.active : {})
  };
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    padding: sz.padding,
    fontSize: sz.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: '600',
    lineHeight: '1',
    letterSpacing: '-0.01em',
    borderRadius: 'var(--radius-md)',
    border: '2px solid',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
    width: fullWidth ? '100%' : undefined,
    textDecoration: 'none',
    transition: 'background-color 150ms ease, border-color 150ms ease, transform 100ms ease',
    transform: active && !isDisabled ? 'scale(0.98)' : 'scale(1)',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    boxSizing: 'border-box',
    ...varStyle
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    style: style,
    disabled: isDisabled && !href ? true : undefined,
    onClick: isDisabled ? undefined : onClick,
    type: href ? undefined : type,
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, loading ? /*#__PURE__*/React.createElement("span", {
    key: "spinner",
    style: {
      display: 'inline-block',
      width: sz.spinnerSize,
      height: sz.spinnerSize,
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'wwdc-spin 0.65s linear infinite',
      flexShrink: 0
    }
  }) : iconLeft, /*#__PURE__*/React.createElement("span", {
    key: "label"
  }, children), !loading && iconRight ? /*#__PURE__*/React.createElement("span", {
    key: "icon-right"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  hoverable = false,
  onClick,
  style: extStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const isClickable = hoverable || !!onClick;
  const variants = {
    default: {
      bg: '#fff',
      border: 'var(--color-neutral-200)',
      shadow: 'var(--shadow-sm)'
    },
    elevated: {
      bg: '#fff',
      border: 'transparent',
      shadow: 'var(--shadow-lg)'
    },
    bordered: {
      bg: '#fff',
      border: 'var(--color-neutral-300)',
      shadow: 'none'
    },
    subtle: {
      bg: 'var(--color-neutral-50)',
      border: 'var(--color-neutral-200)',
      shadow: 'none'
    },
    brand: {
      bg: 'var(--color-primary-700)',
      border: 'transparent',
      shadow: 'var(--shadow-md)'
    },
    teal: {
      bg: 'var(--color-teal-600)',
      border: 'transparent',
      shadow: 'var(--shadow-md)'
    },
    accent: {
      bg: 'var(--color-accent-500)',
      border: 'transparent',
      shadow: 'var(--shadow-md)'
    },
    highlight: {
      bg: 'var(--color-primary-50)',
      border: 'var(--color-primary-200)',
      shadow: 'none'
    }
  };
  const paddings = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
    xl: 'var(--space-10)'
  };
  const radii = {
    none: '0',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)'
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: v.bg,
      border: `1px solid ${v.border}`,
      boxShadow: hovered && isClickable ? 'var(--shadow-brand)' : v.shadow,
      borderRadius: radii[radius] || radii.lg,
      padding: paddings[padding] || paddings.md,
      cursor: isClickable ? 'pointer' : 'default',
      transition: 'box-shadow 200ms ease, transform 200ms var(--ease-spring)',
      transform: hovered && isClickable ? 'translateY(-2px)' : 'translateY(0)',
      boxSizing: 'border-box',
      ...extStyle
    },
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  label,
  orientation = 'horizontal',
  variant = 'solid',
  spacing = 'md'
}) {
  const spacings = {
    xs: 'var(--space-2)',
    sm: 'var(--space-3)',
    md: 'var(--space-5)',
    lg: 'var(--space-8)',
    xl: 'var(--space-12)'
  };
  const m = spacings[spacing] || spacings.md;
  const lineStyle = variant === 'dashed' ? 'dashed' : variant === 'dotted' ? 'dotted' : 'solid';
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: '1px',
        alignSelf: 'stretch',
        backgroundColor: 'var(--color-neutral-200)',
        margin: `0 ${m}`,
        flexShrink: 0
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        margin: `${m} 0`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        backgroundColor: 'var(--color-neutral-200)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-sans)',
        fontWeight: '600',
        color: 'var(--color-neutral-500)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        backgroundColor: 'var(--color-neutral-200)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      margin: `${m} 0`,
      border: 'none',
      borderTop: `1px ${lineStyle} var(--color-neutral-200)`
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  color = 'default',
  size = 'md',
  removable = false,
  onRemove,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const colors = {
    default: {
      bg: 'var(--color-neutral-100)',
      color: 'var(--color-neutral-700)',
      hoverBg: 'var(--color-neutral-200)'
    },
    primary: {
      bg: 'var(--color-primary-100)',
      color: 'var(--color-primary-700)',
      hoverBg: 'var(--color-primary-200)'
    },
    teal: {
      bg: 'var(--color-teal-100)',
      color: 'var(--color-teal-700)',
      hoverBg: 'var(--color-teal-200)'
    },
    accent: {
      bg: 'var(--color-accent-100)',
      color: 'var(--color-accent-700)',
      hoverBg: 'var(--color-accent-200)'
    },
    success: {
      bg: 'var(--color-success-100)',
      color: 'var(--color-success-700)',
      hoverBg: 'var(--color-success-100)'
    },
    warning: {
      bg: 'var(--color-warning-100)',
      color: 'var(--color-warning-700)',
      hoverBg: 'var(--color-warning-100)'
    },
    error: {
      bg: 'var(--color-error-100)',
      color: 'var(--color-error-700)',
      hoverBg: 'var(--color-error-100)'
    }
  };
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '3px 8px',
      gap: '3px',
      removeSize: '12px'
    },
    md: {
      fontSize: '13px',
      padding: '5px 10px',
      gap: '4px',
      removeSize: '14px'
    },
    lg: {
      fontSize: '14px',
      padding: '6px 12px',
      gap: '5px',
      removeSize: '16px'
    }
  };
  const c = colors[color] || colors.default;
  const s = sizes[size] || sizes.md;
  const isClickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: '500',
      lineHeight: '1',
      borderRadius: 'var(--radius-full)',
      backgroundColor: hover && isClickable ? c.hoverBg : c.bg,
      color: c.color,
      whiteSpace: 'nowrap',
      cursor: isClickable ? 'pointer' : 'default',
      transition: 'background-color 150ms ease',
      userSelect: 'none'
    },
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, removable && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.removeSize,
      height: s.removeSize,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7,
      padding: 0,
      borderRadius: '50%',
      fontSize: parseInt(s.removeSize) + 2 + 'px',
      lineHeight: 1
    },
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  children,
  title,
  variant = 'info',
  dismissible = false,
  onDismiss,
  icon
}) {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed) return null;
  const variants = {
    info: {
      bg: 'var(--color-info-50)',
      border: 'var(--color-info-500)',
      text: 'var(--color-info-700)',
      iconColor: 'var(--color-info-500)',
      titleColor: 'var(--color-info-700)'
    },
    success: {
      bg: 'var(--color-success-50)',
      border: 'var(--color-success-500)',
      text: 'var(--color-success-700)',
      iconColor: 'var(--color-success-500)',
      titleColor: 'var(--color-success-700)'
    },
    warning: {
      bg: 'var(--color-warning-50)',
      border: 'var(--color-warning-500)',
      text: 'var(--color-warning-700)',
      iconColor: 'var(--color-warning-500)',
      titleColor: 'var(--color-warning-700)'
    },
    error: {
      bg: 'var(--color-error-50)',
      border: 'var(--color-error-500)',
      text: 'var(--color-error-700)',
      iconColor: 'var(--color-error-500)',
      titleColor: 'var(--color-error-700)'
    },
    neutral: {
      bg: 'var(--color-neutral-50)',
      border: 'var(--color-neutral-400)',
      text: 'var(--color-neutral-700)',
      iconColor: 'var(--color-neutral-500)',
      titleColor: 'var(--color-neutral-800)'
    }
  };
  const defaultIcons = {
    info: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "8",
      stroke: "currentColor",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 8v5M9 6v.01",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })),
    success: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "8",
      stroke: "currentColor",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 9l2.5 2.5L12 6",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })),
    warning: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 2L1 16h16L9 2z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 8v4M9 14v.01",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })),
    error: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "8",
      stroke: "currentColor",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 6l6 6M12 6l-6 6",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })),
    neutral: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "8",
      stroke: "currentColor",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 8v5M9 6v.01",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }))
  };
  const v = variants[variant] || variants.info;
  const displayIcon = icon || defaultIcons[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      backgroundColor: v.bg,
      border: `1px solid ${v.border}`,
      borderLeft: `3px solid ${v.border}`,
      borderRadius: 'var(--radius-md)',
      animation: 'wwdc-slide-down 200ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: v.iconColor,
      flexShrink: 0,
      marginTop: '1px'
    }
  }, displayIcon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: '700',
      color: v.titleColor,
      lineHeight: '1.3'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      color: v.text,
      lineHeight: '1.5'
    }
  }, children)), dismissible && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setDismissed(true);
      onDismiss && onDismiss();
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: v.text,
      opacity: 0.6,
      padding: '0',
      flexShrink: 0,
      fontSize: '18px',
      lineHeight: 1,
      display: 'flex',
      alignItems: 'flex-start'
    },
    "aria-label": "Dismiss"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function Spinner({
  size = 'md',
  color = 'primary',
  label = 'Loading…',
  overlay = false
}) {
  const sizes = {
    xs: {
      dim: '14px',
      border: '2px'
    },
    sm: {
      dim: '18px',
      border: '2px'
    },
    md: {
      dim: '24px',
      border: '3px'
    },
    lg: {
      dim: '32px',
      border: '3px'
    },
    xl: {
      dim: '48px',
      border: '4px'
    },
    '2xl': {
      dim: '64px',
      border: '5px'
    }
  };
  const colors = {
    primary: 'var(--color-primary-700)',
    teal: 'var(--color-teal-500)',
    accent: 'var(--color-accent-500)',
    white: '#ffffff',
    neutral: 'var(--color-neutral-500)'
  };
  const s = sizes[size] || sizes.md;
  const c = colors[color] || colors.primary;
  const spinner = /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": label,
    style: {
      display: 'inline-block',
      width: s.dim,
      height: s.dim,
      border: `${s.border} solid currentColor`,
      borderTopColor: 'transparent',
      borderRadius: '50%',
      color: c,
      animation: 'wwdc-spin 0.65s linear infinite',
      flexShrink: 0
    }
  });
  if (overlay) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 'inherit',
        zIndex: 10
      }
    }, spinner);
  }
  return spinner;
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  description,
  variant = 'default',
  action,
  onDismiss,
  visible = true
}) {
  const variants = {
    default: {
      bg: 'var(--color-neutral-900)',
      color: '#fff',
      accent: 'var(--color-neutral-600)'
    },
    success: {
      bg: 'var(--color-success-700)',
      color: '#fff',
      accent: 'var(--color-success-500)'
    },
    error: {
      bg: 'var(--color-error-700)',
      color: '#fff',
      accent: 'var(--color-error-500)'
    },
    warning: {
      bg: '#fff',
      color: 'var(--color-warning-800)',
      accent: 'var(--color-warning-500)'
    },
    info: {
      bg: 'var(--color-primary-700)',
      color: '#fff',
      accent: 'var(--color-primary-400)'
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: '280px',
      maxWidth: '360px',
      padding: 'var(--space-4)',
      backgroundColor: v.bg,
      color: v.color,
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      animation: visible ? 'wwdc-slide-up 250ms var(--ease-spring)' : undefined,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, message && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      fontWeight: '600',
      lineHeight: '1.4',
      color: v.color
    }
  }, message), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontSize: 'var(--text-xs)',
      opacity: 0.8,
      lineHeight: '1.4',
      color: v.color
    }
  }, description), action && /*#__PURE__*/React.createElement("button", {
    onClick: action.onClick,
    style: {
      marginTop: 'var(--space-2)',
      background: 'none',
      border: 'none',
      color: v.color,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: '700',
      cursor: 'pointer',
      padding: 0,
      opacity: 0.9,
      textDecoration: 'underline'
    }
  }, action.label)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: v.color,
      opacity: 0.7,
      padding: 0,
      fontSize: '18px',
      lineHeight: 1,
      flexShrink: 0
    },
    "aria-label": "Close"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  name,
  id,
  disabled = false,
  indeterminate = false,
  error,
  hint,
  size = 'md'
}) {
  const [hover, setHover] = React.useState(false);
  const checkboxId = id || name;
  const s = {
    sm: {
      box: '16px',
      font: '13px'
    },
    md: {
      box: '18px',
      font: '15px'
    },
    lg: {
      box: '22px',
      font: '16px'
    }
  }[size] || {
    box: '18px',
    font: '15px'
  };
  const isChecked = checked !== undefined ? checked : undefined;
  const boxBg = isChecked || indeterminate ? 'var(--color-primary-700)' : '#fff';
  const boxBorder = isChecked || indeterminate ? 'var(--color-primary-700)' : hover ? 'var(--color-primary-400)' : 'var(--color-neutral-300)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      userSelect: 'none'
    },
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flexShrink: 0,
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: checkboxId,
    name: name,
    checked: isChecked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      borderRadius: 'var(--radius-sm)',
      backgroundColor: boxBg,
      border: `2px solid ${boxBorder}`,
      transition: 'background-color 150ms ease, border-color 150ms ease',
      boxShadow: hover && !disabled ? 'var(--shadow-focus)' : 'none'
    }
  }, (isChecked || defaultChecked) && !indeterminate && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 10 8",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4l3 3 5-6",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      backgroundColor: '#fff',
      borderRadius: 1
    }
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.font,
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-neutral-800)',
      lineHeight: '1.5',
      fontWeight: '400'
    }
  }, label)), (error || hint) && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      margin: '0 0 0 calc(' + s.box + ' + var(--space-2))',
      color: error ? 'var(--color-error-600)' : 'var(--color-neutral-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  name,
  id,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  hint,
  iconLeft,
  iconRight,
  size = 'md',
  fullWidth = false
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const hasError = !!error;
  const sizes = {
    sm: {
      height: '34px',
      fontSize: '13px',
      px: '10px',
      iconOff: '10px',
      iconSz: '14px'
    },
    md: {
      height: '40px',
      fontSize: '15px',
      px: '12px',
      iconOff: '12px',
      iconSz: '16px'
    },
    lg: {
      height: '48px',
      fontSize: '16px',
      px: '14px',
      iconOff: '14px',
      iconSz: '18px'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = hasError ? 'var(--color-error-500)' : focused ? 'var(--color-primary-500)' : 'var(--color-neutral-300)';
  const shadow = hasError ? focused ? 'var(--shadow-focus-error)' : 'none' : focused ? 'var(--shadow-focus)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1-5)',
      width: fullWidth ? '100%' : undefined
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: '600',
      color: hasError ? 'var(--color-error-600)' : 'var(--color-neutral-700)',
      display: 'flex',
      gap: 'var(--space-1)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-error-500)'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: s.iconOff,
      display: 'flex',
      alignItems: 'center',
      color: 'var(--color-neutral-400)',
      pointerEvents: 'none',
      fontSize: s.iconSz
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    name: name,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    onFocus: e => {
      setFocused(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      onBlur && onBlur(e);
    },
    style: {
      width: '100%',
      height: s.height,
      boxSizing: 'border-box',
      padding: `0 ${iconRight ? `calc(${s.iconOff} + ${s.iconSz} + 8px)` : s.px} 0 ${iconLeft ? `calc(${s.iconOff} + ${s.iconSz} + 8px)` : s.px}`,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-neutral-900)',
      backgroundColor: disabled ? 'var(--color-neutral-100)' : '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: shadow,
      outline: 'none',
      transition: 'border-color 150ms ease, box-shadow 150ms ease',
      cursor: disabled ? 'not-allowed' : 'text',
      opacity: disabled ? 0.7 : 1
    }
  }), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: s.iconOff,
      display: 'flex',
      alignItems: 'center',
      color: 'var(--color-neutral-400)',
      pointerEvents: 'none',
      fontSize: s.iconSz
    }
  }, iconRight)), (error || hint) && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      margin: 0,
      color: error ? 'var(--color-error-600)' : 'var(--color-neutral-500)',
      lineHeight: 'var(--leading-normal)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  value,
  checked,
  onChange,
  name,
  id,
  disabled = false,
  hint,
  size = 'md'
}) {
  const [hover, setHover] = React.useState(false);
  const radioId = id || (name && value ? `${name}-${value}` : undefined);
  const s = {
    sm: {
      box: '16px',
      dot: '6px',
      font: '13px'
    },
    md: {
      box: '18px',
      dot: '7px',
      font: '15px'
    },
    lg: {
      box: '22px',
      dot: '9px',
      font: '16px'
    }
  }[size] || {
    box: '18px',
    dot: '7px',
    font: '15px'
  };
  const borderColor = checked ? 'var(--color-primary-700)' : hover ? 'var(--color-primary-400)' : 'var(--color-neutral-300)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      userSelect: 'none'
    },
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flexShrink: 0,
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: radioId,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      borderRadius: '50%',
      backgroundColor: '#fff',
      border: `2px solid ${borderColor}`,
      transition: 'border-color 150ms ease',
      boxShadow: hover && !disabled ? 'var(--shadow-focus)' : 'none'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dot,
      height: s.dot,
      borderRadius: '50%',
      backgroundColor: 'var(--color-primary-700)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.font,
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-neutral-800)',
      lineHeight: '1.5'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-neutral-500)'
    }
  }, hint)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  name,
  id,
  options = [],
  disabled = false,
  required = false,
  error,
  hint,
  size = 'md',
  fullWidth = false
}) {
  const [focused, setFocused] = React.useState(false);
  const selectId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const hasError = !!error;
  const sizes = {
    sm: {
      height: '34px',
      fontSize: '13px',
      px: '10px'
    },
    md: {
      height: '40px',
      fontSize: '15px',
      px: '12px'
    },
    lg: {
      height: '48px',
      fontSize: '16px',
      px: '14px'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = hasError ? 'var(--color-error-500)' : focused ? 'var(--color-primary-500)' : 'var(--color-neutral-300)';
  const shadow = focused ? hasError ? 'var(--shadow-focus-error)' : 'var(--shadow-focus)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1-5)',
      width: fullWidth ? '100%' : undefined
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: '600',
      color: hasError ? 'var(--color-error-600)' : 'var(--color-neutral-700)',
      display: 'flex',
      gap: 'var(--space-1)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-error-500)'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: selectId,
    name: name,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: e => {
      setFocused(false);
      onBlur && onBlur(e);
    },
    style: {
      width: fullWidth ? '100%' : undefined,
      height: s.height,
      boxSizing: 'border-box',
      padding: `0 36px 0 ${s.px}`,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-neutral-900)',
      appearance: 'none',
      backgroundColor: disabled ? 'var(--color-neutral-100)' : '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: shadow,
      outline: 'none',
      transition: 'border-color 150ms ease, box-shadow 150ms ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.7 : 1
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(opt => {
    const v = typeof opt === 'string' ? opt : opt.value;
    const l = typeof opt === 'string' ? opt : opt.label || opt.value;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      disabled: opt.disabled
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '12px',
      pointerEvents: 'none',
      color: 'var(--color-neutral-500)',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), (error || hint) && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      margin: 0,
      color: error ? 'var(--color-error-600)' : 'var(--color-neutral-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  labelPosition = 'right',
  checked,
  defaultChecked,
  onChange,
  name,
  id,
  disabled = false,
  hint,
  size = 'md'
}) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internalChecked;
  const sizes = {
    sm: {
      track: {
        w: '32px',
        h: '18px'
      },
      thumb: '14px',
      thumbOff: '2px',
      thumbOn: '16px',
      font: '13px'
    },
    md: {
      track: {
        w: '40px',
        h: '22px'
      },
      thumb: '18px',
      thumbOff: '2px',
      thumbOn: '20px',
      font: '15px'
    },
    lg: {
      track: {
        w: '48px',
        h: '26px'
      },
      thumb: '22px',
      thumbOff: '2px',
      thumbOn: '24px',
      font: '16px'
    }
  };
  const s = sizes[size] || sizes.md;
  const handleChange = e => {
    if (!isControlled) setInternalChecked(e.target.checked);
    onChange && onChange(e);
  };
  const track = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      width: s.track.w,
      height: s.track.h,
      borderRadius: 'var(--radius-full)',
      backgroundColor: isOn ? 'var(--color-primary-700)' : 'var(--color-neutral-300)',
      transition: 'background-color 200ms ease',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: isOn ? s.thumbOn : s.thumbOff,
      width: s.thumb,
      height: s.thumb,
      borderRadius: '50%',
      backgroundColor: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
      transition: 'left 200ms var(--ease-spring)'
    }
  }));
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    name: name,
    id: id,
    checked: isOn,
    onChange: handleChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), labelPosition === 'left' && label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.font,
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-neutral-800)'
    }
  }, label), track, labelPosition === 'right' && label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.font,
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-neutral-800)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  rows = 4,
  disabled = false,
  readOnly = false,
  required = false,
  resize = 'vertical',
  error,
  hint,
  fullWidth = false
}) {
  const [focused, setFocused] = React.useState(false);
  const textareaId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const hasError = !!error;
  const borderColor = hasError ? 'var(--color-error-500)' : focused ? 'var(--color-primary-500)' : 'var(--color-neutral-300)';
  const shadow = hasError ? focused ? 'var(--shadow-focus-error)' : 'none' : focused ? 'var(--shadow-focus)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1-5)',
      width: fullWidth ? '100%' : undefined
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: textareaId,
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: '600',
      color: hasError ? 'var(--color-error-600)' : 'var(--color-neutral-700)',
      display: 'flex',
      gap: 'var(--space-1)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-error-500)'
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    id: textareaId,
    name: name,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    onFocus: e => {
      setFocused(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      onBlur && onBlur(e);
    },
    style: {
      width: fullWidth ? '100%' : undefined,
      boxSizing: 'border-box',
      padding: '10px 12px',
      fontSize: '15px',
      fontFamily: 'var(--font-sans)',
      lineHeight: '1.6',
      color: 'var(--color-neutral-900)',
      backgroundColor: disabled ? 'var(--color-neutral-100)' : '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: shadow,
      outline: 'none',
      transition: 'border-color 150ms ease, box-shadow 150ms ease',
      resize: resize,
      cursor: disabled ? 'not-allowed' : 'text',
      opacity: disabled ? 0.7 : 1
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      margin: 0,
      color: error ? 'var(--color-error-600)' : 'var(--color-neutral-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  separator,
  maxItems,
  size = 'md'
}) {
  const sizes = {
    sm: {
      fontSize: '12px',
      gap: 'var(--space-1-5)'
    },
    md: {
      fontSize: '14px',
      gap: 'var(--space-2)'
    },
    lg: {
      fontSize: '15px',
      gap: 'var(--space-2-5)'
    }
  };
  const s = sizes[size] || sizes.md;
  const displayItems = maxItems && items.length > maxItems ? [items[0], {
    label: '…',
    href: undefined
  }, ...items.slice(-(maxItems - 1))] : items;
  const defaultSep = /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 3l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: s.gap,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize
    }
  }, displayItems.map((item, i) => {
    const isLast = i === displayItems.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: s.gap
      }
    }, item.href && !isLast ? /*#__PURE__*/React.createElement(BreadcrumbLink, {
      label: item.label,
      href: item.href
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: isLast ? 'var(--color-neutral-900)' : 'var(--color-neutral-500)',
        fontWeight: isLast ? '600' : '400'
      }
    }, item.label), !isLast && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-neutral-400)',
        display: 'flex',
        alignItems: 'center'
      }
    }, separator || defaultSep));
  })));
}
function BreadcrumbLink({
  label,
  href
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: hover ? 'var(--color-primary-700)' : 'var(--color-neutral-500)',
      textDecoration: 'none',
      transition: 'color 150ms ease'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, label);
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  logo,
  logoText = 'WWDC',
  links = [],
  cta,
  sticky = false,
  transparent = false,
  mobileOpen: externalMobileOpen,
  onMobileToggle
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const isOpen = externalMobileOpen !== undefined ? externalMobileOpen : mobileOpen;
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const bg = transparent && !scrolled && !isOpen ? 'transparent' : '#fff';
  const shadow = scrolled || !transparent ? 'var(--shadow-sm)' : 'none';
  const borderBottom = scrolled || !transparent ? `1px solid var(--color-neutral-200)` : 'none';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 100,
      backgroundColor: bg,
      boxShadow: shadow,
      borderBottom,
      transition: 'background-color 200ms ease, box-shadow 200ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--page-padding-x)',
      display: 'flex',
      alignItems: 'center',
      height: '66px',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, logo || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      fontWeight: '800',
      color: 'var(--color-primary-700)',
      letterSpacing: '-0.03em'
    }
  }, logoText)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      flex: 1
    }
  }, links.map((link, i) => /*#__PURE__*/React.createElement(NavLink, {
    key: i,
    link: link
  }))), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexShrink: 0
    }
  }, cta), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMobileOpen(o => !o);
      onMobileToggle && onMobileToggle(!isOpen);
    },
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 'var(--space-2)',
      color: 'var(--color-neutral-700)'
    },
    "aria-label": "Toggle menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none"
  }, isOpen ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l14 14M18 4L4 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h16M3 11h16M3 16h16",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))))));
}
function NavLink({
  link
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: link.href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: 'var(--space-2) var(--space-3)',
      fontSize: '15px',
      fontFamily: 'var(--font-sans)',
      fontWeight: '500',
      color: hover ? 'var(--color-primary-700)' : 'var(--color-neutral-700)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-md)',
      backgroundColor: hover ? 'var(--color-primary-50)' : 'transparent',
      transition: 'color 150ms ease, background-color 150ms ease',
      whiteSpace: 'nowrap'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, link.label, link.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: '700',
      padding: '2px 5px',
      backgroundColor: 'var(--color-accent-500)',
      color: '#fff',
      borderRadius: 'var(--radius-full)'
    }
  }, link.badge));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  activeTab,
  defaultTab,
  onChange,
  variant = 'underline',
  size = 'md'
}) {
  const [active, setActive] = React.useState(defaultTab || tabs[0] && tabs[0].id);
  const current = activeTab !== undefined ? activeTab : active;
  const handleChange = id => {
    setActive(id);
    onChange && onChange(id);
  };
  const sizes = {
    sm: {
      fontSize: '13px',
      padding: '6px 12px',
      height: '36px'
    },
    md: {
      fontSize: '15px',
      padding: '8px 16px',
      height: '42px'
    },
    lg: {
      fontSize: '16px',
      padding: '10px 20px',
      height: '48px'
    }
  };
  const s = sizes[size] || sizes.md;
  const activeTab_ = tabs.find(t => t.id === current);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: variant === 'pill' ? 'var(--space-1)' : '0',
      borderBottom: variant === 'underline' ? '2px solid var(--color-neutral-200)' : 'none',
      backgroundColor: variant === 'pill' ? 'var(--color-neutral-100)' : 'transparent',
      borderRadius: variant === 'pill' ? 'var(--radius-lg)' : undefined,
      padding: variant === 'pill' ? 'var(--space-1)' : '0'
    }
  }, tabs.map(tab => {
    const isActive = tab.id === current;
    return /*#__PURE__*/React.createElement(TabButton, {
      key: tab.id,
      tab: tab,
      isActive: isActive,
      variant: variant,
      size: s,
      onClick: () => !tab.disabled && handleChange(tab.id)
    });
  })), activeTab_ && activeTab_.content && /*#__PURE__*/React.createElement("div", {
    key: current,
    style: {
      animation: 'wwdc-fade-in 200ms ease',
      paddingTop: 'var(--space-5)'
    }
  }, activeTab_.content));
}
function TabButton({
  tab,
  isActive,
  variant,
  size,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const underlineStyle = {
    padding: size.padding,
    height: size.height,
    fontSize: size.fontSize,
    fontWeight: isActive ? '600' : '500',
    color: isActive ? 'var(--color-primary-700)' : hover ? 'var(--color-neutral-800)' : 'var(--color-neutral-500)',
    background: 'none',
    border: 'none',
    borderBottom: isActive ? '2px solid var(--color-primary-700)' : '2px solid transparent',
    marginBottom: '-2px',
    cursor: tab.disabled ? 'not-allowed' : 'pointer',
    opacity: tab.disabled ? 0.5 : 1,
    transition: 'color 150ms ease'
  };
  const pillStyle = {
    padding: size.padding,
    height: size.height,
    fontSize: size.fontSize,
    fontWeight: isActive ? '600' : '500',
    color: isActive ? '#fff' : hover ? 'var(--color-neutral-800)' : 'var(--color-neutral-600)',
    backgroundColor: isActive ? 'var(--color-primary-700)' : hover ? 'var(--color-neutral-200)' : 'transparent',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: tab.disabled ? 'not-allowed' : 'pointer',
    opacity: tab.disabled ? 0.5 : 1,
    transition: 'color 150ms ease, background-color 150ms ease'
  };
  const style = variant === 'pill' ? pillStyle : underlineStyle;
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...style,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box'
    },
    onClick: onClick,
    disabled: tab.disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, tab.icon, tab.label, tab.count !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: '600',
      backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : 'var(--color-neutral-200)',
      color: isActive ? '#fff' : 'var(--color-neutral-600)',
      borderRadius: 'var(--radius-full)',
      padding: '1px 6px'
    }
  }, tab.count));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
