import * as React from 'react'

import Seo from '@/atoms/seo'
import Layout from '@/organisms/layout'
import { graphql, Link } from 'gatsby'
import BlogCard from '@/molecules/blog-card'
import { PostHalf } from 'src/interfaces/Post'

export default function BlogIndex({ data }) {
  const posts: PostHalf[] = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title="All posts" />
      <div className="container">
        <h1 className="text-5xl tracking-tight font-bold text-primary">Blog</h1>
        <ul className="mt-6">
          {posts.map(post => {
            return <BlogCard post={post} key={post.fields.slug} />
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        timeToRead
      }
    }
  }
`
