import React from "react"
import { Route, Routes } from "react-router-dom"
import { MyGroups } from "./groups/MyGroups"
import { MemberGroups } from "./members/MemberGroups"
import { MembersList } from "./members/MembersList"
import { GroupsList } from "./groups/GroupsList"
import { GroupDetail } from "./groups/GroupDetail"
import { NavBar } from "./nav/NavBar"
import { GroupForm } from "./groups/GroupForm"
 
export const ApplicationViews = (setUserId={setUserId}) => {
        return (
        <>
            {/* <Routes>
             <Route exact path="/" element={<MyGroups setUserId={setUserId}/>}/>
              <Route exact path="/groups" element={<GroupsList/>} />
              <Route exact path="/groups/:groupId" element={<GroupDetail/>} />
              <Route exact path="/groups/create" element={<GroupForm/>} />
              <Route exact path="/members" element={<MembersList />} />
              <Route exact path="/members/:userId" element={<MemberGroups/>} />
            </Routes> */}

        </>
        )
}

export default ApplicationViews