import Image from 'next/image';

interface EventProps {
    item: {
        itemName: string;
        image: string;
        date: string;
        time: string;
        location: string;
        cost: string;
    };
    status?: string
    onClick?: () => void
}
export const EventComponent = ({status, item, onClick }: EventProps) => {
    return (
        <div

            onClick={onClick}
            className="py-3 hover:bg-appLightOrange1 cursor-pointer hover:scale-100 duration-200 lg:px-6 px-3 shadow-2xl flex-col justify-center text-center rounded-2xl">
            <Image src={item.image} height={100} width={100} alt='' className='w-full pt-3 ' />
            <div className="py-3">
                <div className="font-semibold">{item.itemName}</div>
                <div className="text-appGray text-xs lg:text-sm">
                    {item.date} {item.time} <br />
                    <span className='uppercase'>
                        {item.location}
                    </span>

                </div>
                <div className="text-center">
                    <div className='text-xs cursor-pointer hover:text-appOrange'>
                        {status !== '' && status}
                    </div>
                </div>
            </div>
           
        </div>
    )
}