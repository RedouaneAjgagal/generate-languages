import './App.css'
import Counter from './components/Counter'
import AddLanguages from './components/AddLanguages'
import React, { useState } from 'react'
import Language from './components/Language'

function App() {
  const [data, setData] = useState([]);
  const languages = (lang) => {
    setData((prev) => {
      return [...prev, ...lang];
    })
  }
  const removeHandler = (id) => {
    setData(data.filter(item => item.id !== id));
  }
  return (
    <div className="App">
      <aside>
        <AddLanguages getLanguages={languages} />
        {data.length > 0 ? <ul>{data.map((item) => <Language items={item} key={item.id} onRemove={removeHandler} />)}</ul> : <h2>Empty..</h2>}
      </aside>
      <Counter languages={data} />
    </div>
  )
}

export default App
