import Test from './components/Test'

function App() {
  const fn = (params: string) => {
    console.log('🚀 ~ :5 ~ 父组件的方法 params:', params)
  }
  return (
    <>
      <Test
        id={1}
        obj={{ a: 1, b: 2 }}
        arr={[1, 2, 3]}
        cb={fn}
        empty={null}
        element={<div>测试</div>}
        isGirl={false}
        >
          <div>123</div>
        </Test>
    </>
  )
}

export default App
