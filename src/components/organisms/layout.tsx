import * as React from 'react'

import Footer from '@/molecules/footer'
import Header from '@/molecules/header'
import styled from 'styled-components'

const Main = styled.main`
  min-height: 80vh;
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Main className="py-10">{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
