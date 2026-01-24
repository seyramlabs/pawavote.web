/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  useEffect,
  useState,
} from 'react';

import { CustomInput } from '@/app/(components)/_element-component/input/input';
import {
  CustomPagination,
} from '@/app/(components)/_element-component/input/pagination';
import {
  Heading2A,
  Heading3,
  ParagraphText,
} from '@/app/(components)/_element-component/texts/text';
import { ScrollArea } from '@/components/ui/scroll-area';
import { updateStates } from '@/funtions/generalUpdate';

interface Nominee {
    id: number;
    name: string;
    img: string;
    votes: number;
}

interface View {
    nominees: Nominee[];
    category: string;
}

export default function Page() {
    const [states, setStates] = useState<View>({
        nominees: [],
        category: '',
    });
    const categories = [
        {
            id: 1,
            name: 'Category1',
            nominees: [
                { id: 1, name: 'Nominee1', img: '/user.jpg', votes: 500 },
                { id: 2, name: 'Nominee2', img: '/evnt2.png', votes: 300 },
                { id: 5, name: 'Nominee5', img: '/evnt5.png', votes: 200 },
                { id: 6, name: 'Nominee6', img: '/evnt6.png', votes: 350 },
                { id: 7, name: 'Nominee7', img: '/evnt7.png', votes: 250 },
                { id: 8, name: 'Nominee8', img: '/evnt8.png', votes: 150 },
                { id: 9, name: 'Nominee9', img: '/evnt9.png', votes: 100 },
                { id: 10, name: 'Nominee10', img: '/evnt10.png', votes: 50 },
            ]
        },
        {
            id: 2,
            name: 'Category2',
            nominees: [
                { id: 3, name: 'Nominee3', img: '/evnt3.png', votes: 700 },
                { id: 4, name: 'Nominee4', img: '/evnt4.png', votes: 450 },
                { id: 11, name: 'Nominee11', img: '/evnt11.png', votes: 250 },
                { id: 12, name: 'Nominee12', img: '/evnt12.png', votes: 200 },
                { id: 13, name: 'Nominee13', img: '/evnt13.png', votes: 150 },
            ]
        },
        {
            id: 3,
            name: 'Category3',
            nominees: [
                { id: 5, name: 'Nominee5', img: '/evnt5.png', votes: 200 },
                { id: 6, name: 'Nominee6', img: '/evnt6.png', votes: 350 },
                { id: 14, name: 'Nominee14', img: '/evnt14.png', votes: 300 },
                { id: 15, name: 'Nominee15', img: '/evnt15.png', votes: 250 },
            ]
        },
        {
            id: 4,
            name: 'Category4',
            nominees: [
                { id: 16, name: 'Nominee16', img: '/evnt16.png', votes: 400 },
                { id: 17, name: 'Nominee17', img: '/evnt17.png', votes: 300 },
                { id: 18, name: 'Nominee18', img: '/evnt18.png', votes: 250 },
                { id: 19, name: 'Nominee19', img: '/evnt19.png', votes: 200 },
                { id: 20, name: 'Nominee20', img: '/evnt20.png', votes: 150 },
            ]
        },
        {
            id: 5,
            name: 'Category5',
            nominees: [
                { id: 21, name: 'Nominee21', img: '/evnt21.png', votes: 500 },
                { id: 22, name: 'Nominee22', img: '/evnt22.png', votes: 350 },
                { id: 23, name: 'Nominee23', img: '/evnt23.png', votes: 300 },
                { id: 24, name: 'Nominee24', img: '/evnt24.png', votes: 250 },
                { id: 25, name: 'Nominee25', img: '/evnt25.png', votes: 200 },
            ]
        },
        {
            id: 6,
            name: 'Category6',
            nominees: [
                { id: 26, name: 'Nominee26', img: '/evnt26.png', votes: 450 },
                { id: 27, name: 'Nominee27', img: '/evnt27.png', votes: 400 },
                { id: 28, name: 'Nominee28', img: '/evnt28.png', votes: 350 },
                { id: 29, name: 'Nominee29', img: '/evnt29.png', votes: 300 },
                { id: 30, name: 'Nominee30', img: '/evnt30.png', votes: 250 },
            ]
        },
        {
            id: 7,
            name: 'Category7',
            nominees: [
                { id: 31, name: 'Nominee31', img: '/evnt31.png', votes: 700 },
                { id: 32, name: 'Nominee32', img: '/evnt32.png', votes: 600 },
                { id: 33, name: 'Nominee33', img: '/evnt33.png', votes: 550 },
                { id: 34, name: 'Nominee34', img: '/evnt34.png', votes: 500 },
                { id: 35, name: 'Nominee35', img: '/evnt35.png', votes: 450 },
            ]
        },
        {
            id: 8,
            name: 'Category8',
            nominees: [
                { id: 36, name: 'Nominee36', img: '/evnt36.png', votes: 400 },
                { id: 37, name: 'Nominee37', img: '/evnt37.png', votes: 350 },
                { id: 38, name: 'Nominee38', img: '/evnt38.png', votes: 300 },
                { id: 39, name: 'Nominee39', img: '/evnt39.png', votes: 250 },
                { id: 40, name: 'Nominee40', img: '/evnt40.png', votes: 200 },
            ]
        },
        {
            id: 9,
            name: 'Category9',
            nominees: [
                { id: 41, name: 'Nominee41', img: '/evnt41.png', votes: 600 },
                { id: 42, name: 'Nominee42', img: '/evnt42.png', votes: 550 },
                { id: 43, name: 'Nominee43', img: '/evnt43.png', votes: 500 },
                { id: 44, name: 'Nominee44', img: '/evnt44.png', votes: 450 },
                { id: 45, name: 'Nominee45', img: '/evnt45.png', votes: 400 },
            ]
        },
        {
            id: 10,
            name: 'Category10',
            nominees: [
                { id: 46, name: 'Nominee46', img: '/evnt46.png', votes: 500 },
                { id: 47, name: 'Nominee47', img: '/evnt47.png', votes: 450 },
                { id: 48, name: 'Nominee48', img: '/evnt48.png', votes: 400 },
                { id: 49, name: 'Nominee49', img: '/evnt49.png', votes: 350 },
                { id: 50, name: 'Nominee50', img: '/evnt50.png', votes: 300 },
            ]
        },
    ]

    useEffect(() => {
        if (states.nominees.length < 1) updateStates(setStates, { category: categories[0]?.name, nominees: categories[0]?.nominees })
    }, [states.nominees]);

    const isActive = (category: string) => category === states.category;

    const hoverStyle = (category: string) => `hover:text-appOrange text-appGray cursor-pointer text-lg ${isActive(category) ? 'text-appOrange' : ''}`;
    return (
        <div className="w-full">
            <div className="p-3 ">
                <picture className=''>
                    <img src={'/evenBG1.jpg'} className="w-full h-[20rem] rounded-3xl " alt={''} />
                </picture>
            </div>

            <div className="lg:flex  lg:px-10 mt-8">
                <div className="px-8 ">
                    <Heading3 classname='pb-4' text="Categories" />
                    <ScrollArea className='h-[4rem] lg:h-[20rem] rounded pb-4'>
                        {categories.map((category) => (
                            <div
                                onClick={() => {
                                    updateStates(
                                        setStates,
                                        {
                                            nominees: category?.nominees,
                                            category: category?.name
                                        }
                                    );

                                }}
                                key={category.id}
                                className="space-y-7 mt-4"
                            >
                                <ParagraphText classname={hoverStyle(category?.name)} text={category?.name} />
                            </div>
                        ))}
                    </ScrollArea>
                </div>
                <div className="lg:pl-20 px-5 pb-10">
                    <div className="flex justify-between">
                        <Heading2A classname='text-appOrange pb-7' text={states.category} />
                        <CustomInput className='lg:w-[16rem]' name={'Search by name'} />
                    </div>

                    <hr />
                    {states.nominees.map((nominee) => (
                        <div key={nominee.id} className="">
                            <div className="flex w-full lg:gap-[20rem] gap-16 my-3 items-center"   >
                                <picture>
                                    <img
                                        src={'user.jpg'}
                                        alt={nominee.name}
                                        className="w-12 h-12 border object-contain rounded-full"
                                    />
                                </picture>

                                <div>{nominee.name}</div>
                                <div className='text-appOrange'>{nominee.votes} <span className="text-appGray">votes</span> </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            <div className="pb-6">
                <CustomPagination
                    currentPage={0}
                    totalPages={0}
                    onPageChange={() => { }}
                />
            </div>
        </div>
    )
}