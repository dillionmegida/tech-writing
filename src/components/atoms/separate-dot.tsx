import colors from '@/styles/colors'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  .dot-item {
    &:not(:last-child) {
      position: relative;
      margin-right: 20px;

      &::after {
        position: absolute;
        content: '';
        width: 4px;
        height: 4px;
        background-color: ${colors.gray[400]};
        top: 0;
        bottom: 0;
        margin: auto;
        right: -13px;
        border-radius: 50%;
      }
    }
  }
`

type Props = {
  items: React.ReactNode[]
}

export default function SeparateDot({ items }: Props) {
  return (
    <Container className="flex">
      {items.map((i, index) => (
        <div className="dot-item" key={`dot-item-${index}`}>
          {i}
        </div>
      ))}
    </Container>
  )
}
