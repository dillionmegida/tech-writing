import Twitter from '@/atoms/icons/Twitter'
import NewTabLink from '@/atoms/new-tab-link'
import { DOMAIN } from '@/constants/site'
import * as React from 'react'

type Props = {
  url: string
  title: string
}

export default function Share({ url, title }: Props) {
  const shareUrl = `${DOMAIN}${url}`

  return (
    <p className="mt-10 py-5 border-t border-solid border-primary-100 flex items-center">
      <span className="mr-2">Share this article:</span>
      <NewTabLink
        href={`https://twitter.com/intent/tweet?text=${title} by @iamdillion - ${shareUrl}`}
      >
        <Twitter color="#1DA1F2" size={20} />
      </NewTabLink>
    </p>
  )
}
