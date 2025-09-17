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
const Test: React.FC<Props> = (props) => {
  console.log('🚀 ~ :14 ~ props:', props)
  return <div>Test Component</div>
}

export default Test