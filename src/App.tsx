import './App.css'
import Preloader from './components/Preloader/Preloader';
import Home from './containers/Home';

function App() {

  return (
  <div className='main'>
    <Home start="Hello!" />

      <Preloader />
    </div>
  )
}

export default App
