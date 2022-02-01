import Heading from '@/atoms/heading'
import Seo from '@/atoms/seo'
import links from '@/constants/links'
import Layout from '@/organisms/layout'
import { Link } from 'gatsby'
import * as React from 'react'

const POSTS = [
  {
    title: 'Introduction',
    link: links.POST.INTRODUCTION,
  },
  {
    title: 'Benefits of Technical Writing',
    link: links.POST.BENEFITS,
  },
  {
    title: 'Getting Started with Technical Writing',
    link: links.POST.GETTING_STARTED,
  },
  {
    title: 'Getting Technical Writing Topics',
    link: links.POST.WRITING_TOPICS,
  },
  {
    title: 'Platforms to write paid articles',
    link: links.POST.PAID_ARTICLES_PLATFORMS,
  },
  {
    title: 'Cover Letter Template for Writing jobs',
    link: links.POST.COVER_LETTER_TEMPLATE,
  },
]

export default function Roadmap() {
  return (
    <Layout>
      <Seo
        title="Roadmap"
        description="Order in which to read the articles"
        link="/roadmap"
      />
      <div className="container">
        <Heading level={1}>Roadmap</Heading>
        <p className="mt-3">
          This roadmap contains the order in which I'd recommend you to read the
          articles.
        </p>
        <ol className="mt-5 list-decimal  pl-5">
          {POSTS.map(({ title, link }) => (
            <li className="mb-5" key={title}>
              <Link className="text-secondary underline" to={link}>
                {title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}
