'use client';

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    };
    return (
        <div>
            <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="https://i.ibb.co/3f0M4hy/Screenshot-2024-01-02-213147.png" className="mr-3 h-6 rounded-full sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Contact Manage</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
                {user ? (
                    <div className="md:flex md:order-2 items-center">
                        <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img={user?.photoURL} rounded />}>
                            <Dropdown.Header>
                                <span className="block text-sm">{user?.displayName}</span>
                                <span className="block truncate text-sm font-medium">{user.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            
                            <Dropdown.Item onClick={handleLogOut}>LogOut</Dropdown.Item>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="md:flex md:order-2 items-center">
                        <Link
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending'
                                    : isActive
                                    ? 'text-[#333333] underline font-medium text-lg'
                                    : ''
                            }
                        >
                            <button className="btn btn-info bg-purple-600 text-white px-3 py-2 rounded-lg">Login</button>
                        </Link>
                    </div>
                )}
                <Navbar.Toggle />
            </div>
      <Navbar.Collapse>
        
        <Link to={'/'}><Navbar.Link><Button color="purple"> Add Contacts</Button></Navbar.Link></Link>
        <Link to={'/allContact'}><Navbar.Link><Button color="purple">All Contacts </Button></Navbar.Link></Link>
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default MyNavbar;