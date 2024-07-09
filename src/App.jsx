import { Outlet } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"


function App() {


    return (
        < >
            <Navbar />
            <div className="bg-primary min-h-screen">
               <Outlet />
            </div>
          

        </>
    )
}

export default App
