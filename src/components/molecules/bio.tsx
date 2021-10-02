import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

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
    <div className="flex flex-wrap sm:flex-nowrap mb-10 py-4">
      <StaticImage
        className="mr-5 mb-2 w-20 rounded-full"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p className="sm:flex-1 w-full leading-7">
          Created by <strong>{author.name}</strong>, {author?.summary || null} I
          created this space to share more about technical writing--getting
          started, getting topics, getting jobs, e.t.c--based on my experience
          and all I've learned in this writing journey.
          <br />
          <br />
          I'm a Software Engineer, Developer Advocate and Content Creator who
          loves creating different contents on things I learn and work with in
          Tech. I currently write on{' '}
          {[
            { link: 'https://dillionmegida.com', label: 'my website' },
            {
              link: 'https://blog.logrocket.com/author/dillion-megida/',
              label: 'LogRocket',
            },
            {
              link: 'https://www.freecodecamp.org/news/author/dillionmegida/',
              label: 'FreeCodeCamp',
            },
            {
              link: 'https://www.freecodecamp.org/news/author/dillionmegida/',
              label: 'Vonage',
            },
          ].map(({ link, label }) => (
            <>
              <a className="text-primary underline" href={link} key={link}>
                {label}
              </a>
              ,{' '}
            </>
          ))}{' '}
          with some articles on Strapi, Egghead and few other platforms. I make
          money from writing and I want to share how I got into all these things
          for free, with you, here.
          <br />
          <br />
          If you want to be notified when I'm done building this platform with
          some resources, kindly fill this form:{' '}
          <a
            className="text-primary underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8H8-REKoEk0uX_yzk2XRg96Cq8iSqGQVN32o_5QD2vQDL4w/viewform"
          >
            Interest Form
          </a>
          <br />
          <br />
          {/* Check out{' '}
          <Link className="text-primary underline" to={links.BLOG}>
            the blog
          </Link>
          .<br />
          <br /> */}
          You can also{' '}
          <a
            className="text-primary underline"
            href={`https://twitter.com/${social?.twitter || ``}`}
          >
            follow me on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
