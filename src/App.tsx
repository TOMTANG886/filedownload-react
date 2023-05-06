import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import { Section } from './components/Section'
import  Counter  from './components/Counter'
import  Counter2  from './components/Counter2'
import  List  from './components/List'
import Export from './components/Export'
import Export2 from './components/Export2'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1 className="">EXPORT TEST</h1>
      <Export/>
      <Export2/>
      <h1 className="">COUNTER TEST</h1>
      <Counter/>
      <Counter2 setCount={ setCount } > Count is {count}</Counter2>
      <List items={["coffee", "taco", "code"]} render={(item:string) => <span className="bold gold" >{item}</span>}/>
    </>
  )
}

export default App
