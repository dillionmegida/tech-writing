import { Link } from 'gatsby'
import * as React from 'react'
import { PostHalf } from 'src/interfaces/Post'

type Props = {
  post: PostHalf
}

export default function BlogCard({ post }: Props) {
  const {
    frontmatter: { title, description },
    fields: { slug },
  } = post

  const postLink = `/blog${slug}`

  return (
    <li>
      <Link
        className="block py-6 border-b border-solid border-gray-100 mb-6"
        to={postLink}
      >
        <article>
          <header>
            <h2 className="text-secondary font-medium text-2xl">{title}</h2>
          </header>
          <section></section>
        </article>
      </Link>
    </li>
  )
}
