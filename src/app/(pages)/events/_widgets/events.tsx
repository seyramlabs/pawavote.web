'use client'
import {
  CustomSelect,
} from '@/app/(components)/_element-component/input/input';
import {
  CustomPagination,
} from '@/app/(components)/_element-component/input/pagination';
import { EventComponent } from '@/app/(components)/_page-components/eventCard';
import { NomineesServer } from '@/app/_homeResources/logic/server';
import { useFetchData } from '@/lib/function/useFetch';
import { CalendarX2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Events() {
  const {data, isLoading, isError} = useFetchData('event', NomineesServer.GetAllAwards(), {})
  const awardsList = data?.data?.data?.data || []
  const route = useRouter()
  const events = [
    { id: 1, itemName: 'Concert', image: '/evnt1.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 2, itemName: 'Concert', image: '/evnt2.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 3, itemName: 'Concert', image: '/evnt3.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 4, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 5, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 6, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 7, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 8, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 8, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 8, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 8, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 8, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    // { id: 8, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
  ]
  return (
    <div className="lg:p-10 p-5">
      <div className="lg:flex lg:py-10 space-y-3 py-5 justify-between">
        <div className="font-bold text-4xl  text-appOrange">Events</div>
        <div className="flex  items-center">
          <div className="border rounded-2xl flex items-center justify-between">
            {/* inputs */}

            <CustomSelect
              className='h-9! border-none! lg:w-60 w-full  ring-none active:ring-none! selection:bg-none!  bg-transparent!'
              placeholder='Select event period'
              name={''}
              defaultValue='allEvents'
              options={[
                { value: 'allEvents', label: 'All events' },
                { value: 'currentEvents', label: 'Current events ' },
                { value: 'upcomingEvents', label: 'Upcoming events' },
                { value: 'pastEvents', label: 'Past events' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 mb-20 gap-10">
        {
        events?.length < 1 ? 
        <div className="col-span-4 text-center text-2xl text-orange-400">
          <CalendarX2Icon className='mx-auto mb-3 ' size={50} />
         <span>
           No events found
          </span>
          </div>:
        events?.map((item: any, index: number) => (
          <div 
          onClick={()=>route.push(`/event-detail/${item.id}`)}
          className="" key={index}>
            <EventComponent item={{
              itemName: item?.name,
              image: item?.image,
              date: item?.date,
              time: item?.time,
              location: item?.location,
              cost: item?.cost
            }} />
          </div>
        ))}
      </div>
      <div className="">
        {awardsList?.length > 0 && 
        <CustomPagination
          currentPage={1} totalPages={10}
          onPageChange={() => { }}
        />
        
        }
      </div>
    </div>
  )
}