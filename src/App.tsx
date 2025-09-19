import React, { useRef } from 'react'

// React 非受控组件
// 特殊的表单File
// 对于file类型的表单控件，它是一个特殊的组件，因为它的值只能由用户通过文件选择操作来设置，
// 而不能通过程序直接设置。这使得它在React中的处理方式与其他表单元素有所不同。

// 将其修改为非受控组件

const App: React.FC= () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleChange = () => {
    if (fileInputRef.current) {
      const files = fileInputRef.current.files
      console.log('🚀 ~ :15 ~ files:', files)
    }
  }
  
  return (
    <>
      <input type="file" onChange={handleChange} ref={fileInputRef} />
    </>
  )
}

export default App
