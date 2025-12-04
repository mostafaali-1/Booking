import { useEffect, useState } from "react"
import { SearchBar } from "../components/features/SearchBar"
import { HotelCard } from "../components/features/HotelCard"
import { getHotels } from "../services/api"
import type { Hotel } from "../types"
import { PageTransition } from "../components/layout/PageTransition"
import { PopularDestinations } from "../components/features/PopularDestinations"

export function Home() {
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const data = await getHotels()
                setHotels(data)
            } catch (error) {
                console.error("Failed to fetch hotels:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchHotels()
    }, [])

    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Find Your Perfect Stay
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Discover the best hotels, resorts, and vacation rentals for your next trip.
                        </p>
                        <SearchBar />
                    </div>
                </section>

                <PopularDestinations />

                {/* Featured Hotels Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8">Featured Hotels</h2>
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="h-[400px] bg-gray-200 rounded-lg animate-pulse" />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {hotels.map((hotel, index) => (
                                    <HotelCard key={hotel.id} hotel={hotel} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
