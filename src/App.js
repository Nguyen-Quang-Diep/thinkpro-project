import HeaderBanner from "src/Components/Header/HeaderBanner"
import NavBar from "./Components/Header/NavBar"
import HomePage from "./Pages/HomePage"
import 'src/App.scss'
import { Header } from "./Components/Header"
import { TableUser } from "./Components/TableUser"
import { ToastContainer} from 'react-toastify'


function App() {

  return (
    <div className="app-container">
      <HeaderBanner/>
      <NavBar/>
      <HomePage/>
      <Header/>
      <TableUser/>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </div>
    
  )
}

export default App;
