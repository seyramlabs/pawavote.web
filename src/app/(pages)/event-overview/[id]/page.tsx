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
    Heading4,
    ParagraphText,
} from '@/app/(components)/_element-component/texts/text';
import { ScrollArea } from '@/components/ui/scroll-area';
import { updateStates } from '@/funtions/generalUpdate';
import { useParams } from 'next/navigation';
import { useFetchData } from '@/lib/function/useFetch';
import { NomineesServer } from '@/app/_homeResources/logic/server';

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
    const { id } = useParams();
    const [states, setStates] = useState<View>({
        nominees: [],
        category: '',
    });

    const { data, isLoading, isError } = useFetchData('event', NomineesServer.GetAwardCategoryByAwardId(id as unknown as number), {})
    const awardCats = data?.data?.data?.data || []

    const { data: nominees, isLoading: nomineesLoading, isError: nomineesError } = useFetchData('event', NomineesServer.GetNomineesByCategoryId(states?.category as unknown as number), {})
    const nomineesList = nominees?.data?.data?.data || []
    console.log("🚀 ~ Page ~ awardCats:", nomineesList)

    useEffect(() => {
        if (awardCats.length > 0) updateStates(setStates, { category: awardCats[0]?.name, nominees: nomineesList })
    }, [awardCats]);

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
                        {awardCats?.map((category: any, index: number) => (
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
                                key={category?.id}
                                className="space-y-7 mt-4"
                            >
                                <ParagraphText classname={hoverStyle(category?.name)} text={category?.name} />
                            </div>
                        ))}
                    </ScrollArea>
                </div>
                <div className="lg:pl-20 px-5 pb-10">
                    <div className="flex justify-between">
                        <Heading3
                            classname='text-appOrange pb-7'
                            text={states.category}
                        />
                        <CustomInput name='' className='lg:w-[16rem] h-10 mb-3' placeholder={'Search by name'} />
                    </div>

                    <hr />
                    {nomineesLoading ?
                        <Heading4 classname='text-appGray py-7' text="Loading nominees . . ." /> :
                        nomineesList.length === 0 ?
                            <Heading4 classname='text-appGray py-7' text="No nominees found" /> :
                            nomineesList.map((nominee: any) => (
                                <div key={nominee.id} className="">
                                    <div className="flex w-full lg:gap-[20rem] gap-16 my-3 items-center"   >
                                        <picture>
                                            <img
                                                src={nominee?.img}
                                                alt={nominee?.name}
                                                className="w-12 h-12 border object-contain rounded-full"
                                            />
                                        </picture>

                                        <div>{nominee?.nominee}</div>
                                        <div className='text-appOrange'>{nominee?.vote} <span className="text-appGray">votes</span> </div>
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