import React from 'react'

const Button = ({children,className,textOnly,...props}) => {
    const cssClasses = textOnly ? `text-button ${className}`  : `button ${className}`
  return (
    <button className={cssClasses} {...props}>{children}</button>
  )
}

export default Button