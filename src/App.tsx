import React, { useState } from 'react'

// React 受控组件
// 受控组件一般是指表单元素，表单的数据由React的 State 管理，更新数据时，需要手动调用setState()方法，更新数据。因为React没有类似于Vue的v-model，所以需要自己实现绑定事件。

// 那为什么需要使用受控组件呢？
// 使用受控组件可以确保表单数据与组件状态同步、便于集中管理和验证数据，同时提供灵活的事件处理机制以实现数据格式化和UI联动效果。

function App() {
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input type="text" value={value} onChange={handleChange}/>
      <div>{value}</div>
    </>
  )
}

export default App
