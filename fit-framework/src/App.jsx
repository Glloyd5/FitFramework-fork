import Squarebutton from './components/SQ-button'
import FWbutton from './components/FW-button'
import Navbar from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
  <>
    <body className='max-w-[350px] m-auto bg-fitpurple-100'>
      <div className='flex flex-col justify-between'>
        <header className='sticky top-0'>
          <Header />
        </header>

        <main className='p-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum provident magnam culpa eos quod, distinctio saepe, itaque reprehenderit quidem fuga soluta necessitatibus doloremque sunt molestias nemo ullam! Nisi, aspernatur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum voluptate laborum animi magnam, aliquam placeat nemo quaerat qui magni, accusantium, voluptatum quis iste. Iusto assumenda blanditiis architecto nemo consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum provident magnam culpa eos quod, distinctio saepe, itaque reprehenderit quidem fuga soluta necessitatibus doloremque sunt molestias nemo ullam! Nisi, aspernatur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum voluptate laborum animi magnam, aliquam placeat nemo quaerat qui magni, accusantium, voluptatum quis iste. Iusto assumenda blanditiis architecto nemo consectetur.</p>
          <div className='mt-5'>
            <Squarebutton />
          </div>
        </main>
        
        <footer className='mt-5 sticky bottom-0'>
            <Navbar/>
        </footer>
      </div>
    </body>
  </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './components/SQ-button'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)} className='bg-fitpurple-50 p-2 rounded-md'>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//     </>
//   )
// }

// export default App;
