import { Search, Calendar, Users, MapPin } from "lucide-react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

export function SearchBar() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                    placeholder="Where are you going?"
                    className="pl-10"
                />
            </div>
            <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                    type="date"
                    className="pl-10"
                />
            </div>
            <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                    type="number"
                    placeholder="Guests"
                    min={1}
                    className="pl-10"
                />
            </div>
            <Button className="w-full">
                <Search className="h-5 w-5 mr-2" />
                Search
            </Button>
        </div>
    )
}
