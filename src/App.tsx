import React, { useRef } from 'react'

// React 非受控组件
// 非受控组件指的是该表单元素不受React的State管理，
// 表单的数据由DOM管理。通过useRef()来获取表单元素的值。

// 我们使用defaultValue来设置表单的默认值，但是你要想实时获取值，
// 就需要使用useRef()来获取表单元素的值。跟操作DOM一样。

const App: React.FC= () => {
  const handleChange = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value)
    }
  }

  const defaultValue = 'hello'
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input type="text" defaultValue={defaultValue} onChange={handleChange} ref={inputRef} />
    </>
  )
}

export default App
