
import { Card, Dropdown, Modal } from 'flowbite-react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlinePicture } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import axios from 'axios';


const AllContact = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [Newdata, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);


  // loading data by email wise

  const fetchData = async () => {
    try {
      const response = await fetch(`https://contact-server-sandy.vercel.app/addContact/${user?.email}`);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [user]);

  // delete data

  const handleDelete = async (contact) => {
    if (!contact || !contact._id) {
      console.error('Invalid contact or contact._id:', contact);
      return;
    }
  
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
  
      if (result.isConfirmed) {
        const response = await axios.delete(`https://contact-server-sandy.vercel.app/addContact/${contact._id}`);
        console.log(response.data);
        fetchData();
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  
  
  // update data by email and _id wise

  const handleUpdateModal = (contactId) => {
    const selectedContact = data.find((contact) => contact._id === contactId);
    setSelectedContact(selectedContact);
    setSelectedContactId(contactId);
    setOpenModal(true);
  };
  

const handleUpdate = async (event) => {
  event.preventDefault();

  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    address: event.target.address.value,
    profilePicture: event.target.profilePicture.value,
  };

  try {
    const response = await axios.patch(`https://contact-server-sandy.vercel.app/addContact/${selectedContactId}`, formData);
    const data = response.data;
    console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire({
        icon: 'success',
        title: formData.name,
        text: 'Job Updated successfully!',
      });
      setOpenModal(false);
      fetchData(); 
    }
  } catch (error) {
    console.error('Error updating task:', error);
  }
};



  return (
    <div className="mt-9 mb-9 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 mx-auto max-w-7xl">
        {data.map((contact) => (
          <Card className="max-w-sm" key={contact._id}>
            <div className="flex justify-end px-4 pt-4">
              <Dropdown inline label="">
                <Dropdown.Item>                
                  <button className='block px-4 py-2 text-sm text-green-500 font-semibold hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white' onClick={() => handleUpdateModal(contact._id)}>Edit</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button
                    onClick={() => handleDelete(contact)}
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Delete
                  </button>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img src={contact.profilePicture} alt="" className="mb-3 w-28 h-28 rounded-full shadow-lg" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{contact.name}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">{contact.phone}</span>
              <p className="flex justify-center items-center gap-2">
                <MdEmail /> {contact.email}
              </p>
              <p className="flex justify-center text-center items-center gap-2">
                <FaLocationDot /> {contact.address}
              </p>
            </div>
          </Card>
        ))}
      </div>

      
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update Your Contact Number</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <div className="max-w-md mx-auto ">
      <form onSubmit={handleUpdate}  className="space-y-4 border py-8 px-6  shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
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
            defaultValue={selectedContact?.name}
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
            defaultValue={selectedContact?.email}
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
            defaultValue={selectedContact?.phone}
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
            defaultValue={selectedContact?.address}
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
            defaultValue={selectedContact?.profilePicture}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Update
        </button>
      </form>
          </div>
          </div>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default AllContact;
