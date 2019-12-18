import React from 'react'

const Button = ({ text, children, secondary, ...props }) => {
  const style = {
    backgroundColor: 'white',
    color: secondary ? 'purple' : 'green',
    border: `solid 1px ${secondary ? 'purple' : 'green'}`,
    borderRadius: '7px'
  }
  return (
    <button style={style} {...props}>
      {children}
    </button>
  )
}

export default Button
