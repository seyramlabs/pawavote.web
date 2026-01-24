import {
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

import {
  CustomButton,
} from '@/app/(components)/_element-component/button/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-normal mb-6">Contact us</h1>

        <div className="grid md:grid-cols-[350px_1fr] bg-white rounded-sm overflow-hidden shadow-sm">
          {/* Left sidebar */}
          <div className="bg-appOrange text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
             
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-medium mb-2">Contact information</h2>
              <p className=" text-sm mb-8">
                If you have any questions, feel free to get in touch with us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-0.5" />
                  <span>773.097.6543</span>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-0.5" />
                  <span>mail@mail.com</span>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>202 Dansoman Ako street IL 60118</span>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex items-start gap-4 mb-2">
                  <Clock className="w-5 h-5 mt-0.5" />
                  <span>Monday-Friday</span>
                </div>
                <div className="ml-9">9:00 AM - 5:00 PM</div>
              </div>

              <div className=" mt-12 flex gap-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right form section */}
          <div className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First name
                  </label>
                  <Input id="firstName" placeholder="First name" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last name
                  </label>
                  <Input id="lastName" placeholder="Last name" className="w-full" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="email@example.com" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone number
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000 - 0000" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="w-full min-h-[120px]" />
              </div>

              <div className="flex justify-end">
              <CustomButton label="Send" view={'primary'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
