import { useState, useEffect } from "react"
import { HotelCard } from "../components/features/HotelCard"
import { Input } from "../components/ui/Input"
import { getHotels } from "../services/api"
import type { Hotel } from "../types"
import { PageTransition } from "../components/layout/PageTransition"

export function Search() {
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [loading, setLoading] = useState(true)
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

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

    const filteredHotels = hotels.filter(
        (hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    )

    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="w-full md:w-64 space-y-6">
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <h3 className="font-semibold mb-4">Filters</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="number"
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                            className="w-24"
                                            min={0}
                                        />
                                        <span>-</span>
                                        <Input
                                            type="number"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                            className="w-24"
                                            min={0}
                                        />
                                    </div>
                                </div>
                                {/* Add more filters here */}
                            </div>
                        </div>
                    </aside>

                    {/* Results */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-6">
                            {filteredHotels.length} Hotels Found
                        </h1>
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="h-[400px] bg-gray-200 rounded-lg animate-pulse" />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredHotels.map((hotel, index) => (
                                    <HotelCard key={hotel.id} hotel={hotel} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
