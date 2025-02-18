import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({})
  useEffect(()=> {
    setTimeout(()=> {
      setData({})
    },100)
  }, [])
	return <div className='App'>
    {data && <div style={{color:'red'}}>data</div>}
    <h1>hello world</h1>
    <button>click me</button>
    <input placeholder='input value' type="text" />
  </div>
}

export default App
