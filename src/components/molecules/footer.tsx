import * as React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">© {new Date().getFullYear()}</div>
    </footer>
  )
}
