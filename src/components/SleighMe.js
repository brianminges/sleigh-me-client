import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate, BrowserRouter as Router, Redirect, useNavigate} from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
// import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { MyGroups } from "./groups/MyGroups"
import { MemberGroups } from "./members/MemberGroups"
import { MembersList } from "./members/MembersList"
import { GroupsList } from "./groups/GroupsList"
import { GroupDetail } from "./groups/GroupDetail"

export const SleighMe = () => {
  const [ token, setTokenState ] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  const setUserId = (userId) => {
    localStorage.setItem('userId', userId)
    console.log(localStorage.getItem('userId'))
  }

  return (
    <>
        <Routes>
            <Route
              path="/"
              element={localStorage.getItem("sm_token") 
                ? 
                  <ApplicationViews setUserId={setUserId}/> 
                : 
                  <Navigate to="/login" replace />
              }
            />
            <Route 
              path="/" 
              element={<MyGroups setUserId={setUserId}/>} />
            <Route 
              exact path="/members" 
              element={<MembersList />} />
            <Route 
              exact path="/members/:userId" 
              element={<MemberGroups/>} />
            <Route 
              exact path="/groups" 
              element={<GroupsList/>} />
            <Route 
              exact path="/groups/:groupId" 
              element={<GroupDetail/>} />
            <Route 
              exact path="/login" 
              element={<Login token={token} setToken={setToken} setUserId={setUserId} />} />
            <Route 
              exact path="/register" 
              element={<Register token={token} setToken={setToken} />} />         
        </Routes>
    </>
  )
}
 
export default SleighMe;

 