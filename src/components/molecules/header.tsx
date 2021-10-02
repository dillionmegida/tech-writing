import links from '@/constants/links'
import { Link } from 'gatsby'
import * as React from 'react'

const navLinks: { label: string; link: string }[] = [
  {
    label: 'Blog',
    link: links.BLOG,
  },
]

export default function Header() {
  return (
    <header>
      <div className="py-4 container flex justify-between items-center  border-b border-solid border-gray-100">
        <Link to="/">TW</Link>
        <nav>
          <ul>
            {navLinks.map(({ label, link }) => (
              <li key={`navlink-${label}`}>
                <Link to={link} activeClassName="text-primary font-bold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
