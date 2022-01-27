const getPostLink = (slug: string) => `/blog${slug}`

const links = {
  BLOG: '/blog',
  ROADMAP: '/roadmap',
  POST: {
    INTRODUCTION: getPostLink('/introduction'),
    BENEFITS: getPostLink('/benefits-of-technical-writing'),
    GETTING_STARTED: getPostLink('/getting-started-technical-writing'),
    WRITING_TOPICS: getPostLink('/getting-technical-writing-topics'),
    PAID_ARTICLES_PLATFORMS: getPostLink('/platforms-to-write-paid-articles'),
    COVER_LETTER_TEMPLATE: getPostLink(
      '/cover-letter-template-for-writing-jobs'
    ),
  },

  CALENDLY: 'https://calendly.com/dillionmegida',
}

export default links
