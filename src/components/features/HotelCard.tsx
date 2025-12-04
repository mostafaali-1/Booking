import { Star, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "../ui/Card"
import { Button } from "../ui/Button"
import type { Hotel } from "../../types"
import { motion } from "framer-motion"

interface HotelCardProps {
    hotel: Hotel
    index?: number
}

export function HotelCard({ hotel, index = 0 }: HotelCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <Card className="overflow-hidden group h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                    <motion.img
                        src={hotel.image}
                        alt={hotel.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center shadow-sm">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="ml-1 text-xs font-bold">{hotel.rating}</span>
                    </div>
                </div>
                <CardContent className="p-4 flex-grow">
                    <div className="mb-2">
                        <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
                            {hotel.name}
                        </h3>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="line-clamp-1">{hotel.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.slice(0, 3).map((amenity) => (
                            <span
                                key={amenity}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                            >
                                {amenity}
                            </span>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-2xl font-bold text-blue-600">${hotel.price}</span>
                        <span className="text-gray-500 text-sm">/night</span>
                    </div>
                    <Button asChild className="transition-transform active:scale-95">
                        <Link to={`/hotel/${hotel.id}`}>View Deal</Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
