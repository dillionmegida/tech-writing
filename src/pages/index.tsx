import * as React from 'react'

import Bio from '../components/molecules/bio'
import Layout from '@/organisms/layout'
import Seo from '@/atoms/seo'
import { graphql } from 'gatsby'
import Heading from '@/atoms/heading'

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout>
      <Seo link="/" />
      <div className="container">
        <Heading className="mb-5" size="xxl" level={1}>
          {siteTitle}
        </Heading>
        <Bio />
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
