import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/NavBar"
import { DcPage } from "../pages/DcPage"
import { HeroPage } from "../pages/HeroPage"
import { MarvelPage } from "../pages/MarvelPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>

      <div className="container">

      <Routes>
        <Route path='marvel' element={<MarvelPage/>}></Route>
        <Route path='dc' element={<DcPage/>}></Route>
        <Route path='search' element={<SearchPage/>}></Route>
        <Route path='hero' element={<HeroPage/>}></Route>
        <Route path='/' element={<Navigate to="/marvel"/>}></Route>
     </Routes>

      </div>
    </>
  )
}
