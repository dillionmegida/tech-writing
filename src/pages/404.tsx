import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/organisms/layout'
import Seo from '@/atoms/seo'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <Seo title="404: Not Found" />
      <div className="container">
        <h1 className="text-5xl font-extrabold text-primary">404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link className="block mt-6 text-primary underline" to="/">
          Go to Homepage
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
