import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
   <>

     <Routes>
       
        <Route path='login' element={<LoginPage/>}></Route>

        <Route path='/*' element={

        <PrivateRoute>
           <Route path='/*' element={<HeroesRoutes/>}></Route>
        </PrivateRoute>
        
        }></Route>

       {/* <Route path='/*' element={<HeroesRoutes/>}></Route> */}

     </Routes>
   </>
  )
}
