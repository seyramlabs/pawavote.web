'use client'
import { useState } from 'react';

import {
  ArrowRight,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { updateStates } from '@/funtions/generalUpdate';

import { CustomButton } from './(components)/_element-component/button/button';
import { CustomModal } from './(components)/_element-component/dialog/modal';
import { CustomInput } from './(components)/_element-component/input/input';
import {
  Heading1,
  Heading2,
  Heading2A,
  Heading3,
  ParagraphText,
} from './(components)/_element-component/texts/text';
import { EventComponent } from './(components)/_page-components/eventCard';

export default function Page() {
  const [states, setStates] = useState({
    openModal: false
  });
  const data1 = [
    { id: 1, item: 'unlimited events' },
    { id: 2, item: 'Secure payments' },
    { id: 3, item: '24/7 chat support' },
    { id: 4, item: 'Event management' },
    { id: 5, item: 'Custom data collection' },
  ]

  const events = [
    { id: 1, itemName: 'Concert', image: '/evnt1.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 2, itemName: 'Concert', image: '/evnt2.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 3, itemName: 'Concert', image: '/evnt3.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 4, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
  ]
  const route = useRouter()
  return (
    <div>
      <CustomModal
        open={states.openModal}
        title={''}
        content={
          <div>
            <div className="grid grid-cols-2  ">
              <div className="w-full ">
                <picture>
                  <img src="/evnt1.png" className="w-full h-[15rem] " alt="" />
                </picture>
              </div>
              {/* <Image src="/evnt1.png" className="h-full" height={100} width={400} alt="event banner" /> */}
              <div className="">
                <div className="h-24 w-24 border  text-center rounded-full overflow-hidden">
                  <Image src="/user.jpg" className="w-full  h-full" width={80} height={50} alt="contestant avatar" />
                </div>
                <Heading3 text={'John Doe'} classname={'text-2xl'} />
                <div className="flex space-x-2 py-2 text-appGray ">
                  <ParagraphText text={'Category: '} classname={'text-sm font-light'} />
                  <ParagraphText text={'User category '} classname={'text-sm font-light'} />
                </div>
                <ParagraphText
                  text={'This category includes events that are located at various venues and differ in duration.'}
                  classname={'text-xs! text-appGray font-light'}
                />
              </div>
            </div>
            <div className="lg:flex pt-6 space-x-3 space-y-4">
              <CustomInput
                type='number'
                className='h-10 rounded-4xl lg:w-4/6 w-full'
                placeholder={'Enter number of votes to cast'}
                name={'votes'}
              />
              <CustomButton
                view={'primary'}
                classname='h-10 lg:w-2/6  w-full'
                label={'Proceed to payment'}
                onClick={() => {
                  route.push('/payment')
                  updateStates(setStates, { openModal: false })
                }}
              />
            </div>
          </div>
        }
        onClose={() => updateStates(setStates, { openModal: false })}
      />


      <div className="px-10 ">
        <div className="w-1/6 lg:mt-32 mt-10 ">
          <hr className="border border-red-500" />
        </div>
        <div className="  lg:w-4/6  lg:mt-10 mt-3 lg:mb-20 ">
          <Heading1 text={'Vote Online and Buy Tickets for Events with'} classname={''} />
          <Heading1 text={'Pawavote'} classname={'text-appOrange'} />
        </div>
        <div className="lg:w-2/6">
          <ParagraphText
            classname='lg:px-3 lg:text-base text-sm text-appGray mt-10 mb-2'
            text={'Enter the unique code of the contestant you want to vote for.'}
          />
          <div className="flex space-x-3">
            <CustomInput className='h-10 rounded-4xl' placeholder={'Enter code to vote'} name={'code'} />
            <CustomButton
              view={'secondary'}
              classname='h-10'
              label={'Cast vote'}
              onClick={() => updateStates(setStates, { openModal: true })} />
          </div>
        </div>
      </div>

      <div className="lg:flex absolute hidden lg:-translate-y-[32rem] -translate-y-[22rem] w-full justify-end ">
        <Image src={'/Group.png'} width={500} height={150} alt="" />
      </div>

      <div className="w-full mt-8 bg-appOrange lg:px-32 pb-20 text-white">
        <div className="text-white  p-10 text-center">
          <Heading2 text={' Explore our pricing plans for events of all sizes'} classname={'text-white'} />
        </div>
        <div className="text-center">
          <CustomButton
            view={'primary'}
            onClick={() => { route.push('/pricing') }}
            classname='lg:h-14 border border-white! lg:text-lg!'
            icon={<ArrowRight size={20} />}
            label={'See all plans'} />
        </div>

        <div className="rounded-2xl my-10 text-black lg:p-16 p-5 bg-white">
          <div className="grid lg:grid-cols-2 ">
            <div className="lg:block hidden">
              <Image src={'/voter.jpg'} className='h-[33rem] rounded' width={400} height={100} alt='' />
            </div>
            <div className="">
              <div className="lg:flex mb-6  justify-start">
                <ParagraphText text={'Your premiere e-voting solution'}
                  classname={'rounded-xl lg:text-base text-sm bg-appLightOrange1 px-3 py-3'} />
              </div>
              <Heading3 text={'E-Voting Solution'} classname='mb-2' />
              <ParagraphText
                text={'Experience the leading e-voting platform designed for secure, efficient and reliable online voting'}
                classname='mb-7'
              />
              <div className="grid grid-cols-2 gap-8 capitalize">
                {data1.map((item) => (
                  <div className="text-black" key={item.id}>
                    <div className="flex items-center space-x-3">
                      <span className='rounded-full lg:p-3 p-1 bg-appLightOrange1'>
                        <Check className='text-appOrange' />
                      </span>
                      <ParagraphText classname='' text={item.item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl text-black lg:p-16 p-5 bg-white relative">


          <div className="grid lg:grid-cols-2 ">
            <div className="">
              <div className="flex mb-6 lg:justify-start">
                <ParagraphText
                  text={'Event management with ease'}
                  classname={'rounded-xl bg-appLightOrange1 px-3 py-3 lg:text-center'}
                />
              </div>
              <Heading3 text={'Sell Your Event Tickets Online'} classname='font-semibold text-2xl mb-3 px-1' />
              <ParagraphText text='Sell your event tickets online with our fast, free and unlimited platform' classname='mb-7' />
              <div className="grid grid-cols-2 gap-4 capitalize">
                {data1.map((item) => (
                  <div className="text-black" key={item.id}>
                    <div className="flex items-center space-x-3">
                      <span className='rounded-full lg:p-3 p-1 bg-appLightOrange1'>
                        <Check className='text-appOrange' />
                      </span>
                      <span>{item.item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:block ml-5 hidden">
              <Image className='rounded h-[33rem]' src={'/evnts.jpg'} width={400} height={100} alt='' />
            </div>
          </div>
          <div className="absolute lg:h-14 h-8 flex justify-center items-center top-0 right-0 p-2 bg-orange-400 rounded-bl-md rounded-tr-xl">
            <ParagraphText classname='text-white' text='coming soon' />
          </div>
        </div>
      </div>

      <div className="lg:px-32 p-5">
        <div className="lg:flex text-center justify-between lg:my-20 my-9">
          <Heading2A text='Ongoing events' />
          {/* <div className="text-4xl font-semibold">Ongoing Events </div> */}
          <div className="text-center mt-2"><CustomButton onClick={() => route.push('/competitions')} view='secondary' label='View more' /></div>
        </div>
        {/* card */}
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:mb-20 mb-9 lg:gap-10 gap-7">
          {events.map((item, index) => (
            <div className="" key={index}>
              <EventComponent item={{
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
        <div className="flex-col lg:mt-32 justify-center lg:pb-10 items-center">
          <Heading2 classname='px-10 text-center' text='Effortlessly manage events from registration to showtime' />
          <div className="my-8 flex-col justify-center text-center lg:px-40">
            <CustomInput className='border' name={''} placeholder='Enter your email address' />
            <CustomButton view='primary' classname='mt-6' label='Subscribe' />
          </div>
        </div>
      </div>
    </div>
  )
}