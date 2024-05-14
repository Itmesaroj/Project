import './App.css'
import './Style/AllStyle.css'
import Navbar from './Component/Navbar/Navbar'
import SearchNav from './Component/Navbar/Search'
import NavCategroy from './Component/Navbar/NavCategroy'
import AllRoutes from './Pages/AllRoutes'

function App() {
  return(
    <div className="App">
    <Navbar />
    <SearchNav />
    <NavCategroy/>
    <AllRoutes/>
  </div>
  )
}

export default App
