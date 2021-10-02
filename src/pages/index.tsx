import * as React from 'react'

import Bio from '../components/molecules/bio'
import Layout from '@/organisms/layout'
import Seo from '@/atoms/seo'
import { graphql, Link } from 'gatsby'

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout>
      <Seo title="All posts" />
      <div className="container">
        <h1 className="text-6xl tracking-tight font-bold text-primary">
          <Link to="/">{siteTitle}</Link>
        </h1>
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
