import Heading from '@/atoms/heading'
import Layout from '@/organisms/layout'
import * as React from 'react'

export default function Roadmap() {
  return (
    <Layout>
      <div className="container">
        <Heading level={1}>Roadmap</Heading>
        <p className='mt-4'>Coming Soon...</p>
      </div>
    </Layout>
  )
}
