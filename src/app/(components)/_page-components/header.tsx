'use client';
import { useState } from 'react';

import {
  AlignJustify,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

import { updateStates } from '@/funtions/generalUpdate';

import { CustomInput } from '../_element-component/input/input';

export default function Header() {
    const router = useRouter();
    const handleRoute = (url: string) => router.push(url);

    const [states, setStates] = useState({
        collapse: false
    })

    const menuItems = [
        {
            name: 'Home',
            url: '/'
        },
        // {
        //     name: 'Discover',
        //     url: '/discover'
        // },
        {
            name: 'Events',
            url: '/events'
        },
        // {
        //     name: 'Products',
        //     url: '/products',
        //     children: [{
        //         label: 'E-voting',
        //         onClick: () => console.log('dfdfdfdf')
        //     }, {
        //         label: 'Ticketing',
        //         onClick: () => console.log('dfdfdfdf')
        //     }
        //     ]
        // },
        {
            name: 'Pricing',
            url: '/pricing'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ]

    const menuItemDisplay = () => (
        menuItems.map((item, index) => (
            <span
                key={index}
                className="hover:font-700 hover:text-appOrange cursor-pointer text-md hover:underline lg:decoration-[0.18em] lg:underline-offset-14"
            >
                {/* {item.name === 'Products' ? (
                    <CustomDropdown triggerLabel={item.name} items={item.children || []} />
                ) : ( */}
                    <span onClick={() => handleRoute(item.url)}>
                        {item.name}
                    </span>
                {/* )} */}
            </span>
        ))
    );

    return (
        <div>

            <div className="bg-appLightOrange w-full text-[0.9rem] lg:px-20 px-2 h-18 flex items-center justify-between ">
                <div className="">
                    Logo icon
                </div>
                <div className="md:flex hidden  space-x-4 text-appLightOrange2 tex">
                    {menuItemDisplay()}
                </div>
                <div className="flex justify-between space-x-3">
                    <CustomInput name={'search'} placeholder='search' className='h-8 rounded-2xl! w-full bg-appLightOrange1 ' />
                </div>
                <div className="md:hidden">
                    {states.collapse ?
                        <X onClick={() => updateStates(setStates, { collapse: !states.collapse })} className='cursor-pointer hover:text-black text-appGray border rounded' />
                        :
                        <AlignJustify onClick={() => updateStates(setStates, { collapse: !states.collapse })} className='cursor-pointer border rounded hover:text-black text-appGray' />
                    }
                </div>
            </div>


            {states.collapse &&
                <div className='bg-appLightOrange pb-5 duration-300 ease-in-out flex flex-col items-center justify-center md:hidden  '>
                    {menuItemDisplay()}
                </div>
            }
        </div>
    )
}