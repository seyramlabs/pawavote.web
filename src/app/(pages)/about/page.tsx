'use client'

import Image from 'next/image';

export default function Page() {
    return (
        <main className="font-sans text-gray-800">
            {/* Hero Section */}
            <div className="">
                <Image src="/evenBG1.jpg" alt="Hero Image" className='w-full' width={1000} height={500} />
            </div>

            {/* Info Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <p className="text-xl mb-4">
                            We empower people like you to create your own online presence for your events, online voting and ticket sales for free and exactly the way you want
                        </p>
                        <p className="text-sm text-gray-700 mb-4">
                            {`
              Our powerful technology makes it simple for everyone to go online with a beautiful, professional and functional web presence. Whether it's your first time, or you're a seasoned pro — just complete freedom to express yourself and manage your entire business online.
            `}
                        </p>
                        <p className="text-sm text-gray-700">
                            Our global user base and unparalleled design capabilities create a unique ecosystem. Partners, developers, web designers, and other online professionals can effectively market their event tickets and voting systems to millions through Windsurf Platform.
                    Our vibrant community, open platform, and unlimited design possibilities create a unique playground. Artists, performers, event planners, and other creatives can successfully showcase their talents and offerings to a global audience through Windsurf Platform.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Our Offices:</h3>

                    </div>
                </div>
            </section>
        </main>
    );
}
