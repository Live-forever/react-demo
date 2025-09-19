import React from 'react'
// import { createPortal } from 'react-dom'

import { Modal } from './components/Modal'

// createPortal
// 注意这是一个API，不是组件，他的作用是：将一个组件渲染到DOM的任意位置，跟Vue的Teleport组件类似。

// 应用场景
//  弹窗
//  下拉框
//  全局提示
//  全局遮罩
//  全局Loading

const App: React.FC= () => {
  return (
    <Modal />
    // createPortal(<div>Portal Content</div>, document.body, 'portal')
  )
}

export default App
