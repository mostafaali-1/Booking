import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const destinations = [
    {
        id: 1,
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        count: 120,
    },
    {
        id: 2,
        name: "New York",
        country: "USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
        count: 85,
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
        count: 95,
    },
    {
        id: 4,
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe11?auto=format&fit=crop&w=800&q=80",
        count: 60,
    },
]

export function PopularDestinations() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-8"
                >
                    Popular Destinations
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/search?location=${destination.name}`} className="group block relative h-64 rounded-xl overflow-hidden cursor-pointer">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                                    <p className="text-sm text-white/80">{destination.country}</p>
                                    <span className="inline-block mt-2 text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                        {destination.count} Properties
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
