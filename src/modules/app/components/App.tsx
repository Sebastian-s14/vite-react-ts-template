import { useState } from 'react'
// import logo from '../svg/logo.svg'
// import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="flex flex-col gap-6 justify-center items-center h-screen text-xl text-white bg-[#282c34]">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Hello Vite + React!</p>
        <p>
          <button
            aria-label="Incrementar"
            className="py-2 px-4 text-black bg-white"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-[#61dafb]"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-[#61dafb]"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
