'use client';

import { Footer } from 'flowbite-react';

const MyFooter = () => {
    return (
            <Footer container>
      <div className="w-full px-3 text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            
            src="https://i.ibb.co/3f0M4hy/Screenshot-2024-01-02-213147.png"
            alt="Logo"
            name="logo"
            className='rounded-full'/>
          <Footer.LinkGroup>
            <Footer.Link href="">About</Footer.Link>
            <Footer.Link href="">Privacy Policy</Footer.Link>
            <Footer.Link href="">Licensing</Footer.Link>
            <Footer.Link href="">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="" by="Contact" year={2024} />
      </div>
    </Footer>
        
    );
};

export default MyFooter;