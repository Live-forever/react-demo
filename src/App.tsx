import React, { useState } from 'react'

// React 非受控组件
// 特殊的表单File
// 对于file类型的表单控件，它是一个特殊的组件，因为它的值只能由用户通过文件选择操作来设置，
// 而不能通过程序直接设置。这使得它在React中的处理方式与其他表单元素有所不同。

// 如果非要把file类型设置为受控组件，他就会就行报错

const App: React.FC= () => {
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]!)
  }


  return (
    <>
      <input type="file" value={file} onChange={handleChange} />
    </>
  )
}

export default App
