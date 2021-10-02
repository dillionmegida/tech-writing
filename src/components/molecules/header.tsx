import links from '@/constants/links'
import { Link } from 'gatsby'
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


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
        {/* <nav>
          <ul>
            {navLinks.map(({ label, link }) => (
              <li key={`navlink-${label}`}>
                <Link to={link} activeClassName="text-primary font-bold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </header>
  )
}
