import Test from './components/Test'

function App() {

  return (
    <>
      <Test
        id={1}
        obj={{ a: 1, b: 2 }}
        arr={[1, 2, 3]}
        cb={(a: number, b: number) => a + b}
        empty={null}
        element={<div>测试</div>}
        isGirl={false}
        />
    </>
  )
}

export default App
