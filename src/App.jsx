import './App.css'
import Pagination from './components/Pagination'
import Search from './components/Search'
import Stories from './components/Stories'
import { useGlobalContext } from './Context'


function App() {



  return (
    <>
    <div className='heading'>
    <h2>Welcome! to News Wesbsite</h2>
    </div>
      
      <Stories />
    </>

  )
}

export default App
