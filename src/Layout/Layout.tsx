import { Outlet } from "react-router"
import { Header } from "../components/common/Header"
import { Footer } from "../components/common/Footer"

export const Layout:React.FC = ():JSX.Element => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}


