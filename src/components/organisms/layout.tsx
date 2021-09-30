import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ title, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout
