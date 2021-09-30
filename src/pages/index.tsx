import * as React from 'react'

import Bio from '../components/molecules/bio'
import Layout from '@/organisms/layout'
import Seo from '@/atoms/seo'
import { graphql } from 'gatsby'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
