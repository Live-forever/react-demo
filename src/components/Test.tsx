import React from 'react'

interface Props {
  title?: string
  id?: number
  obj?: { a: number; b: number }
  arr?: number[]
  cb?: (a: number, b: number) => number
  empty?: null
  element?: React.ReactElement
  isGirl?: boolean
}

const defaultProps: Partial<Props> = { 
  title: '默认标题',
  id: 0,
}
const Test: React.FC<Props> = (props) => {
  const { title, id } = { ...defaultProps, ...props }
  console.log('🚀 ~ :14 ~ title:', title)
  console.log('🚀 ~ :20 ~ id:', id)
  return <div>Test Component</div>
}

export default Test