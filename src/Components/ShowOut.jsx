import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"


function ShowOut() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default ShowOut;
