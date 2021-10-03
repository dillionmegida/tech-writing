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
            const title = post.frontmatter.title || post.fields.slug

            return (
              <BlogCard post={post} key={post.fields.slug} />
              //     <article
              //       className="post-list-item"
              //       itemScope
              //       itemType="http://schema.org/Article"
              //     >
              //       <header>
              //         <h2>
              //           <Link to={post.fields.slug} itemProp="url">
              //             <span itemProp="headline">{title}</span>
              //           </Link>
              //         </h2>
              //         <small>{post.frontmatter.date}</small>
              //       </header>
              //       <section>
              //         <p
              //           dangerouslySetInnerHTML={{
              //             __html: post.frontmatter.description || post.excerpt,
              //           }}
              //           itemProp="description"
              //         />
              //       </section>
              //     </article>
              //   </BlogCard>
            )
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
      }
    }
  }
`
