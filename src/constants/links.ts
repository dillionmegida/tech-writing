const getPostLink = slug => `/blog${slug}`

const links = {
  BLOG: '/blog',
  ROADMAP: '/roadmap',
  POST: {
    INTRODUCTION: getPostLink('/introduction'),
  },
}

export default links
