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
import { NavBar } from "./nav/NavBar"
import { GroupForm } from "./groups/GroupForm"
import { PrivateRoutes } from "./auth/PrivateRoutes"

export const SleighMe = () => {
  const [ token, setTokenState ] = useState(localStorage.getItem('token'));

  const setToken = (newToken) => {
    localStorage.setItem('sm_token', newToken)
    setTokenState(newToken)
  }

  const setUserId = (userId) => {
    localStorage.setItem('userId', userId)
    console.log(localStorage.getItem('userId'))
  }

  useEffect(() => {
    console.log(token)
  }, [token])

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login token={token} setToken={setToken} setUserId={setUserId} />} />

        <Route exact path="/register" element={<Register token={token} setToken={setToken} />} />  

        <Route exact path="/" element={<MyGroups/>}/>
        <Route exact path="/groups" element={<GroupsList/>} />
        <Route exact path="/groups/:groupId" element={<GroupDetail/>} />
        <Route exact path="/groups/create" element={<GroupForm/>} />
        <Route exact path="/members" element={<MembersList />} />
        <Route exact path="/members/:userId" element={<MemberGroups/>} />

        <Route element={<PrivateRoutes/>}>
        </Route>
      </Routes>
    </>
  )
}
 
export default SleighMe;

// return (
//   <>
//       <Routes>
//           {
//             localStorage.getItem("sm_token") 
//             ? 
//               <ApplicationViews setUserId={setUserId}/> 
//             : 
//               <Navigate to="/login" replace />
//           }

//           {/* <Route exact path="/login" element={<Login token={token} setToken={setToken} setUserId={setUserId} />} />

//           <Route exact path="/register" element={<Register token={token} setToken={setToken} />} />          */}
//       </Routes>
//   </>
// )

// return (
//   <>
//       <Routes>
//             <Route exact path="/" element={<MyGroups setUserId={setUserId}/>}/>
//             <Route exact path="/groups" element={<GroupsList/>} />
//             <Route exact path="/groups/:groupId" element={<GroupDetail/>} />
//             <Route exact path="/groups/create" element={<GroupForm/>} />
//             <Route exact path="/members" element={<MembersList />} />
//             <Route exact path="/members/:userId" element={<MemberGroups/>} />


//           <Route exact path="/login" element={<Login token={token} setToken={setToken} setUserId={setUserId} />} />

//           <Route exact path="/register" element={<Register token={token} setToken={setToken} />} />         
//       </Routes>
//   </>
// )

            {/* <Route
              path="/"
              element=token
                ? 
                  <ApplicationViews setUserId={setUserId}/> 
                : 
                  <Navigate to="/login" replace />
              }
            /> */}



             {/* <Route 
              exact path="/" 
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
              exact path="/groups/create" 
              element={<GroupForm/>} /> */}