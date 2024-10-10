import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { logo, } from '../assets';


function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='flex justify-between items-center shadow-sm p-5'>
            {/* <img src='https://i.pinimg.com/736x/e1/10/03/e11003d6d3ea43ef832e52a112ab7bac.jpg' width={150} height={100} alt="logo" /> */}
            <img src={logo} width={150} height={100} alt="logo" />

            <ul className='hidden md:flex gap-16'>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
            </ul>

            {isSignedIn ?
                <div className='flex items-center gap-5'>
                    <UserButton />
                    <Button>Submit Listing</Button>
                </div>
                :
                <Button>Sbmit Listing</Button>
            }

        </div>
    )
}

export default Header