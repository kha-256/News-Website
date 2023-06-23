import './App.css'
import Pagination from './components/Pagination'
import Search from './components/Search'
import Stories from './components/Stories'
import { useGlobalContext } from './Context'


function App() {



  return (
    <>
      <div>Welcome! to News Wesbsite</div>
      <Search />
      <Pagination />
      <Stories />
    </>

  )
}

export default App
