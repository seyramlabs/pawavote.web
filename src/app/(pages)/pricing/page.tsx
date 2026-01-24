import {
  CustomButton,
} from '@/app/(components)/_element-component/button/button';
import {
  ParagraphText,
} from '@/app/(components)/_element-component/texts/text';

type PricingPlan = {
    title: string
    tag: string
    price: string
    features: string[]
    highlighted?: boolean
}

const pricingPlans: PricingPlan[] = [
    {
        title: "Event Voting",
        tag: "Voting",
        price: "15%",
        features: [
            "Unlimited Events",
            "Unlimited Categories & Contestants",
            "Candidate Profiles",
            // "WhatsApp Bot Voting",
            "Nominee Filing and Uploads",
            // "Email & SMS Notice",
            "Results Management",
            "Account Management",
            "Reports & Audits",
            "Secure Payments & Access",
            "Immediate Payouts",
            "User-Friendly Interface",
        ],
    },
    {
        title: "Event Ticketing",
        tag: "Ticketing",
        price: "2.5%",
        highlighted: true,
        features: [
            "Unlimited Events & Tickets",
            "24/7 customer support",
            "Discount Codes",
            "WhatsApp, Email & SMS Notice",
            "Sales Summary Dashboard",
            "Event management",
            "Reports & Audits",
            "Secure Payments & Access",
            "Immediate Payouts",
            // "Guest Check-in",
            "Ticket Add-On Options",
            // "Email Invitations & Confirmations",
        ],
    },

]

export default function Page() {
    return (
        <div className="min-h-screen bg-white px-4 py-12 text-center">
            <div className="pb-12">

                <h1 className="text-3xl font-bold text-gray-800">
                    Pricing tailored for <span className="text-orange-500">Events and Awards </span> of all sizes
                </h1>
                <ParagraphText classname="mt-2 text-gray-600 max-w-xl mx-auto"
                    text=" Everything you need to sell tickets, manage events, and attract attendees—all in one place."
                />
            </div>
            {/* <CustomButton label=" Sell Tickets for Your Event" view={'secondary'} /> */}

            <div className="mt-10 grid md:grid-cols-2 gap-6  max-w-5xl mx-auto">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`rounded-xl w-[24rem] text-center py-12 p-6 shadow-md  border hover:border-orange-500 bg-gray-50  `}
                    >
                        {index ===1 && 
                        <div className=" w-full flex lg:justify-end justify-center ">
                            <div className="mb-4 bg-appOrange lg:top-[18rem] rounded text-white p-2 lg:absolute">coming soon</div>
                        </div>
                        }
                        <h2 className="text-xl font-semibold text-gray-800 mb-5">{plan.title}</h2>
                     
                        <div className="text-4xl font-bold text-orange-500 mb-4">{plan.price}</div>
                        <ul className="space-y-2 text-sm text-gray-700">
                            {plan.features.map((feature, i) => (
                                <li key={i}> {feature}</li>
                            ))}
                        </ul>
                       
                        <div className="">
                            <CustomButton classname='h-[2.5rem]!  mt-7' view={'primary'} label="Select this package" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
