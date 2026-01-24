import {
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
    return (
        <div className="bg-black px-5 text-white">

            <div className="lg:flex w-full  lg:px-24 py-16 ">
                <div className="lg:w-3/6 ">
                    <div className="text-2xl pb-4 text-appOrange font-extrabold">LOGO</div>
                    <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam optio commodi? Nihil eos ducimus quae corporis maiores mollitia repudiandae quibusdam at iste dolorem recusandae, commodi assumenda vitae fugiat sed?</div>
                </div>
                <div className="lg:pl-6 pt-5 lg:pt-0 lg:space-y-0 space-y-4 grid lg:grid-cols-4 grid-cols-2">
                    <div className="">
                        <div className="font-semibold lg:pb-5 ">Products</div>
                        <div className="">Product 1</div>
                        <div className="">Product 2</div>
                        <div className="">Product 3</div>
                    </div>
                    <div className="">
                        <div className="font-semibold lg:pb-5 ">Company</div>
                        <div className="">About us</div>
                        <div className="">Contact us</div>
                        <div className="">Pricing</div>
                    </div>
                    <div className="">
                        <div className="font-semibold lg:pb-5 ">Company</div>
                        <div className="">About us</div>
                        <div className="">Contact us</div>
                        <div className="">Pricing</div>
                    </div>
                    <div className="">
                        <div className="font-semibold lg:pb-5 ">Connect with us</div>
                        <div className="">
                            <div className="text-appOrange">Phone</div>
                            <div className="">(123) 45 678 911 </div>
                        </div>
                        <div className="py-5">
                            <div className="text-appOrange">Email</div>
                            <div className="">Email@mail.com</div>
                        </div>
                        <div className=" flex space-x-4 items-center">
                            <Facebook className='rounded-full bg-appOrange p-1 cursor-pointer' />
                            <Linkedin className='rounded-full bg-appOrange p-1 cursor-pointer' />
                            <Instagram className='rounded-full bg-appOrange p-1 cursor-pointer' />
                        </div>
                    </div>
                </div>
               
            </div>
            <hr className="my-4 text-white" />
            <div className=" pb-5 text-xs space-x-4 lg:px-20 flex justify-evenly">
                <div className="">
                    Terms and conditions | Privacy policy
                </div>
                
                <div className="">
                    Copyright  2024. Company name. All rights reserved.
                </div>
            </div>
        </div>
    )
}