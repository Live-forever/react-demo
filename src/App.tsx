import Test from './components/Test'
import Test1 from './components/Test1'
import Test2 from './components/Test2'


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

        <Test1 />
        <Test2 />
    </>
  )
}

export default App
