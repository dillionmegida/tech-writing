import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from './layout'
import Seo from '@/atoms/seo'
import { PostFull } from 'src/interfaces/Post'
import Heading from '@/atoms/heading'
import styled from 'styled-components'
import colors from '@/styles/colors'
import SeparateDot from '@/atoms/separate-dot'
import { plularize } from '@/utils/string'

const Container = styled.div``

const Content = styled.div`
  h2 {
    font-weight: 600;
    font-size: 24px;
    color: ${colors.primary.DEFAULT};
    margin-top: 40px;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 1em;
    line-height: 30px;
  }

  a {
    color: ${colors.primary.DEFAULT};
    text-decoration: underline;
  }

  ul {
    margin-bottom: 1em;
    margin-top: -0.8em;

    li {
      padding-left: 15px;
      position: relative;

      &:not(:last-child) {
        margin-bottom: 5px;
      }

      &:before {
        content: '';
        top: 10px;
        position: absolute;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${colors.gray[500]};
      }
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  const post: PostFull = data.markdownRemark
  const { previous, next } = data
  const {
    frontmatter: { title, description, date },
    excerpt,
    timeToRead,
    fields: { slug },
  } = post

  return (
    <Layout>
      <Seo
        link={`/blog${slug}`}
        title={title}
        description={description || excerpt}
      />
      <Container className="container">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="border-b border-solid border-grey-100 pb-5">
            <Heading level={1} className="mb-2">
              {title}
            </Heading>
            <p className="text-gray-500">
              <SeparateDot
                items={[
                  <span>
                    {timeToRead} {plularize('min', timeToRead)} read
                  </span>,
                  <span>{date}</span>,
                ]}
              />
            </p>
          </header>
          <section className="py-5 text-gray-800 border-b border-solid border-grey-100">
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
        </article>
        <nav className="mt-10 py-5">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 justify-between">
            <li className="text-left">
              {previous && (
                <Link
                  className="hover:text-primary"
                  to={`/blog${previous.fields.slug}`}
                  rel="prev"
                >
                  <span className="text-xs text-gray-400">Previous post</span>
                  <div className="text-sm">
                    <span className="text-primary">←</span>{' '}
                    {previous.frontmatter.title}
                  </div>
                </Link>
              )}
            </li>
            <li className="text-right">
              {next && (
                <Link
                  className="hover:text-primary"
                  to={`/blog${next.fields.slug}`}
                  rel="next"
                >
                  <span className="text-xs text-gray-400">Next post</span>
                  <div className="text-sm">
                    {next.frontmatter.title}{' '}
                    <span className="text-primary">→</span>
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      timeToRead
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
