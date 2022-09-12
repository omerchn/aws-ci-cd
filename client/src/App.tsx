import reactLogo from './assets/react.svg'
import './App.css'

// components
import CountBtn from './components/CountBtn'

function App() {
  return (
    <div className="App" data-testid="app">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS</h1>
      <h1>Hello AWS :)</h1>
      <div className="card">
        <CountBtn />
      </div>
    </div>
  )
}

export default App
