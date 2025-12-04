import { Building2, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Building2 className="h-6 w-6 text-blue-600" />
                            <span className="text-xl font-bold">HotelBook</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Experience the best hotels at the best prices. Book your next stay with us.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4 text-gray-500">
                            <a href="#" className="hover:text-blue-600"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-600"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-600"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} HotelBook. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
