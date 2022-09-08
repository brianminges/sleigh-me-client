// import React, {useState, useEffect} from "react"
// import { useParams } from "react-router-dom"
// import { getGroupById } from "./GroupManager"
// // import { GroupsList } from "./GroupsList";
// import { addPartners } from "../partners/PartnerManager";

// export const SetPartners = () => {
//     const [ group, setGroup ] = useState({});
//     const {groupId} = useParams();

//     useEffect(() => {
//         getGroupById(groupId)
//             .then(data => setGroup(data))
//     }, [])

//     // This is invoked in shuffler(). It checks to make sure no index positions have the same values; if they don't, it stores the values in an object and POSTS that object to the database.
//     const compareArrays = (arr1, arr2) => {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] === arr2[i]) {
//                 window.alert('bad shuffle')
//                 console.log('bad shuffle')
//                 break
//             } else {
//                 const partners = {
//                     group: parseInt(groupId),
//                     giver: arr1[i],
//                     receiver: arr2[i]
//                 }
//                 console.log(partners)
//                 addPartners(partners)

//             }

//         }
//     }

//     const shuffler = () => {
//         if (group.members) {
//             const indexArray = [];
//             // Gets index values of each item in array and pushes to indexArray
//             for (let i = 0; i < (group.members).length; i++) {
//                 let index = (group.members[i].id)
//                 indexArray.push(index)
//                 // console.log('indexArray', indexArray)
//             };

//             // Makes copy of indexArray and shuffles using Fisher-Yates algorithm
//             let newIndexArray = [...indexArray];
//             let i = newIndexArray.length;
//             while (--i > 0) {
//                 let randomNumber = Math.floor(Math.random() * (i + 1));
//                 [newIndexArray[randomNumber], newIndexArray[i]] = [newIndexArray[i], newIndexArray[randomNumber]];
//             }

//             // Checks to make sure no index positions have same values
//             // console.log('oldArray', indexArray);
//             // console.log('newArray', newIndexArray); 
//             compareArrays(indexArray, newIndexArray)

//         }

//     }

//     // useEffect(() => {
//     //     shuffler()
//     // }, [group]);

        
//     // return (
//     //     <>
//     //     <h1>Hi partner</h1>
//     //     <button
//     //         onClick={() => shuffler()}>
//     //             BUTTON
//     //     </button>
//     //     </>
//     // )
// }