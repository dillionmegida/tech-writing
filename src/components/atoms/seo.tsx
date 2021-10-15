import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { DOMAIN, INTRODUCTION_COVER, LOGO_PATH } from '@/constants/site'

type Props = {
  description?: string
  lang?: string
  title?: string
  imageCard?: string
}

const Seo = ({
  description,
  lang = 'en',
  title,
  imageCard = DOMAIN + INTRODUCTION_COVER,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const defaultImageCard = DOMAIN + LOGO_PATH

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageCard || defaultImageCard,
        },
        {
          name: `twitter:card`,
          content: imageCard ? `summary_large_image` : `summary`,
        },
        {
          name: `twitter:image`,
          content: imageCard || defaultImageCard,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <link rel="canonical" href="http://tech-writing.netlify.app" />
    </Helmet>
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo
