import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import styled from 'styled-components'
import { DOMAIN } from '@/constants/site'

const Container = styled.div``

type Props = {
  url: string
  postId: string
  postTitle: string
}

const PostTemplate = ({ url, postId, postTitle }: Props) => {
  let disqusConfig = {
    url: DOMAIN + url,
    identifier: postId,
    title: postTitle,
  }
  return (
    <Container>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </Container>
  )
}

export default PostTemplate
