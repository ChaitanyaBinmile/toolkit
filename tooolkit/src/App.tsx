import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {decrement, increment, incrementByAmount} from './redux/slices/counter/counter'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { DisplayComponent } from './component/DisplayComponent'

function App() {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch()


  return (
    <>
      <div> 
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Count is {count.value}</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(5))}>increment by 5</button>
        <DisplayComponent/>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
