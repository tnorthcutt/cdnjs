import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import { isFragment } from 'react-is';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from '../utils/capitalize';
import { fade } from '../styles/colorManipulator';
import withStyles from '../styles/withStyles';
import Button from '../Button'; // Force a side effect so we don't have any override priority issue.
// eslint-disable-next-line no-unused-expressions

Button.styles;
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    borderRadius: theme.shape.borderRadius
  },

  /* Styles applied to the root element if `variant="contained"`. */
  contained: {
    boxShadow: theme.shadows[2]
  },

  /* Pseudo-class applied to child elements if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: 'column'
  },

  /* Styles applied to the children. */
  grouped: {
    minWidth: 40
  },

  /* Styles applied to the children if `orientation="horizontal"`. */
  groupedHorizontal: {
    '&:not(:first-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    '&:not(:last-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  },

  /* Styles applied to the children if `orientation="vertical"`. */
  groupedVertical: {
    '&:not(:first-child)': {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0
    },
    '&:not(:last-child)': {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    }
  },

  /* Styles applied to the children if `variant="text"`. */
  groupedText: {},

  /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
  groupedTextHorizontal: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
    }
  },

  /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
  groupedTextVertical: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
    }
  },

  /* Styles applied to the children if `variant="text"` and `color="primary"`. */
  groupedTextPrimary: {
    '&:not(:last-child)': {
      borderColor: fade(theme.palette.primary.main, 0.5)
    }
  },

  /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
  groupedTextSecondary: {
    '&:not(:last-child)': {
      borderColor: fade(theme.palette.secondary.main, 0.5)
    }
  },

  /* Styles applied to the children if `variant="outlined"`. */
  groupedOutlined: {},

  /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
  groupedOutlinedHorizontal: {
    '&:not(:first-child)': {
      marginLeft: -1
    },
    '&:not(:last-child)': {
      borderRightColor: 'transparent'
    }
  },

  /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
  groupedOutlinedVertical: {
    '&:not(:first-child)': {
      marginTop: -1
    },
    '&:not(:last-child)': {
      borderBottomColor: 'transparent'
    }
  },

  /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
  groupedOutlinedPrimary: {
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },

  /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
  groupedOutlinedSecondary: {
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },

  /* Styles applied to the children if `variant="contained"`. */
  groupedContained: {
    boxShadow: 'none'
  },

  /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
  groupedContainedHorizontal: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.grey[400]}`,
      '&$disabled': {
        borderRight: `1px solid ${theme.palette.action.disabled}`
      }
    }
  },

  /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
  groupedContainedVertical: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
      '&$disabled': {
        borderBottom: `1px solid ${theme.palette.action.disabled}`
      }
    }
  },

  /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
  groupedContainedPrimary: {
    '&:not(:last-child)': {
      borderColor: theme.palette.primary.dark
    }
  },

  /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
  groupedContainedSecondary: {
    '&:not(:last-child)': {
      borderColor: theme.palette.secondary.dark
    }
  }
});
const ButtonGroup = React.forwardRef(function ButtonGroup(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'default',
    component: Component = 'div',
    disabled = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    orientation = 'horizontal',
    size = 'medium',
    variant = 'outlined'
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]);

  const buttonClassName = clsx(classes.grouped, classes[`grouped${capitalize(orientation)}`], classes[`grouped${capitalize(variant)}`], classes[`grouped${capitalize(variant)}${capitalize(orientation)}`], classes[`grouped${capitalize(variant)}${color !== 'default' ? capitalize(color) : ''}`], disabled && classes.disabled);
  return /*#__PURE__*/React.createElement(Component, _extends({
    role: "group",
    className: clsx(classes.root, className, fullWidth && classes.fullWidth, variant === 'contained' && classes.contained, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(["Material-UI: the ButtonGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return React.cloneElement(child, {
      className: clsx(buttonClassName, child.props.className),
      disabled: child.props.disabled || disabled,
      color: child.props.color || color,
      disableFocusRipple,
      disableRipple,
      fullWidth,
      size: child.props.size || size,
      variant: child.props.variant || variant
    });
  }));
});
process.env.NODE_ENV !== "production" ? ButtonGroup.propTypes = {
  /**
   * The content of the button group.
   */
  children: PropTypes.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the buttons will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,

  /**
   * If `true`, the button ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * If `true`, the buttons will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The group orientation.
   */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
} : void 0;
export default withStyles(styles, {
  name: 'MuiButtonGroup'
})(ButtonGroup);