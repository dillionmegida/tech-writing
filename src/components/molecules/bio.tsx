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
    <div className="flex mb-10 py-4">
      <StaticImage
        className="mr-5 mb-10 w-20 rounded-full"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p className="flex-1">
          Created by <strong>{author.name}</strong>, {author?.summary || null} I
          created this space to share more about technical writing--getting
          started, getting topics, e.t.c--based on my experience and all I've
          learned in this career journey.
          <br />
          <br />
          Check out{' '}
          <Link className="text-primary underline" to={links.BLOG}>
            the blog
          </Link>
          .<br />
          <br />
          <a
            className="text-primary underline"
            href={`https://twitter.com/${social?.twitter || ``}`}
          >
            You can follow me on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
