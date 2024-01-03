import axios from 'axios';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlinePicture } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const AddContact = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const username = (user?.email);

    const handleContact = (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            profilePicture: event.target.profilePicture.value,
            username
        };

        
        console.log(formData);

        
        axios.post('https://contact-server-sandy.vercel.app/addContact', formData)
        .then(response => {
        console.log(response.data);
            Swal.fire('Contact added successfully!', '', 'success');
            navigate('/allContact');
        })
        .catch(error => {
        console.error(error);
        Swal.fire('Error adding contact', 'Please try again later', 'error');
        });
    };

    
    
  return (
    <div className="max-w-md mx-auto mt-20 h-screen p-5">
      <form onSubmit={handleContact} className="space-y-4 border py-8 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            <span className="flex items-center">
              <AiOutlineUser className="h-4 w-4 mr-2" />
              Name
            </span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <span className="flex items-center">
              <AiOutlineMail className="h-4 w-4 mr-2" />
              Email
            </span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            <span className="flex items-center">
              <AiOutlinePhone className="h-4 w-4 mr-2" />
              Phone number
            </span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            <span className="flex items-center">
              <AiOutlineHome className="h-4 w-4 mr-2" />
              Address
            </span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
            <span className="flex items-center">
              <AiOutlinePicture className="h-4 w-4 mr-2" />
              Profile picture (URL)
            </span>
          </label>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
