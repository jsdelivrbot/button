import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends React.Component {
  render () {
    const {type, small, large, children, disabled} = this.props
    const btnClass = classNames({
      'or-btn': true,
      [`or-btn-${type}`]: true,
      'or-btn-large': large,
      'or-btn-small': small,
      disabled
    })
    return (
      <div className={btnClass} onClick={this.handleClick}>
        {children}
      </div>
    )
  }

  handleClick = e => {
    e.preventDefault()
    if (!this.props.disabled) {
      this.props.onClick()
    }
  }
}

Button.propTypes = {
  type: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.children
}

export default Button
