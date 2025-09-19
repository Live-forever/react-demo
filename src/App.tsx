import React, { Suspense, lazy } from 'react'

const AsyncComponent = lazy(() => import('./components/Async'))

const App: React.FC= () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AsyncComponent />
    </Suspense>
  )
}

export default App
