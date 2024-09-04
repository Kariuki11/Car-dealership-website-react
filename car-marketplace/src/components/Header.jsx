import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';

function Header() {
    const {user, isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src='/logo.svg' width={150} height={100} alt="logo" />

        <ul className='hidden md:flex gap-16'>
            <li>Home</li>
            <li>Search</li>
            <li>New</li>
            <li>Preowned</li>
        </ul>

        {isSignedIn?
            <div>
                <UserButton/>
                <Button>Submit Listing</Button>
            </div>
            :
            <Button>Sbmit Listing</Button>
        }

    </div>
  )
}

export default Header