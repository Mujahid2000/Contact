// import axios from 'axios';
// import { useContext, useEffect, useState } from 'react';
// import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlinePicture } from 'react-icons/ai';
// import { useParams } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';

// const UpdateContact = () => {
//     const {_id} = useParams();
//     const { user } = useContext(AuthContext);
//     const [data , setData] = useState()
//     console.log(data);
    
//     useEffect(() =>{ if (user?.email)
//         {axios.get(`http://localhost:5050/addContact/${_id}/${user?.email}`)
//         .then(res => res.data)
//         .then(data => {
//             setData(data)
//         })
//     }}, [user])
    
//     const handleUpdate = async (event) =>{
//         event.preventDefault();

//         const formData = {
//             name: event.target.name.value,
//             email: event.target.email.value,
//             phone: event.target.phone.value,
//             address: event.target.address.value,
//             profilePicture: event.target.profilePicture.value,
            
//         };

        
//         console.log(formData);

//         try{
//             const response = await axios.patch(`http://localhost:5050/addContact/${_id}`, formData)
//             const data = response.data
//             console.log(data);
//             if (data.modifiedCount > 0) {
//                 Swal.fire({
//                 icon: 'success',
//                 title: formData.name,
//                 text: 'Job Updated successfully!',
//                 });
//               }
//             } catch (error) {
//               console.error('Error updating task:', error);
//             }
//         }
    




//     return (
//         <div>
//             <div className="max-w-md mx-auto mt-20 h-screen p-5">
//       <form onSubmit={handleUpdate}  className="space-y-4 border py-8 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
//         <div className="relative">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             <span className="flex items-center">
//               <AiOutlineUser className="h-4 w-4 mr-2" />
//               Name
//             </span>
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             defaultValue={data?.name}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="relative">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             <span className="flex items-center">
//               <AiOutlineMail className="h-4 w-4 mr-2" />
//               Email
//             </span>
//           </label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             defaultValue={data?.email}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="relative">
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//             <span className="flex items-center">
//               <AiOutlinePhone className="h-4 w-4 mr-2" />
//               Phone number
//             </span>
//           </label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             defaultValue={data?.phone}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="relative">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//             <span className="flex items-center">
//               <AiOutlineHome className="h-4 w-4 mr-2" />
//               Address
//             </span>
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             defaultValue={data?.address}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="relative">
//           <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
//             <span className="flex items-center">
//               <AiOutlinePicture className="h-4 w-4 mr-2" />
//               Profile picture (URL)
//             </span>
//           </label>
//           <input
//             type="text"
//             id="profilePicture"
//             name="profilePicture"
//             defaultValue={data?.profilePicture}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           Submit
//         </button>
//       </form>
//           </div>
//         </div>
//     );
// };

// export default UpdateContact;