import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, MapPin } from "lucide-react"
import { Button } from "../components/ui/Button"
import { getHotelById } from "../services/api"
import type { Hotel } from "../types"
import { PageTransition } from "../components/layout/PageTransition"

export function HotelDetails() {
    const { id } = useParams<{ id: string }>()
    const [hotel, setHotel] = useState<Hotel | undefined>(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            getHotelById(id).then((data) => {
                setHotel(data)
                setLoading(false)
            })
        }
    }, [id])

    if (loading) {
        return <div className="container mx-auto px-4 py-8">Loading...</div>
    }

    if (!hotel) {
        return <div className="container mx-auto px-4 py-8">Hotel not found</div>
    }

    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="h-[400px] rounded-lg overflow-hidden">
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-3xl font-bold">{hotel.name}</h1>
                            <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                                <span className="ml-1 font-bold text-blue-700">{hotel.rating}</span>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-500 mb-6">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span>{hotel.location}</span>
                        </div>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {hotel.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Room Interiors</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {hotel.interiorImages?.map((img, idx) => (
                                    <div key={idx} className="aspect-square rounded-md overflow-hidden cursor-pointer">
                                        <img
                                            src={img}
                                            alt={`Interior ${idx + 1}`}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {hotel.amenities.map((amenity) => (
                                <div key={amenity} className="flex items-center text-gray-600">
                                    <div className="h-2 w-2 bg-blue-600 rounded-full mr-2" />
                                    {amenity}
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-6 flex items-center justify-between">
                            <div>
                                <span className="text-3xl font-bold text-blue-600">${hotel.price}</span>
                                <span className="text-gray-500">/night</span>
                            </div>
                            <Button size="lg" asChild>
                                <Link to={`/booking/${hotel.id}`}>Book Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
