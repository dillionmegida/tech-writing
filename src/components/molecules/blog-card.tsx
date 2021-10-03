import SeparateDot from '@/atoms/separate-dot'
import { plularize } from '@/utils/string'
import { Link } from 'gatsby'
import * as React from 'react'
import { PostHalf } from 'src/interfaces/Post'

type Props = {
  post: PostHalf
}

export default function BlogCard({ post }: Props) {
  const {
    frontmatter: { title, description, date },
    fields: { slug },
    timeToRead,
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
            <h2 className="text-secondary font-semibold text-2xl mb-2">
              {title}
            </h2>
            <p className="text-xs text-gray-400">
              <SeparateDot
                items={[
                  <span>
                    {timeToRead} {plularize('min', timeToRead)} read
                  </span>,
                  <span>{date}</span>,
                ]}
              />
            </p>
            <p className="text-gray-600 mt-3 text-sm">{description}</p>
          </header>
          <section></section>
        </article>
      </Link>
    </li>
  )
}
