import React from 'react'
import classnames from 'classnames'

export const Hero = ({ header: Header, children, className, ...otherProps }) => {
  return (
    <section className={classnames('hero', className)} {...otherProps}>
      {Header && (
        <section className="hero-head">
          <Header />
        </section>
      )}
      <div className="hero-body">{children}</div>
    </section>
  )
}
export const Section = ({ children, className }) => {
  return <section className={classnames('section', className)}>{children}</section>
}

export const Container = ({ children, className }) => {
  return <div className={classnames('container', className)}>{children}</div>
}

export const Cols = ({ children, className }) => {
  return <div className={classnames('columns', className)}>{children}</div>
}

export const Col = ({ children, className, ...otherProps }) => {
  return (
    <div className={classnames('column', className)} {...otherProps}>
      {children}
    </div>
  )
}
