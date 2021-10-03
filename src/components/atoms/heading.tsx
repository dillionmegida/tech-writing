import classNames from 'classnames'
import React, { ReactNode } from 'react'

type Props = {
  level: number
  size?: 'xxl' | 'xl'
  className?: string
  children: ReactNode
}

export default function Heading({
  level,
  size = 'xl',
  className: _className,
  children,
}: Props) {
  const className = classNames(
    _className,
    `text-4xl font-extrabold text-primary`,
    {
      'xs:text-5xl': size === 'xl' || size === 'xxl',
      'sm:text-6xl': size === 'xxl',
    }
  )

  return React.createElement(`h${level}`, { className }, children)
}
