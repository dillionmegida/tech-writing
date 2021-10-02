import * as React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container text-right py-4 border-t border-solid border-gray-100">
        © {new Date().getFullYear()}
      </div>
    </footer>
  )
}
