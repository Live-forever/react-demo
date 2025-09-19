import React from 'react';

const Test2: React.FC = () => {
  window.addEventListener('on-test', (e) => {
    console.log('🚀 ~ :5 ~ e:', e)
    console.log('🚀 ~ :5 ~ e.params:', e.params)
  })
  return (
    <div>
      <h2>Test2 Component</h2>
    </div>
  )
}

export default Test2;