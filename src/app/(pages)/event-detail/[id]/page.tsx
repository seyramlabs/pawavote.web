/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'next/navigation';

import { Heading3 } from '@/app/(components)/_element-component/texts/text';
import { EventComponent } from '@/app/(components)/_page-components/eventCard';
import { updateStates } from '@/funtions/generalUpdate';

export default function Page() {
    const { id } = useParams();
    const [states, setStates] = useState({
        selectedID: 0,
        event: {} as Record<string, any>,
    })
    const { event } = states

    const events = [
        { id: 1, itemName: 'Concert', image: '/evnt1.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
        { id: 2, itemName: 'Concert', image: '/evnt2.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
        { id: 3, itemName: 'Concert', image: '/evnt3.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
        { id: 4, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    ];

    useEffect(() => {
        const event = events.find(item => states.selectedID < 1 ? item.id === parseInt(id as unknown as string) : item.id === states.selectedID);
        updateStates(setStates, { event: event })
    }, [id, states.selectedID])

    return (
        <div className="p-10">
         
                {event && (

                    <div className="grid grid-cols-2">
                        <div className="w-full mb-5">
                            <picture>
                                <img src={event.image} className="w-full h-[40rem] rounded-lg" alt={event.itemName} />
                            </picture>
                        </div>
                        <div className="text-left pr-44">
                            <h2 className="font-bold text-3xl mb-2">{event.itemName}</h2>
                            <p className="text-appGray text-xl mb-4">
                                {event.date} at {event.time} <br />
                                <span className="uppercase">{event.location}</span>
                            </p>
                            <p className="text-lg">{event.cost}</p>
                            <p className="mt-4  text-gray-600">
                                This event offers a unique experience with live performances at the {event.location}. Join us for an unforgettable evening filled with music and excitement.
                            </p>
                            <p className="text-lg my-4 font-semibold">Categories</p>
                            <div className="grid grid-cols-2 gap-2 ">
                                <div className=" py-1  rounded-full text-sm">Best Actor</div>
                                <div className=" py-1  rounded-full text-sm">Best Actress</div>
                                <div className=" py-1  rounded-full text-sm">Best Supporting Actor</div>
                                <div className=" py-1  rounded-full text-sm">Best Supporting Actress</div>
                                <div className=" py-1  rounded-full text-sm">Best Director</div>
                                <div className=" py-1  rounded-full text-sm">Best Original Screenplay</div>
                                <div className=" py-1  rounded-full text-sm">Best Adapted Screenplay</div>
                                <div className=" py-1  rounded-full text-sm">Best Cinematography</div>
                                <div className="py-1 rounded-full text-sm">Best Film Editing</div>
                                <div className="py-1 rounded-full text-sm">Best Production Design</div>
                                <div className="py-1 rounded-full text-sm">Best Costume Design</div>
                                <div className="py-1 rounded-full text-sm">Best Makeup and Hairstyling</div>
                                <div className="py-1 rounded-full text-sm">Best Visual Effects</div>
                                <div className="py-1 rounded-full text-sm">Best Sound</div>
                                <div className="py-1 rounded-full text-sm">Best Original Score</div>
                                <div className="py-1 rounded-full text-sm">Best Original Song</div>

                            </div>

                        </div>
                    </div>
                )}

                <div className="mt-16 mb-5">
                    <Heading3 classname='text-2xl font-bold!' text="Other Ongoing Events" />
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
                    {events.map((item, index) => (
                        <div key={index}>
                            <EventComponent
                                onClick={() => updateStates(setStates, { selectedID: item.id })}
                                item={{
                                    itemName: item.itemName,
                                    image: item.image,
                                    date: item.date,
                                    time: item.time,
                                    location: item.location,
                                    cost: item.cost
                                }} />
                        </div>
                    ))}
                </div>
               
        </div>
    )
}
