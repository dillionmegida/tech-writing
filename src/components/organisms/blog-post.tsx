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
import classNames from 'classnames'

const Container = styled.div``

const Content = styled.div`
  h2 {
    font-weight: 600;
    font-size: 26px;
    color: ${colors.primary.DEFAULT};
    margin-top: 40px;
    margin-bottom: 15px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: ${colors.primary.DEFAULT};
    margin-top: 30px;
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

  blockquote {
    padding: 15px;
    border: 1px solid ${colors.gray[200]};
    margin-bottom: 1em;
    margin-top: 1em;

    p {
      margin-bottom: 0;
    }
  }

  hr {
    margin: 30px 0;
  }

  ol {
    list-style: decimal;
  }

  ul {
    margin-bottom: 2em;
    margin-top: 1em;

    li {
      position: relative;
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

  ol,
  ul {
    padding-left: 15px;
    li {
      padding-left: 15px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  const post: PostFull = data.markdownRemark
  const { previous, next } = data
  const {
    frontmatter: { title, description, date, cover },
    excerpt,
    timeToRead,
    fields: { slug },
  } = post

  const coverExists = cover && cover.length

  return (
    <Layout>
      <Seo
        link={`/blog${slug}`}
        title={title}
        description={description || excerpt}
        imageCard={coverExists ? `/assets/post-cover/${cover}` : null}
      />
      <Container className="container">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header
            className={classNames('border-solid border-grey-100 pb-5', [
              !coverExists && 'border-b',
            ])}
          >
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
            {coverExists && (
              <div className="border border-primary-100 my-4">
                <img src={`/assets/post-cover/${cover}`} alt={title} />
              </div>
            )}
          </header>
          <section className="py-5 text-gray-800 border-solid border-grey-100 border-b">
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
        cover
      }
      timeToRead
      fields {
        slug
      }
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
