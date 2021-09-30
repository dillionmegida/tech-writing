import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import links from '@/constants/links'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>, {author?.summary || null}
          <br />
          <br />
          Check out <Link to={links.BLOG}>the blog</Link>.<br />
          <br />
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You can follow me on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
