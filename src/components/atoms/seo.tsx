import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import {
  DOMAIN,
  INTRODUCTION_COVER,
  LOGO_PATH,
  MONETIZATION_HASH,
} from '@/constants/site'

type Props = {
  description?: string
  lang?: string
  title?: string
  imageCard?: string
  link: string
}

const Seo = ({
  description,
  lang = 'en',
  title,
  imageCard = DOMAIN + INTRODUCTION_COVER,
  link: _link,
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

  const link = DOMAIN + _link

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
        { name: 'author', content: 'Dillion Megida' },
        { name: 'robots', content: 'index, follow' },
        { name: 'referrer', content: 'origin-when-crossorigin' },

        // monetization
        { name: 'monetization', content: MONETIZATION_HASH },

        // OG tags
        { property: `og:url`, content: link },
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
          content: `article`,
        },
        {
          property: `og:image`,
          content: imageCard || defaultImageCard,
        },

        // Twitter tags
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
          name: `twitter:site`,
          content: '@' + (site.siteMetadata?.social?.twitter || ``),
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
      <link rel="canonical" href={link} />
    </Helmet>
  )
}

export default Seo
