export interface PostHalf {
  id: string
  timeToRead: number
  frontmatter: {
    title: string
    date: Date
    description: string
    cover: string
  }
  fields: {
    slug: string
  }
}

export interface PostFull extends PostHalf {
  excerpt: string
  html: string
}
