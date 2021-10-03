import links from '@/constants/links'
import { Link } from 'gatsby'
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import classNames from 'classnames'

const navLinks: { label: string; link: string }[] = [
  {
    label: 'Blog',
    link: links.BLOG,
  },
  { label: 'Roadmap', link: links.ROADMAP },
]

export default function Header() {
  return (
    <header>
      <div className="py-4 container flex justify-between items-center  border-b border-solid border-gray-100">
        <Link to="/">
          <StaticImage
            className="w-20 rounded-full"
            layout="fixed"
            formats={['auto', 'webp', 'avif']}
            src="../../images/logo.png"
            width={40}
            height={40}
            quality={95}
            alt="Profile picture"
          />
        </Link>
        <nav>
          <ul className="flex items-center">
            {navLinks.map(({ label, link }, i) => (
              <li
                className={classNames([i !== 0 && 'ml-5'])}
                key={`navlink-${label}`}
              >
                <Link
                  partiallyActive
                  to={link}
                  activeClassName="text-primary font-bold"
                >
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
