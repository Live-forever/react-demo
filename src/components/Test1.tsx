import React from 'react';

const Test1: React.FC = () => {
  const event = new Event('on-test')
  
  const handleClick = () => {
    event.params = { name: 'NS-5', age: 18 }
    window.dispatchEvent(event)
  }
  return (
    <button onClick={handleClick}>
      Test1 Component
    </button>
  )
}

export default Test1;

declare global {
  interface Event {
    params?: { name: string; age: number }
  }
} 