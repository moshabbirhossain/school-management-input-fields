
import './App.css'
import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
    <Link to='/teachers'>teachers</Link>
    <Link to='/student'>student</Link>
    <Link to='/staff'>staff</Link>
    <Link to='/subject'>subject</Link>
    <Link to='/class'>class</Link>
    <Link to='/notice'>notice</Link>
    <Link to='/fee'>fee</Link>
    <Link to='/Admission'>Admission</Link>
    <Link to='/result'>result</Link>
    <Link to='/others'>others</Link>
    <Link to='/id'>id</Link>
    <Link to='/salary'>salary</Link>
    <Link to='/report'>report</Link>

    <Button>Click me</Button>
    
    </>
  )
}

export default App
