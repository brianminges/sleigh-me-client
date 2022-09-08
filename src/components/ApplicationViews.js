// import React from "react"
// import { Route, Routes } from "react-router-dom"
// import { MyGroups } from "./groups/MyGroups"
// import { MemberGroups } from "./members/MemberGroups"
// import { MembersList } from "./members/MembersList"
// import { GroupsList } from "./groups/GroupsList"
// import { GroupDetail } from "./groups/GroupDetail"
// import { GroupSearch } from "./groups/GroupSearch"
// import { MemberProfile } from "./members/MemberProfile"
// import { ProfileForm } from "./profiles/ProfileForm"
// import { SetPartners } from "./groups/SetPartners"
// import { NavBar } from "./nav/NavBar"
// import { GroupForm } from "./groups/GroupForm"
 
// export const ApplicationViews = (setUserId={setUserId}) => {
//         return (
//         <>
//           <Route exact path="/" element={<MemberGroups/>}/>
          
//           <Route exact path="/groups" element={<GroupsList/>} />
//           <Route exact path="/groups/:groupId" element={<GroupDetail/>} />
//           <Route exact path="/groups/:groupId/edit" element={<GroupForm/>} />
//           <Route exact path="/groups/:groupId/search" element={<GroupSearch/>} />
//           <Route exact path="/groups/create" element={<GroupForm/>} />
          

//           <Route exact path="/members" element={<MembersList/>} />
//           <Route exact path="/members/:userId" element={<MemberGroups/>} />
//           <Route exact path="/members/:userId/profile" element={<MemberProfile/>} />

//           <Route exact path="/profiles/:profileId/edit" element={<ProfileForm/>} />

//           <Route exact path="/groups/:groupId/partners" element={<SetPartners/>} />

//         </>
//         )
// }

// export default ApplicationViews