import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = ( {token }) => {
  let authorized = token 
    return (
    authorized ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes

